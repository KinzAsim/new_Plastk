import {
  AppText,
  Wrapper,
  TextSection,
  CustomButton,
  CustomCodeField,
} from '@components';
import {RF} from '@theme';
import {timer} from '@assets';
import getStyles from './styles';
import {useKeyboardhook} from '@hooks';
import {Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {GenericNavigation} from '@utils';

interface Props extends GenericNavigation {}

const EmailVerification = (props: Props) => {
  let smsInterval: any = '';
  const myTheme: any = useTheme();
  const [value, setValue] = useState('');
  const styles = getStyles(myTheme.colors);
  let [counter, setCounter] = useState(59);
  const isKeyboardVisible = useKeyboardhook();
  const [codeTimer, setCodeTimer] = useState('');
  const [resendDisable, setResendDisable] = useState(false);

  useEffect(() => {
    setTimer();
  }, []);
  useEffect(() => {
    if (value.length === 4) {
      navigate('EmailVerificationConfirmed');
      // verifyOTP();
    }
  }, [value]);

  const onSubmit = (val: any) => {
    setValue(val);
  };
  const handleSubmit = () => {
    onResend();
  };

  const onResend = () => {
    setCounter(59);
    setTimer();
  };

  const setTimer = () => {
    setResendDisable(true);
    smsInterval = setInterval(() => {
      if (counter < 0) {
        clearInterval(smsInterval);
        setCounter(59);
        setResendDisable(false);
      } else {
        let m = Math.floor((counter / 60) % 60);
        let s = Math.floor(counter % 60);
        setCounter((counter -= 1));
        setCodeTimer('0' + m + ':' + s + 's');
      }
    }, 1000);
  };

  return (
    <Wrapper isTop>
      <TextSection
        wd={263}
        title={'Please Check Your Email'}
        content={'Enter the code sent to your email'}
      />

      <View
        style={[
          styles.field,
          {
            paddingTop: isKeyboardVisible ? RF(80) : RF(120),
          },
        ]}>
        <CustomCodeField
          autoFocus={true}
          value={value}
          setValue={(val: any) => onSubmit(val)}
        />
      </View>

      <View style={styles.timerStyle}>
        {codeTimer !== '' && (
          <>
            <Image source={timer} resizeMode="contain" style={styles.tImg} />
            <AppText semiBold size={13}>
              {codeTimer}
            </AppText>
          </>
        )}
      </View>

      <View style={[styles.viewBtn]}>
        <AppText size={13} align style={styles.text} regular>
          Haven't received a verification code?
        </AppText>
        <CustomButton
          text={'Resend Code'}
          onPress={handleSubmit}
          disabled={resendDisable ? true : false}
          bgClr={
            resendDisable ? myTheme?.colors?.dim_gray : myTheme?.colors?.primary
          }
          textStyle={[
            styles.txt,
            {
              color: resendDisable
                ? myTheme?.colors?.light_grey
                : myTheme?.colors?.white,
            },
          ]}
        />
      </View>
    </Wrapper>
  );
};

export default EmailVerification;
