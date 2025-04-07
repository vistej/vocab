const GroupBar = ({
  words,
  groupIndex,
  wordIndex,
  onSelectWord,
  onSelectGroup,
}) => {
  return (
    <>
      <div className='flex justify-start flex-wrap gap-1 p-2'>
        {Object.keys(words.words).map((group) => {
          return (
            <span key={group}>
              <button
                className={
                  'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                  (group === groupIndex ? ' bg-black text-white' : '')
                }
                onClick={() => onSelectGroup(group)}
              >
                {group.split('_').join(' ')}
              </button>
            </span>
          );
        })}
      </div>
      {groupIndex && <p className='p-2 font-bold text-lg'>Words</p>}
      {groupIndex && (
        <div className='flex justify-start flex-wrap gap-1 p-2'>
          {words.words[groupIndex].map((word, index) => {
            return (
              <span key={word}>
                <button
                  className={
                    'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                    (word === words.words[groupIndex][wordIndex]
                      ? ' bg-black text-white'
                      : '')
                  }
                  onClick={() => onSelectWord(index)}
                >
                  {word}
                </button>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GroupBar;
