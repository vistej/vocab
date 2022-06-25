import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WordList = () => {
  const [words, setWords] = React.useState();
  const [selectedGroup, setSelectedGroup] = React.useState(null);
  const [selectedWord, setSelectedWord] = React.useState(null);
  const [meaning, setMeaning] = React.useState(null);
  const { group, word } = useParams();

  React.useEffect(() => {
    if (group) {
      setSelectedGroup(group);
      setSelectedWord(null);
      setMeaning(null);
    }
    if (word) {
      setSelectedWord(word);
      setMeaning(null);
    }
  }, [group, word]);

  React.useEffect(() => {
    const url = `${window.location.origin}/vocab/data/words.json`;
    axios.get(url).then((res) => {
      setWords(res.data);
    });
  }, []);

  const showMeaning = () => {
    if (selectedWord && (!meaning || meaning.word !== selectedWord)) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
        .then((res) => {
          setMeaning(res.data[0]);
        });
    }
  };

  const copyToClipboard = (word) => {
    var textField = document.createElement('textarea');
    textField.innerText = word;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const gotoMeaning = (word) => {
    window.open('//google.com/search?q=define ' + word, '_blank');
  };

  return (
    <div className='pt-5'>
      <p className='p-2 font-bold text-lg'>Groups</p>
      {words && (
        <>
          <div className='flex justify-start flex-wrap gap-1 p-2'>
            {Object.keys(words.words).map((group) => {
              return (
                <span key={group}>
                  <Link to={group}>
                    <button
                      className={
                        'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                        (group === selectedGroup ? ' bg-black text-white' : '')
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
              {words.words[selectedGroup].map((word) => {
                return (
                  <span key={word}>
                    <Link to={selectedGroup + '/' + word}>
                      <button
                        className={
                          'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                          (word === selectedWord ? ' bg-black text-white' : '')
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

          {selectedWord && (
            <div>
              <div className='flex justify-center pt-10 pb-10 gap-2'>
                <p className='text-5xl'>{selectedWord}</p>
              </div>
              <div className='flex justify-center gap-2'>
                <button
                  className='border-2 rounded-md border-black p-1 hover:bg-black hover:text-white'
                  onClick={() => copyToClipboard(selectedWord)}
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
                  onClick={() => gotoMeaning(selectedWord)}
                >
                  Google dictionary &#x2197;
                </button>
              </div>
            </div>
          )}

          {meaning && (
            <div className='pt-5'>
              {meaning.meanings.map((m) => {
                return (
                  <div className='p-2' key={selectedWord + m.partOfSpeech}>
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
