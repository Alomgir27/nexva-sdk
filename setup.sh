#!/bin/bash

# Nexva React SDK - Build and Publish Script

echo "🚀 Nexva React SDK Setup"
echo "========================"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the package
echo "🔨 Building package..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "📝 Next steps:"
echo "1. Test locally: npm link"
echo "2. Test in another project: npm link @nexva/react"
echo "3. Publish to npm: npm publish --access public"
echo ""

