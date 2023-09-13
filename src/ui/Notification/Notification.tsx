import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import NotificationItem from './NotificationItem';

const Notification = () => {
  const renderItem = ({item, index}: any) => {
    return <NotificationItem item={item} index={index} />;
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title="Notifications" valueText="Stay up to date" />
        <View style={{flex: 1}}>
          {/* <FlatList
            data={Array(20)}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          /> */}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Notification;
