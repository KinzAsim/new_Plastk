import {charts, points} from '@assets';
import {RF, Typography} from '@theme';
import React, {useState} from 'react';
import Curve from '../../molecules/Curve';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {AppText, CircularGraph, CustomProgressBar} from '@components';

const CurveHeader = ({
  title,
  main_Color,
  setMain_Color,
  loadingGraph,
}: {
  title?: any;
  main_Color?: any;
  loadingGraph?: any;
  setMain_Color?: any;
}) => {
  const theme: any = useTheme();
  const [middle, setMiddle] = useState(false);
  const [top_color, setTop_Color] = useState('#000');
  const [middle_Color, setMiddle_Color] = useState('#FE3340');
  const [bottom_Color, setBottom_Color] = useState('#19383A');
  const [showMiniGraphs, setShowMiniGraphs] = useState(false);

  const onClickBottom = async () => {
    if (bottom_Color === '#19383A') {
      setShowMiniGraphs(false);

      setTop_Color('#19383A');
      setMain_Color('#19383A');
      setMiddle_Color('#000');
      setBottom_Color('#FE3340');
    } else if (bottom_Color === '#FE3340') {
      setTop_Color('#fff');
      setMain_Color('#fff');
      setMiddle_Color('#19383A');
      setBottom_Color('#000');
    } else if (bottom_Color === '#000') {
      setShowMiniGraphs(false);

      setTop_Color('#000');
      setMain_Color('#000');
      setMiddle_Color('#FE3340');
      setBottom_Color('#19383A');
    }
  };

  const onClickTop = () => {};

  const onClickMiddle = async () => {
    setMiddle(!middle);
    if (middle_Color === '#FE3340') {
      setTop_Color('#fff');
      setMain_Color('#fff');
      setMiddle_Color('#19383A');
      setBottom_Color('#000');
    } else if (middle_Color === '#19383A') {
      setShowMiniGraphs(false);

      setTop_Color('#19383A');
      setMain_Color('#19383A');
      setMiddle_Color('#000');
      setBottom_Color('#FE3340');
    } else if (middle_Color === '#000') {
      setShowMiniGraphs(false);
      setTop_Color('#000');
      setMain_Color('#000');
      setMiddle_Color('#FE3340');
      setBottom_Color('#19383A');
    }
  };

  const onOpenGraph = () => {
    setShowMiniGraphs(!showMiniGraphs);
  };

  return (
    <View style={{flex: 1, zIndex: 2}}>
      {/* <MainHeader
        // navigation={navigation}
        title={
          main_Color === '#000'
            ? 'Good Afternoon, Matt!'
            : main_Color === '#fff'
            ? 'Card Health'
            : 'Rewards Points'
        }
        bgClr={main_Color}
        text_Clr={
          main_Color === '#000' || main_Color === '#19383A' ? '#fff' : '#000'
        }
        img1={main_Color === '#fff' && true}
      /> */}

      <Curve
        bgClr={bottom_Color}
        height={main_Color === '#fff' ? 340 : 350}
        onPress={onClickBottom}>
        {(middle_Color === '#19383A' && bottom_Color !== '#000') ||
        middle_Color === '#000' ? (
          <Middle_Section health={10} />
        ) : bottom_Color === '#000' ? (
          <My_Spend_Section dollars={'750.00'} />
        ) : (
          <Bottom_Section _points={'1,870'} />
        )}
        <Curve
          bgClr={middle_Color}
          height={main_Color === '#fff' ? 280 : 290}
          onPress={onClickMiddle}>
          {middle_Color == '#FE3340' ? (
            <Middle_Section health={10} />
          ) : middle_Color === '#000' ? (
            <My_Spend_Section dollars={'750.00'} />
          ) : (
            <Bottom_Section _points={'1,870'} />
          )}
          <Curve
            bgClr={top_color}
            height={main_Color === '#fff' ? 220 : 230}
            onPress={onClickTop}>
            <Top_Section
              theme={theme}
              used={'$250.00'}
              limit={'$1000.00'}
              bgClr={main_Color}
              credit={'$750.00'}
              _points={'5,000'}
              dollars={'20,00'}
              loadingGraph={loadingGraph}
              onOpenGraph={onOpenGraph}
              showMiniGraphs={showMiniGraphs}
            />
          </Curve>
        </Curve>
      </Curve>
    </View>
  );
};

