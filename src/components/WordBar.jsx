import { ChevronRight } from 'lucide-react';
import { ClipboardCopy } from 'lucide-react';
import { Star } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Globe } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const WordBar = ({
  groupIndex,
  wordIndex,
  words,
  getMeaning,
  onPrev,
  onNext,
  copyToClipboard,
}) => {
  const gotoMeaning = () => {
    const word = words.words[groupIndex][wordIndex];
    window.open('//google.com/search?q=define ' + word, '_blank');
  };

  // TODO add functionality later.
  const [reviewed, setReviewed] = useState(false);

  const addToReview = () => {
    
  }

  return (
    <div className='text-brand-text'>
      {/* Navigation Buttons */}
      <div className='flex justify-center gap-3 pt-6'>
        <button className='btn flex items-center gap-2"' onClick={onPrev}>
          <ChevronLeft className='w-4 h-4' /> Prev
        </button>
        <button className='btn flex items-center gap-2"' onClick={onNext}>
          Next <ChevronRight className='w-4 h-4' />
        </button>
      </div>

      {/* Word Display */}
      <div className='flex justify-center pt-12 pb-10'>
        <p className='text-5xl font-semibold'>
          {words.words[groupIndex][wordIndex]}
        </p>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center flex-wrap gap-3'>
        <button
          className='btn flex items-center gap-2'
          onClick={copyToClipboard}
        >
          <ClipboardCopy className='w-4 h-4' />
          Copy
        </button>

        <button className='btn flex items-center gap-2' onClick={getMeaning}>
          <BookOpenText className='w-4 h-4' />
          Show Meaning
        </button>

        <button className='btn flex items-center gap-2' onClick={gotoMeaning}>
          Google
          <Globe className='w-4 h-4' />
        </button>
        <button
          className='btn flex items-center gap-2'
          onClick={() => setReviewed(!reviewed)}
        >
          <Star
            className={`w-4 h-4${
              reviewed ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-400'
            }`}
          />
          Review
        </button>
      </div>
    </div>
  );
};

export default WordBar;
