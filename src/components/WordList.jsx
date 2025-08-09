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
    axios
      .get(url)
      .then((res) => {
        setWords(res.data);
      })
      .catch((error) => {
        console.error('Failed to load words:', error);
        toast.error('Failed to load vocabulary data. Please refresh the page.');
      });
  }, []);

  const getMeaning = async () => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${words.words[groupIndex][wordIndex]}`
      );
      setMeaning(data[0]);
      return data[0];
    } catch (error) {
      console.error('Failed to fetch meaning:', error);
      toast.error('Failed to fetch word meaning. Please try again.');
      throw error;
    }
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

  const gotoMeaning = () => {
    const word = words.words[groupIndex][wordIndex];
    window.open('//google.com/search?q=define ' + word, '_blank');
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle if no input is focused
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
        return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext();
          break;
        case 'Enter':
          e.preventDefault();
          fetchMeaning();
          break;
        case 'g':
          e.preventDefault();
          gotoMeaning();
          break;
        case 'c':
          e.preventDefault();
          copyToClipboard();
          break;
        case 'e':
          e.preventDefault();
          onExpand();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [groupIndex, wordIndex, words]);

  return (
    <div
      className='container h-full mx-auto py-16 text-brand-text'
      {...handlers}
    >
      {words && (
        <>
          {/* Header section */}
          <div className='flex justify-between items-center mb-4'>
            <div className='transition-all duration-300 ease-in-out flex-1'>
              {isExpanded ? (
                <p className='p-2 font-bold text-lg text-brand-text transition-opacity duration-300'>
                  Groups
                </p>
              ) : (
                <div className='transition-opacity duration-300'>
                  <WordProgress
                    words={words}
                    wordIndex={wordIndex}
                    groupIndex={groupIndex}
                  />
                </div>
              )}
            </div>

            <button
              className='btn-toggle flex items-center gap-1 transition-all duration-300'
              disabled={!groupIndex}
              onClick={onExpand}
            >
              <span className='transition-all duration-300'>
                {isExpanded ? 'Minimize' : 'Expand'}
              </span>
              <div className='transition-transform duration-300 ease-in-out'>
                {isExpanded ? (
                  <ChevronUp className='w-4 h-4' />
                ) : (
                  <ChevronDown className='w-4 h-4' />
                )}
              </div>
            </button>
          </div>

          {/* Group bar with smooth transition */}
          <div
            className={`expand-collapse-container transition-all duration-300 ease-in-out ${
              isExpanded ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
            }`}
          >
            <GroupBar
              words={words}
              groupIndex={groupIndex}
              wordIndex={wordIndex}
              onSelectWord={onSelectWord}
              onSelectGroup={onSelectGroup}
            />
          </div>

          {/* Divider */}
          <div className='border-b border-brand-text dark:border-zinc-700 my-4' />

          {/* Prompt to select a group */}
          {!groupIndex && (
            <div className='flex flex-col justify-center items-center h-32 gap-4'>
              <p className='text-xl font-semibold'>Select a group to start!</p>
              <div className='text-xs text-zinc-500 text-center'>
                <p>
                  Use keyboard shortcuts: ← → (navigate) • Enter (meaning) • C
                  (copy) • G (Google) • E (expand)
                </p>
              </div>
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
              <span className='animate-pulse'>Loading word meaning...</span>
            </div>
          )}

          {/* Word meaning */}
          {meaning && <WordMeaning meaning={meaning} />}

          {/* Subtle keyboard hints */}
          {groupIndex && words.words[groupIndex][wordIndex] && !meaning && (
            <div className='text-center mt-8 text-xs text-zinc-400'>
              <p>← → navigate • Enter meaning • C copy • G Google • E expand</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WordList;
