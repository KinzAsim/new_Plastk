import React from 'react';
import {
  AppHeader,
  BorderBox,
  CustomButton,
  GreyBox,
  Header,
  Wrapper,
} from '@components';
import {ScrollView} from 'react-native';
import {navigate} from '@services';
import {backArrow} from '@assets';
import {styles} from './styles';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

const ContactList = ({navigation}: any) => {
  const myTheme: any = useTheme();
  return (
    <Wrapper>
      <AppHeader
        showLeftIcon
        headerBackground
        leftIcon={backArrow}
        leftIconColor={myTheme?.colors?.border}
        title={'Contact List'}
        headerTitleColor={myTheme?.colors?.border}
        headerstyle={styles.headerView}
        size={16}
        leftIconStyle={{width: RF(21), height: RF(21)}}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <GreyBox
          containerStyle={styles.alignTopView}
          text={
            'Please note that a Premium Credit Advance fee of $5 will be\napplied for each transaction. The maximum cash advance\ntransfer per-instance is $100 and per day-day is $250.'
          }
          textSize={10}
        />
        <CustomButton
          btnStyle={styles.alignTopViewBtn}
          text={'Add Contact'}
          onPress={() => navigate('PCA_AddContact')}
        />

        <BorderBox contactBox={true} />
        <BorderBox contactBox={true} />
      </ScrollView>
    </Wrapper>
  );
};

export default ContactList;
