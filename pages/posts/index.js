import Link from "next/link"

export default function Posts(props) {
  return (
    <div>
      <center>
        <h1>Posts</h1>
      </center>
      <hr />
      {props.posts.map(post=>(
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3002/api/posts");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}
