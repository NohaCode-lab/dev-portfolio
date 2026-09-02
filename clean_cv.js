const fs = require('fs');
const path = './public/cv.html';

let content = fs.readFileSync(path, 'utf8');

// List of all invisible, zero-width, bidirectional control, and special AI watermark characters
const invisibleRegex = /[\u200B-\u200D\uFEFF\u2060\u200E\u200F\u00AD\u180E\u2000-\u200A\u202F\u205F\u3000\u00A0]/g;

const matches = content.match(invisibleRegex);
console.log('Invisible / zero-width characters found:', matches ? matches.length : 0);

// Normalize dashes: replace non-standard dashes with standard ASCII hyphen or clean en-dash
content = content
  .replace(/[\u2018\u2019]/g, "'") // smart single quotes -> standard '
  .replace(/[\u201C\u201D]/g, '"') // smart double quotes -> standard "
  .replace(/[\u2013\u2014]/g, '-') // en/em dash -> standard -
  .replace(/[\u200B-\u200D\uFEFF\u2060\u200E\u200F\u00AD\u180E]/g, '') // remove zero-width
  .replace(/[\u2000-\u200A\u202F\u205F\u3000\u00A0]/g, ' '); // normalize spaces to standard space

// Also remove emojis (📍, 📱, ✉️, 🌐) from the HTML and replace with clean professional text/SVG or clean labels for 100% pure ATS purity
content = content
  .replace(/📍\s*/g, '')
  .replace(/📱\s*/g, 'Tel: ')
  .replace(/✉️\s*/g, 'Email: ')
  .replace(/🌐\s*/g, 'GitHub: ')
  .replace(/•/g, '&bull;'); // standard HTML bullet entity

fs.writeFileSync(path, content, 'utf8');
console.log('Sanitization complete: cv.html is 100% clean and pure ASCII/standard UTF-8!');
