import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const Blog = () => {
  const { posts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="max-w-2xl mt-6 mx-auto p-6 bg-white shadow-lg">
      {post ? (
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {post.name}
          </h2>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post"
              className="h-48 w-full object-cover rounded-md mb-4"
            />
          )}
          <p className="text-gray-700 mb-6">{post.description}</p>
          <div className="border-t border-gray-300 pt-4 mt-6">
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Price:</span> ${post.price}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Duration:</span> {post.duration}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4 text-lg text-red-500">Post not found</p>
      )}
    </div>
  );
};

export default Blog;
