import React, {useRef, useState} from 'react';
import {Wrapper, AppHeader, CameraVision} from '@components';
import {backArrow, zig} from '@assets';
import {RF} from '@theme';

const ScanFrontCard = () => {
  const [frontCard, setFrontCard] = useState(true);

  const handleFrontScanCard = () => {
    setFrontCard(false);
  };

  return (
    <Wrapper
      statusBarBagColor={'#3E4349'}
      statusBarStyle={'light-content'}
      viewStyle={{backgroundColor: '#3E4349'}}>
      <AppHeader
        showLeftIcon
        showRightIcon
        rightIcon={zig}
        rightCenterAlign
        headerBackground
        titleCenterAlign
        leftIcon={backArrow}
        title={frontCard ? 'Scan Front of Card' : 'Scan Back of Card'}
        headerstyle={{paddingTop: RF(30)}}
      />

      <CameraVision
        handleFrontCard={handleFrontScanCard}
        scanCard={frontCard}
        // onCameraReady={startAnimation}
      />
    </Wrapper>
  );
};

export default ScanFrontCard;
