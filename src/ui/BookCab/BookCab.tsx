import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitleBack from '../../Components/HeaderTitleBack';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import CabItem from './CabItem';
import BlueButton from '../../Components/BlueButton';
import PayTypeSelector from '../../Components/PayTypeSelector';

const BookCab = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const renderItem = ({item, index}: any) => {
    return (
      <CabItem
        index={index}
        item={item}
        selectedIndex={selectedIndex}
        onPress={() => setSelectedIndex(index)}
      />
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderTitleBack title={rideName} isBottomBorder={false} />
        <View style={{flex:1}}>
          <FlatList
            data={Array(6)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.bottomButtonView}>
          <PayTypeSelector />
          <BlueButton buttonTitle="Choose Ride" buttonStyle={styles.buttonStyle}/>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default BookCab;
