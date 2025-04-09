import React from 'react';

const WordMeaning = ({ meaning }) => {
  return (
    <div className='pt-6 text-brand-text'>
      {meaning.meanings.map((m) => (
        <div
          className='px-4 py-3 border-b border-zinc-200 dark:border-zinc-700'
          key={m.partOfSpeech}
        >
          {/* Part of speech */}
          <p className='italic font-semibold text-zinc-600 dark:text-zinc-300 mb-2'>
            {m.partOfSpeech}
          </p>

          {/* Definitions */}
          <div className='pl-4 space-y-1'>
            {m.definitions.map((d, index) => (
              <p key={d.definition}>
                <span className='font-medium text-zinc-500'>{index + 1}.</span>{' '}
                {d.definition}
              </p>
            ))}
          </div>

          {/* Synonyms */}
          {m.synonyms.length > 0 && (
            <div className='pl-4 pt-3 flex flex-wrap items-center gap-2 text-sm'>
              <span className='text-zinc-500'>Synonyms:</span>
              {m.synonyms.map((s, i) => (
                <span
                  key={i + s}
                  className='px-2 py-0.5 bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-white rounded-full text-xs'
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Antonyms */}
          {m.antonyms.length > 0 && (
            <div className='pl-4 pt-3 flex flex-wrap items-center gap-2 text-sm'>
              <span className='text-zinc-500'>Antonyms:</span>
              {m.antonyms.map((a, i) => (
                <span
                  key={i + a}
                  className='px-2 py-0.5 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-xs'
                >
                  {a}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordMeaning;
