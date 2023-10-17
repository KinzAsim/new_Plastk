import {View, StyleSheet} from 'react-native';
import React from 'react';
import {GST, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props {
  val?: any;
  rider?: any;
}

const InProgressBar = (props: Props) => {
  const myTheme: any = useTheme();

  return (
    <View style={{paddingVertical: RF(15)}}>
      <View style={{...GST.ROW}}>
        {[1, 2, 3, 4].map(item => {
          return (
            <View
              style={[
                styles.barView,

                {
                  backgroundColor: props.val.find((value: any) => value == item)
                    ? myTheme.colors.green
                    : myTheme.colors.text,
                },
              ]}></View>
          );
        })}
      </View>
    </View>
  );
};

export default React.memo(InProgressBar);

const styles = StyleSheet.create({
  barView: {
    width: '24%',
    height: RF(8),
    marginRight: RF(3),
    marginVertical: RF(15),
    borderRadius: 4,
  },
});
