import getStyles from './styles';
import {navigate} from '@services';
import {WelcomeData} from '@utils';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useTheme} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '@theme';
import {StatusBar, ImageBackground} from 'react-native';
import {CustomButton, AppText, CustomPagination} from '@components';

const Splash_Screen = () => {
  const myTheme: any = useTheme();
  const flatListRef: any = useRef();
  const styles = getStyles(myTheme.colors);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'default'}
      />
      <Carousel
        data={WelcomeData}
        ref={flatListRef}
        containerCustomStyle={styles.carousel}
        slideStyle={styles.margin}
        renderItem={({item, index, parallaxProps}: any) => {
          return (
            <>
              <ImageBackground
                source={item?.url}
                style={styles.imgStyle}
                imageStyle={styles.imgBG}>
                <AppText
                  color={myTheme?.colors?.white}
                  size={32}
                  style={styles.imgtxt}
                  semiBold>
                  {item?.txt}
                </AppText>
              </ImageBackground>
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
        contentContainerCustomStyle={styles.content}
      />
      <CustomPagination
        activeSlide={activeSlide}
        splash
        data={WelcomeData}
        welcome={true}
      />
      <CustomButton
        text={'Get Started'}
        textStyle={[styles.clr, {color: myTheme?.colors?.text}]}
        btnStyle={[styles.imgBtn]}
        bgClr={'white'}
        onPress={() => navigate('Login')}
      />
    </>
  );
};

export default Splash_Screen;
