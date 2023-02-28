const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
    min: 7,
  }
});

const generatePosts = () => {
  let posts = [];
  let array = [];

  for(let i = 1; i <= 4; i++) {
    let title = lorem.generateWords(3);
    let intro = lorem.generateSentences(2);
    let postId = Math.ceil(Math.random()*10);

    if(array.indexOf(postId) === -1){
      array.push(postId);
      posts.push({id: postId, title: title, intro: intro});
    } else {
      i--;
    };
  };

  return posts;
};

module.exports = generatePosts;
