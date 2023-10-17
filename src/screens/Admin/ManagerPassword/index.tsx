import React, {useState} from 'react';
import {RF} from '@theme';
import useStyles from './style';
import {GenericNavigation, Titles} from '@utils';
import {navigate} from '@services';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AppHeader, AppTextInput, Wrapper, PrimaryButton} from '@components';

interface Props extends GenericNavigation {}

export default function ManagerPassword(props: Props) {
  const myTheme: any = useTheme();
  const style = useStyles(myTheme.colors);
  const [errorText, setErrorText] = useState('');

  return (
    <>
      <Wrapper isTop>
        <AppHeader title="Manager Password Update" />
        <View style={style.wrapContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AppTextInput
              placeholder={Titles.PASSWORD}
              title={'Enter Current Password'}
              txtStyle={{marginBottom: RF(30)}}
              style={{marginLeft: RF(30)}}
            />
            <AppTextInput
              title={'Enter New Password'}
              placeholder={Titles.PASSWORD}
              txtStyle={{marginBottom: RF(30)}}
              style={{marginLeft: RF(30)}}
            />
            <AppTextInput
              title={'Re-enter New Password'}
              placeholder={Titles.PASSWORD}
              style={{marginLeft: RF(30)}}
            />
            <View
              style={{
                height: RF(160),
                paddingBottom: 5,
                justifyContent: 'flex-end',
              }}>
              <PrimaryButton
                title={'Next'}
                bgColor={myTheme?.colors?.text}
                onPress={() => navigate('Login')}
                buttonStyle={{alignSelf: 'center'}}
              />
            </View>
          </ScrollView>
        </View>
      </Wrapper>
    </>
  );
}
