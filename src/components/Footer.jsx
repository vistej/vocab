const Footer = () => {
  return (
    <div className='bg-brand-footer fixed bottom-0 w-full shadow-md p-4 border-t border-brand-text dark:border-zinc-700 h-16'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center text-sm text-brand-text dark:text-white'>
        <p>
          Made with{' '}
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-500 hover:underline'
          >
            React
          </a>{' '}
          +{' '}
          <a
            href='https://vite.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-500 hover:underline'
          >
            Vite
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} Vocab by{' '}
          <a
            href='https://github.com/vistej'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline font-medium'
          >
            vistej
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
