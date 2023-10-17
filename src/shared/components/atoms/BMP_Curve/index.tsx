import React, {useState} from 'react';
import {RF, SCREEN_HEIGHT} from '@theme';
import {
  PointsCard,
  ImageHeader,
  AppText,
  CustomRatingBar,
  AppTextInput,
  CustomTextInput,
} from '@components';
import {
  View,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {
  auto,
  baileynilsonImg,
  comicsImg,
  detourImg,
  detourLogo,
  jamesCoffeImg,
} from '@assets';
import {batch} from 'react-redux';
import {navigate} from '@services';
const BMP_Curve = ({
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
  coords?: any;
  offer_type?: any;
  navigation?: any;
  onFavorite?: any;
  currentlatLon?: any;
  loading?: any;
  setLoading?: any;
}) => {
  const [marginT, setmarginT] = useState(-30);
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heigth, setHeight] = useState<any>(
    Platform.OS === 'ios' ? '25%' : '30%',
  );
  const myTheme: any = useTheme();
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={auto}
        style={{
          height: SCREEN_HEIGHT / 2.5,
        }}
        imageStyle={{}}></ImageBackground> */}
      <View style={styles.imageContainer}>
        <ImageHeader
          bap
          navigation={navigation}
          logo={item?.url}
          source={item?.background}
        />
      </View>
      <View style={styles.parentBottom}>
        <View style={styles.resverse}>
          <ScrollView
            style={[
              styles.scroll_view_wrapper,
              {
                marginTop: RF(40),
              },
            ]}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}
            showsVerticalScrollIndicator={false}>
            <PointsCard
              item={item}
              textColor={'white'}
              pointsValue={status == 'completed' ? 'Complete' : '5,000'}
              bgColor={myTheme?.colors?.primary}
            />

            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity
                style={styles.brand_details_badge}
                onPress={() => navigate('EarnRewards')}>
                <AppText size={14} medium color={myTheme?.colors.border}>
                  Brand Details
                </AppText>
              </TouchableOpacity>
            </View>

            <View style={[styles.imageView]}>
              <AppText size={18} semiBold color={myTheme?.colors?.light_dark}>
                {'Google Nest Doorbell'}
              </AppText>
              {status !== '' ? (
                <View style={{}}>
                  <AppText size={12} medium color={myTheme?.colors?.border}>
                    Buy 2 and earn 5,000 in Plastk Reward Points.
                  </AppText>
                  <AppText
                    style={{}}
                    size={12}
                    color={myTheme?.colors?.border}
                    bold>
                    Offer ends {moment(new Date()).format('MMMM D, YYYY')}.
                  </AppText>
                  <AppText size={12} medium color={myTheme?.colors?.border}>
                    Terms & Conditions Apply.
                  </AppText>
                </View>
              ) : (
                <View style={{}}>
                  <AppText
                    size={12}
                    medium
                    color={myTheme?.colors?.border}
                    style={{width: '88%'}}>
                    You have successfully redeemed this offer. Please feel free
                    to rate this offer and provide any additional feedback!
                  </AppText>
                </View>
              )}
            </View>

            {status == '' ? (
              <Pressable
                style={[styles.imageView]}
                onPress={() => setStatus('completed')}>
                <Image source={item?.img} style={styles.img} />
              </Pressable>
            ) : (
              <>
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
              </>
            )}

            {status !== 'completed' ? (
              <>
                <View style={[styles.imageView, styles.contentView]}>
                  <AppText bold size={16} style={{marginTop: '5%'}}>
                    Offer terms{' '}
                  </AppText>

                  <View style={styles.dateStartView}>
                    <AppText bold size={12}>
                      Start Date:{' '}
                    </AppText>
                    <AppText size={12}>
                      {moment().format('MMMM D, YYYY')}.
                    </AppText>
                  </View>

                  <View style={styles.dateEndView}>
                    <AppText bold size={12}>
                      End Date:{' '}
                    </AppText>
                    <AppText size={12}>
                      {moment().format('MMMM D, YYYY')}.
                    </AppText>
                  </View>

                  <AppText
                    size={12}
                    color={myTheme?.colors?.light_dark}
                    style={{width: '80%'}}
                    regular>
                    {
                      'For every 1 item purchased in a single transaction at any authorized store location. Product availability may vary by store. We are not obligated to award points based on errors or misprints.No cash value.'
                    }
                  </AppText>
                </View>
              </>
            ) : (
              <>
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
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginHorizontal: RF(5),
    marginTop: '5%',
  },
  resverse: {
    flex: 1,
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    marginTop: Platform.OS === 'ios' ? -40 : -30,
  },

  scroll_view_wrapper: {
    flex: 1,
    marginTop: RF(15),
    marginHorizontal: RF(25),
  },
  brand_details_badge: {position: 'absolute', bottom: 15, right: 16},
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '40%',
  },
  parentBottom: {
    flex: 1,
    zIndex: 10,
    marginTop: -30,
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
    backgroundColor: 'orange',
  },
  contentView: {
    backgroundColor: '#F9FAFB',
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  dateStartView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(20),
  },
  dateEndView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RF(20),
  },
  img: {
    width: 100,
    height: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  review: {
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 20,
  },
  textView: {paddingBottom: 150},
});

export default BMP_Curve;
