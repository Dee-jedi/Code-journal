import React, { useContext, useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import Modal from './Modal';
import AdModal from './AdModal'; // Import the AdModal component

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { handleDelete } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdOpen, setIsAdOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('viewCount')) {
      sessionStorage.setItem('viewCount', 0);
    }
  }, []);

  const handleDoubleClick = () => {
    const viewCount = parseInt(sessionStorage.getItem('viewCount'), 10) || 0;

    // Check if the user has viewed 2 posts already
    if (viewCount >= 2) {
      setIsAdOpen(true); // Open ad modal
      sessionStorage.setItem('viewCount', 0); // Reset the count after showing ad
    } else {
      sessionStorage.setItem('viewCount', viewCount + 1); // Increment view count
      navigate(`/blog/${post.id}`);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const confirmDelete = () => {
    handleDelete(post.id);
    closeModal();
  };

  return (
    <article className="mb-2">
      <div
        className="bg-white py-4 px-6 rounded-md cursor-pointer flex justify-between items-center shadow-lg"
        onDoubleClick={handleDoubleClick}
      >
        <div>
          <h2 className="text-lg font-medium text-slate-900">{post.name}</h2>
          <p className="text-gray-600 text-sm">
            {post.description.length > 30
              ? `${post.description.slice(0, 30)}...`
              : post.description}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="relative inline-block">
            <Link
              to={`/editpage/${post.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                disabled
                type="button"
                className="text-2xl text-slate-700 hover:text-teal-500 transition relative"
                aria-label="Edit post"
              >
                <FaEdit />
              </button>
            </Link>
            <p className="absolute -bottom-1 -right-1 text-[8px] text-orange-200 bg-teal-500 rounded-full px-1.5 py-0.5">
              SOON
            </p>
          </div>

          <button
            type="button"
            className="text-xl text-red-500 hover:text-red-600 transition"
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            aria-label="Delete post"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Modal for delete confirmation */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete the post "${post.name}"? This action cannot be undone.`}
      />

      {/* Ad Modal */}
      {isAdOpen && (
        <AdModal
          isOpen={isAdOpen}
          onClose={() => setIsAdOpen(false)}
          videoUrl="https://your-ad-video-url.mp4"
        />
      )}
    </article>
  );
};

export default Post;
