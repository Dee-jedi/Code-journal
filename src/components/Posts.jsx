import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Post from './Post';

const Posts = () => {
  const { filteredPosts, posts, error, searchTerm } = useContext(DataContext);

  return (
    <ul className="flex flex-col gap-1">
      {error && (
        <li>
          <h2 className="text-center text-red-500 text-lg mt-6 ">
            An error occurred: {error}
          </h2>
        </li>
      )}

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))
      ) : // Show message only if there are posts to search through
      posts.length > 0 ? (
        <li>
          <h2 className="text-center text-lg mt-6 ">
            No search result found for "<strong>{searchTerm}</strong>"
          </h2>
        </li>
      ) : (
        <li>
          <h2 className="text-center text-lg mt-6 ">
            {error ? '' : 'No posts available.'}
          </h2>
        </li>
      )}
    </ul>
  );
};

export default Posts;
