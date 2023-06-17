import awards from './awards.js';

// «Медаль ордена» должен идти перед орденом, чтобы
// правильно распознать.
const sortedByOrderMedal = [];
Object.values(awards).forEach((award, index, list) => {
  if (award.name.match(/медаль ордена/g)) {
    sortedByOrderMedal.unshift(award);
  } else {
    sortedByOrderMedal.push(award);
  }
});

export default function recognize(text) {
  const recognized = [];
  sortedByOrderMedal.reduce((str, award) => {
    if (str.match(award.regexp)) {
      recognized.push(award.name);
      return str.replace(award.regexp, ''); // убираем распознанное
    } else {
      return str;
    }
  }, text);
  return recognized;
}