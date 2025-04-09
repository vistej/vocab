import { ChevronRight } from 'lucide-react';
import { ClipboardCopy } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Globe } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

const WordBar = ({
  groupIndex,
  wordIndex,
  words,
  getMeaning,
  onPrev,
  onNext,
}) => {
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
      default:
        break;
    }
  };

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
      </div>
    </div>
  );
};

export default WordBar;
