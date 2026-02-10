import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NewSection from './components/NewSection/NewSection';
import ArticleList from './components/ArticleList/ArticleList';

function App() {
  return (
    <main className="max-w-[1110px] mx-auto px-4 md:px-0 min-h-screen bg-off-white font-inter">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
        <div className="lg:col-span-2">
          <Hero />
        </div>
        <div className="lg:col-span-1">
          <NewSection />
        </div>
      </div>

      <ArticleList />
    </main>
  );
}

export default App;
