const https = require('https');
const fs = require('fs');
const path = require('path');

// Font Awesome 6 Free SVG icons - using the raw URLs from jsDelivr CDN
const iconUrls = {
  'laptop': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/laptop.svg',
  'tools': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/screwdriver-wrench.svg', // tools was renamed
  'headset': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/headset.svg',
  'database': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/database.svg',
  'search': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/magnifying-glass.svg', // search was renamed
  'cog': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/gear.svg', // cog was renamed to gear
  'clock': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/clock.svg',
  'handshake': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/handshake.svg',
  'phone': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/phone.svg',
  'whatsapp': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/brands/whatsapp.svg',
  'envelope': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/envelope.svg',
  'globe': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/globe.svg'
};

const outputDir = path.join(__dirname, '../public/email-icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('📥 Downloading Font Awesome icons from CDN...\n');

// Function to download SVG and make it white
function downloadIcon(iconName, url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          // Modify SVG to be white color
          let svgContent = data;
          
          // Add fill="#333333" (dark gray) to the path elements for visibility
          svgContent = svgContent.replace(/<path/g, '<path fill="#333333"');
          svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="#333333"'); // Replace any existing fills
          
          // If no paths, add fill to the svg element
          if (!svgContent.includes('<path')) {
            svgContent = svgContent.replace('<svg', '<svg fill="#333333"');
          }
          
          const outputPath = path.join(outputDir, `${iconName}.svg`);
          fs.writeFileSync(outputPath, svgContent);
          
          console.log(`✅ ${iconName}.svg`);
          resolve();
        } catch (error) {
          console.error(`❌ Error processing ${iconName}:`, error.message);
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error(`❌ Error downloading ${iconName}:`, error.message);
      reject(error);
    });
  });
}

// Download all icons
async function downloadAllIcons() {
  const promises = Object.entries(iconUrls).map(([name, url]) => 
    downloadIcon(name, url)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 All Font Awesome icons downloaded successfully!');
    console.log('📍 Icons saved to: public/email-icons/');
    console.log('\n🔄 Next: Converting to PNG...');
  } catch (error) {
    console.error('❌ Some downloads failed:', error);
  }
}

downloadAllIcons();
