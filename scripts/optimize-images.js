#!/usr/bin/env node

/**
 * Image Optimization Script
 * Helps identify large image files and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSET_DIRS = [
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../public'),
];

const SIZE_WARNINGS = {
  image: 100 * 1024,    // 100KB for images
  video: 5 * 1024 * 1024, // 5MB for videos
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getMediaType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
    return 'image';
  }
  if (['.mp4', '.webm', '.mov', '.avi'].includes(ext)) {
    return 'video';
  }
  return null;
}

function scanDirectory(dir, results = []) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and dist
        if (!['node_modules', 'dist', '.git'].includes(file)) {
          scanDirectory(filePath, results);
        }
      } else {
        const mediaType = getMediaType(filePath);
        if (mediaType) {
          const sizeWarning = stat.size > SIZE_WARNINGS[mediaType];
          results.push({
            path: filePath,
            size: stat.size,
            type: mediaType,
            warning: sizeWarning,
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
  console.log('📊 Image & Video Optimization Analysis\n');
  console.log('='.repeat(60));
  
  let allAssets = [];
  
  for (const dir of ASSET_DIRS) {
    if (fs.existsSync(dir)) {
      const assets = scanDirectory(dir);
      allAssets = allAssets.concat(assets);
    }
  }
  
  if (allAssets.length === 0) {
    console.log('No media files found.');
    return;
  }
  
  // Separate by type
  const images = allAssets.filter(a => a.type === 'image');
  const videos = allAssets.filter(a => a.type === 'video');
  
  // Sort by size descending
  images.sort((a, b) => b.size - a.size);
  videos.sort((a, b) => b.size - a.size);
  
  // Show oversized images
  if (images.length > 0) {
    console.log('\n📸 IMAGES\n');
    const oversized = images.filter(img => img.warning);
    
    if (oversized.length > 0) {
      console.log(`⚠️  ${oversized.length} oversized image(s) found:\n`);
      oversized.forEach(img => {
        const relativePath = path.relative(process.cwd(), img.path);
        console.log(`  ${relativePath}`);
        console.log(`  Size: ${formatBytes(img.size)} (target: < ${formatBytes(SIZE_WARNINGS.image)})`);
        console.log(`  Recommendation: Compress or use WebP format\n`);
      });
    }
    
    console.log(`✅ Total images: ${images.length}`);
    const totalImageSize = images.reduce((sum, img) => sum + img.size, 0);
    console.log(`   Total size: ${formatBytes(totalImageSize)}\n`);
    
    // Show image format breakdown
    const formatBreakdown = {};
    images.forEach(img => {
      formatBreakdown[img.ext] = (formatBreakdown[img.ext] || 0) + 1;
    });
    console.log('   Format breakdown:');
    Object.entries(formatBreakdown).forEach(([ext, count]) => {
      console.log(`   - ${ext}: ${count} files`);
    });
  }
  
  // Show oversized videos
  if (videos.length > 0) {
    console.log('\n\n🎥 VIDEOS\n');
    const oversized = videos.filter(vid => vid.warning);
    
    if (oversized.length > 0) {
      console.log(`⚠️  ${oversized.length} oversized video(s) found:\n`);
      oversized.forEach(vid => {
        const relativePath = path.relative(process.cwd(), vid.path);
        console.log(`  ${relativePath}`);
        console.log(`  Size: ${formatBytes(vid.size)} (target: < ${formatBytes(SIZE_WARNINGS.video)})`);
        console.log(`  Recommendation: Re-encode with H.264 at lower bitrate\n`);
      });
    }
    
    console.log(`✅ Total videos: ${videos.length}`);
    const totalVideoSize = videos.reduce((sum, vid) => sum + vid.size, 0);
    console.log(`   Total size: ${formatBytes(totalVideoSize)}\n`);
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📋 OPTIMIZATION TIPS:\n');
  console.log('1. Use OptimizedImage component for all images');
  console.log('2. Use OptimizedVideo component for all videos');
  console.log('3. Convert large JPEG/PNG to WebP format');
  console.log('4. For videos, use H.264 codec at 2-4 Mbps bitrate');
  console.log('5. Add `priority` prop to above-the-fold images');
  console.log('6. Provide responsive image sizes with `sizes` prop');
  console.log('7. Include poster images for videos\n');
  console.log('See IMAGE_VIDEO_OPTIMIZATION.md for detailed guide.\n');
}

main();
