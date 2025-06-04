var posts=["2025/06/04/陪着父亲的小女孩/","2025/06/04/简朴的哲理/","2025/06/04/phrases/","2025/06/04/你不了解的缘由/","2025/06/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };