import React from 'react';
import {RF} from '@theme';
import AppText from '../../atoms/AppText';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {checkbox, circleFill, cirlceUnfill, unCheckbox} from '@assets';

interface Props {
  item?: any;
  title?: any;
  selected?: boolean;
  setSelected(arg1: string): void;
  showSocailAccounts?: Boolean | undefined;
}

const BottomSheetList = (props: Props) => {
  const {item, selected, setSelected, showSocailAccounts, title} = props;

  const handleSelected = (item: any) => {
    setSelected(item.id);
    selected;
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Pressable style={styles.main} onPress={() => handleSelected(item)}>
        {showSocailAccounts ? (
          <>
            <Image
              source={selected ? checkbox : unCheckbox}
              style={styles.image1}
            />
          </>
        ) : (
          <Image
            source={selected ? circleFill : cirlceUnfill}
            style={styles.image}
          />
        )}

        <AppText size={15} medium style={styles.textOption}>
          {props?.item?.name ? props?.item?.name : title}
        </AppText>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flexDirection: 'row', padding: 10},
  textOption: {paddingLeft: RF(20)},
  image: {width: 25, height: 25, resizeMode: 'contain'},
  image1: {width: 28, height: 28, resizeMode: 'contain'},
});

export default BottomSheetList;
