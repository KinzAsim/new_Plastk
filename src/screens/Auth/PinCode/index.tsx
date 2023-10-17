import {
  Alert,
  View,
  ScrollView,
  InteractionManager,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AppHeader,
  AppText,
  CustomButton,
  CustomCodeField,
  Wrapper,
} from '@components';
import {backArrow} from '@assets';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {navigate} from '@services';
import {current} from '@reduxjs/toolkit';

const PinCode = ({navigation}: any) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const [pinValue, setPinValue] = useState<any>('');
  const [pinConfirmValue, setPinConfirmValue] = useState<any>('');
  const [pinCode, setPinCode] = useState<any>('');
  const [isPinSet, setIsPinSet] = useState(false);
  const [savePinCode, setSavePinCode] = useState<any>();
  const [error, setError] = useState<any>('');
  const codeField1Ref: any = useRef();
  const codeField2Ref: any = useRef();
  const handleSubmit = () => {
    if (pinValue.length === 4 && pinConfirmValue.length === 4) {
      if (pinValue === pinConfirmValue) {
        savePin(pinValue);
      } else {
        setError('PIN codes do not match. Please try again.');
      }
    }
  };
  const handleConfirmPin = () => {
    if (savePinCode === pinCode) {
      navigate('Login');
    } else {
      setError('Incorrect Pin');
    }
  };
  const onSubmitPin = (val: any) => {
    setPinCode('');
    isPinSet ? setPinCode(val) : setPinValue(val);
  };
  const onSubmitPinConfirm = (val: any) => {
    setPinConfirmValue(val);
  };
  const removeValue = async () => {
    try {
      const value = await AsyncStorage.removeItem('PIN_CODE');
      setIsPinSet(false);
      setPinValue('');
      setPinConfirmValue('');
    } catch (e) {}
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('PIN_CODE');
      if (value !== null) {
        setIsPinSet(true);
        setSavePinCode(value);
      } else {
        setIsPinSet(false);
      }
    } catch (e) {}
  };
  const savePin = async (pinValue: any) => {
    setIsPinSet(true);
    try {
      await AsyncStorage.setItem('PIN_CODE', pinValue);
    } catch (error) {
      console.log('Error saving PIN code:', error);
    }
  };
  useEffect(() => {
    getData();
  }, [pinValue, pinConfirmValue, pinCode]);

  useEffect(() => {
    if (pinCode == '') {
      setError('');
    }
  }, [pinCode, pinValue, pinConfirmValue]);

  const onSubmitChange = (val: any) => {
    onSubmitPin(val);
    if (val.length === 4) {
      codeField2Ref?.current?.focus();
    }
  };

  useEffect(() => {
    codeField1Ref?.current?.blur();
    codeField1Ref?.current?.focus();
  }, [isPinSet]);

  return (
    <Wrapper>
      <AppHeader
        title={'Set Pin'}
        titleCenterAlign={false}
        headerTitleColor={myTheme?.colors?.border}
        showLeftIcon
        showRightIcon
        leftIcon={backArrow}
        leftIconColor={myTheme?.colors?.border}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={[{flexGrow: 1}, styles.topMargin]}
        keyboardShouldPersistTaps={'handled'}>
        <AppText color={myTheme?.colors.text} size={13} medium>
          {isPinSet ? 'Enter Your Pin' : 'Set a 4 digit number as your pin'}
        </AppText>
        <CustomCodeField
          ref={codeField1Ref}
          autoFocus={true}
          value={isPinSet ? pinCode : pinValue}
          setValue={(val: any) => onSubmitChange(val)}
          cellStyle={styles.cellView}
        />
        {isPinSet && error && (
          <AppText
            center
            medium
            size={12}
            color={myTheme?.colors.errColor}
            style={styles.topMargin}>
            {error}
          </AppText>
        )}

        {!isPinSet && (
          <>
            <AppText
              color={myTheme?.colors.text}
              size={13}
              medium
              style={{paddingTop: RF(32)}}>
              {'Confirm your pin'}
            </AppText>
            <CustomCodeField
              ref={codeField2Ref}
              value={pinConfirmValue}
              setValue={(val: any) => onSubmitPinConfirm(val)}
              cellStyle={[styles.cellView]}
              // onSubmitEditing={() => codeField2Ref?.current.focus()}
            />
            <AppText
              color={myTheme?.colors.text}
              size={13}
              medium_italic
              center
              style={styles.textView}>
              {'Don’t share your pin with anyone'}
            </AppText>
            {!isPinSet && error && (
              <AppText
                center
                medium
                size={12}
                color={myTheme?.colors.errColor}
                style={{paddingTop: RF(20)}}>
                {error}
              </AppText>
            )}
          </>
        )}
        <View style={styles.viewBtn}>
          <CustomButton
            text={isPinSet ? 'Next' : 'Confirm'}
            onPress={isPinSet ? handleConfirmPin : handleSubmit}
          />
          {isPinSet && (
            <AppText
              color={myTheme?.colors?.errColor}
              semiBold
              center
              size={12}
              onPress={removeValue}>
              Forgot Pin
            </AppText>
          )}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default PinCode;
