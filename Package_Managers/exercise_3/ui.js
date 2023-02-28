export const renderPosts = (posts) => {
    let html = '';
        posts.forEach((post) => {
          html += `
            <div class="post" id="${post.id}">
                <h4 class="title">${post.title}</h5>
                <p class="intro">${post.intro}</p>
            </div>
            `;
        });
    document.querySelector('#posts-container').innerHTML = html;
};