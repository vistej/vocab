import React from 'react';

const WordMeaning = ({ meaning }) => {
  return (
    <div className='pt-5'>
      {meaning.meanings.map((m) => {
        return (
          <div className='p-2' key={m.partOfSpeech}>
            <p className='italic font-bold'>{m.partOfSpeech}</p>
            <div className='pl-4'>
              {m.definitions.map((d, index) => {
                return (
                  <p key={d.definition}>{`${index + 1}. ${d.definition}`}</p>
                );
              })}
            </div>
            {m.synonyms.length ? (
              <div className='pl-4 flex justify-start flex-wrap pt-2 gap-2'>
                <p className=''>synonyms: </p>
                {m.synonyms.map((s, i) => {
                  return (
                    <p
                      key={i + s}
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
                {m.antonyms.map((s, i) => {
                  return (
                    <p
                      key={i + s}
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
  );
};

export default WordMeaning;
