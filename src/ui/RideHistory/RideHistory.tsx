import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import HistoryCard from '../../Components/HistoryCard';
import {moderateScale} from '../../styles/responsiveSize';

const RideHistory = ({navigation}:any) => {
  const renderItem = ({item, index}: any) => {
    return <HistoryCard item={item} index={index} />;
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title="Ride History" valueText="Check your past rides" />
        <View style={{flex: 1}}>
          {/* <FlatList
            data={Array(10)}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            contentContainerStyle={{paddingTop: moderateScale(16)}}
          /> */}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default RideHistory;
