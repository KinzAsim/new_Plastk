import React, {useState} from 'react';
import HomeStack from '../stacks/homeStack';
import ScanStack from '../stacks/scanStack';
import {useTheme, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ExploreStack from '../stacks/exploreStack';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {RF} from '@theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '@services';
import {
  _home,
  _line,
  _scan,
  _sentinel,
  explore,
  explore_w,
  home,
  line,
  rewards,
  sentinel,
} from '@assets';
import {getIsDarkModeEnabled} from '@utils';
import MySpendStack from '../stacks/mySpendStack';
import SentinelStack from '../stacks/sentinelStack';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);
  const {colorCode} = useSelector((state: any) => state.root.user);
  const [activeStack, setActiveStack] = useState('HomeStack');

  const handleCaptureFlag = () => {};

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '"white"',
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabIcon,
        tabBarInactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={'HomeStack'}
              focused={focused}
              source={focused ? home : getIsDarkModeEnabled() ? _home : _home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={'ExploreStack'}
              focused={focused}
              source={
                focused ? explore_w : getIsDarkModeEnabled() ? rewards : rewards
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScanStack"
        component={ScanStack}
        options={{
          tabBarIcon: ({color, focused, props}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              focused={focused}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={'ScanStack'}
              styles={styles}
              source={focused ? _scan : getIsDarkModeEnabled() ? _scan : _scan}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MySpendStack"
        component={MySpendStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              focused={focused}
              stack={'MySpendStack'}
              source={focused ? _line : getIsDarkModeEnabled() ? line : line}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SentinelStack"
        component={SentinelStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              color={color}
              styles={styles}
              stack={'SentinelStack'}
              focused={focused}
              source={
                focused
                  ? sentinel
                  : getIsDarkModeEnabled()
                  ? _sentinel
                  : _sentinel
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any,
) => {
  navigate(stack);
  setActiveStack(stack);
  if (stack == 'ScanStack' && activeStack == 'ScanStack') {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  styles,
  focused,
  colorCode,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  activeStack: any;
  setActiveStack: any;
  handleCaptureFlag: any;
}) => {
  return (
    <Pressable
      onPress={() =>
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag)
      }>
      <View
        style={{
          width: RF(50),
          height: RF(50),
          alignItems: 'center',
          borderRadius: RF(50),
          justifyContent: 'center',
          backgroundColor: focused ? colorCode : 'white',
        }}>
        <Image
          source={source}
          style={[
            styles.image,
            {
              tintColor: color,
            },
          ]}
          resizeMode={'contain'}
        />
      </View>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    inner_scan: {
      width: RF(42),
      height: RF(42),
      borderRadius: 42,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    outer_scan: {
      width: RF(52),
      height: RF(52),
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scan_view: {
      width: RF(62),
      marginTop: -1,
      height: RF(62),
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: primaryDarkColor,
    },
    image: {width: RF(18), height: RF(18), opacity: 100, tintColor: '#fffff'},
    iconView: {
      width: RF(50),
      height: RF(50),
      alignItems: 'center',
      borderRadius: RF(50),
      justifyContent: 'center',
    },
    img: {},
    tabIcon: {
      marginTop: RF(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      width: '90%',
      height: '8%',
      borderWidth: 0,
      borderTopWidth: 0,
      paddingBottom: RF(10),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: RF(100),
      position: 'absolute',
      bottom: 15,
      left: 20,
      right: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    tabBarBtnMainContainer: {
      width: RF(25),
      height: RF(25),
    },
    scan: {
      alignItems: 'center',
      justifyContent: 'center',
      width: RF(50),
      height: RF(50),
    },
  });

export default MainTabs;
