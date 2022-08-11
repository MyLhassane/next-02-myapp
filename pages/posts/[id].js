export default function Details(props) {
  return (
    <div>
      <center>
        <h1>Dynamic Post</h1>
      </center>
      <hr />
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const data = await res.json();

  return {
    props: {
      post: data
    }
  }
}