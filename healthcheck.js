// Simple healthcheck script
const fs = require('fs');
const path = require('path');

// Check if the main bot file exists
const botFilePath = path.join(__dirname, 'bot.js');
if (fs.existsSync(botFilePath)) {
  console.log('Healthcheck: bot.js exists');
  process.exit(0);
} else {
  console.log('Healthcheck: bot.js does not exist');
  process.exit(1);
}
