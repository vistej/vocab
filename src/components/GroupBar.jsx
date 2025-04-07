import { useNavigate } from 'react-router-dom';

const GroupBar = ({
  words,
  groupIndex,
  wordIndex,
  setGroupIndex,
  setWordIndex,
  setMeaning,
}) => {
  const navigate = useNavigate();

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
                onClick={() => {
                  setGroupIndex(group);
                  setWordIndex('0');
                  setMeaning('');
                  navigate(`/${group}`);
                }}
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
                  onClick={() => {
                    if (index !== Number(wordIndex)) {
                      setWordIndex(index);
                      setMeaning('');
                      navigate(`/${groupIndex}/${index}`);
                    }
                  }}
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
