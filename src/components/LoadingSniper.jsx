// LoadingSpinner.jsx

import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <BeatLoader color="#ffffff" css={override} size={20} />
    </div>
  );
};

export default LoadingSpinner;
