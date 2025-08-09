import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import WordMeaning from './WordMeaning';
import WordBar from './WordBar';
import GroupBar from './GroupBar';
import { useQuery } from '@tanstack/react-query';
import WordProgress from './WordProgress';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

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

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const copyToClipboard = () => {
    const word = words.words[groupIndex][wordIndex];
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(word)
        .then(() => {
          toast.success('Copied to clipboard.');
        })
        .catch((err) => {
          console.log('Failed to copy to clipboard', err);
          toast.error('Failed to copy');
        });
    }
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
      case 'g':
        gotoMeaning();
        break;
      case 'c':
        copyToClipboard();
        break;
      case 'e':
        onExpand();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className='container h-full mx-auto py-16 text-brand-text'
      {...handlers}
    >
      {words && (
        <>
          {/* Header section */}
          <div className='flex justify-between items-center mb-4'>
            {isExpanded ? (
              <p className='p-2 font-bold text-lg text-brand-text'>Groups</p>
            ) : (
              <WordProgress
                words={words}
                wordIndex={wordIndex}
                groupIndex={groupIndex}
              />
            )}

            <button
              className='btn-toggle flex items-center gap-1'
              disabled={!groupIndex}
              onClick={onExpand}
            >
              {isExpanded ? (
                <>
                  Minimize <ChevronUp className='w-4 h-4' />
                </>
              ) : (
                <>
                  Expand <ChevronDown className='w-4 h-4' />
                </>
              )}
            </button>
          </div>

          {/* Group bar */}
          {isExpanded && (
            <GroupBar
              words={words}
              groupIndex={groupIndex}
              wordIndex={wordIndex}
              onSelectWord={onSelectWord}
              onSelectGroup={onSelectGroup}
            />
          )}

          {/* Divider */}
          <div className='border-b border-brand-text dark:border-zinc-700 my-4' />

          {/* Prompt to select a group */}
          {!groupIndex && (
            <div className='flex justify-center items-center h-32'>
              <p className='text-xl font-semibold'>Select a group to start!</p>
            </div>
          )}

          {/* Word view */}
          {words && groupIndex && words.words[groupIndex][wordIndex] && (
            <WordBar
              words={words}
              groupIndex={groupIndex}
              wordIndex={wordIndex}
              getMeaning={fetchMeaning}
              onPrev={onPrev}
              onNext={onNext}
              copyToClipboard={copyToClipboard}
            />
          )}

          {/* Loading state */}
          {(isLoading || isFetching) && (
            <div className='text-center py-4 text-sm text-zinc-400'>
              Loading...
            </div>
          )}

          {/* Word meaning */}
          {meaning && <WordMeaning meaning={meaning} />}
        </>
      )}
    </div>
  );
};

export default WordList;
