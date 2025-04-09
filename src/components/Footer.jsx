const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full bg-white shadow-md p-4 border-t-2 h-16'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center text-sm'>
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
            className='text-blue-500 hover:underline font-medium'
            target='_blank'
            rel='noopener noreferrer'
          >
            vistej
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
