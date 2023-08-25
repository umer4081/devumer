import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import HistoryCard from '../../Components/HistoryCard';
import HeaderProfile from './HeaderProfile';

const MyProfile = () => {
  const renderItem = ({item, index}: any) => {
    return <HistoryCard item={item} index={index} />;
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title="Hey Nicholas!" valueText="Manage your profile" />
        <View style={{flex: 1}}>
          {/* <FlatList
            data={Array(10)}
            ListHeaderComponent={HeaderProfile}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          /> */}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default MyProfile;
