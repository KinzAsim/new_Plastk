// import React, {useState} from 'react';
// import {StyleSheet} from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import {useTheme} from '@react-navigation/native';
// import {AppText} from '@components';

// const RnCalendar = () => {
//   const myTheme: any = useTheme();
//   const styles = getStyles(myTheme.colors);
//   const [selected, setSelected] = useState('');

//   return (
//     <Calendar
//       // hideArrows
//       // hideDayNames
//       // monthFormat="MMM"
//       // headerStyle={{backgroundColor: 'red'}}
//       onDayPress={day => {
//         setSelected(day.dateString);
//       }}
//       markedDates={{
//         [selected]: {
//           selected: true,
//           disableTouchEvent: true,
//         },
//       }}
//       theme={{
//         textSectionTitleColor: '#b6c1cd',
//         selectedDayBackgroundColor: myTheme.colors.text,
//         todayTextColor: '#00adf5',
//         dayTextColor: '#2d4150',
//       }}
//       style={{marginTop: -15, backgroundColor: '#fff'}}
//     />
//   );
// };

// export default RnCalendar;

// const getStyles = (colors: any) => StyleSheet.create({});
