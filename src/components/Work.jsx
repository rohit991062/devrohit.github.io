import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function Work() {
  const [imagesData, setImagesData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'images'));
        
        // Check if there are any documents in the snapshot
        if (querySnapshot.empty) {
          console.error('No documents found in the "images" collection.');
          return;
        }

        const imagesArray = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Fetched data:', data);  // Debugging log

          // Ensure each document has the required fields
          if (!data.url || !data.link) {
            console.error('Document is missing "url" or "link" field:', data);
          }

          return data;
        });

        setImagesData(imagesArray);
      } catch (error) {
        console.error('Error fetching images from Firestore:', error);
      }
    };

    fetchImages();
  }, []);

  const displayedImages = showAll ? imagesData : imagesData.slice(0, 9);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  return (
    <section className="px-8 py-20 text-center text-white bg-gray-800" id="work">
      <h2 className="mb-4 text-2xl md:text-3xl">My Work</h2>
      <p className="mb-8 text-lg font-bold text-red-500 md:text-xl">
        A selection of my range of work
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {displayedImages.map((imageData, i) => (
          <a
            href={imageData.link}
            className="overflow-hidden bg-red-500"
            key={i}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer"
          >
            <img
              src={imageData.url}
              alt={`Portfolio image ${i + 1}`}
              className="transition-transform duration-500 transform opacity-100 hover:scale-110"
            />
          </a>
        ))}
      </div>
      <div className="mt-8">
        <button
          className="px-6 py-2 text-sm font-bold text-white uppercase transition-transform duration-300 ease-in-out transform bg-red-500 rounded-full hover:bg-red-600 hover:scale-105"
          onClick={toggleShowAll}
        >
          {showAll ? 'Less' : 'More'}
        </button>
      </div>
    </section>
  );
}

export default Work;
