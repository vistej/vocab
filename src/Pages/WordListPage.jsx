import Footer from '../components/Footer';
import Header from '../components/Header';
import WordList from '../components/WordList';

const WordListPage = () => {
  return (
    <div className='h-screen'>
      <Header />
      <WordList />
      <Footer />
    </div>
  );
};

export default WordListPage;
