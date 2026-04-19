#!/bin/bash

# Image & Video Compression Script
# This script provides commands to compress images and videos

echo "🎬 Image & Video Compression Guide"
echo "===================================="
echo ""

echo "📸 IMAGE COMPRESSION COMMANDS"
echo "-----------------------------"
echo ""

echo "1. Compress JPEG with ImageMagick:"
echo "   convert input.jpg -quality 80 -strip output.jpg"
echo ""

echo "2. Compress PNG with ImageOptim (macOS):"
echo "   imageoptim input.png"
echo ""

echo "3. Convert to WebP (ImageMagick):"
echo "   convert input.jpg -quality 80 input.webp"
echo ""

echo "4. Convert to WebP (cwebp):"
echo "   cwebp -q 80 input.jpg -o output.webp"
echo ""

echo "5. Batch convert JPG to WebP:"
echo "   for file in *.jpg; do cwebp -q 80 \"\$file\" -o \"\${file%.*}.webp\"; done"
echo ""

echo "🎥 VIDEO COMPRESSION COMMANDS"
echo "-----------------------------"
echo ""

echo "1. Compress MP4 with FFmpeg (H.264, 1080p):"
echo "   ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -s 1920x1080 -c:a aac -b:a 128k output.mp4"
echo ""

echo "2. Compress MP4 for Web (lower bitrate):"
echo "   ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 -maxrate 3000k -bufsize 6000k output.mp4"
echo ""

echo "3. Extract first frame as poster:"
echo "   ffmpeg -i input.mp4 -ss 00:00:01 -vframes 1 poster.jpg"
echo ""

echo "4. Create thumbnail from video:"
echo "   ffmpeg -i input.mp4 -ss 00:00:05 -vf scale=320:-1 -vframes 1 thumbnail.jpg"
echo ""

echo "⚙️  INSTALLATION INSTRUCTIONS"
echo "----------------------------"
echo ""

echo "macOS (using Homebrew):"
echo "  brew install imagemagick"
echo "  brew install webp"
echo "  brew install ffmpeg"
echo ""

echo "Ubuntu/Debian:"
echo "  sudo apt install imagemagick webp ffmpeg"
echo ""

echo "💡 RECOMMENDATIONS"
echo "-------------------"
echo ""

echo "For hero/priority images:"
echo "  - Target: < 100 KB"
echo "  - Quality: 80-85%"
echo "  - Format: WebP + JPEG fallback"
echo ""

echo "For portfolio/regular images:"
echo "  - Target: < 50 KB"
echo "  - Quality: 75-80%"
echo "  - Format: WebP + JPEG fallback"
echo ""

echo "For videos (30 seconds):"
echo "  - Target: < 2 MB"
echo "  - Bitrate: 2-4 Mbps"
echo "  - Codec: H.264"
echo "  - Resolution: 1080p max"
echo ""

echo "🔗 Useful Links"
echo "----------------"
echo "- ImageMagick: https://imagemagick.org/"
echo "- FFmpeg: https://ffmpeg.org/"
echo "- WebP: https://developers.google.com/speed/webp"
echo "- TinyJPG: https://tinyjpg.com/ (online tool)"
echo "- TinyPNG: https://tinypng.com/ (online tool)"
echo ""
