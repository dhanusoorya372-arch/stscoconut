import { imagePaths } from '../assets/imagePaths';

const GalleryPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coconut-green">Gallery</p>
      <h1 className="mt-3 text-4xl font-bold text-coconut-green-dark md:text-5xl">From farm to export.</h1>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {imagePaths.gallery.map((image, index) => (
        <div key={image + index} className="overflow-hidden rounded-3xl shadow-lg">
          <img src={image} alt={`Coconut production ${index + 1}`} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  </div>
);

export default GalleryPage;
