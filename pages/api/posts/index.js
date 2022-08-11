import {posts} from 'https://raw.githubusercontent.com/MyLhassane/next-02-myapp/5c9ae860935ce76c3d44e458bad6e68dc733c98f/posts.js';

export default function handler(req, res) {
  res.status(200).json(posts)
}
