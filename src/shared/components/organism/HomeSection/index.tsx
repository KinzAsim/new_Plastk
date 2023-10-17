import React from 'react';
import {navigate} from '@services';
import {View} from 'react-native';
// import List from './horizontalList';
// import Card from './organisms/card';
import {useSelector} from 'react-redux';
// import MultiFocusList from './multiFocusList';
// import MyContentLoader from './contentLoader';
import {RF} from '@theme';
import {favorite_sponsored, sponsored} from '@utils';
import {Card, List, MultiFocusList, SeeAll} from '@components';

const Home_Section = ({
  forme,
  myOffers,
  topPicks,
  onFavorite,
  fav_Offers,
  setFavorite,
  forMeLoading,
  brandsLoading,
  fav_MyProducts,
  onOpen_See_All,
  storesAndBrands,
  tabSelectedIndex,
  topPicksLoading,
  nearMeLoading,
  onFavorite_Toppicks,
  setFavorite_MyProducts,
  fav_TopPicks,
  onFavorite_Tab2,
  myProducts,
}: {
  forme?: any;
  myOffers?: any;
  topPicks?: any;
  onFavorite?: any;
  fav_Offers?: any;
  setFavorite?: any;
  forMeLoading?: any;
  fav_MyProducts?: any;
  onOpen_See_All?: any;
  storesAndBrands?: any;
  tabSelectedIndex?: any;
  topPicksLoading?: any;
  brandsLoading?: any;
  nearMeLoading?: any;
  onFavorite_Toppicks?: any;
  setFavorite_MyProducts?: any;
  fav_TopPicks?: any;
  onFavorite_Tab2?: any;
  myProducts?: any;
}) => {
  // const {forMe} = useSelector((state: any) => state.root.user);

  return (
    <>
      <SeeAll
        title={'Stores & Brands'}
        onPress={(item: any, index: any) =>
          navigate('Stores_SeeAll', {item: storesAndBrands})
        }
      />
      {brandsLoading ? (
        <View style={{height: 100, paddingTop: 10, marginLeft: -30}}>
          {/* <MyContentLoader brands={brandsLoading} /> */}
        </View>
      ) : (
        <>
          <List
            data={storesAndBrands}
            onPress={(item: any, index: any) =>
              navigate('Stores_SeeAll', {item: item})
            }
          />
        </>
      )}

      <SeeAll
        title={tabSelectedIndex === 0 ? 'My Offers' : 'Favourite Offers'}
        onPress={() =>
          onOpen_See_All(
            'myOffers',
            tabSelectedIndex === 0 ? myOffers : fav_Offers,
          )
        }
      />
      {nearMeLoading ? (
        <View style={{height: 100, paddingTop: 10, marginLeft: -30}}>
          {/* <MyContentLoader nearme={nearMeLoading} /> */}
        </View>
      ) : (
        <>
          <Card
            onFavorite={tabSelectedIndex === 0 ? onFavorite : onFavorite_Tab2}
            response={tabSelectedIndex === 0 ? myOffers : fav_Offers}
          />
        </>
      )}

      <SeeAll
        title={tabSelectedIndex === 0 ? 'My Products' : ''}
        onPress={() =>
          onOpen_See_All(
            'myProducts',
            tabSelectedIndex === 0 ? myProducts : fav_MyProducts,
          )
        }
      />

      {forMeLoading ? (
        <View
          style={{
            height: RF(160),
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          {/* <MyContentLoader forMe={forMeLoading} /> */}
        </View>
      ) : (
        <>
          <Card
            onFavorite={tabSelectedIndex === 0 ? onFavorite : onFavorite_Tab2}
            response={tabSelectedIndex === 0 ? myProducts : fav_MyProducts}
          />
        </>
      )}

      <SeeAll title={'Sponsored'} />
      <View>
        <MultiFocusList
          data={tabSelectedIndex === 0 ? sponsored : favorite_sponsored}
        />
      </View>
    </>
  );
};

export default Home_Section;

{
  /* <SeeAll
        title={'Top Picks'}
        onPress={() => onOpen_See_All('topPicks', topPicks)}
      /> */
}
{
  /* 
      {topPicksLoading ? (
        <View
          style={{
            height: RF(230),
            paddingLeft: 20,
            paddingBottom: 10,
          }}>
          <MyContentLoader topPicks={topPicksLoading} />
        </View>
      ) : (
        <>
          <>
            <Card
              response={tabSelectedIndex === 0 ? topPicks : fav_TopPicks}
              onFavorite={onFavorite_Toppicks}
            />
          </>
        </>
      )} */
}
