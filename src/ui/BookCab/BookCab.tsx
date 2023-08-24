import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTitleBack from '../../Components/HeaderTitleBack';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import CabItem from './CabItem';
import BlueButton from '../../Components/BlueButton';
import PayTypeSelector from '../../Components/PayTypeSelector';
import HeaderMapView from './HeaderMapView';
import RideRequest from './RideRequest';

const BookCab = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isChoosed, setIsChoosed] = useState(false);

  const renderItem = ({item, index}: any) => {
    return !isChoosed ? (
      <CabItem
        index={index}
        item={item}
        selectedIndex={selectedIndex}
        onPress={() => setSelectedIndex(index)}
      />
    ) : (
      <></>
    );
  };

  const ListHeaderComponent = () => {
    return <HeaderMapView isChoosed={isChoosed}/>;
  };

  const onChooseRide=()=>{

  }

  return (
    <WrapperContainer removeBottomInset>
      <View style={styles.container}>
        <HeaderTitleBack title={rideName} isBottomBorder={isChoosed} />
        <View style={{flex: 1}}>
          <FlatList
            data={Array(6)}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.bottomButtonView}>
          <PayTypeSelector />
          <BlueButton
            disabled={selectedIndex < 0}
            buttonTitle="Choose Ride"
            buttonStyle={styles.buttonStyle}
            onPress={onChooseRide}
          />
        </View>
        <RideRequest />
      </View>
    </WrapperContainer>
  );
};

export default BookCab;