const Top_Section = ({
  credit,
  used,
  limit,
  bgClr,
  theme,
  _points,
  dollars,
  onOpenGraph,
  loadingGraph,
  showMiniGraphs,
}: {
  credit?: any;
  used?: any;
  limit?: any;
  bgClr?: any;
  theme?: any;
  dollars?: any;
  _points?: any;
  loadingGraph?: any;
  onOpenGraph?: any;
  showMiniGraphs?: any;
}) => {
  return (
    <View style={[styles.top, {backgroundColor: bgClr}]}>
      {bgClr === '#fff' && !showMiniGraphs ? (
        <Pressable style={styles.graphView} onPress={onOpenGraph}>
          <CircularGraph
            clrText
            radius={65}
            progress={24}
            type={'good'}
            size={Typography.FONTS.SIZE.XLARGE}
            loadingGraph={loadingGraph}
          />

          <AppText style={styles.txt} center size={12} medium>
            Make A Payment Now To Improve Card Health
          </AppText>
          <AppText size={12} medium>
            Increase Of 2% This Week
          </AppText>
        </Pressable>
      ) : bgClr === '#19383A' && !showMiniGraphs ? (
        <View style={styles.graphView}>
          <View style={styles.img_V}>
            <Image source={points} style={styles.p_img} />
            <AppText center size={32} medium color={'white'}>
              {_points}
            </AppText>
          </View>
          <AppText regular size={14} color={'white'}>
            ${dollars}
          </AppText>

          <Pressable style={styles._box}>
            <AppText color={'#fff'}>Spend & Earn</AppText>
          </Pressable>
        </View>
      ) : showMiniGraphs ? (
        <Pressable style={styles.graphView} onPress={onOpenGraph}>
          <Image
            source={charts}
            style={{
              width: RF(200),
              height: RF(130),
              resizeMode: 'contain',
            }}
          />
          {/* <View style={styles.g_View}>
            <CircularGraph
              size={10}
              radius={30}
              progress={30}
              title={'Good'}
              type={'good'}
              clr={theme?.colors?.app_green}
            />
            <CircularGraph
              progress={40}
              radius={30}
              size={10}
              title={'Moderate'}
              type={'moderate'}
              clr={theme?.colors?.yellow}
            />
          </View>
          <View style={[styles.g_View, {paddingTop: -30}]}>
            <CircularGraph
              size={10}
              radius={30}
              progress={55}
              title={'Caution'}
              type={'caution'}
              clr={theme?.colors?.orange}
            />
            <CircularGraph
              progress={90}
              radius={30}
              size={10}
              title={'Risk'}
              type={'risk'}
              clr={theme?.colors?.pink}
            />
          </View> */}
          <AppText style={styles.txt} center size={12} medium>
            Lower Credit Utilization
          </AppText>
          <AppText size={12} medium>
            Means Better Card Health
          </AppText>
        </Pressable>
      ) : (
        <>
          <AppText color={bgClr == '#000' ? '#fff' : '#000'} size={12}>
            Available Credit
          </AppText>

          <AppText
            size={Typography.FONTS.SIZE.XXXLARGE}
            color={bgClr == '#000' ? '#fff' : '#000'}
            style={styles.c}>
            {credit}
          </AppText>

          <View style={styles.used}>
            <AppText color={bgClr == '#000' ? '#fff' : '#000'} size={10}>
              Used
            </AppText>
            <AppText color={bgClr == '#000' ? '#fff' : '#000'} size={10}>
              Limit
            </AppText>
          </View>

          <CustomProgressBar
            value={'20'}
            customstyle={styles.bar}
            clr={['#BBF613', '#BBF613', '#BBF613']}
          />

          <View style={styles.used}>
            <AppText color={bgClr == '#000' ? '#fff' : '#000'} size={10}>
              {used}
            </AppText>
            <AppText color={bgClr == '#000' ? '#fff' : '#000'} size={10}>
              {limit}
            </AppText>
          </View>

          <Pressable style={styles.box}>
            <AppText color={bgClr == '#000' ? '#fff' : '#000'}>
              My Spend
            </AppText>
          </Pressable>
        </>
      )}
    </View>
  );
};

const My_Spend_Section = ({dollars}: {dollars?: any}) => {
  return (
    <View style={styles.bottom}>
      <AppText size={15} center color={'#fff'}>
        My Spend
      </AppText>
      <View style={styles.imgView}>
        <AppText size={13} center color={'#fff'}>
          ${dollars} Available
        </AppText>
      </View>
    </View>
  );
};

const Middle_Section = ({health}: {health?: any}) => {
  return (
    <View style={styles.middle}>
      <AppText size={15} center color={'#fff'}>
        Card Health {health}%
      </AppText>
    </View>
  );
};

const Bottom_Section = ({_points}: {_points?: any}) => {
  return (
    <View style={styles.bottom}>
      <AppText size={15} center color={'#fff'}>
        Rewards Points
      </AppText>
      <View style={styles.imgView}>
        <Image source={points} style={styles.img} />
        <AppText size={13} center color={'#fff'}>
          {_points}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img_V: {
    flexDirection: 'row',
    marginTop: RF(30),
    marginBottom: RF(10),
  },
  p_img: {
    width: RF(32),
    height: RF(30),
    resizeMode: 'contain',
    marginTop: RF(9),
  },
  g_View: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  graphView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: -10,
  },
  txt: {width: '100%', marginTop: RF(20), marginBottom: RF(5)},
  img: {width: RF(20), height: RF(15), resizeMode: 'contain'},
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: -4,
  },
  middle: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
    transform: [{scaleX: 0.6}, {rotate: '360deg'}],
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    width: '100%',
    transform: [{scaleX: 0.6}, {rotate: '360deg'}],
  },
  c: {marginVertical: RF(10)},
  _box: {
    width: RF(120),
    height: RF(45),
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: RF(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(60),
  },
  box: {
    width: RF(120),
    height: RF(40),
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: RF(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(25),
  },
  bar: {
    height: RF(4),
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: RF(20),
    marginHorizontal: RF(20),
    width: '56%',
    alignSelf: 'center',
    marginVertical: RF(4),
  },
  used: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '56%',
  },
  top: {
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: RF(150),
    transform: [{scaleX: 0.6}, {rotate: '360deg'}],
  },
});

export default CurveHeader;
