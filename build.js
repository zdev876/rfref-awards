import fs from 'node:fs/promises';
import awards from './awards.js';

// Исправить RegExp для JSON
Object.values(awards).forEach(award => {
  award.regexp = award.regexp.toString();
});

fs.writeFile('awards.json', JSON.stringify(awards, null, '  '));
