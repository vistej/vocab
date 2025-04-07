import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import WordMeaning from './WordMeaning';
import WordBar from './WordBar';
import GroupBar from './GroupBar';

const WordList = () => {
  const { pgi, pwi } = useParams();
  const navigate = useNavigate();
  const [words, setWords] = React.useState();
  const [groupIndex, setGroupIndex] = React.useState(pgi);
  const [wordIndex, setWordIndex] = React.useState(pwi);
  const [meaning, setMeaning] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(true);
  const handlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    onSwipedUp: () => getMeaning(),
  });

  React.useEffect(() => {
    const url = `${window.location.origin}/data/words.json`;
    axios.get(url).then((res) => {
      setWords(res.data);
    });
  }, []);

  const getMeaning = () => {
    if (
      words.words[groupIndex][wordIndex] &&
      (!meaning || meaning.word !== words.words[groupIndex][wordIndex])
    ) {
      axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${words.words[groupIndex][wordIndex]}`
        )
        .then((res) => {
          setMeaning(res.data[0]);
        });
    }
  };

  const onSelectWord = (index) => {
    if (
      index >= 0 &&
      index < words.words[groupIndex].length &&
      index !== Number(wordIndex)
    ) {
      setWordIndex(index);
      setMeaning('');
      navigate(`/${groupIndex}/${index}`, { replace: true });
    }
  };

  const onSelectGroup = (group) => {
    const wordIndex = '0';
    setWordIndex(wordIndex);
    setGroupIndex(group);
    setMeaning('');
    navigate(`/${group}/${wordIndex}`, { replace: true });
  };

  const onPrev = () => {
    const index = Number(wordIndex) - 1;
    onSelectWord(index);
  };

  const onNext = () => {
    const index = Number(wordIndex) + 1;
    onSelectWord(index);
  };

  return (
    <div className='pt-5 h-full' {...handlers}>
      {words && (
        <>
          {/* TODO Move this to GroupBar */}
          <div className='flex justify-between'>
            <p className='p-2 font-bold text-lg'>Groups</p>
            <button className='p-2' onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'minimize ▴' : 'expand ▾'}
            </button>
          </div>
          {isExpanded && (
            <GroupBar
              words={words}
              groupIndex={groupIndex}
              wordIndex={wordIndex}
              onSelectWord={onSelectWord}
              onSelectGroup={onSelectGroup}
            />
          )}
          <hr />
          {!groupIndex && (
            <div className='flex justify-center items-center'>
              <p className='text-2xl'>Select a group to start!</p>
            </div>
          )}
          {words && groupIndex && words.words[groupIndex][wordIndex] && (
            <WordBar
              words={words}
              groupIndex={groupIndex}
              wordIndex={wordIndex}
              getMeaning={getMeaning}
              onPrev={onPrev}
              onNext={onNext}
            />
          )}

          {meaning && <WordMeaning meaning={meaning} />}
        </>
      )}
    </div>
  );
};

export default WordList;
