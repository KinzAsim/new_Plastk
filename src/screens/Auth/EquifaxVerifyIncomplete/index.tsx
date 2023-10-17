import React from 'react';
import {GST, RF} from '@theme';
import getStyles from './styles';
import {Image, Pressable, Linking, ScrollView, Platform} from 'react-native';
import {navigate} from '@services';
import {plastkBubble, timer, verify} from '@assets';
import {View} from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {
  CustomButton,
  TextSection,
  Wrapper,
  CustomProgressBar,
  AppText,
} from '@components';

const EquifaxVerifyIncomplete = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  const handleSubmit = () => {
    navigate('EquifaxVerifyComplete', {});
  };

  return (
    <Wrapper>
      <CustomProgressBar value={'85'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection title={'Verification Not Complete'} top={RF(25)} />
      <ScrollView>
        <View style={styles.timerStyle}>
          <>
            <View style={[GST.ROW]}>
              <Image source={timer} resizeMode="contain" style={styles.tImg} />
              <AppText semiBold size={13}>
                {'11h 57m Until you can try again'}
              </AppText>
            </View>
            <AppText
              color={myTheme.colors.text}
              bold
              size={13}
              style={{paddingTop: RF(10)}}>
              {'Attempt 1/3'}
            </AppText>
          </>
        </View>

        <View style={[GST.CENTER, styles.imagView]}>
          <Image source={verify} style={styles.img} />
        </View>

        <View style={[GST.CENTER, styles.padTop]}>
          <AppText center color={myTheme.colors.border} size={14} regular>
            Unfortunately Equifax could not verify{'\n'}your personal
            information.
          </AppText>
          <AppText
            center
            color={myTheme.colors.border}
            size={14}
            regular
            style={{marginTop: RF(20)}}>
            {'You can '}
            <AppText center color={myTheme.colors.border} size={14} regular>
              <AppText
                belowLine
                color={myTheme.colors.light_blue}
                regular
                size={12}
                onPress={() => Linking.openURL('https://www.plastk.ca/')}>
                {'Contact Equifax'}
              </AppText>
              {'  or try Plastk'}
            </AppText>
          </AppText>
          <AppText center color={myTheme.colors.border} size={14} regular>
            Verification to continue the process now.
          </AppText>
        </View>

        <View style={[styles.viewBtn]}>
          <CustomButton text={'Verify With Plastk'} onPress={handleSubmit} />
          <View style={styles.view}>
            <AppText
              color={myTheme?.colors?.text}
              semiBold
              size={12}
              onPress={() => navigate('Login')}>
              Cancel
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default EquifaxVerifyIncomplete;
