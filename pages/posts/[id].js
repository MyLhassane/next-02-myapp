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

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3002/api/posts");
  const data = await res.json();

  const paths = data.map(d => {
    return {
      params: {id: `${d.id}`}
    }
  })

  return {
    paths: paths,
    fallback: false,
  }

}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3002/api/posts/${context.params.id}`)
  const data = await res.json();

  

  return {
    props: {
      post: data
    }
  }
}
