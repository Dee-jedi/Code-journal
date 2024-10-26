import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import InputField from './InputField';

const PostPage = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    handleSubmit,
    duration,
    setDuration,
    price,
    setPrice,
    setImage,
    setImagePreview,
    imagePreview,
  } = useContext(DataContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setImage(file); // Here you can store the file object
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:px-16 p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-slate-900 mb-3 text-center">
        Create a New Post
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InputField
          id={'name'}
          value={name}
          placeholder={'Type name'}
          onChange={(e) => setName(e.target.value)}
          title={'Hostel:'}
        />

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg text-slate-800 mb-1">
            Description:
          </label>
          <textarea
            name="description"
            required
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none border border-slate-300 focus:border-teal-500 rounded-md px-2 py-3 shadow placeholder:text-slate-300 text-[#222] resize-none leading-normal min-h-[80px]"
            placeholder="Type your description here..."
          ></textarea>
        </div>

        <InputField
          id={'price'}
          value={price}
          placeholder={'Enter price'}
          onChange={(e) => setPrice(e.target.value)}
          title={'Price:'}
        />

        <InputField
          id={'duration'}
          value={duration}
          placeholder={'Enter duration of rent'}
          onChange={(e) => setDuration(e.target.value)}
          title={'Duration:'}
        />

        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg text-slate-800 mb-1">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="block w-full text-sm text-slate-500  
               file:mr-4 file:py-2 file:px-4  
               file:rounded-lg file:border-0  
               file:text-sm file:font-semibold  
               file:bg-slate-200 file:text-slate-700  
               hover:file:bg-slate-300  
               focus:outline-none focus:ring-2 focus:ring-slate-500  
               transition duration-150 ease-in-out"
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-48 w-full object-cover rounded-md border border-slate-300 shadow-md"
              />
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md bg-teal-900 text-white  transition duration-200 mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default PostPage;
