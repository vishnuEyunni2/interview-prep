import { selectAllPosts, postAdded } from './postSlice';
import { useSelector } from 'react-redux'


const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((item, i) => {
    return (
      <div id={i}>
        <p><strong>{item.title}</strong></p>
        <p>{item.content}</p>
        <br />
      </div>
    )
  })

  return (
    <>
      <section>
        <h2>posts</h2>
        {renderedPosts}
      </section>
    </>
  );
}

export default PostsList;