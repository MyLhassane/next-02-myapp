import {posts} from 'https://raw.githubusercontent.com/MyLhassane/next-02-myapp/5c9ae860935ce76c3d44e458bad6e68dc733c98f/posts.js';

export default function handler(req, res) {

  let id = req.query.id;

  let post = posts.find(p => p.id == id)
  
  if(post) {
    res.status(200).json(post)
  } else {
    res.status(400).json({Error: "There is no post"})
  }
}
