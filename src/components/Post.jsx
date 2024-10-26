import React, { useContext, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import Modal from './Modal'; // Import the Modal component

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { handleDelete } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDoubleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    handleDelete(post.id);
    closeModal(); // Close the modal after deletion
  };

  return (
    <article className="mb-2">
      <div
        className="bg-white py-4 px-6 rounded-md cursor-pointer flex justify-between items-center shadow-lg hover:shadow-xl transition ease-in-out transform hover:scale-105"
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
          <Link to={`/editpage/${post.id}`}>
            <button
              type="button"
              className="text-2xl text-slate-700 hover:text-teal-500 transition"
              onClick={(e) => e.stopPropagation()}
              aria-label="Edit post"
            >
              <FaEdit />
            </button>
          </Link>
          <button
            type="button"
            className="text-xl text-red-500 hover:text-red-600 transition"
            onClick={(e) => {
              e.stopPropagation();
              openModal(); // Open the modal on delete button click
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
    </article>
  );
};

export default Post;
