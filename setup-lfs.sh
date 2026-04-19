#!/bin/bash

# GitHub LFS Setup Script for Trident Gems Showcase
# This script sets up Git LFS to handle large files efficiently

echo "🚀 GitHub LFS Setup for Trident Gems Showcase"
echo "=============================================="
echo ""

# Step 1: Check if git-lfs is installed
echo "📦 Step 1: Checking Git LFS installation..."
if ! command -v git-lfs &> /dev/null; then
    echo "❌ Git LFS not found. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "   Installing Git LFS via Homebrew..."
        brew install git-lfs
    else
        echo "   Please install Git LFS from: https://git-lfs.github.com/"
        exit 1
    fi
else
    echo "✅ Git LFS is installed"
fi

echo ""

# Step 2: Initialize Git LFS
echo "🔧 Step 2: Initializing Git LFS..."
git lfs install
echo "✅ Git LFS initialized"

echo ""

# Step 3: Check if .gitattributes exists
echo "📄 Step 3: Checking .gitattributes..."
if [ -f ".gitattributes" ]; then
    echo "✅ .gitattributes file exists"
else
    echo "❌ .gitattributes not found"
    exit 1
fi

echo ""

# Step 4: Track large files
echo "📁 Step 4: Tracking large files with LFS..."
echo "   Tracking: *.mp4 *.jpg *.png *.webp *.gif"

git add .gitattributes
git commit -m "Configure Git LFS for large media files" || echo "⚠️  .gitattributes already committed"

echo ""

# Step 5: Show current LFS status
echo "📊 Step 5: Git LFS Status"
echo "   Files tracked by LFS:"
git lfs ls-files || echo "   No files tracked yet"

echo ""

# Step 6: Find large files
echo "🔍 Step 6: Finding large files (> 1MB)..."
echo "   Large images and videos:"
find src/assets -type f -size +1M -exec ls -lh {} \; | awk '{print "   " $9 " (" $5 ")"}'

echo ""

# Step 7: Instructions
echo "📋 Next Steps:"
echo ""
echo "1. Git LFS is now configured! ✅"
echo ""
echo "2. To push your changes:"
echo "   $ git add ."
echo "   $ git commit -m 'Optimize and configure LFS for assets'"
echo "   $ git push origin main"
echo ""
echo "3. Vercel will automatically:"
echo "   - Download LFS files during build"
echo "   - Serve them from CDN"
echo "   - Cache them for fast loading"
echo ""
echo "4. Your assets will load MUCH FASTER on Vercel! 🚀"
echo ""

echo "✨ Setup complete!"
echo ""
echo "Questions? See: GITHUB_LFS_SETUP.md"
