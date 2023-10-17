import {
  AppText,
  Wrapper,
  PieCharts,
  TabWidget,
  HomeHeader,
  ImageTextCard,
  WeekMonthCharts,
  TransactionSection,
  StatementCard,
} from '@components';
import React, {useState} from 'react';
import {RF, primaryDarkColor} from '@theme';
import {c, d, disney, h_e, o, s, t} from '@assets';
import {data_statement, t_data, tabs} from '@utils';
import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';

const MySpend = ({navigation}: any) => {
  const [selected, setSelected] = useState<any>(true);
  const [selected_p, setSelected_p] = useState<any>(false);
  const [selectedRewards, setSelectedRewards] = useState('weekly');
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);
  const [open_t, setOpen_t] = useState(false);
  const [open_o, setOpen_o] = useState(false);
  const [open_c, setOpen_c] = useState(false);
  const [open_d, setOpen_d] = useState(false);
  const [open_h, setOpen_h] = useState(false);
  const [open, setOpen] = useState(-1);

  const onOpen = (item: any, index: any) => {
    setOpen(index);
  };

  return (
    <Wrapper>
      <HomeHeader title={'My Spend'} />
      <TabWidget
        tabs={tabs}
        tabSelectedIndex={tabSelectedIndex}
        setTabSelectedIndex={setTabSelectedIndex}
      />
      <ScrollView>
        {tabSelectedIndex === 0 ? (
          <>
            <PieCharts />
            <AppText
              size={16}
              semiBold
              style={{
                marginLeft: RF(20),
                marginTop: RF(10),
                marginBottom: RF(10),
              }}>
              Top Categories This Month
            </AppText>
            <ImageTextCard
              img={t}
              open={open_t}
              data={t_data}
              setOpen={setOpen_t}
              subTitle={'$450.00'}
              title={'Transportation'}
            />
            <ImageTextCard
              img={h_e}
              // open={open_h}
              // setOpen={setOpen_h}
              subTitle={'$450.00'}
              title={'Home / Entertainment'}
            />
            <ImageTextCard
              img={d}
              // open={open_d}
              // setOpen={setOpen_d}
              subTitle={'$450.00'}
              title={'Food / Drinks'}
            />
            <ImageTextCard
              img={o}
              title={'Other'}
              // open={open_o}
              // setOpen={setOpen_o}
              subTitle={'$450.00'}
            />
            <ImageTextCard
              img={c}
              // open={open_c}
              // setOpen={setOpen_c}
              subTitle={'$450.00'}
              title={'Remaining Credit'}
            />

            <AppText
              size={16}
              semiBold
              style={{
                marginLeft: RF(20),
                marginTop: RF(30),
                marginBottom: RF(10),
              }}>
              Recurring Payments
            </AppText>
            <ImageTextCard
              img={s}
              subTitle={'$450.00'}
              title={'Spotify Membership'}
            />
            <ImageTextCard
              img={disney}
              subTitle={'$450.00'}
              title={'Disney Plus Membership'}
            />
            <WeekMonthCharts
              colorCode={primaryDarkColor}
              selectedRewards={selectedRewards}
              setSelectedRewards={setSelectedRewards}
            />
          </>
        ) : tabSelectedIndex === 1 ? (
          <>
            <TransactionSection
              title={'Pending'}
              selected={selected}
              selected_p={selected_p}
              setSelected={setSelected}
              setSelected_p={setSelected_p}
            />

            <TransactionSection
              title={'Posted'}
              selected={selected}
              selected_p={selected_p}
              setSelected={setSelected}
              setSelected_p={setSelected_p}
            />
          </>
        ) : (
          <>
            <FlatList
              data={data_statement}
              renderItem={({item, index}: any) => {
                return (
                  <Pressable onPress={() => onOpen(item, index)} key={index}>
                    <StatementCard
                      data={item}
                      open={open}
                      index={index}
                      date={'October 12- November 12'}
                      title={'October 12- November 12'}
                    />
                  </Pressable>
                );
              }}
            />
          </>
        )}
        <View style={{marginBottom: RF(100)}} />
      </ScrollView>
    </Wrapper>
  );
};

export default MySpend;

const styles = StyleSheet.create({});
