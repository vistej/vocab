const GroupBar = ({
  words,
  groupIndex,
  wordIndex,
  onSelectWord,
  onSelectGroup,
}) => {
  return (
    <>
      {/* Group buttons */}
      <div className='flex justify-start flex-wrap gap-2 p-2'>
        {Object.keys(words.words).map((group) => (
          <button
            key={group}
            className={`px-3 py-1 rounded border text-sm font-medium transition-colors
              ${
                group === groupIndex
                  ? 'bg-black text-white dark:bg-yellow-400 dark:text-black'
                  : 'btn'
              }`}
            onClick={() => onSelectGroup(group)}
          >
            {group.split('_').join(' ')}
          </button>
        ))}
      </div>

      {/* Word buttons */}
      {groupIndex && (
        <>
          <p className='p-2 font-bold text-lg text-brand-text'>Words</p>
          <div className='flex justify-start flex-wrap gap-2 p-2'>
            {words.words[groupIndex].map((word, index) => (
              <button
                key={word}
                className={`px-3 py-1 rounded border text-sm font-medium transition-colors
                  ${
                    index === Number(wordIndex)
                      ? 'bg-black text-white dark:bg-yellow-400 dark:text-black'
                      : 'btn'
                  }`}
                onClick={() => onSelectWord(index)}
              >
                {word}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default GroupBar;
