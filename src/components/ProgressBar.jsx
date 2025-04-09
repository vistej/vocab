import React from 'react';

export default function ProgressBar({ value, max }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className='w-full h-2 border border-brand-text bg-transparent overflow-hidden'>
      <div
        className='h-full bg-blue-500 dark:bg-yellow-400 transition-all duration-300'
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
