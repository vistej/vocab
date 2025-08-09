import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BookOpen, Star } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // Navigate to first group (group_1), first word (index 0)
    navigate('/group_1/0');
  };

  const handleReviewedClick = () => {
    // Placeholder for now - will implement reviewed words functionality later
    console.log('Reviewed words clicked - functionality coming soon');
  };

  return (
    <div className='h-screen'>
      <Header />

      {/* Main content */}
      <div className='container mx-auto pt-24 pb-16 px-4'>
        {/* Welcome section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-brand-text mb-4'>
            Welcome to Vocab
          </h1>
          <p className='text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto'>
            Expand your vocabulary with our interactive learning platform.
            Practice words, learn meanings, and track your progress.
          </p>
        </div>

        {/* Cards section */}
        <div className='flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto'>
          {/* Start card */}
          <div
            onClick={handleStartClick}
            className='bg-brand-bg border border-brand-text dark:border-zinc-700 rounded-lg p-8 cursor-pointer 
                       hover:shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-80 flex-1 md:flex-none'
          >
            <div className='flex flex-col items-center text-center h-full'>
              <div className='mb-4'>
                <BookOpen className='w-16 h-16 text-black dark:text-yellow-400' />
              </div>
              <h2 className='text-2xl font-semibold text-brand-text mb-2'>
                Start Learning
              </h2>
              <p className='text-zinc-600 dark:text-zinc-300 flex-1'>
                Begin your vocabulary journey with the first group of words
              </p>
            </div>
          </div>

          {/* Reviewed words card */}
          <div
            onClick={handleReviewedClick}
            className='bg-brand-bg border border-brand-text dark:border-zinc-700 rounded-lg p-8 cursor-pointer 
                       hover:shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-80 opacity-75 flex-1 md:flex-none'
          >
            <div className='flex flex-col items-center text-center h-full'>
              <div className='mb-4'>
                <Star className='w-16 h-16 text-zinc-400 dark:text-zinc-600' />
              </div>
              <h2 className='text-2xl font-semibold text-brand-text mb-2'>
                Reviewed Words
              </h2>
              <p className='text-zinc-600 dark:text-zinc-300 flex-1'>
                Practice words you've marked for review
              </p>
              <p className='text-xs text-zinc-500 mt-2 italic'>Coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
