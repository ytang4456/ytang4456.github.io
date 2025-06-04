var posts=["2025/06/03/hello-world/","2025/06/04/phrases/","2025/06/04/你不了解的缘由/","2025/06/04/路边的小女孩/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };