import { selectAllPosts, postAdded } from './postSlice';
const { useSelector } = require("react-redux");

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => {

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