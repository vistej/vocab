const Footer = () => {
  // TODO Fix footer in mobile view.
  return (
    <div className='fixed bottom-0 w-full bg-white shadow-md p-4'>
      <div className='flex justify-center'>
        <p>
          Made with{' '}
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-500 hover:underline'
          >
            React
          </a>
          {' + '}
          <a
            href='https://vite.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-500 hover:underline'
          >
            Vite
          </a>
          .
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
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
