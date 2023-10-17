import {View} from 'react-native';
import {AppText} from '@components';
import React, {useState} from 'react';
import {RF, SCREEN_WIDTH} from '@theme';
import {LineChart} from 'react-native-gifted-charts';

const CustomCharts = () => {
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: 'red',
          borderWidth: 3,
          borderRadius: 7,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
  const lcomp = ({children}: any) => {
    return <AppText>{children}</AppText>;
  };
  const data = [
    {value: 600},
    {value: 600, hideDataPoint: true},
    {value: 700, hideDataPoint: true},
    {value: 700},
  ];
  const [currentData, setCurrentData] = useState(data);

  return (
    <View
      style={{
        marginLeft: RF(10),
      }}>
      <LineChart
        curved
        areaChart
        isAnimated
        color="#A0D800"
        data={currentData}
        maxValue={600}
        minValue={300}
        // hideOrigin
        noOfSections={2}
        yAxisOffset={300}
        yAxisTextStyle={{color: '#000'}}
        yAxisSide="right"
        yAxisColor="white"
        // stepHeight={30}
        dataPointColor={'red'}
        dataPointsWidth={2}
        animationDuration={4000}
        dataPointsColor="#A0D800"
        // hideDataPoints
        endOpacity={0.7}
        rulesType="solid"
        startOpacity={0.2}
        // initialSpacing={10}
        rulesColor="#D2D2D2"
        xAxisColor="#D2D2D2"
        endFillColor={'#42BAA240'}
        width={SCREEN_WIDTH / 1.35}
        startFillColor={'#A0D80040'}
        gradientDirection={'horizontal'}
        spacing={100}
        height={112}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: RF(20),
          justifyContent: 'space-between',
        }}>
        <AppText semiBold size={10}>
          July 2023
        </AppText>
        <AppText style={{marginRight: RF(50)}} semiBold size={10}>
          Today
        </AppText>
      </View>
    </View>
  );
};

export default CustomCharts;
