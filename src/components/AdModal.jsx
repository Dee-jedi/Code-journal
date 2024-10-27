import React, { useEffect } from 'react';

const AdModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Dynamically insert a new ad container each time modal opens
      const adContainer = document.getElementById('ad-container');
      adContainer.innerHTML = ''; // Clear any previous ad content

      const adElement = document.createElement('ins');
      adElement.className = 'adsbygoogle';
      adElement.style = 'display:block; width:100%; height:250px;';
      adElement.setAttribute('data-ad-client', 'ca-pub-1234567890123456'); // Test Publisher ID
      adElement.setAttribute('data-ad-slot', '1234567890'); // Any placeholder ad slot ID
      adElement.setAttribute('data-ad-format', 'auto');
      adElement.setAttribute('data-ad-test', 'on'); // Enables test ads

      adContainer.appendChild(adElement);

      // Push the ad to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden w-80 max-w-md p-4">
        {/* Container to dynamically add Google Ad */}
        <div id="ad-container"></div>

        <button
          onClick={() => {
            onClose();
          }}
          className="mt-2 w-full bg-teal-500 text-white py-2 rounded-lg"
        >
          Close Ad
        </button>
      </div>
    </div>
  );
};

export default AdModal;
