import React, { useEffect } from 'react';

const AdModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const adContainer = document.getElementById('ad-container');
      adContainer.innerHTML = ''; // Clear previous ad content

      const adElement = document.createElement('ins');
      adElement.className = 'adsbygoogle';
      adElement.style = 'display:block; width:100%; height:250px;';
      adElement.setAttribute('data-ad-client', 'ca-pub-3940256099942544'); // Test Publisher ID
      adElement.setAttribute('data-ad-slot', '2081110821'); // Test Ad Slot ID
      adElement.setAttribute('data-ad-format', 'auto');
      adElement.setAttribute('data-ad-test', 'on'); // Enables test ads

      adContainer.appendChild(adElement);

      // Optional delay to allow rendering
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 500);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden w-80 max-w-md p-4">
        <div id="ad-container"></div>
        <button
          onClick={onClose}
          className="mt-2 w-full bg-teal-500 text-white py-2 rounded-lg"
        >
          Close Ad
        </button>
      </div>
    </div>
  );
};

export default AdModal;
