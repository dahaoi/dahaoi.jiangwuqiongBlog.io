var posts=["posts/32acbbb9/","posts/5c8e05d2/","posts/73b99ddb/","posts/21869/","posts/53953/","posts/57479/","posts/60616/","posts/dbfaf180/","posts/3e67c394/","posts/6229/","posts/9f86dd47/","posts/7ec8c67/","posts/4e44a8eb/","posts/863e9537/","posts/35c527b2/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};