import React from 'react';
import {
  Image,
  ImageProps,
  StyleProp,
  ImageStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';

interface ImageComponentProps {
  source?: ImageProps['source'];
  style?: StyleProp<ImageStyle>;
  onImagePress?: () => void | undefined;
  color?: string;
  mode?: any;
}

const ImageComponent = (props: ImageComponentProps) => {
  const {source, style, color, onImagePress, mode} = props;
  const myTheme: any = useTheme();
  const styles = getstyles(myTheme?.colors);
  return (
    <Pressable onPress={onImagePress}>
      <Image
        source={source}
        resizeMode={mode ? mode : 'contain'}
        style={[
          style ? style : styles.img,
          {tintColor: color ? color : myTheme?.colors.black},
        ]}
      />
    </Pressable>
  );
};
export default ImageComponent;
const getstyles = (colors: any) =>
  StyleSheet.create({
    img: {
      width: RF(20),
      height: RF(20),
    },
  });
