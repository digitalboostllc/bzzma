const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '../public/email-icons');
const whiteIconFiles = [
  'search-white.svg',
  'cog-white.svg',
  'clock-white.svg',
  'handshake-white.svg',
  'phone-white.svg',
  'whatsapp-white.svg',
  'envelope-white.svg',
  'globe-white.svg'
];

async function convertWhiteIconsToPng() {
  console.log('🔄 Converting WHITE icons to PNG...\n');
  
  for (const svgFile of whiteIconFiles) {
    const svgPath = path.join(svgDir, svgFile);
    const pngFile = svgFile.replace('.svg', '.png');
    const pngPath = path.join(svgDir, pngFile);
    
    try {
      await sharp(svgPath)
        .resize(48, 48) // 48x48 pixels for crisp quality
        .png({
          compressionLevel: 9, // Maximum compression
          quality: 90
        })
        .toFile(pngPath);
      
      const stats = fs.statSync(pngPath);
      const fileSizeKB = (stats.size / 1024).toFixed(1);
      
      console.log(`✅ ${svgFile} → ${pngFile} (${fileSizeKB}KB) WHITE`);
    } catch (error) {
      console.error(`❌ Error converting ${svgFile}:`, error.message);
    }
  }
  
  console.log('\n🎉 WHITE icon conversion complete!');
  console.log('📍 WHITE PNG icons are now available at: https://bzzma.vercel.app/email-icons/');
  console.log('\n📧 Ready to update email template with WHITE icons for dark backgrounds!');
}

convertWhiteIconsToPng().catch(console.error);
