import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import WordMeaning from './WordMeaning';
import WordBar from './WordBar';
import GroupBar from './GroupBar';
import { useQuery } from '@tanstack/react-query';
import WordProgress from './WordProgress';

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
    onSwipedUp: () => fetchMeaning(),
  });

  React.useEffect(() => {
    const url = `${window.location.origin}/data/words.json`;
    axios.get(url).then((res) => {
      setWords(res.data);
    });
  }, []);

  const getMeaning = async () => {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${words.words[groupIndex][wordIndex]}`
    );
    setMeaning(data[0]);
    return data[0];
  };

  const {
    isLoading,
    refetch: fetchMeaning,
    isFetching,
  } = useQuery({
    queryKey: ['meaning', groupIndex, wordIndex],
    queryFn: getMeaning,
    enabled: false,
  });

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
    <div className='container mx-auto  py-16' {...handlers}>
      {words && (
        <>
          <div className='flex justify-between'>
            {isExpanded ? (
              <p className='p-2 font-bold text-lg'>Groups</p>
            ) : (
              <WordProgress
                words={words}
                wordIndex={wordIndex}
                groupIndex={groupIndex}
              />
            )}

            <button
              className='p-2'
              disabled={!groupIndex}
              onClick={() => setIsExpanded(!isExpanded)}
            >
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
          <div className='border-b-2 border-black w-full' />
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
              getMeaning={fetchMeaning}
              onPrev={onPrev}
              onNext={onNext}
            />
          )}

          {(isLoading || isFetching) && <div>Loading....</div>}

          {meaning && <WordMeaning meaning={meaning} />}
        </>
      )}
    </div>
  );
};

export default WordList;
