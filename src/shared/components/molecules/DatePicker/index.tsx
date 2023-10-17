import Moment from 'moment';
import {AppText} from '@components';
import React, {useState} from 'react';
import {light_grey, RF, txt_gray} from '@theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';

const DatePicker = ({
  style,
  placeholder,
  onChange,
  theme,
  defaultValue,
  dateVisible,
  date,
}: {
  placeholder?: any;
  theme?: any;
  style?: ViewStyle;
  onChange: (val: any) => any;
  defaultValue?: any;
  dateVisible?: any;
  date?: any;
}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [dateClr, setDateClr] = useState(true);
  if (
    defaultValue !== null &&
    defaultValue !== undefined &&
    defaultValue !== ''
  ) {
    let newDate = new Date(defaultValue);

    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());

    // setTimeout(() => {
    //   setDate(newDate);
    // }, 250);
  }
  const handleDateChange = (dateValue: any) => {
    setDateClr(false);
    hideDatePicker();
    onChange(dateValue);
  };
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  return (
    <View style={{...styles.container, ...style}}>
      <AppText bold size={12} color={txt_gray} style={[styles.placeholderText]}>
        {placeholder}
      </AppText>

      <TouchableOpacity
        onPress={dateVisible ? showDatePicker : null}
        style={styles.iconInputContainer}
        activeOpacity={1}>
        <AppText
          style={
            !dateClr
              ? [styles.text]
              : {
                  borderRadius: RF(50),
                  opacity: 0.5,
                  paddingLeft: RF(15),
                  fontWeight: '500',
                  fontFamily: 'Plus Jakarta Sans',
                  marginLeft: RF(7),
                  fontSize: RF(12),
                }
          }
          medium>
          {Moment(date).format('MMM DD, YYYY')}
        </AppText>
      </TouchableOpacity>

      <DateTimePickerModal
        mode="date"
        date={date ? new Date() : date}
        display="inline"
        maximumDate={new Date()}
        onCancel={hideDatePicker}
        onConfirm={handleDateChange}
        isVisible={isDatePickerVisible}
        pickerContainerStyleIOS={{backgroundColor: 'white'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: RF(20),
  },
  placeholderText: {
    marginLeft: RF(20),
  },
  iconInputContainer: {
    height: RF(40),
    marginTop: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: RF(50),
    backgroundColor: light_grey,
  },
  icon: {
    marginRight: RF(5),
  },
  text: {
    marginLeft: RF(20),
    fontSize: RF(12),
    opacity: 1,
  },
});

export default DatePicker;
