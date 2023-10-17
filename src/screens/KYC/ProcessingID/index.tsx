import React from 'react';
import {CustomProcessing, CustomProgressBar, Wrapper} from '@components';
import {navigate} from '@services';

const ProcessingID = () => {
  setTimeout(() => {
    navigate('IDConfirmation');
  }, 3000);

  return (
    <Wrapper>
      <CustomProcessing
        title={'Hang Tight'}
        content={'We are processing your ID'}
      />
    </Wrapper>
  );
};

export default ProcessingID;
