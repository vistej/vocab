import Footer from '../components/Footer';
import Header from '../components/Header';
import WordList from '../components/WordList';

const Home = () => {
  return (
    <div className='container mx-auto h-screen'>
      <Header />
      <WordList />
      <Footer />
    </div>
  );
};

export default Home;
