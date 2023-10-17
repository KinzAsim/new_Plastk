import React from 'react';
import {Cursor, CodeField} from 'react-native-confirmation-code-field';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import {AppText} from '@components';
import {SCREEN_HEIGHT, SCREEN_WIDTH, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
interface Props extends TextInputProps {
  value?: any;
  setValue?: any;
  error?: any;
  cellStyle?: StyleProp<ViewStyle>;
  focusCell?: any;
}

const CustomCodeField = React.forwardRef((props: Partial<Props>, ref: any) => {
  const {value, setValue, error, cellStyle} = props;
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  return (
    <View>
      <CodeField
        {...props}
        ref={ref}
        value={value}
        cellCount={4}
        onChangeText={(val: any) => setValue(val)}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={styles.codeFieldRoot}
        renderCell={({index, symbol, isFocused}) => (
          <View key={index} style={[styles.cell, cellStyle]}>
            <AppText
              size={Typography.FONTS.SIZE.SMALL}
              color={myTheme.colors.border}>
              {symbol ||
                (isFocused ? (
                  <Cursor cursorSymbol="-" />
                ) : (
                  <Cursor cursorSymbol="-" />
                ))}
            </AppText>
          </View>
        )}
      />
      {!!error && (
        <AppText size={Typography.FONTS.SIZE.SMALL} style={styles.errorStyle}>
          {error}
        </AppText>
      )}
    </View>
  );
});

const getStyles = (colors: any) =>
  StyleSheet.create({
    errorStyle: {
      color: colors.toggleColor,
      paddingTop: RF(3),
      paddingLeft: RF(20),
    },
    codeFieldRoot: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {flex: 1},
    cell: {
      marginRight: RF(8),
      width: SCREEN_WIDTH / 6.4,
      height: SCREEN_HEIGHT / 13,
      borderRadius: RF(17),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.light_grey,
    },
    focusCell: {},
  });

export default CustomCodeField;
