import '../App.css';

import {useEffect, useState} from 'react';
import PostRow from './PostRow';

const getPosts = async ()=> {
        const results = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await results.json();
}

function Posts() {
  const [postResults, setPostResults] = useState([]);

  useEffect(() => {
    (async () => {
        setPostResults(await getPosts());
    })();
  }, [setPostResults])

  return (
        <table className='post-table'>
            <tr className='post-header'>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>UserID</th>
            </tr>
            {postResults.map((postRow, i) => (
                <PostRow id={postRow.id} title={postRow.title} body={postRow.body} userId={postRow.userId} darkRow={i % 2 === 0} />
            ))}
        </table>
  );
}

export default Posts;
