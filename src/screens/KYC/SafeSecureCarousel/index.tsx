import {
  AppText,
  Wrapper,
  TextSection,
  CustomButton,
  CustomPagination,
  CustomProgressBar,
} from '@components';
import {scanData} from '@utils';
import getStyles from './styles';
import {navigate} from '@services';
import {circle, scan} from '@assets';
import React, {useState, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useTheme} from '@react-navigation/native';
import {ImageBackground, Platform, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {GST, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';

const SafeSecureCarousel = () => {
  const myTheme: any = useTheme();
  const flatListRef: any = useRef();
  const styles = getStyles(myTheme.colors);
  const [activeSlide, setActiveSlide] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  console.log('--activeSlide--', activeSlide);

  return (
    <Wrapper>
      <CustomProgressBar value={88} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection
        top={RF(25)}
        title={'Safe & Secure'}
        content={
          'There are two steps to your digital \n identity confidence. All we need is \n your ID and a selfie!'
        }
      />
      <View style={styles.scanView}>
        <Carousel
          data={scanData}
          ref={flatListRef}
          // loop={true}
          // autoplayInterval={500}
          autoplayDelay={0}
          autoplay={true}
          renderItem={({item, index, parallaxProps}: any) => {
            return (
              <>
                <View style={styles.scanImageBgView}>
                  <ImageBackground source={scan} style={styles.scanImage}>
                    <View style={styles.circleImageBgView}>
                      <ImageBackground
                        source={circle}
                        style={[styles.circleImage]}
                        imageStyle={styles.img}>
                        <AppText center color={'white'} size={13} semiBold>
                          {item?.id}
                        </AppText>
                      </ImageBackground>
                      <AppText color={'black'} size={18} semiBold>
                        {item?.txt}
                      </AppText>
                    </View>
                  </ImageBackground>
                </View>
              </>
            );
          }}
          layout={'default'}
          layoutCardOffset={11}
          itemWidth={SCREEN_WIDTH}
          sliderWidth={SCREEN_WIDTH}
          sliderHeight={SCREEN_HEIGHT}
          onSnapToItem={index => {
            setActiveSlide(index);
          }}
          inactiveSlideScale={1}
          hasParallaxImages={true}
        />
      </View>
      <CustomPagination activeSlide={activeSlide} splash data={scanData} />
      <View style={styles.conatinerView}>
        <View style={styles.checkBoxView}>
          <View style={[styles.checkBoxMainView]}>
            <CheckBox
              // disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              style={styles.checkBox}
            />
            <View style={styles.termsView}>
              <View style={[GST.ROW]}>
                <AppText size={12} medium color={myTheme?.colors.border}>
                  {'I have read and agree to the '}
                </AppText>
                <AppText size={12} medium color={myTheme?.colors.light_blue}>
                  {'Terms and'}
                </AppText>
              </View>
              <View style={[GST.ROW]}>
                <AppText size={12} medium color={myTheme?.colors.light_blue}>
                  {'conditions '}
                </AppText>
                <AppText size={12} medium color={myTheme?.colors.border}>
                  {'and privacy policy. '}
                </AppText>
              </View>
            </View>
          </View>
        </View>
        <CustomButton
          text={'Continue'}
          disabled={toggleCheckBox ? false : true}
          bgClr={
            !toggleCheckBox
              ? myTheme?.colors?.light_border
              : myTheme?.colors?.text
          }
          onPress={() => navigate('SelectPhotoType')}
        />

        <View style={[GST.CENTER]}>
          <AppText
            color={myTheme?.colors?.text}
            semiBold
            size={12}
            onPress={() => navigate('Login')}>
            {'Cancel'}
          </AppText>
        </View>
      </View>
    </Wrapper>
  );
};

export default SafeSecureCarousel;
