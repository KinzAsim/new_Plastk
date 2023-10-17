import React from 'react';
import {arrowDown} from '@assets';
import {GST, RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import {AppText, ImageComponent} from '@components';
import {StyleSheet, View, StyleProp, ViewStyle, TextInput} from 'react-native';

const BorderBox = ({
  cashBox,
  senderBox,
  contactBox,
  receiverBox,
  containerStyle,
  contactReciverBox,
  type,
}: {
  type?: any;
  cashBox?: any;
  senderBox?: any;
  contactBox?: any;
  receiverBox?: any;
  contactReciverBox?: any;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  return (
    <View style={[styles.conatiner, containerStyle]}>
      <View style={styles.containerView}>
        {senderBox && (
          <>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                regular
                color={myTheme?.colors?.border}>
                From
              </AppText>
            </View>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                color={myTheme?.colors?.border}
                semiBold
                style={{width: RF(186)}}>
                Plastk Visa Credit Card
              </AppText>
              <View style={[GST.row_center]}>
                <AppText
                  medium
                  size={Typography.FONTS.SIZE.XXSMALL}
                  color={
                    type === 'added'
                      ? myTheme?.colors?.border
                      : myTheme?.colors?.ligh_green
                  }
                  style={{marginRight: RF(5)}}>
                  $500.00
                </AppText>
                <ImageComponent
                  source={arrowDown}
                  style={{width: RF(12), height: RF(12)}}
                />
              </View>
            </View>
            <AppText
              size={Typography.FONTS.SIZE.XXSMALL}
              color={myTheme?.colors?.border}
              regular>
              ************3456
            </AppText>
          </>
        )}
        {receiverBox && (
          <>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                regular
                color={myTheme?.colors?.border}>
                Send To:
              </AppText>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                regular
                color={myTheme?.colors?.border}>
                Enter Amount
              </AppText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                {contactReciverBox && (
                  <AppText
                    color={myTheme?.colors?.border}
                    size={Typography.FONTS.SIZE.SMALL}
                    bold
                    style={[GST.flexWidth]}>
                    Jakob Sawatsky
                  </AppText>
                )}

                <AppText
                  regular
                  color={myTheme?.colors?.blue}
                  size={Typography.FONTS.SIZE.XXSMALL}
                  style={[!contactReciverBox && GST.flexAlignSelf]}>
                  {contactReciverBox ? 'Change Contact' : 'Select Contact'}
                </AppText>
              </View>

              <TextInput
                style={styles.textInputView}
                placeholderTextColor={
                  contactReciverBox
                    ? myTheme?.colors?.border
                    : myTheme?.colors?.ligh_green
                }
                keyboardType="decimal-pad"
                placeholder="$1.00"
              />
            </View>
          </>
        )}
        {contactBox && (
          <>
            <View style={[GST.mid_row, GST.row_center]}>
              <AppText
                color={myTheme?.colors?.border}
                size={Typography.FONTS.SIZE.SMALL}
                bold
                style={{width: '45%'}}>
                Jakob Sawatsky
              </AppText>
              <View>
                <AppText
                  color={myTheme?.colors?.border}
                  size={Typography.FONTS.SIZE.XXXSMALL}
                  medium>
                  {'jakob@plastk.ca'}
                </AppText>
                <AppText
                  color={myTheme?.colors?.border}
                  size={Typography.FONTS.SIZE.XXXSMALL}
                  medium>
                  {'(904) - 822 -9862'}
                </AppText>
                <AppText right color={myTheme?.colors?.grey}>
                  {'Auto-Deposit'}
                </AppText>
              </View>
            </View>
          </>
        )}
      </View>
      {cashBox && (
        <>
          <View style={styles.alignHorizontalView}>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XXSMALL}
                regular
                color={myTheme?.colors?.border}>
                From
              </AppText>
            </View>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                color={myTheme?.colors?.border}
                semiBold
                style={{width: RF(186)}}>
                Plastk Visa Credit Card
              </AppText>
              <View style={[GST.row_center]}>
                <AppText
                  medium
                  size={Typography.FONTS.SIZE.XXXSMALL}
                  color={myTheme?.colors?.ligh_green}
                  style={{marginRight: RF(5)}}>
                  $500.00
                </AppText>
                <ImageComponent source={arrowDown} />
              </View>
            </View>
            <AppText
              size={Typography.FONTS.SIZE.XXSMALL}
              color={myTheme?.colors?.border}
              regular>
              ************
              <AppText
                size={Typography.FONTS.SIZE.XXSMALL}
                color={myTheme?.colors?.border}
                regular>
                3456
              </AppText>
            </AppText>
          </View>
          <AppText
            color={myTheme?.colors?.border}
            style={styles.lineView}
            center>
            {
              '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
            }
          </AppText>
          <View style={styles.alignHorizontalView}>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XXSMALL}
                regular
                color={myTheme?.colors?.border}>
                To
              </AppText>
            </View>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XSMALL}
                color={myTheme?.colors?.border}
                semiBold
                style={{width: RF(186)}}>
                Plastk Visa Credit Card
              </AppText>
              <View style={[GST.row_center]}>
                <ImageComponent source={arrowDown} />
              </View>
            </View>
            <AppText
              size={Typography.FONTS.SIZE.XXSMALL}
              color={myTheme?.colors?.border}
              regular>
              Jakob****@gmail.com
            </AppText>
          </View>
          <AppText
            color={myTheme?.colors?.border}
            style={styles.lineView}
            center>
            {
              '. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
            }
          </AppText>
          <View style={styles.alignHorizontalView}>
            <View style={[GST.mid_row]}>
              <AppText
                size={Typography.FONTS.SIZE.XXSMALL}
                regular
                color={myTheme?.colors?.border}>
                Amount
              </AppText>
              <AppText
                size={Typography.FONTS.SIZE.XXSMALL}
                medium
                color={myTheme?.colors?.ligh_green}>
                $500.00
              </AppText>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    conatiner: {
      width: '90%',
      // height: RF(110),
      borderRadius: RF(20),
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: colors?.light_grey,
      marginBottom: RF(16),
      paddingBottom: RF(20),
    },
    containerView: {
      paddingTop: RF(25),
      paddingHorizontal: RF(30),
    },
    alignHorizontalView: {
      paddingHorizontal: RF(30),
    },
    textInputView: {
      width: RF(100),
      height: RF(40),
      backgroundColor: colors?.dim_gray,
      borderRadius: RF(20),
      paddingLeft: RF(20),
      marginRight: RF(-10),
      marginTop: RF(5),
    },
    lineView: {
      paddingBottom: RF(15),
      paddingTop: RF(10),
      width: '100%',
    },
  });

export default BorderBox;
