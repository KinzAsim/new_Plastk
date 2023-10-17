import React, {useState} from 'react';
import {Pressable, View, Image, ScrollView} from 'react-native';
import {
  Wrapper,
  BoxView,
  AppText,
  TextSection,
  CustomProgressBar,
} from '@components';
import {circleFillArrow, download} from '@assets';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {navigate} from '@services';

const UploadDocuments = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  const [documentList, setDocumentList] = useState<any>([
    {text: 'Utility bills'},
    {text: 'Phone bills'},
    {text: 'Bank Statements'},
    {text: 'Government letters'},
  ]);
  return (
    <Wrapper>
      <CustomProgressBar value={90} mt={30} />
      <TextSection top={20} title={'Upload Additional Documents'} />
      <ScrollView>
        <View style={styles.container}>
          <BoxView
            text={'Upload Additional Doc'}
            content={'Max. file size 25 MB (.jpg, .png, .pdf, .docm)'}
            img={download}
          />
          <View style={styles.documentView}>
            <AppText
              center
              style={{textAlign: 'justify'}}
              regular
              size={13}
              color={myTheme?.colors?.border}>
              {`Any document that confirms your\nname and address, no older than 6 \nmonths: `}
            </AppText>
            <View>
              {documentList.map((item: any) => (
                <AppText color={myTheme?.colors?.border} regular size={13}>
                  {`\u2022  `}
                  <AppText color={myTheme?.colors?.border} regular size={13}>
                    {` ${item.text}`}
                  </AppText>
                </AppText>
              ))}
            </View>
          </View>
          {/* <BoxView
            top={50}
            text={'Error'}
            content={'Please try again '}
            img={crossCircle}
          /> */}
        </View>
      </ScrollView>
      <View style={styles.bottomArrowView}>
        <Pressable
          onPress={() => navigate('ConfirmationSet', {type: 'document'})}>
          <Image source={circleFillArrow} style={styles.imgCircle} />
        </Pressable>
      </View>
    </Wrapper>
  );
};

export default UploadDocuments;
