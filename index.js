const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  for (let i = 0; i < tutorials.length; i++) {

    let titleArray = tutorials[i].split(" ");

    for (let j = 0; j < titleArray.length; j++) {

      titleArray[j] = titleArray[j].charAt(0).toUpperCase() + titleArray[j].slice(1);

    }
    tutorials[i] = titleArray.join(" ");

  }

  //console.log(tutorials)
  return tutorials
}

//titleCased();