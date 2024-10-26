import React from 'react';

const InputField = ({ title, id, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="text-lg text-slate-800 mb-1">
        {title}
      </label>
      <input
        type="text"
        id={id}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ borderColor: '#ccc', backgroundColor: '#fff' }}
        className="outline-none border border-slate-300 focus:border-teal-500 rounded-md p-2 shadow placeholder:text-slate-300 text-[#222]"
      />
    </div>
  );
};

export default InputField;
