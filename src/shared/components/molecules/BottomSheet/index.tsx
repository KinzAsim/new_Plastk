import {
  AppText,
  CustomCalendar,
  BottomSheetList,
  BtmSheetLocationSearch,
} from '@components';
import {drag} from '@assets';
import {GST, RF} from '@theme';
import {data_account} from '@utils';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {GooglePlaceComplete} from '@components';
import {useTheme} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  StyleSheet,
  FlatList,
  Pressable,
  View,
  Image,
  Platform,
} from 'react-native';

interface Props {
  data?: any;
  title?: any;
  visible?: any;
  selectedDate?: any;
  setSelectedDate?: any;
  fingerPrintImage?: any;
  handleModel?: () => void;
  okPress?: any;
  onSelect?: any;
  fingerPrintHeading?: string;
  handleModal?: (i: any) => void;
  fingerPrintFirstContent?: string;
  fingerPrintSecondContent?: string;
  showCloseSign?: Boolean | undefined;
  showflatView?: Boolean | undefined;
  showCalender?: Boolean | undefined;
  showHomeAddress?: Boolean | undefined;
  showFingerPrint?: Boolean | undefined;
  showflatLocation?: Boolean | undefined;
  showOptionHeading?: Boolean | undefined;
  showFlatSocialAcconts?: Boolean | undefined;
  height?: any;
  info?: any;
  onselectVerifyMethod?: any;
  setYear?: any;
  onCancel?: any;
  onData?: any;
}
const BottomSheet = (props: Props) => {
  const {
    data,
    title,
    visible,
    onSelect,
    okPress,
    handleModel,
    selectedDate,
    handleModal,
    showflatView,
    showCalender,
    showCloseSign,
    showHomeAddress,
    setSelectedDate,
    showflatLocation,
    showOptionHeading,
    showFlatSocialAcconts,
    height,
    onCancel,
  } = props;

  const mytheme: any = useTheme();
  const styles = getStyles(mytheme.colors);
  const [selected, setSelected] = useState('');
  const [selectedAccount, setSelectedAcount] = useState<any>(data_account);

  const _handlePressRadioCircle = (item: any) => {
    onSelect(item?.name);
    setSelected(item?.id);
  };

  const _handlePressCheckbox = (item: any) => {
    const updatedData = [...selectedAccount];
    const selectedItem = updatedData.find(
      dataItem => dataItem?.id === item?.id,
    );
    if (selectedItem) {
      selectedItem.selected = !selectedItem.selected;

      const getSelectedNames = () => {
        const selectedItems = updatedData.filter(item => item.selected);
        return selectedItems.map(item => item.name).join(',');
      };
      const selectedNames = getSelectedNames();
      console.log(selectedNames);
      onSelect(selectedNames);
      setSelectedAcount(updatedData);
    }
  };
  const handleAddress = (data: any, details: any) => {
    onSelect(data?.description);
  };
  const closeModalAddress = () => {
    // onSelect();
  };

  return (
    <Modal
      style={{margin: 0}}
      isVisible={visible}
      backdropColor="white"
      useNativeDriver={true}
      animationOut={'fadeIn'}
      animationIn="slideInUp"
      animationInTiming={500}
      animationOutTiming={100}
      onBackdropPress={handleModel}>
      <Pressable
        onPress={handleModal}
        style={[
          styles.modal,
          // {paddingBottom: showCloseSign && Platform.OS === 'ios' ? 25 : 40},
        ]}>
        <Pressable
          style={[
            styles.modalContent,
            {maxHeight: height ? (Platform.OS === 'ios' ? 650 : 500) : 370},
          ]}>
          <Image source={drag} style={styles.dragImage} />
          {title && (
            <AppText
              size={18}
              semiBold
              style={{
                marginLeft: RF(11),
                marginBottom: RF(10),
              }}>
              {title}
            </AppText>
          )}

          {showOptionHeading && (
            <AppText
              size={18}
              bolder
              style={styles.heading}
              color={mytheme.colors.text}
              medium>
              {'Verification Options'}
            </AppText>
          )}
          {showflatView && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <>
                  <BottomSheetList
                    item={item}
                    showSocailAccounts={false}
                    selected={item?.id === selected}
                    setSelected={() => _handlePressRadioCircle(item)}
                  />
                </>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContent}
            />
          )}
          {showFlatSocialAcconts && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={selectedAccount}
              renderItem={({item}) => (
                <>
                  <BottomSheetList
                    item={item}
                    selected={item?.selected} // check flag true / false
                    setSelected={() => _handlePressCheckbox(item)}
                    showSocailAccounts={true}
                  />
                </>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContent}
            />
          )}
          {showflatLocation && (
            <>
              <BtmSheetLocationSearch closeModel={handleModel} />
            </>
          )}
          {showCalender && (
            <View style={styles.listContent}>
              <CustomCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                closeSheet={onCancel}
              />
            </View>
          )}
          {showHomeAddress && (
            <ScrollView style={styles.addressContent} keyboardShouldPersistTaps>
              <GooglePlaceComplete
                onChange={handleAddress}
                handleCloseModal={handleModal}
              />
            </ScrollView>
          )}
          {showCloseSign && (
            <View style={styles.closeView}>
              <AppText
                medium
                size={14}
                onPress={onCancel}
                style={styles.textCancel}
                color={mytheme?.colors?.border}>
                {'Cancel'}
              </AppText>
              <AppText
                medium
                size={14}
                onPress={okPress}
                color={mytheme.colors.border}>
                {'OK'}
              </AppText>
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: colors.white,
      borderTopLeftRadius: RF(30),
      borderTopRightRadius: RF(30),
      paddingHorizontal: 30,
      borderColor: '#ccc',
      borderWidth: 0.4,
      paddingBottom: RF(20),
    },
    listContent: {
      paddingVertical: RF(10),
    },
    addressContent: {
      height: 300,
    },
    closeView: {
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingHorizontal: RF(20),
      alignSelf: 'flex-end',
      // marginTop: Platform.OS === 'ios' ? -10 : 15,
      marginBottom: Platform.OS === 'ios' ? 20 : 15,
    },
    dragImage: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: Platform.OS === 'ios' ? RF(10) : 0,
    },
    heading: {
      paddingLeft: RF(10),
      paddingBottom: RF(10),
    },
    textCancel: {
      paddingRight: RF(30),
      opacity: 0.5,
    },
    fingerPrintImage: {
      resizeMode: 'contain',
      width: 75,
      height: 75,
    },
    paddingView: {
      paddingBottom: 30,
    },
  });
export default BottomSheet;
