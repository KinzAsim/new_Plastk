import {
  StyleSheet,
  Image,
  View,
  Pressable,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {GST, RF, SCREEN_WIDTH} from '@theme';
import Clipboard from '@react-native-clipboard/clipboard';
import {AppText} from '@components';
import {copy} from '@assets';
interface Props {
  text?: any;
  link?: any;
  img?: any;
  content?: any;
  bgColor?: any;
  belowLineSign?: any;
}

const FundBox = (props: Props) => {
  const myTheme: any = useTheme();
  const {text, link, content, img, bgColor, belowLineSign} = props;
  const [copiedText, setCopiedText] = useState(props?.text);
  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          {backgroundColor: bgColor ? bgColor : myTheme.colors.light_blue},
          styles.viewContainer,
        ]}>
        <Pressable
          onPress={() => (link ? Linking.openURL('https://example.com') : '')}>
          <AppText
            belowLine={belowLineSign && true}
            center
            color={myTheme.colors.white}
            semiBold
            size={12}>
            {copiedText}
          </AppText>
        </Pressable>
        {img && (
          <TouchableOpacity onPress={copyToClipboard}>
            <Image source={copy} style={styles.copyImage} />
          </TouchableOpacity>
        )}
        {content && (
          <AppText center color={myTheme.colors.white} semiBold size={12}>
            {content}
          </AppText>
        )}
      </View>
    </View>
  );
};

export default FundBox;

const styles = StyleSheet.create({
  copyImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  container: {
    paddingHorizontal: RF(36),
    paddingBottom: RF(16),
  },
  viewContainer: {
    width: SCREEN_WIDTH / 1.21,
    height: 50,
    borderRadius: RF(10),
    alignItems: 'center',
    paddingHorizontal: RF(30),
    ...GST.mid_row,
  },
});
