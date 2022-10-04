// COMMENTS
// Name: Muhammad Hassan
// Written a code for: Web3.0 & Metaverse
// Date: 10-4-2022


function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(titleCase('Hello '+name+', would you like to learn some Python today?'));
  console.log(titleCase('iNcrEdible hulK'));


var name = 'Hassan';
console.log('Hello '+name.toLowerCase()+', would you like to learn some Python today?');
console.log('Hello '+name.toUpperCase()+', would you like to learn some Python today?');
console.log(titleCase('HeLLo '+name+', woULd yoU LiKe to LeARn SOmE PytHon toDay?'));