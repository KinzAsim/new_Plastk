import {CustomProgressBar, TextSection, Wrapper} from '@components';
import React from 'react';

const Upload_Additional_Doc = () => {
  return (
    <Wrapper isTop>
      <CustomProgressBar value={90} />
      <TextSection title={'Upload Additional Documents'} />
    </Wrapper>
  );
};

export default Upload_Additional_Doc;
