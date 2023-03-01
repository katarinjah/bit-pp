import { renderPosts } from './ui.js';

(() => {
    return fetch('http://127.0.0.1:4000/posts')
    .then(function(res){
      return res.json();
    })
    .then(posts => {
      const post = [];
      posts.forEach(({id, title, intro}) => {
        post.push({id, title, intro});
      });
      renderPosts(post);
    });
})()
  