import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import HeaderTitleBack from '../../Components/HeaderTitleBack';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import CabItem from './CabItem';
import BlueButton from '../../Components/BlueButton';
import PayTypeSelector from '../../Components/PayTypeSelector';
import HeaderMapView from './HeaderMapView';
import RideRequest from './RideRequest';
import navigationString from '../../constants/navigationString';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';

const BookCab = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isChoosed, setIsChoosed] = useState(false);
  const flatRef = useRef<FlatList>(null);
  const rideDetail = useSelector((state: any) => state?.rideDetail);
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

  const ListHeaderComponent = useCallback(() => {
    return <HeaderMapView isChoosed={isChoosed} />;
  }, [isChoosed]);

  const onChooseRide = () => {
    flatRef.current?.scrollToOffset({offset: 0, animated: false});
    setIsChoosed(true);
    // navigation.navigate(navigationString.RATING_RIDE);
  };

  const onPressCancel = () => {
    setIsChoosed(false);
  };

  const onfinishProgress = () => {
    actions.bookedCab(true);
    navigation.navigate(navigationString.DRAWER_HOME);
  };

  return (
    <WrapperContainer removeBottomInset>
      <View style={styles.container}>
        <HeaderTitleBack title={rideName} isBottomBorder={isChoosed} />
        <View style={{flex: 1}}>
          <FlatList
            ref={flatRef}
            data={Array(6)}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
            scrollEnabled={!isChoosed}
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
        {isChoosed && (
          <RideRequest
            onPressCancel={onPressCancel}
            onfinishProgress={onfinishProgress}
          />
        )}
      </View>
    </WrapperContainer>
  );
};

export default BookCab;
