const https = require('https');
const fs = require('fs');
const path = require('path');

// Icons that need WHITE versions (for dark backgrounds)
const whiteIconsNeeded = {
  'search-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/magnifying-glass.svg',
  'cog-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/gear.svg',
  'clock-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/clock.svg',
  'handshake-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/handshake.svg',
  'phone-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/phone.svg',
  'whatsapp-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/brands/whatsapp.svg',
  'envelope-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/envelope.svg',
  'globe-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/globe.svg'
};

const outputDir = path.join(__dirname, '../public/email-icons');

console.log('📥 Creating WHITE icons for dark backgrounds...\n');

// Function to download SVG and make it white
function downloadWhiteIcon(iconName, url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          // Modify SVG to be WHITE color for dark backgrounds
          let svgContent = data;
          
          // Add fill="white" to the path elements
          svgContent = svgContent.replace(/<path/g, '<path fill="white"');
          svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="white"'); // Replace any existing fills
          
          // If no paths, add fill to the svg element
          if (!svgContent.includes('<path')) {
            svgContent = svgContent.replace('<svg', '<svg fill="white"');
          }
          
          const outputPath = path.join(outputDir, `${iconName}.svg`);
          fs.writeFileSync(outputPath, svgContent);
          
          console.log(`✅ ${iconName}.svg (WHITE for dark backgrounds)`);
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

// Download all white icons
async function downloadAllWhiteIcons() {
  const promises = Object.entries(whiteIconsNeeded).map(([name, url]) => 
    downloadWhiteIcon(name, url)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 All WHITE icons downloaded successfully!');
    console.log('📍 Icons saved to: public/email-icons/');
    console.log('\n🔄 Next: Converting to PNG...');
  } catch (error) {
    console.error('❌ Some downloads failed:', error);
  }
}

downloadAllWhiteIcons();
