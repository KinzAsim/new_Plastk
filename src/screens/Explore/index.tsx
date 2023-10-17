import {
  SeeAll,
  Wrapper,
  HomeHeader,
  TabWidget,
  SearchBarTextInput,
  Coloured_Card,
  CategoriesList,
  Campaign_Card,
  ExploreList,
  AppText,
  UserAvatar,
} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  brand_categories,
  categoriesList,
  explore_brands,
  explore_stores,
  sotre_categories,
  subCategories_stores,
  subCategoryList,
} from '@utils';
import {
  Animated,
  Keyboard,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import {GST, RF, Typography} from '@theme';
import styles from './styles';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {dp} from '@assets';

const HEADER_HEIGHT = 200;

const Explore = ({navigation}: any) => {
  const myTheme: any = useTheme();
  const offset = useRef(new Animated.Value(0)).current;
  const [categories_bap, setCategories_bap] = useState([]);
  const [categories_bmp, setCategories_bmp] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [subCategories_Bap, setSubCategories_Bap] = useState([]);
  const [subCategories_Bmp, setSubCategories_Bmp] = useState([]);
  const [subCategoriesItem, setSubCategoriesItem] =
    useState(subCategories_stores);
  const [selectedItem, setSelectedItem] = useState<any>(0);
  const [bap_List, setBap_List] = useState([]);
  const [bmp_List, setBmp_List] = useState([]);
  const [filteredItems_bapList, setFilteredItems_bapList] =
    useState(explore_stores);
  const [filteredItems_bmpList, setFilteredItems_bmpList] =
    useState(explore_brands);
  const [filteredCategories_bap, setFilteredCategories_bap] =
    useState(sotre_categories);
  const [filteredCategories_bmp, setFilteredCategories_bmp] =
    useState(brand_categories);
  const [type, setType] = useState<any>();
  const [searchText, setSearchText] = useState<any>();
  const [hide, setHide] = useState(false);
  const tabs = [{title: 'Stores'}, {title: 'Brands'}];

  useEffect(() => {
    exploreCategories_BAP();
    exploreCategories_BMP();
    explore_SubCategories_BAP();
    explore_SubCategories_BMP();
    getBAP_List();
    getBMP_List();
  }, []);

  const exploreCategories_BAP = () => {
    setCategories_bap(sotre_categories);
  };
  const explore_SubCategories_BAP = () => {
    setSubCategories_Bap(subCategoryList);
  };
  const exploreCategories_BMP = () => {
    setCategories_bmp(categoriesList);
  };
  const explore_SubCategories_BMP = () => {
    setSubCategories_Bmp(subCategoryList);
  };
  const onOpenCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
  const onOpenSubCategory = (item: any, index: any) => {
    if (tabSelectedIndex === 0) {
      explore_SubCategories_BAP();
      setType(item?.name);
    } else {
      explore_SubCategories_BMP();
      setType(item?.name);
    }
    setShowSubCategory(!showSubCategory);
  };
  const updateFilteredItems: any = (searchTerm: any) => {
    const filtered_bap = bap_List.filter((item: any) =>
      item?.txt?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const filtered_bmp = bmp_List.filter((item: any) =>
      item?.miniTxt?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const filtered_Categories_bap = categories_bap.filter((item: any) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const filtered_Categories_bmp = categories_bmp.filter((item: any) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredItems_bapList(filtered_bap);
    setFilteredItems_bmpList(filtered_bmp);
    setFilteredCategories_bap(filtered_Categories_bap);
    setFilteredCategories_bmp(filtered_Categories_bmp);
  };
  const onChangeText = (val: any) => {
    setSearchText(val);
    updateFilteredItems(val);
    // if (val == '') {
    //   if (tabSelectedIndex === 0) {
    //     getBAP_List();
    //   } else {
    //     getBMP_List();
    //   }
    // }
  };
  const onPress_CrossBtn = () => {
    setType('');
    setShowSubCategory(!showSubCategory);
  };
  const onGoBack = () => {
    setShowAllCategories(false);
  };
  const onClick = (item: any, index: any) => {
    setSelectedItem(index);
    if (item.id == 0) {
      setSubCategoriesItem(subCategories_stores);
    }
    if (item.id == 1) {
      setSubCategoriesItem(explore_stores);
    }
  };
  const getBAP_List = () => {
    setBap_List(explore_stores);
  };
  const getBMP_List = () => {
    setBmp_List(explore_brands);
  };
  const getOffers = () => {};
  const onFavorite = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
  };
  const menuButtonPressed = () => {
    // navigation.openDrawer();
  };
  const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(true);
  const onEnableScroll = (value: any) => {
    setEnableScrollViewScroll(value);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <AnimatedHeader
          animatedValue={offset}
          menuButtonPressed={menuButtonPressed}
          myTheme={myTheme}
          getOffers={getOffers}
          tabSelectedIndex={tabSelectedIndex}
          setTabSelectedIndex={setTabSelectedIndex}
          onChangeText={onChangeText}
          type={type}
          onPress_CrossBtn={onPress_CrossBtn}
          showSubCategory={showSubCategory}
          tabs={tabs}
        />
        <ScrollView
          nestedScrollEnabled
          // stickyHeaderIndices={[0]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}
          contentContainerStyle={{marginTop: RF(180)}}>
          {showAllCategories && showSubCategory === false ? (
            <View style={{flex: 1, marginBottom: 230}}>
              <ExploreList
                onGoBack={onGoBack}
                data={
                  tabSelectedIndex === 0
                    ? filteredCategories_bap
                    : filteredCategories_bmp
                }
                onPress={(item: any, index: any) =>
                  onOpenSubCategory(item, index)
                }
              />
            </View>
          ) : (
            <>
              {showSubCategory && (
                <>
                  <View style={styles.view}>
                    <AppText
                      semiBold
                      color={myTheme?.colors?.border}
                      style={styles.h2}
                      size={Typography.FONTS.SIZE.MEDIUM}>
                      Subcategories
                    </AppText>
                  </View>
                  <CategoriesList
                    subCategory
                    data={
                      tabSelectedIndex === 0
                        ? subCategories_Bap
                        : subCategories_Bmp
                    }
                    selectedItem={selectedItem}
                    onPress={(item: any, index: any) => onClick(item, index)}
                  />
                </>
              )}

              {(tabSelectedIndex === 0 || tabSelectedIndex === 1) &&
              showSubCategory === false ? (
                <>
                  <View style={{marginTop: RF(20)}}>
                    <SeeAll title={'Categories'} onPress={onOpenCategories} />
                    <CategoriesList
                      explore
                      data={
                        tabSelectedIndex === 0 ? categories_bap : categories_bmp
                      }
                      onPress={(item: any, index: any) =>
                        onOpenSubCategory(item, index)
                      }
                    />
                  </View>
                </>
              ) : null}

              <View style={{flex: 1, marginBottom: 250}}>
                <Section
                  offset={offset}
                  showSubCategory={showSubCategory}
                  tabSelectedIndex={tabSelectedIndex}
                  filteredItems_bmpList={filteredItems_bmpList}
                  filteredItems_bapList={filteredItems_bapList}
                  subCategoriesItem={subCategoriesItem}
                />
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Section = ({
  offset,
  tabSelectedIndex,
  showSubCategory,
  subCategoriesItem,
  filteredItems_bmpList,
  filteredItems_bapList,
  onFavorite,
}: {
  offset?: any;
  tabSelectedIndex?: any;
  showSubCategory?: any;
  subCategoriesItem?: any;
  filteredItems_bmpList?: any;
  filteredItems_bapList?: any;
  onFavorite?: any;
}) => {
  return (
    <FlatList
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: offset}}}], {
        useNativeDriver: false,
      })}
      style={[GST.MAIN]}
      contentContainerStyle={styles.flatContentView}
      keyExtractor={(item, index) => index.toString()}
      data={
        tabSelectedIndex === 0
          ? showSubCategory
            ? subCategoriesItem
            : filteredItems_bmpList && filteredItems_bapList
          : filteredItems_bmpList
      }
      renderItem={({item, index}: any) => {
        return (
          <>
            <View style={styles.mainView} key={index}>
              {tabSelectedIndex === 0 ? (
                <Coloured_Card item={item} onFavorite={onFavorite} explore />
              ) : (
                <Campaign_Card item={item} onFavorite={onFavorite} />
              )}
            </View>
          </>
        );
      }}
    />
  );
};

const AnimatedHeader = ({
  animatedValue,
  myTheme,
  menuButtonPressed,
  getOffers,
  tabSelectedIndex,
  setTabSelectedIndex,
  onChangeText,
  type,
  onPress_CrossBtn,
  showSubCategory,
  tabs,
}: {
  animatedValue?: any;
  myTheme?: any;
  menuButtonPressed?: any;
  getOffers?: any;
  tabSelectedIndex?: any;
  setTabSelectedIndex?: any;
  showSubCategory?: any;
  onChangeText?: any;
  type?: any;
  onPress_CrossBtn?: any;

  tabs?: any;
}) => {
  const insets = useSafeAreaInsets();
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 140],
    extrapolate: 'clamp',
  });
  const headerDistance = Animated.diffClamp(animatedValue, 0, 60).interpolate({
    inputRange: [0, 1],
    outputRange: [0, -4],
  });
  const headerOpacity = animatedValue.interpolate({
    inputRange: [0, 100], // Adjust this range as needed
    outputRange: [1, 0], // Opacity will go from fully visible to hidden
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        position: 'absolute',
        height: headerHeight,
        backgroundColor: 'white',
        // transform: [
        //   {
        //     translateY: headerDistance,
        //   },
        // ],
      }}>
      <HomeHeader
        rewards
        title={'Explore'}
        cardText={'Spend & Earn'}
        menuButtonPressed={menuButtonPressed}
        backgroundColor={myTheme?.colors?.text}
      />

      <Animated.View
        style={{
          opacity: headerOpacity,
        }}>
        <TabWidget
          tabs={tabs}
          width={RF(157)}
          tabSelectedIndex={tabSelectedIndex}
          setTabSelectedIndex={setTabSelectedIndex}
        />
        <SearchBarTextInput
          type={type}
          placeholder={'Search'}
          onChangeText={onChangeText}
          onPress_CrossBtn={onPress_CrossBtn}
          mapSearch={showSubCategory == true ? true : false}
          // onSearch={tabSelectedIndex === 0 ? getBAP_List : getBMP_List}
          // onEndEditing={tabSelectedIndex === 0 ? getBAP_List : getBMP_List}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Explore;
