const WordBar = ({
  groupIndex,
  wordIndex,
  words,
  getMeaning,
  onPrev,
  onNext,
}) => {
  const copyToClipboard = (word) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(word)
        .then(() => {
          console.log('Copied to clipboard');
        })
        .catch((err) => {
          console.log('Failed to copy to clipboard', err);
        });
    }
  };

  const gotoMeaning = (word) => {
    window.open('//google.com/search?q=define ' + word, '_blank');
  };

  document.onkeydown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'Enter':
        getMeaning();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='flex justify-center gap-2 pt-5'>
        <button
          className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
          onClick={onPrev}
        >
          ◂ prev
        </button>
        <button
          className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
          onClick={onNext}
        >
          next ▸
        </button>
      </div>
      <div className='flex justify-center pt-10 pb-10 gap-2'>
        <p className='text-5xl'>{words.words[groupIndex][wordIndex]}</p>
      </div>
      <div className='flex justify-center gap-2'>
        <button
          className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
          onClick={() => copyToClipboard(words.words[groupIndex][wordIndex])}
        >
          copy
        </button>
        <button
          className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
          onClick={getMeaning}
        >
          show meaning
        </button>
        <button
          className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
          onClick={() => gotoMeaning(words.words[groupIndex][wordIndex])}
        >
          Google dictionary ↗
        </button>
      </div>
    </div>
  );
};

export default WordBar;
