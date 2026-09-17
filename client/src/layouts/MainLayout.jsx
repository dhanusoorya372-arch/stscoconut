import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { imagePaths } from '../assets/imagePaths';

const MainLayout = ({ children }) => (
  <div className="relative min-h-screen overflow-hidden bg-coconut-light text-coconut-forest">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.06]"
      style={{ backgroundImage: `url(${imagePaths.background})` }}
    />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,213,186,0.22),transparent_35%)]" />
    <Navbar />
    <main className="relative">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
