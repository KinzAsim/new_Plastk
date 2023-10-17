import {Image, Platform, Pressable, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  Wrapper,
  CustomProgressBar,
  TextSection,
  CustomPhotoTypeList,
} from '@components';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {circleFillArrow} from '@assets';
import {RF} from '@theme';
import {navigate} from '@services';

const SelectPhotoType = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const [onClick, setOnClick] = useState<any>('Drivers License');

  const on_Click = async (type: any) => {
    setOnClick(type);
    setTimeout(async () => {
      if (type === 'Drivers License') {
        navigate('');
      }
    }, 100);
  };
  return (
    <Wrapper>
      <CustomProgressBar value={90} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection
        top={20}
        wd={RF(320)}
        title={'Select Photo ID Type'}
        content={'Please select an ID that has your \n  photo '}
      />
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.photoTypeView}>
          <CustomPhotoTypeList
            type={'Drivers License'}
            onClick={onClick}
            onPress={() => on_Click('Drivers License')}
          />
          <CustomPhotoTypeList
            type={'Health Card'}
            onClick={onClick}
            onPress={() => on_Click('Health Card')}
          />
          <CustomPhotoTypeList
            type={'Passport'}
            onClick={onClick}
            onPress={() => on_Click('Passport')}
          />
          <CustomPhotoTypeList
            type={'PR Card'}
            onClick={onClick}
            onPress={() => on_Click('PR Card')}
          />
          <CustomPhotoTypeList
            type={'Provincial ID'}
            onClick={onClick}
            onPress={() => on_Click('Provincial ID')}
          />
        </View>

        <View style={styles.bottomArrowView}>
          <Pressable onPress={() => navigate('ScanFrontCard')}>
            <Image source={circleFillArrow} style={styles.imgCircle} />
          </Pressable>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default SelectPhotoType;
