import {points} from '@assets';
import {styles} from './styles';
import {RF, Typography} from '@theme';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {
  AppText,
  Curve,
  CustomButton,
  EditableField,
  Header,
  TabWidget,
  Wrapper,
} from '@components';

const Buy_Redeem_Points = ({navigation}: any) => {
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);

  const onClickBottom = () => {};

  return (
    <Wrapper
      statusBarBagColor={'#19383A'}
      statusBarStyle={'#19383A' && 'light-content'}>
      <Curve bgClr={'#19383A'} height={300} onPress={onClickBottom}>
        <View style={styles.view}>
          <Header
            profile
            clr={'white'}
            showBackButton
            style={styles.header}
            navigation={navigation}
            title={'Points Options'}
          />
          <TabWidget
            firstTabTitle={'Buy Points'}
            secondTabTitle={'Redeem Points'}
            tabSelectedIndex={tabSelectedIndex}
            setTabSelectedIndex={setTabSelectedIndex}
            clr={tabSelectedIndex === 1 ? '#4A5568' : '#fff'}
            f_clr={tabSelectedIndex === 0 ? '#4A5568' : '#fff'}
            containerStyle={{backgroundColor: '#0F2B2D', width: '80%'}}
          />
          <View style={styles.topSection}>
            <View style={{justifyContent: 'center'}}>
              <AppText size={Typography.FONTS.SIZE.XXSMALL} color={'white'}>
                Available Credit
              </AppText>
              <AppText
                color={'white'}
                style={styles.txt}
                size={Typography.FONTS.SIZE.XLARGE}>
                $750.00
              </AppText>
            </View>

            <View style={{}}>
              <AppText size={Typography.FONTS.SIZE.XXSMALL} color={'white'}>
                Points Available
              </AppText>
              <View style={styles.imgView}>
                <Image source={points} style={styles.img} />
                <AppText size={Typography.FONTS.SIZE.XLARGE} color={'white'}>
                  $750.00
                </AppText>
              </View>
            </View>
          </View>
        </View>
      </Curve>

      <EditableField
        title={tabSelectedIndex === 0 ? 'Purchase with' : 'Points'}
        placeholder={'$50.00 CAD'}
      />
      <EditableField
        title={tabSelectedIndex === 0 ? 'Points' : 'Cash'}
        placeholder={'10,000'}
      />

      <View style={{marginTop: RF(70), marginBottom: RF(10)}}>
        <CustomButton
          text={tabSelectedIndex === 0 ? 'Buy Points' : 'Redeem Points'}
        />
      </View>
    </Wrapper>
  );
};

export default Buy_Redeem_Points;
