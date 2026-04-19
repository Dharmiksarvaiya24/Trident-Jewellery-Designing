#!/usr/bin/env node

/**
 * Asset Size Report Script
 * Analyzes all media files in the project
 * Identifies files that are too large and need optimization
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSET_DIRS = [
  path.join(__dirname, 'src/assets'),
  path.join(__dirname, 'public'),
];

const SIZE_LIMITS = {
  heroImage: 100 * 1024,      // 100KB
  regularImage: 50 * 1024,    // 50KB
  thumbnail: 20 * 1024,       // 20KB
  shortVideo: 2 * 1024 * 1024,   // 2MB for 30s
  longVideo: 5 * 1024 * 1024,    // 5MB for 60s
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getAssetType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
    return 'image';
  }
  if (['.mp4', '.webm', '.mov', '.avi'].includes(ext)) {
    return 'video';
  }
  return null;
}

function categorizeImage(filePath, size) {
  const fileName = path.basename(filePath).toLowerCase();
  
  // Hero images
  if (fileName.includes('hero') || fileName.includes('banner')) {
    return { category: 'Hero Image', limit: SIZE_LIMITS.heroImage };
  }
  
  // Thumbnails
  if (fileName.includes('thumb') || size < 50 * 1024) {
    return { category: 'Thumbnail', limit: SIZE_LIMITS.thumbnail };
  }
  
  // Regular images
  return { category: 'Regular Image', limit: SIZE_LIMITS.regularImage };
}

function categorizeVideo(filePath, size) {
  const fileName = path.basename(filePath).toLowerCase();
  
  // Long videos
  if (size > 4 * 1024 * 1024) {
    return { category: 'Long Video (60s+)', limit: SIZE_LIMITS.longVideo };
  }
  
  // Short videos
  return { category: 'Short Video (30s)', limit: SIZE_LIMITS.shortVideo };
}

function scanDirectory(dir, results = []) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', 'dist', '.git', '.next'].includes(file)) {
          scanDirectory(filePath, results);
        }
      } else {
        const type = getAssetType(filePath);
        if (type) {
          let category, limit;
          
          if (type === 'image') {
            const cat = categorizeImage(filePath, stat.size);
            category = cat.category;
            limit = cat.limit;
          } else {
            const cat = categorizeVideo(filePath, stat.size);
            category = cat.category;
            limit = cat.limit;
          }
          
          const isOversized = stat.size > limit;
          const relativePath = path.relative(process.cwd(), filePath);
          
          results.push({
            path: relativePath,
            size: stat.size,
            type,
            category,
            limit,
            oversized: isOversized,
            ext: path.extname(filePath).toLowerCase(),
          });
        }
      }
    }
  } catch (err) {
    console.error(`Error scanning ${dir}:`, err.message);
  }
  
  return results;
}

function main() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║               📊 ASSET SIZE ANALYSIS REPORT                     ║');
  console.log('║         Trident Gems Showcase - GitHub & Vercel Deploy         ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('\n');
  
  let allAssets = [];
  
  for (const dir of ASSET_DIRS) {
    if (fs.existsSync(dir)) {
      const assets = scanDirectory(dir);
      allAssets = allAssets.concat(assets);
    }
  }
  
  if (allAssets.length === 0) {
    console.log('⚠️  No media files found.\n');
    return;
  }
  
  // Separate by type
  const images = allAssets.filter(a => a.type === 'image');
  const videos = allAssets.filter(a => a.type === 'video');
  
  // Sort by size descending
  images.sort((a, b) => b.size - a.size);
  videos.sort((a, b) => b.size - a.size);
  
  const totalImageSize = images.reduce((sum, img) => sum + img.size, 0);
  const totalVideoSize = videos.reduce((sum, vid) => sum + vid.size, 0);
  const totalSize = totalImageSize + totalVideoSize;
  
  // Report images
  if (images.length > 0) {
    console.log('🖼️  IMAGES\n');
    console.log('Status: ' + (images.some(i => i.oversized) ? '⚠️  NEEDS OPTIMIZATION' : '✅ OK'));
    console.log('Total Images: ' + images.length);
    console.log('Total Size: ' + formatBytes(totalImageSize));
    console.log('\n');
    
    // Show oversized images
    const oversized = images.filter(img => img.oversized);
    if (oversized.length > 0) {
      console.log('❌ OVERSIZED IMAGES (' + oversized.length + '):\n');
      oversized.forEach((img, idx) => {
        const percent = ((img.size / img.limit - 1) * 100).toFixed(0);
        console.log(`  ${idx + 1}. ${img.path}`);
        console.log(`     Size: ${formatBytes(img.size)} (${percent}% over limit)`);
        console.log(`     Category: ${img.category}`);
        console.log(`     Target: < ${formatBytes(img.limit)}`);
        console.log(`     Action: Compress to WebP format\n`);
      });
    } else {
      console.log('✅ All images are optimized!\n');
    }
    
    // Show all images
    console.log('📋 ALL IMAGES:\n');
    images.forEach((img, idx) => {
      const status = img.oversized ? '❌' : '✅';
      console.log(`  ${status} ${img.path} - ${formatBytes(img.size)}`);
    });
  }
  
  // Report videos
  if (videos.length > 0) {
    console.log('\n\n🎥 VIDEOS\n');
    console.log('Status: ' + (videos.some(v => v.oversized) ? '⚠️  NEEDS OPTIMIZATION' : '✅ OK'));
    console.log('Total Videos: ' + videos.length);
    console.log('Total Size: ' + formatBytes(totalVideoSize));
    console.log('\n');
    
    // Show oversized videos
    const oversized = videos.filter(vid => vid.oversized);
    if (oversized.length > 0) {
      console.log('❌ OVERSIZED VIDEOS (' + oversized.length + '):\n');
      oversized.forEach((vid, idx) => {
        const percent = ((vid.size / vid.limit - 1) * 100).toFixed(0);
        console.log(`  ${idx + 1}. ${vid.path}`);
        console.log(`     Size: ${formatBytes(vid.size)} (${percent}% over limit)`);
        console.log(`     Category: ${vid.category}`);
        console.log(`     Target: < ${formatBytes(vid.limit)}`);
        console.log(`     Action: Re-encode with H.264 at lower bitrate\n`);
      });
    } else {
      console.log('✅ All videos are optimized!\n');
    }
    
    // Show all videos
    console.log('📋 ALL VIDEOS:\n');
    videos.forEach((vid, idx) => {
      const status = vid.oversized ? '❌' : '✅';
      console.log(`  ${status} ${vid.path} - ${formatBytes(vid.size)}`);
    });
  }
  
  // Summary
  console.log('\n\n' + '═'.repeat(64));
  console.log('📊 SUMMARY\n');
  console.log('Total Assets: ' + allAssets.length);
  console.log('Total Size: ' + formatBytes(totalSize));
  console.log('Oversized: ' + allAssets.filter(a => a.oversized).length);
  console.log('\n');
  
  if (allAssets.filter(a => a.oversized).length > 0) {
    console.log('⚠️  ACTION NEEDED:\n');
    console.log('1. Setup Git LFS: bash setup-lfs.sh');
    console.log('2. Compress images to WebP format');
    console.log('3. Re-encode videos to H.264');
    console.log('4. Run: npm run analyze-assets (this script) to verify');
    console.log('5. Push to GitHub: git push origin main\n');
  } else {
    console.log('✅ ALL ASSETS ARE OPTIMIZED!\n');
    console.log('Ready to push to GitHub and deploy on Vercel.\n');
  }
  
  console.log('📚 See GITHUB_LFS_SETUP.md for detailed instructions.');
  console.log('═'.repeat(64) + '\n');
}

main();
