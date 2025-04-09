import ProgressBar from './ProgressBar';

const WordProgress = ({ words, groupIndex, wordIndex }) => {
  return (
    <div className='px-4 py-2 flex items-center justify-between gap-4'>
      {/* Progress section */}
      <div className='flex  md:items-center gap-8 w-full'>
        {/* Group progress */}
        <div className='flex flex-col items-center md:items-start flex-1'>
          <span className='text-sm font-semibold whitespace-nowrap'>
            Group {groupIndex.split('_')[1]} of{' '}
            {Object.keys(words.words).length}
          </span>
          <ProgressBar
            value={Number(groupIndex.split('_')[1])}
            max={Object.keys(words.words).length}
          />
        </div>

        {/* Word progress */}
        <div className='flex flex-col items-center md:items-start flex-1'>
          <span className='text-sm font-semibold whitespace-nowrap'>
            Word {Number(wordIndex) + 1} of {words.words[groupIndex].length}
          </span>
          <ProgressBar
            value={Number(wordIndex) + 1}
            max={words.words[groupIndex].length}
          />
        </div>
      </div>
    </div>
  );
};

export default WordProgress;
