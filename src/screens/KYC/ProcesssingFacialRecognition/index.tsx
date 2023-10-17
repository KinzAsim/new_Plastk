import React from 'react';
import {navigate} from '@services';
import {CustomProcessing, Wrapper} from '@components';

const ProcessingFR = () => {
  setTimeout(() => {
    navigate('UploadDocuments');
  }, 3000);

  return (
    <Wrapper>
      <CustomProcessing
        title={'Almost Done'}
        content={'We are processing your facial recognition'}
      />
    </Wrapper>
  );
};

export default ProcessingFR;
