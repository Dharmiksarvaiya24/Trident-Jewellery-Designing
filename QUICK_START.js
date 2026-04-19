/*
  Quick Reference Commands for Image/Video Optimization
  Copy and paste these commands directly into your terminal
  (This is a reference file - not meant to be executed)
*/

// ============================================
// 1. SCAN FOR OVERSIZED FILES
// ============================================
// npm run optimize-images
// Shows all oversized images and videos


// ============================================
// 2. INSTALL TOOLS (macOS)
// ============================================
// brew install imagemagick webp ffmpeg


// ============================================
// 3. COMPRESS SINGLE IMAGE TO WEBP
// ============================================
// cwebp -q 80 input.jpg -o output.webp
// convert input.jpg -quality 80 -strip output.jpg


// ============================================
// 4. BATCH CONVERT ALL JPGS TO WEBP
// ============================================
// cd src/assets/imgs
// for file in **/*.jpg; do cwebp -q 80 "$file" -o "${file%.*}.webp"; done
// for file in **/*.png; do cwebp -q 85 "$file" -o "${file%.*}.webp"; done


// ============================================
// 5. COMPRESS VIDEO
// ============================================
// For 1080p video (best quality)
// ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -s 1920x1080 -c:a aac -b:a 128k output.mp4

// For web (faster encoding, smaller file)
// ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 -maxrate 3000k -bufsize 6000k output.mp4

// Extract first frame as poster
// ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 poster.jpg


// ============================================
// 6. CHECK FILE SIZES BEFORE/AFTER
// ============================================
// Show size of all images
// du -sh src/assets/imgs/*.{jpg,png,webp,mp4}

// Show size of specific folder
// du -sh src/assets/imgs/

// Show top 10 largest files
// find src/assets -type f -exec du -h {} + | sort -rh | head -10


// ============================================
// 7. BUILD AND TEST
// ============================================
// npm run build
// npm run preview
// Then open http://localhost:4173 and check Network tab


// ============================================
// 8. MONITOR PERFORMANCE IN BROWSER
// ============================================
// In browser console:
// console.log(performance.getEntriesByType("navigation")[0]);
// console.log(performance.getEntriesByType("paint"));
// Or use Lighthouse in DevTools
