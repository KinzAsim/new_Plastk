import {
  AppText,
  Wrapper,
  CustomProgressBar,
  CustomButton,
  FundBox,
} from '@components';
import {GST} from '@theme';
import {
  View,
  LogBox,
  FlatList,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useTheme} from '@react-navigation/native';
import {
  atb_bank,
  bmo_bank,
  cibc_bank,
  desjardian_bank,
  hsbc_bank,
  koho_bank,
  laurentian_bank,
  manulife_bank,
  national_bank,
  royal_bank,
  sctio_bank,
  servus_bank,
  simpli_bank,
  tangerine_bank,
  td_bank,
  vancity_bank,
} from '@assets';
import styles from './styles';
import {navigate} from '@services';

LogBox.ignoreLogs(['An unhandled error was caught']);

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
      type?: any;
    };
  }>;
}

const FundsRequested = ({route}: Props) => {
  const myTheme: any = useTheme();
  const [funds, setFunds] = useState<any>('');

  const submitHandler = () => {
    setFunds('partial');
    if (funds == 'partial') {
      navigate('FundsReceived');
    }
  };
  const [imageData, setImageData] = useState([
    {id: 1, url: royal_bank},
    {id: 2, url: td_bank},
    {id: 3, url: cibc_bank},
    {id: 4, url: sctio_bank},
    {id: 5, url: bmo_bank},
    {id: 6, url: tangerine_bank},
    {id: 7, url: atb_bank},
    {id: 8, url: hsbc_bank},
    {id: 9, url: national_bank},
    {id: 10, url: vancity_bank},
    {id: 11, url: desjardian_bank},
    {id: 12, url: manulife_bank},
    {id: 13, url: simpli_bank},
    {id: 14, url: koho_bank},
    {id: 15, url: laurentian_bank},
    {id: 16, url: servus_bank},
  ]);
  return (
    <Wrapper>
      <CustomProgressBar value={'40'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <AppText
        size={Platform.OS === 'ios' ? 28 : 32}
        semiBold
        color={myTheme?.colors?.text}
        style={[styles.textView]}>
        {'Funds Requested'}
      </AppText>

      <ScrollView>
        <View style={styles.contentMainView}>
          <View style={styles.contentView}>
            <AppText size={10} color={myTheme.colors.border} medium>
              {
                'Please send your Requested Credit Limit of $300 \n through Interac etransfer.'
              }
            </AppText>
            <AppText
              size={10}
              color={myTheme.colors.border}
              medium
              style={styles.content1}>
              *The e-transfer should be recognized as an auto- {'\n'} deposit
              for "Plastk Financial & Rewards Inc", however if a password is
              required for the e-transfer please make it{'\n'}
              <AppText size={10} bold style={styles.content2}>
                “plastk”
              </AppText>
            </AppText>
          </View>
        </View>
        <FundBox
          text={'matt123456_security@plastk.ca'}
          link
          img
          belowLineSign
        />
        <FundBox
          text={'Outstanding Funds'}
          content={'$200.00'}
          bgColor={myTheme.colors.text}
        />

        {funds == 'partial' && (
          <View style={styles.boxView}>
            <View style={styles.amountBox}>
              <View style={[GST.row_center, GST.mid_row]}>
                <View>
                  <AppText color={myTheme.colors.text} size={14} medium>
                    {'Partial Amount Paid'}
                  </AppText>
                  <AppText color={myTheme.colors.border} size={13} regular>
                    {'Dec. 4, 2022'}
                  </AppText>
                  <AppText
                    color={myTheme.colors.border}
                    size={13}
                    regular_italic>
                    {'Interac Ref #: '}

                    <AppText
                      color={myTheme.colors.border}
                      size={13}
                      regular_italic>
                      {'0022394421'}
                    </AppText>
                  </AppText>
                </View>
                <View>
                  <AppText color={myTheme.colors.light_blue} size={16} semiBold>
                    {'$100.00'}
                  </AppText>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={styles.flatView}>
          <FlatList
            data={imageData}
            numColumns={4}
            renderItem={({item}) => (
              <View style={styles.flatContainer}>
                <Image source={item.url} style={styles.image} />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.v_SE}>
          <CustomButton
            text={'Next'}
            bgClr={myTheme?.colors?.dim_gray}
            onPress={submitHandler}
            textStyle={{color: myTheme?.colors?.border}}
          />
          <View style={styles.view}>
            <AppText
              color={myTheme?.colors?.text}
              semiBold
              size={12}
              onPress={() => {
                navigate('Login');
              }}>
              Cancel
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default FundsRequested;
