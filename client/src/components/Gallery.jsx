import { useState } from 'react';
import { imagePaths } from '../assets/imagePaths';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = imagePaths.gallery;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Gallery</p>
      <h2 className="section-title">A closer look at our coconut sourcing and export workflow.</h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image + index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="group overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Coconut export gallery ${index + 1}`}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl overflow-hidden rounded-2xl bg-white" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected coconut gallery" className="max-h-[80vh] w-full object-cover" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
