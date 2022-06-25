import axios from 'axios';
import React from 'react';

const WordList = () => {
  const [words, setWords] = React.useState();
  const [selectedGroup, setSelectedGroup] = React.useState(null);
  const [selectedWord, setSelectedWord] = React.useState(null);
  const [meaning, setMeaning] = React.useState(null);

  React.useEffect(() => {
    axios.get('./data/words.json').then((res) => {
      setWords(res.data);
    });
  }, []);

  // React.useEffect(() => {
  //   if (selectedWord) {
  //     axios
  //       .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
  //       .then((res) => {
  //         setMeaning(res.data[0]);
  //       });
  //   }
  // }, [selectedWord]);

  const showMeaning = () => {
    if (selectedWord && (!meaning || meaning.word !== selectedWord)) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`)
        .then((res) => {
          setMeaning(res.data[0]);
        });
    }
  };

  const onGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedWord(null);
    setMeaning(null);
  };

  const onWordSelect = (word) => {
    setSelectedWord(word);
    setMeaning(null)
  }

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
        <div className='flex justify-start flex-wrap gap-1 p-2'>
          {Object.keys(words.words).map((group) => {
            return (
              <span key={group}>
                <button
                  className={
                    'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                    (group === selectedGroup ? ' bg-black text-white' : '')
                  }
                  onClick={() => onGroupSelect(group)}
                >
                  {group.split('_').join(' ')}
                </button>
              </span>
            );
          })}
        </div>
      )}
      {selectedGroup && <p className='p-2 font-bold text-lg'>Words</p>}
      {selectedGroup && (
        <div className='flex justify-start flex-wrap gap-1 p-2'>
          {words.words[selectedGroup].map((word) => {
            return (
              <span key={word}>
                <button
                  className={
                    'border-2 rounded-md border-black p-1 hover:bg-black hover:text-white' +
                    (word === selectedWord ? ' bg-black text-white' : '')
                  }
                  onClick={() => onWordSelect(word)}
                >
                  {word}
                </button>
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
                <p className='italic'>{m.partOfSpeech}</p>
                {m.definitions.map((d, index) => {
                  return (
                    <div key={d.definition}>
                      <p>&emsp;{index + 1 + '. ' + d.definition}</p>
                    </div>
                  );
                })}
                {m.synonyms.length ? (
                  <div className='flex justify-start flex-wrap pt-2 gap-2'>
                    <p className='font-bold'>&emsp;synonyms: </p>
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
                  <div className='flex justify-start flex-wrap pt-2 gap-2'>
                    <p className='font-bold'>&emsp;antonyms: </p>
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
    </div>
  );
};

export default WordList;
