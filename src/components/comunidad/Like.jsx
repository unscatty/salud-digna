import React, { useState } from 'react';
export default function Like() {
  const [like, setLike] = useState(false);
  return (
    <>
      <button
        type="button"
        className={
          'ml-2 w-10 inline-flex items-center border border-transparent text-xs font-medium rounded shadow-sm text-black  justify-center'
        }
        onClick={() => setLike(!like)}
      >
        <div
          className={`i-heroicons:heart-20-solid bg-light h-6 w-6 ${
            like ? 'bg-red' : ''
          }`}
        />
      </button>
    </>
  );
}
