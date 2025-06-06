var posts=["2025/06/04/陪着父亲的小女孩/","2025/06/04/简朴的哲理/","2025/06/06/真相/","2025/06/06/羊的无知/","2025/06/05/我的旅行照片/","2025/06/05/我喜欢的短语/","2025/06/04/事出有因-亿我的父亲/","2025/06/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };