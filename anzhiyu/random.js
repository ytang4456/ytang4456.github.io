var posts=["2025/06/04/简朴的哲理/","2025/06/04/这是一篇实验博文/","2025/06/04/phrases/","2025/06/04/路边的小女孩/","2025/06/04/你不了解的缘由/","2025/06/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };