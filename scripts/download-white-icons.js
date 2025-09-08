const https = require('https');
const fs = require('fs');
const path = require('path');

// Only the service icons that need to be white
const serviceIcons = {
  'laptop-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/laptop.svg',
  'tools-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/screwdriver-wrench.svg',
  'headset-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/headset.svg',
  'database-white': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/svgs/solid/database.svg'
};

const outputDir = path.join(__dirname, '../public/email-icons');

console.log('📥 Downloading WHITE service icons from CDN...\n');

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
          // Modify SVG to be WHITE color for service sections
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
          
          console.log(`✅ ${iconName}.svg (WHITE)`);
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

// Download all white service icons
async function downloadAllWhiteIcons() {
  const promises = Object.entries(serviceIcons).map(([name, url]) => 
    downloadWhiteIcon(name, url)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 All WHITE service icons downloaded successfully!');
    console.log('📍 Icons saved to: public/email-icons/');
    console.log('\n🔄 Next: Converting to PNG...');
  } catch (error) {
    console.error('❌ Some downloads failed:', error);
  }
}

downloadAllWhiteIcons();
