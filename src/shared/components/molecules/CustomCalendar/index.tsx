import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {RF, SCREEN_WIDTH} from '@theme';
import React, {useEffect, useState} from 'react';
import {down, left, right, next_modal} from '@assets';
import {useTheme} from '@react-navigation/native';
import {months} from '@utils';
import {AppText} from '@components';

const CustomCalendar = ({
  selectedDate,
  setSelectedDate,
  closeSheet,
}: {
  setSelectedDate?: any;
  selectedDate?: any;
  closeSheet?: any;
}) => {
  const theme: any = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showYearModal, setshowYearModal] = useState(false);
  const [showMonthModal, setshowMonthModal] = useState(false);
  const [showCalendar, setshowCalendar] = useState(true);
  const [selectedYear, setSelectedYear] = useState<any>();
  const [date_Selected, setDate_Selected] = useState<any>();
  const [selectedMonth, setSelectedMonth] = useState<any>({});
  const [showError, setShowError] = useState<any>(false);

  const getAllYears = () => {
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };
  const allYears = getAllYears().reverse();

  const renderGridItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.gridItem,
          {
            backgroundColor:
              selectedYear === item ? theme?.colors?.primary : '#fff',
          },
        ]}
        onPress={() => handleSelectYear(item)}>
        <Text
          style={{
            fontSize: RF(13),
            color: selectedYear === item ? '#fff' : '#19383A40',
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderMonthItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.MonthItem,
          {
            backgroundColor:
              selectedMonth.title === item.title
                ? theme?.colors?.primary
                : '#fff',
          },
        ]}
        onPress={() => handleSelectMonth(item, index)}>
        <Text
          style={{
            fontSize: RF(14),
            color: selectedMonth.title === item.title ? '#fff' : '#19383A40',
          }}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const handleSelectMonth = (month: any, index: any) => {
    setSelectedMonth(month);
    // setshowCalendar(true);
  };
  const handleYearModal = async () => {
    if (showYearModal) {
      setshowYearModal(false);
      setshowCalendar(true);
    } else {
      await setshowMonthModal(false);
      setshowCalendar(false);
      setshowYearModal(true);
    }
  };
  const handleMonthModal = async () => {
    if (showMonthModal) {
      setshowMonthModal(false);
      setshowCalendar(true);
    } else {
      await setshowYearModal(false);
      setshowCalendar(false);
      setshowMonthModal(true);
    }
  };
  const handleSelectYear = (year: any) => {
    setSelectedYear(year);
  };
  const getDaysInMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };
  const onPrevPress = (i: any) => {
    // setDate_Selected(i);
  };
  const onNextPress = (i: any) => {
    // setDate_Selected(i);
  };
  const onCurrentPress = (i: any) => {
    setDate_Selected(i);
  };
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const prevMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
    const nextMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );

    const prevDaysCount = firstDayOfMonth;
    const nextDaysCount = 42 - (prevDaysCount + daysInMonth);

    const days = [];

    // Render days from the previous month
    for (let i = prevMonthDays - prevDaysCount + 1; i <= prevMonthDays; i++) {
      days.push(
        <Pressable
          key={`prev_${i}`}
          style={[styles.dayCell]}
          onPress={() => onPrevPress(i)}>
          <Text style={[styles.prevMonthDayText]}>{i}</Text>
        </Pressable>,
      );
    }

    // Render days from the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(i);

      days.push(
        <Pressable
          key={`curr_${i}`}
          style={[
            styles.dayCell,
            {
              backgroundColor:
                i === date_Selected ? theme?.colors?.primary : '#fff',
            },
          ]}
          onPress={() => onCurrentPress(i)}>
          <Text
            style={[
              styles.currentMonthDayText,
              {
                color: i === date_Selected ? '#fff' : theme?.colors?.primary,
              },
            ]}>
            {i}
          </Text>
        </Pressable>,
      );
    }

    // Render days from the next month
    for (let i = 1; i <= nextDaysCount; i++) {
      days.push(
        <Pressable
          key={`next_${i}`}
          style={[styles.dayCell]}
          onPress={() => onNextPress(i)}>
          <Text style={[styles.nextMonthDayText]}>{i}</Text>
        </Pressable>,
      );
    }

    return days;
  };
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };
  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };
  const goToPreviousYear = () => {
    const previousYear = new Date(
      currentDate.getFullYear() - 1,
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    setCurrentDate(previousYear);
  };
  const goToNextYear = () => {
    const nextYear = new Date(
      currentDate.getFullYear() + 1,
      currentDate.getMonth(),
      currentDate.getDate(),
    );

    setCurrentDate(nextYear);
  };
  const okPress = () => {
    if (showYearModal) {
      const selected_Year = new Date(
        selectedYear,
        currentDate.getMonth(),
        currentDate.getDate(),
      );
      setCurrentDate(selected_Year);
      setshowYearModal(false);
      setshowCalendar(true);
    } else if (showMonthModal) {
      const temp = new Date(
        currentDate.getFullYear(),
        selectedMonth.val,
        currentDate.getDate(),
      );
      setCurrentDate(temp);
      setshowMonthModal(false);
      setshowCalendar(true);
    } else {
      const newDate = new Date(currentDate);
      newDate.setDate(date_Selected);
      setSelectedDate(newDate);
      if (date_Selected !== undefined) {
        closeSheet();
      } else {
        setShowError(true);
      }
    }
  };
  const cancelPress = () => {
    if (showYearModal) {
      setshowYearModal(false);
      setshowCalendar(true);
    } else if (showMonthModal) {
      setshowMonthModal(false);
      setshowCalendar(true);
    } else {
      if (date_Selected == undefined || date_Selected !== '') {
        closeSheet();
        const newDate = new Date(currentDate);
        setSelectedDate(newDate);
      }
    }
  };
  useEffect(() => {
    if (date_Selected) {
      setShowError('');
    }
  }, [date_Selected]);

  return (
    <ScrollView
      contentContainerStyle={[{flexGrow: 1}, styles.container]}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        {/* moth */}
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={goToPreviousMonth} style={styles.button}>
            <Image source={left} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.view} onPress={handleMonthModal}>
            <Text style={styles.headerTxt}>
              {currentDate.toLocaleString('default', {
                month: 'short',
              })}
            </Text>
            <Image
              source={showMonthModal ? down : next_modal}
              style={showMonthModal ? styles.dropDown : styles.dropImg}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={goToNextMonth} style={styles.button}>
            <Image source={right} style={styles.img} />
          </TouchableOpacity>
        </View>
        {/* // Year */}
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={goToPreviousYear} style={styles.button}>
            <Image source={left} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.view, {marginRight: 10}]}
            onPress={handleYearModal}>
            <Text style={styles.headerTxt}>
              {currentDate.toLocaleString('default', {
                year: 'numeric',
              })}
            </Text>
            <Image
              source={showYearModal ? down : next_modal}
              style={showYearModal ? styles.dropDown : styles.dropImg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextYear} style={styles.button}>
            <Image source={right} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>

      <>
        {showCalendar ? (
          <>
            <View style={styles.weekdaysContainer}>
              <Text style={styles.weekdayText}>S</Text>
              <Text style={styles.weekdayText}>M</Text>
              <Text style={styles.weekdayText}>T</Text>
              <Text style={styles.weekdayText}>W</Text>
              <Text style={styles.weekdayText}>T</Text>
              <Text style={styles.weekdayText}>F</Text>
              <Text style={styles.weekdayText}>S</Text>
            </View>

            <View style={styles.calendar}>{renderCalendar()}</View>
          </>
        ) : showYearModal ? (
          <View style={styles.gridContainer_Y}>
            <FlatList
              numColumns={4}
              showsVerticalScrollIndicator={false}
              data={allYears}
              renderItem={renderGridItem}
              keyExtractor={item => item.toString()}
            />
          </View>
        ) : showMonthModal ? (
          <View style={styles.gridContainer_M}>
            <FlatList
              data={months}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={renderMonthItem}
              keyExtractor={index => index.toString()}
            />
          </View>
        ) : null}
        {showError && (
          <AppText size={11} style={{marginLeft: RF(20)}} color={'red'}>
            {'Please Select a date'}
          </AppText>
        )}
        <View style={styles.closeView}>
          <AppText
            medium
            size={14}
            onPress={cancelPress}
            style={styles.textCancel}
            color={theme?.colors?.border}>
            {'Cancel'}
          </AppText>
          <AppText
            medium
            size={14}
            onPress={okPress}
            color={theme.colors.border}>
            {'OK'}
          </AppText>
        </View>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  closeView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 10 : 15,
    marginBottom: Platform.OS === 'ios' ? 20 : 15,
    paddingHorizontal: RF(10),
  },
  textCancel: {
    paddingRight: RF(30),
    opacity: 0.5,
  },
  MonthItem: {
    marginTop: 10,
    height: RF(30),
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RF(-2),
    borderRadius: 8,
    marginHorizontal: RF(22),
  },
  gridContainer_Y: {
    justifyContent: 'space-between',
    height: RF(250),
  },
  gridContainer_M: {
    justifyContent: 'space-between',
    height: RF(250),
    padding: 0,
    width: '115%',
  },

  gridItem: {
    width: Dimensions.get('window').width / 4 - 20,
    padding: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RF(8),
    marginBottom: RF(10),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: RF(70),
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RF(20),
    width: '100%',
  },
  subHeader: {
    flexDirection: 'row',
  },
  headerTxt: {
    marginLeft: RF(10),
    fontSize: RF(16),
    color: '#000',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  weekdaysContainer: {
    marginBottom: RF(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  weekdayText: {
    color: '#19383A',
    fontSize: RF(15.5),
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans',
    width: '14%',
    textAlign: 'center',
  },
  dayCell: {
    height: Platform.OS === 'ios' ? RF(35) : RF(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RF(100),
    width: '14%',
  },
  currentMonthDayText: {
    textAlign: 'center',
    fontSize: RF(14.5),
    fontFamily: 'Plus Jakarta Sans',
  },
  prevMonthDayText: {
    fontSize: RF(14.5),
    color: '#999',
    fontFamily: 'Plus Jakarta Sans',
  },
  nextMonthDayText: {
    fontSize: RF(14.5),
    color: '#999',
    fontFamily: 'Plus Jakarta Sans',
  },
  img: {width: RF(12), height: RF(12), resizeMode: 'contain'},
  dropImg: {width: RF(20), height: RF(20), resizeMode: 'contain'},
  dropDown: {
    width: RF(10),
    height: RF(10),
    resizeMode: 'contain',
  },
  button: {
    padding: RF(10),
  },
});

export default CustomCalendar;
