const fontAwesome = require('font-awesome-svg-png');
const fs = require('fs');
const path = require('path');

// Font Awesome icons we need (matching the original template)
const iconsNeeded = [
  { name: 'laptop', faName: 'laptop' },
  { name: 'tools', faName: 'tools' }, // for maintenance/settings
  { name: 'headset', faName: 'headset' },
  { name: 'database', faName: 'database' },
  { name: 'search', faName: 'search' },
  { name: 'cog', faName: 'cog' }, // for settings
  { name: 'clock', faName: 'clock' },
  { name: 'handshake', faName: 'handshake' },
  { name: 'phone', faName: 'phone' },
  { name: 'whatsapp', faName: 'whatsapp' },
  { name: 'envelope', faName: 'envelope' },
  { name: 'globe', faName: 'globe' }
];

const outputDir = path.join(__dirname, '../public/email-icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔍 Extracting Font Awesome icons...\n');

// Function to copy icon files
function copyFontAwesomeIcon(iconName, outputName) {
  try {
    // Try different paths where the icons might be located
    const possiblePaths = [
      `node_modules/font-awesome-svg-png/white/svg/${iconName}.svg`,
      `node_modules/font-awesome-svg-png/black/svg/${iconName}.svg`,
      `node_modules/font-awesome-svg-png/svg/${iconName}.svg`
    ];

    let iconPath = null;
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        iconPath = testPath;
        break;
      }
    }

    if (iconPath) {
      const targetPath = path.join(outputDir, `${outputName}.svg`);
      fs.copyFileSync(iconPath, targetPath);
      console.log(`✅ ${iconName} → ${outputName}.svg`);
      return true;
    } else {
      console.log(`❌ Could not find ${iconName} in any location`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error copying ${iconName}:`, error.message);
    return false;
  }
}

// Extract all needed icons
iconsNeeded.forEach(icon => {
  copyFontAwesomeIcon(icon.faName, icon.name);
});

console.log('\n📍 Checking available Font Awesome icon directories...');

// List available directories to help debug
const nodeModulesFA = 'node_modules/font-awesome-svg-png';
if (fs.existsSync(nodeModulesFA)) {
  const dirs = fs.readdirSync(nodeModulesFA);
  console.log('Available directories:', dirs);
} else {
  console.log('❌ Font Awesome package not found in expected location');
}

console.log('\n🎯 Next: Convert SVGs to PNGs using sharp');
