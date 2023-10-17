import React, {useState} from 'react';
import {RF} from '@theme';
import {
  PointsCard,
  CustomLoader,
  ImageHeader,
  SvgProgressBar,
  AppText,
  Maps,
  CustomRatingBar,
} from '@components';
import {
  View,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {_marker, back, map_marker, zoom} from '@assets';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';

const CurvedView = ({
  item,
  mapRef,
  coords,
  navigation,
  visits,
  onFavorite,
  totalVisits,
  offer_type,
  currentlatLon,
  loading,
  setLoading,
  initial,
}: {
  initial?: any;
  item?: any;
  mapRef?: any;
  visits?: any;
  totalVisits?: any;
  coords: any;
  offer_type?: any;
  navigation?: any;
  onFavorite?: any;
  currentlatLon?: any;
  loading?: any;
  setLoading?: any;
}) => {
  const myTheme: any = useTheme();
  const [marginT, setmarginT] = useState(-30);
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState('20%');
  const [heigth, setHeight] = useState<any>(
    Platform.OS === 'ios' ? '25%' : '30%',
  );
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState(0);

  const mapPress = () => {
    if (marginT == -30) {
      setHeight('70%');
      setmarginT(-400);
    }
    // else {
    //   setHeight('30%');
    //   setmarginT(-30);
    // }
  };

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };
  const handleOfferChange = () => {
    setProgress('100%');
    setStatus('completed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageHeader
          bap
          navigation={navigation}
          logo={item?.url}
          source={item?.background}
        />
      </View>

      <Pressable
        onPress={mapPress}
        style={[styles.parent, {height: heigth, marginTop: marginT}]}>
        <View style={styles.child}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              setHeight('30%');
              setmarginT(-30);
            }}>
            <Image
              source={back}
              resizeMode="contain"
              style={[styles.backImg, {tintColor: 'white'}]}
            />
          </TouchableOpacity>
          <Pressable style={styles.zoom}>
            <Image source={zoom} resizeMode="contain" style={styles.zoom} />
          </Pressable>
          <Maps
            initial={initial}
            coords={coords}
            marker={map_marker}
            mapViewRef={mapRef}
            currentlatLon={currentlatLon}
            home
          />
        </View>
      </Pressable>

      <View style={styles.parentBottom}>
        <View style={styles.childBottom}>
          <SvgProgressBar
            visits={visits}
            progress={progress}
            setProgress={setProgress}
            totalVisits={totalVisits}
          />

          <View style={[styles.resverse]}>
            <View style={styles.innerCurve}>
              <AppText bolder size={12} color={myTheme?.colors?.border} center>
                {visits} of {totalVisits} Visits
              </AppText>
              <ScrollView
                style={[styles.scroll_view_wrapper]}
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}>
                <Pressable onPress={handleOfferChange}>
                  <PointsCard
                    mini
                    miniStyle={{width: RF(120), height: RF(40)}}
                    item={item}
                    back={true}
                    pointsValue={2}
                  />
                </Pressable>

                {status !== 'completed' ? (
                  <>
                    <View style={{alignSelf: 'flex-end'}}>
                      <TouchableOpacity
                        onPress={() => navigate('EarnRewards')}
                        style={styles.brand_details_badge}>
                        <AppText
                          size={14}
                          medium
                          color={myTheme?.colors.border}>
                          Store Details
                        </AppText>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.view}>
                      <AppText
                        size={18}
                        semiBold
                        color={myTheme?.colors.border}>
                        Spend at Least ${'10.00'}
                      </AppText>
                      <AppText
                        regular
                        style={{marginTop: RF(16)}}
                        color={myTheme?.colors.border}
                        size={14}>
                        {
                          'Visit any Detour location and earn 2% back in Plastk Points when you spend at least $10.00. Offer ends September  15, 2022. Terms & Conditions Apply.'
                        }
                      </AppText>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.view}>
                      <AppText regular color={myTheme?.colors.border} size={14}>
                        {
                          'You have successfully redeemed this offer. Please feel free to rate this offer and provide any additional feedback!'
                        }
                      </AppText>
                    </View>
                    <AppText
                      size={14}
                      style={[styles.imageView]}
                      regular
                      color={myTheme?.colors?.border}>
                      Rate This Offer
                    </AppText>

                    <CustomRatingBar
                      totalStars={5}
                      defaultRating={rating}
                      onRatingChange={handleRatingChange}
                      styleRate={styles.review}
                    />

                    <View style={[styles.contentView]}>
                      <TextInput
                        style={styles.textView}
                        multiline={true}
                        placeholder="Please provide your feedback..."
                        placeholderTextColor={myTheme?.colros?.border}
                      />
                    </View>
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: RF(60),
    height: RF(50),
    position: 'absolute',
    top: 145,
    alignSelf: 'flex-end',
    zIndex: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImg: {
    width: RF(60),
    height: RF(20),
  },
  zoom: {
    width: RF(60),
    height: RF(20),
    position: 'absolute',
    top: 80,
    alignSelf: 'flex-end',
    zIndex: 20,
    right: 10,
    tintColor: 'white',
  },
  curve: {
    height: RF(200),
    zIndex: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    marginTop: Platform.OS === 'ios' ? -35 : -30,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  resverse: {
    width: '100%',
    height: RF(250),
    zIndex: 20,
    backgroundColor: 'white',
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    marginTop: Platform.OS === 'ios' ? -40 : -30,
  },
  innerCurve: {
    backgroundColor: 'white',
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    marginTop: Platform.OS === 'ios' ? -25 : -25,
    justifyContent: 'center',
    width: '100%',
    height: RF(250),
  },
  view: {
    marginRight: RF(10),
    marginTop: RF(20),
  },
  scroll_view_wrapper: {
    flex: 1,
    marginTop: RF(20),
    marginHorizontal: RF(25),
  },
  brand_details_badge: {position: 'absolute', bottom: 15, right: 16},
  container: {
    height: '100%',
  },
  imageContainer: {
    height: '40%',
  },
  parentBottom: {
    flex: 1,
    zIndex: 10,
    marginTop: -100,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  childBottom: {
    flex: 1,
    alignItems: 'center',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  parent: {
    zIndex: 10,
    overflow: 'hidden',
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  child: {
    flex: 1,
    zIndex: 20,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  imageView: {
    marginHorizontal: RF(5),
    marginTop: '5%',
  },
  review: {
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 20,
  },
  contentView: {
    backgroundColor: '#F9FAFB',
    paddingBottom: 30,
    paddingHorizontal: 3,
    borderRadius: 7,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  textView: {
    paddingBottom: 150,
  },
});

export default CurvedView;
