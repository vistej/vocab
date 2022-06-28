import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const WordList = () => {
  const [words, setWords] = React.useState();
  const [selectedGroup, setSelectedGroup] = React.useState(null);
  const [selectedWordIndex, setSelectedWordIndex] = React.useState(null);
  const [meaning, setMeaning] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const { group, wordIndex } = useParams();
  const navigate = useNavigate();
  const handlers = useSwipeable({onSwipedLeft: () => onNext(), onSwipedRight: () => onPrev(), onSwipedUp: () => showMeaning()});
  

  React.useEffect(() => {
    if (group) {
      setSelectedGroup(group);
      setSelectedWordIndex(null);
      setMeaning(null);
    }
    if (wordIndex) {
      setSelectedWordIndex(wordIndex);
      setMeaning(null);
    }
  }, [group, wordIndex]);

  React.useEffect(() => {
    const url = `${window.location.origin}/vocab/data/words.json`;
    axios.get(url).then((res) => {
      setWords(res.data);
    });
  }, []);

  document.onkeydown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'Enter':
        showMeaning();
        break;
      default: break;
    }
  };

  const showMeaning = () => {
    if (words.words[selectedGroup][selectedWordIndex] && (!meaning || meaning.word !== words.words[selectedGroup][selectedWordIndex])) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${words.words[selectedGroup][selectedWordIndex]}`)
        .then((res) => {
          setMeaning(res.data[0]);
        });
    }
  };

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

  const onPrev = () => {
    const index = Number(selectedWordIndex) - 1;
    if (index >= 0 && index < words.words[selectedGroup].length) {
      navigate(`/${selectedGroup}/${index}`, { replace: true });
    }
  };

  const onNext = () => {
    const index = Number(selectedWordIndex) + 1;
    if (index >= 0 && index < words.words[selectedGroup].length) {
      navigate(`/${selectedGroup}/${index}`, { replace: true });
    }
  };

  return (
    <div className='pt-5 h-screen' {...handlers}>
      {words && (
        <>
          <div className='flex justify-between'>
            <p className='p-2 font-bold text-lg'>Groups</p>
            <button className='p-2' onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'minimize ▴' : 'expand ▾'}
            </button>
          </div>
          {isExpanded && (
            <>
              {' '}
              <div className='flex justify-start flex-wrap gap-1 p-2'>
                {Object.keys(words.words).map((group) => {
                  return (
                    <span key={group}>
                      <Link to={group}>
                        <button
                          className={
                            'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                            (group === selectedGroup
                              ? ' bg-black text-white'
                              : '')
                          }
                        >
                          {group.split('_').join(' ')}
                        </button>
                      </Link>
                    </span>
                  );
                })}
              </div>
              {selectedGroup && <p className='p-2 font-bold text-lg'>Words</p>}
              {selectedGroup && (
                <div className='flex justify-start flex-wrap gap-1 p-2'>
                  {words.words[selectedGroup].map((word, index) => {
                    return (
                      <span key={word}>
                        <Link to={selectedGroup + '/' + index}>
                          <button
                            className={
                              'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                              (word === words.words[selectedGroup][selectedWordIndex]
                                ? ' bg-black text-white'
                                : '')
                            }
                          >
                            {word}
                          </button>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              )}
            </>
          )}
          <hr />
          {words.words[selectedGroup][selectedWordIndex] && (
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
                <p className='text-5xl'>{words.words[selectedGroup][selectedWordIndex]}</p>
              </div>
              <div className='flex justify-center gap-2'>
                <button
                  className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
                  onClick={() => copyToClipboard(words.words[selectedGroup][selectedWordIndex])}
                >
                  copy
                </button>
                <button
                  className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
                  onClick={showMeaning}
                >
                  show meaning
                </button>
                <button
                  className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
                  onClick={() => gotoMeaning(words.words[selectedGroup][selectedWordIndex])}
                >
                  Google dictionary ↗
                </button>
              </div>
            </div>
          )}

          {meaning && (
            <div className='pt-5'>
              {meaning.meanings.map((m) => {
                return (
                  <div className='p-2' key={selectedWordIndex + m.partOfSpeech}>
                    <p className='italic font-bold'>{m.partOfSpeech}</p>
                    <div className='pl-4'>
                      {m.definitions.map((d, index) => {
                        return (
                          <p key={d.definition}>
                            {index + 1 + '. ' + d.definition}
                          </p>
                        );
                      })}
                    </div>
                    {m.synonyms.length ? (
                      <div className='pl-4 flex justify-start flex-wrap pt-2 gap-2'>
                        <p className=''>synonyms: </p>
                        {m.synonyms.map((s) => {
                          return (
                            <p
                              key={s}
                              className='border rounded-xl border-slate-500 px-1'
                            >
                              {s}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <></>
                    )}
                    {m.antonyms.length ? (
                      <div className='pl-4 flex justify-start flex-wrap pt-2 gap-2'>
                        <p className=''>antonyms: </p>
                        {m.antonyms.map((s) => {
                          return (
                            <p
                              key={s}
                              className='border rounded-xl border-slate-500 px-1'
                            >
                              {s}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WordList;
