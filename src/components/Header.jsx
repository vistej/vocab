import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='bg-brand-header h-16 fixed w-full shadow-md p-4 border-b border-brand-text dark:border-zinc-700'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold text-brand-text dark:text-yellow-200'>
            Vocab
          </p>
          {theme === 'dark' ? (
            <Sun
              className='w-5 h-5 cursor-pointer text-white hover:text-yellow-400 transition-colors'
              onClick={toggleTheme}
            />
          ) : (
            <Moon
              className='w-5 h-5 cursor-pointer text-black hover:text-black transition-colors'
              onClick={toggleTheme}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
