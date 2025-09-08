const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '../public/email-icons');
const iconFiles = [
  'phone.svg',
  'envelope.svg', 
  'whatsapp.svg',
  'globe.svg',
  'laptop.svg',
  'cog.svg', // settings
  'tools.svg', // for maintenance  
  'headset.svg',
  'database.svg',
  'search.svg',
  'clock.svg',
  'handshake.svg'
];

async function convertSvgToPng() {
  console.log('🔄 Converting SVG icons to PNG...\n');
  
  for (const svgFile of iconFiles) {
    const svgPath = path.join(svgDir, svgFile);
    const pngFile = svgFile.replace('.svg', '.png');
    const pngPath = path.join(svgDir, pngFile);
    
    try {
      await sharp(svgPath)
        .resize(24, 24) // 24x24 pixels for email
        .png({
          compressionLevel: 9, // Maximum compression
          quality: 90
        })
        .toFile(pngPath);
      
      const stats = fs.statSync(pngPath);
      const fileSizeKB = (stats.size / 1024).toFixed(1);
      
      console.log(`✅ ${svgFile} → ${pngFile} (${fileSizeKB}KB)`);
    } catch (error) {
      console.error(`❌ Error converting ${svgFile}:`, error.message);
    }
  }
  
  console.log('\n🎉 Icon conversion complete!');
  console.log('📍 PNG icons are now available at: https://bzzma.vercel.app/email-icons/');
  console.log('\n📧 Ready to update email template with these URLs:');
  iconFiles.forEach(file => {
    const pngFile = file.replace('.svg', '.png');
    console.log(`   https://bzzma.vercel.app/email-icons/${pngFile}`);
  });
}

convertSvgToPng().catch(console.error);
