import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {AppText, CustomButton} from '@components';
import {Platform, StyleSheet, View} from 'react-native';
import {RF, Typography, primaryDarkColor, txt_gray} from '@theme';

const WeekMonthCharts = ({
  title,
  data,
  label,
  colorCode,
  selectedRewards,
  setSelectedRewards,
}: {
  data?: any;
  title?: any;
  label?: any;
  colorCode?: any;
  selectedRewards?: any;
  setSelectedRewards?: any;
}) => {
  //   const {colorCode} = useSelector((state: any) => state.root.user);
  const onHandleChange = (type: any) => {
    if (type === 'weekly') {
      setSelectedRewards('weekly');
    } else if (type === 'monthly') {
      setSelectedRewards('monthly');
    }
  };

  return (
    <View style={styles.mainView}>
      <AppText
        semiBold
        style={styles.txt}
        color={primaryDarkColor}
        size={Typography.FONTS.SIZE.XSMALL}>
        {title}
      </AppText>

      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          //labels: label,
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
            // {
            //   data: data,
            // },
          ],
        }}
        withShadow
        withDots={false}
        height={RF(230)}
        withHorizontalLines
        withVerticalLines={false}
        width={Platform.OS === 'ios' ? RF(300) : RF(300)}
        chartConfig={{
          strokeWidth: 2,
          backgroundGradientTo: 'white',
          backgroundGradientFrom: 'white',
          fillShadowGradientToOpacity: 0.01,
          fillShadowGradientFromOpacity: 0.1,
          color: (opacity = 1) =>
            title == 'Amount Spent'
              ? `rgba(137, 196, 244, ${opacity})`
              : `rgba(160,216,0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(74,85,104, ${opacity})`,
          style: {},
          propsForLabels: {
            fontFamily: 'Plus Jakarta Sans',
            fontSize: RF(10),
            fontWeight: '600',
          },
        }}
        bezier
        style={{
          marginLeft: 5,
        }}
      />

      <View style={styles.btnView}>
        <CustomButton
          width={RF(100)}
          text={'Weekly'}
          btnStyle={[styles.btnWeekly]}
          onPress={() => onHandleChange('weekly')}
          bgClr={selectedRewards === 'weekly' ? colorCode : 'white'}
          textStyle={{
            fontSize: RF(10),
            color: selectedRewards === 'weekly' ? 'white' : txt_gray,
          }}
        />
        <CustomButton
          width={RF(100)}
          text={'Monthly'}
          btnStyle={[styles.btnMonthly]}
          onPress={() => onHandleChange('monthly')}
          bgClr={selectedRewards === 'monthly' ? colorCode : 'white'}
          textStyle={{
            fontSize: RF(10),
            color: selectedRewards == 'monthly' ? 'white' : txt_gray,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {marginLeft: 20, marginBottom: 17, marginTop: 20},
  mainView: {
    width: '90%',
    borderWidth: 1,
    height: RF(370),
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: '#4A55681A',
    marginTop: RF(14),
    paddingBottom: 20,
  },
  clr: {color: primaryDarkColor},
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWeekly: {
    width: RF(100),
    height: RF(40),
    borderWidth: 1,
    borderColor: '#4A556880',
  },
  btnMonthly: {
    // backgroundColor: primaryDarkColor,
    width: RF(100),
    height: RF(40),
    marginLeft: RF(20),
    borderWidth: 1,
    borderColor: '#4A556880',
  },
});

export default WeekMonthCharts;
