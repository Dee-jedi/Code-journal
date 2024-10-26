import Footer from './Footer';
import Posts from './Posts';
import Search from './Search';

const Home = () => {
  return (
    <main className="lg:px-16 py-[4px] px-4 max-w-5xl mx-auto">
      <Search />
      <Posts />
      <Footer />
    </main>
  );
};

export default Home;
