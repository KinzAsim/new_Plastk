import React from 'react';
import {RF, Typography} from '@theme';
import {Text} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const PieCharts = () => {
  const data = [
    {
      key: 1,
      amount: 25,
      svg: {fill: '#A0D800'},
    },
    {
      key: 2,
      amount: 45,
      svg: {fill: '#6C1A45'},
    },
    {
      key: 3,
      amount: 10,
      svg: {fill: '#C197CE'},
    },
    {
      key: 4,
      amount: 10,
      svg: {fill: '#FEAD6E'},
    },
    {
      key: 5,
      amount: 10,
      svg: {fill: '#2D819F'},
    },
  ];

  const Labels = ({slices}: {slices?: any}) => {
    return slices.map((slice: any, index: any) => {
      const {pieCentroid, data} = slice;
      return (
        <Text
          key={index}
          fontSize={12}
          fill={'white'}
          stroke={'black'}
          strokeWidth={0.1}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}>
          {data.amount}%
        </Text>
      );
    });
  };
  const MiddleLabel = ({slices}: {slices?: any}) => {
    return slices.map((slice: any, index: any) => {
      return (
        <>
          <Text
            //key={index}
            dy={5}
            strokeWidth={0.2}
            stroke={'#4A5568'}
            textAnchor={'middle'}
            fontSize={Typography.FONTS.SIZE.MEDIUM}>
            November
          </Text>
          <Text
            dy={20}
            key={index}
            textAnchor={'middle'}
            // stroke={'#4A5568'}
            alignmentBaseline={'middle'}
            fontSize={Typography.FONTS.SIZE.XXXSMALL}>
            Updated Today
          </Text>
        </>
      );
    });
  };

  return (
    <PieChart
      data={data}
      spacing={0}
      outerRadius={'80%'}
      style={{height: RF(300)}}
      valueAccessor={({item}: any) => item.amount}>
      <Labels />
      <MiddleLabel />
    </PieChart>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});

export default PieCharts;
