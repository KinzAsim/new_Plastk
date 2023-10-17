import React, {useState} from 'react';
import {RouteProp, useTheme} from '@react-navigation/native';
import {Wrapper, CurvedView, ImageHeader, BMP_Curve} from '@components';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      data?: any;
      item?: any;
    };
  }>;
}

const BMP_Promotion = ({route, navigation}: Props) => {
  const {type, item} = route?.params;
  const [forMe_Detail, setForMe_Detail] = useState<any>([]);
  const myTheme: any = useTheme();
  return (
    <>
      <Wrapper
        translucent
        statusBarBagColor={'transparent'}
        statusBarStyle={'default'}>
        <BMP_Curve item={item} navigation={navigation} />
      </Wrapper>
    </>
  );
};

export default BMP_Promotion;
