import React, {useState} from 'react';
import {View, Text, DatePickerIOS} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const TestingCalender = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const renderYearPicker = () => {
    const years = [];
    const currentYear = new Date().getFullYear();

    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      years.push(
        <Picker.Item key={year} label={year.toString()} value={year} />,
      );
    }

    return (
      <Picker
        style={{width: 100}}
        selectedValue={date.getFullYear()}
        onValueChange={year =>
          handleDateChange(new Date(year, date.getMonth(), date.getDate()))
        }>
        {years}
      </Picker>
    );
  };

  const renderMonthPicker = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return (
      <Picker
        style={{width: 100}}
        selectedValue={date.getMonth()}
        onValueChange={month =>
          handleDateChange(new Date(date.getFullYear(), month, date.getDate()))
        }>
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>
    );
  };
  const weekdays1 = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const renderWeekdays = () => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
      <View style={{flexDirection: 'row'}}>
        {weekdays.map(weekday => (
          <Text key={weekday} style={{flex: 1, textAlign: 'center'}}>
            {weekday}
          </Text>
        ))}
      </View>
    );
  };
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const generateMatrix = () => {
    var matrix = [];
    // Create header
    matrix[0] = weekdays1;

    var year = date.getFullYear();
    var month = date.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    var maxDays = nDays[month];
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }

    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  };
  var matrix = generateMatrix();

  var rows = [];
  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      return (
        <Text
          style={{
            flex: 1,
            height: 18,
            textAlign: 'center',
            // Highlight header
            backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
            // Highlight Sundays
            color: colIndex == 0 ? '#a00' : '#000',
            // Highlight current date
            fontWeight: item == date.getDate() ? 'bold' : '',
          }}
          // onPress={() => this._onPress(item)}
        >
          {item != -1 ? item : ''}
        </Text>
      );
    });

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {rowItems}
      </View>
    );
  });

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {renderYearPicker()}
        {renderMonthPicker()}
      </View>
      {/* {renderWeekdays()} */}
      {rows}
    </View>
  );
};

export default TestingCalender;
