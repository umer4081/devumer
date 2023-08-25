import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import HeaderScene from '../../Components/HeaderScene';
import OfferItem from './OfferItem';
import {moderateScale} from '../../styles/responsiveSize';

const Offers = () => {
  const renderItem = ({item, index}: any) => {
    return <OfferItem item={item} index={index} />;
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderScene title="Offers" valueText="Update with new offers" />

        {/* <FlatList
          data={Array(30)}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          numColumns={2}
          key={2}
          contentContainerStyle={{
            paddingHorizontal: moderateScale(24),
            paddingVertical: moderateScale(16),
          }}
        /> */}
      </View>
    </WrapperContainer>
  );
};

export default Offers;
