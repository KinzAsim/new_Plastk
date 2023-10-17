import {
  credit,
  p_card,
  points,
  shadow,
  arrow_up,
  arrow_up_forward,
} from '@assets';
import {
  View,
  Image,
  Animated,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  Wrapper,
  AppText,
  TabWidget,
  MainHeader,
  CurveHeader,
  CustomCharts,
  Home_Section,
} from '@components';
import {styles} from './styles';
import {navigate} from '@services';
import {GST, RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {categoriesList, myOffers, tabs_home, topPick} from '@utils';

const Home = ({navigation}: any) => {
  const theme: any = useTheme();
  const [main_Color, setMain_Color] = useState('#000');
  const offset = useRef(new Animated.Value(0)).current;
  const [loadingGraph, setLoadingGraph] = useState(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);

  useEffect(() => {
    if (main_Color === '#fff') {
      setLoadingGraph(true);
      setTimeout(() => {
        setLoadingGraph(false);
      }, 2000);
    }
  }, [main_Color]);

  const onOpenPremium = () => {
    navigate('PCA_Main', {type: 'home'});
  };

  const onPressPoints = () => {
    navigate('Buy_Redeem_Points');
  };

  return (
    <Wrapper
      statusBarBagColor={main_Color}
      statusBarStyle={
        main_Color === '#000' || main_Color === '#19383A'
          ? 'light-content'
          : 'dark-content'
      }>
      <MainHeader
        // navigation={navigation}
        title={
          main_Color === '#000'
            ? 'Good Afternoon, Matt!'
            : main_Color === '#fff'
            ? 'Card Health'
            : 'Rewards Points'
        }
        bgClr={main_Color}
        img1={main_Color === '#fff' && true}
        text_Clr={
          main_Color === '#000' || main_Color === '#19383A' ? '#fff' : '#000'
        }
      />
      <ScrollView style={GST.MAIN} contentContainerStyle={styles.content}>
        <CurveHeader
          setMain_Color={setMain_Color}
          main_Color={main_Color}
          loadingGraph={loadingGraph}
        />
        {main_Color === '#000' ? (
          <>
            <Image source={p_card} style={styles.img} />
            <DirectPayment theme={theme} email={'kinza@plastk.ca'} />
            <View style={styles.p}>
              <Premium premium onPress={onOpenPremium} />
              <Premium onPress={onPressPoints} />
            </View>
          </>
        ) : main_Color === '#fff' ? (
          <>
            <AppText
              align
              semiBold
              style={styles.mt}
              color={theme?.colors?.border}
              size={Typography?.FONTS?.SIZE?.LARGE}>
              My Credit Score
            </AppText>
            <View style={styles.imgBG}>
              <ImageBackground
                source={shadow}
                style={styles.img_bg}
                imageStyle={{
                  resizeMode: 'contain',
                }}>
                <Image source={credit} style={styles.cre} />
              </ImageBackground>
            </View>

            <AppText
              align
              semiBold
              color={theme?.colors?.border}
              size={Typography?.FONTS?.SIZE?.SMALL}
              style={styles.txt}>
              Keep Up The Great Work!
            </AppText>

            <View style={styles.box}>
              <View style={[styles.imgV]}>
                <Image source={arrow_up} style={styles.arr} />
                <AppText>8% Utilization</AppText>
              </View>
              <View style={styles.imgV}>
                <Image source={arrow_up_forward} style={styles.arr} />
                <AppText>3 Points</AppText>
              </View>
            </View>

            <View style={styles.chart}>
              <AppText
                color={theme?.colors?.app_green}
                size={Typography?.FONTS?.SIZE?.XXSMALL}
                semiBold>
                Credit Score
              </AppText>
              <AppText
                color={theme?.colors?.grey}
                size={Typography?.FONTS?.SIZE?.XXSMALL}
                style={styles.mt5}
                semiBold>
                Updated December 1, 2023
              </AppText>
            </View>
            <CustomCharts />
          </>
        ) : (
          <View style={styles.v}>
            <TabWidget
              width={RF(139)}
              tabs={tabs_home}
              tabSelectedIndex={tabSelectedIndex}
              setTabSelectedIndex={setTabSelectedIndex}
              containerStyle={[
                styles.tab,
                {
                  backgroundColor: theme?.colors?.dim_gray,
                },
              ]}
            />
            <ScrollView
              // refreshControl={
              //   <RefreshControl
              //     enabled={true}
              //     colors={['#9Bd35A', '#689F38']}
              //     refreshing={isRefreshing}
              //     onRefresh={handleRefresh}
              //   />
              // }
              style={styles.scrollview}
              showsVerticalScrollIndicator={false}>
              <Home_Section
                myOffers={myOffers}
                myProducts={topPick}
                // forme={forMe}
                // topPicks={top_Picks}
                // onFavorite={onFavorite}
                // fav_Offers={fav_Offers}
                // fav_TopPicks={fav_TopPicks}
                // forMeLoading={forMeLoading}
                // nearMeLoading={nearMeLoading}
                // brandsLoading={brandsLoading}
                // fav_MyProducts={fav_MyProducts}
                // onOpen_See_All={onOpen_See_All}
                storesAndBrands={categoriesList}
                tabSelectedIndex={tabSelectedIndex}
                // topPicksLoading={topPicksLoading}
                // onFavorite_Tab2={onFavorite_Tab2}
                // setFavorite={setFavorite_Near_You}
                // onFavorite_Toppicks={onFavorite_Toppicks}
              />
              {/* <View style={GST.mb100} /> */}
            </ScrollView>
          </View>
        )}

        <View style={styles.lastView} />
      </ScrollView>
    </Wrapper>
  );
};

const DirectPayment = ({
  theme,
  email,
  onPress,
}: {
  theme?: any;
  email?: any;
  onPress?: any;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.paymentView}>
      <AppText
        color={'white'}
        size={Typography.FONTS.SIZE.SMALL}
        regular
        style={styles.mv}>
        Direct Payments
      </AppText>
      <AppText
        color={'white'}
        size={Typography.FONTS.SIZE.XXXSMALL}
        regular
        style={styles.w}>
        Make payments to Plastk easily by sending funds to your Direct Payment
        Id (DPID) through Interac e-transfer
      </AppText>
      <View style={styles.copy}>
        <AppText style={{marginLeft: RF(20)}} color={'white'}>
          {email}
        </AppText>
        <View
          style={[
            styles.copyTxt,
            {
              backgroundColor: theme?.colors?.parrot_green,
            },
          ]}>
          <AppText>Copy</AppText>
        </View>
      </View>
    </Pressable>
  );
};

const Premium = ({onPress, premium}: {onPress?: any; premium?: any}) => {
  return (
    <Pressable
      onPress={onPress}
      style={premium ? styles.bottom_view : styles.bottom_view_points}>
      {!premium && <Image source={points} style={styles.image} />}
      <AppText semiBold size={12} color={premium ? 'white' : '#19383A'}>
        {premium ? ' Premium Cash Advance' : 'Buy/ Redeem Points'}
      </AppText>
    </Pressable>
  );
};

export default Home;

{
  /* <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20
          }}
          showsVerticalScrollIndicator={false}
         
        >
          {DATA.map(item => (
            <View
              key={item.id}
              style={{
                marginBottom: 20
              }}
            >
              <Text style={{ color: '#101010', fontSize: 32 }}>
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider> */
}
