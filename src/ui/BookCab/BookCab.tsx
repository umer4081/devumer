import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import moment from 'moment-timezone';
const BookCab = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [data, setData] = useState<any[]>([]);
  const [isChoosed, setIsChoosed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const flatRef = useRef<FlatList>(null);
  const rideDetail = useSelector((state: any) => state?.rideDetail)?.data;
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

  useEffect(() => {
    listCabNearBy();
  }, []);

  const listCabNearBy = () => {
    const query = `?lat=${rideDetail?.pickup?.latitude}&lng=${rideDetail?.pickup?.longitude}`;
    // const query = `?lat=${76.772461}&lng=${30.719705}`;
    actions
      .listCabsNear(query)
      .then((res: any) => {
        setData(res);
        console.log(res, 'resresresresrideDetailresresresresresresresres');
      })
      .catch(err => {});
  };

  const ListHeaderComponent = useCallback(() => {
    return <HeaderMapView isChoosed={isChoosed} />;
  }, [isChoosed]);

  const onChooseRide = () => {
    const apiData = {
      time_zone: moment.tz.guess(),
      team_id: data[selectedIndex]?.id,
      time_offset: String(moment().utcOffset()),
      pickup: [
        {
          latitude: rideDetail?.pickup?.latitude,
          longitude: rideDetail?.pickup?.longitude,
          time_stamp: Date.now(),
          address: rideDetail?.pickup?.address,
        },
      ],
      delivery: [
        {
          latitude: rideDetail?.destination?.latitude,
          longitude: rideDetail?.destination?.longitude,
          time_stamp: Date.now(),
          address: rideDetail?.destination?.address,
        },
      ],
    };
    setIsLoading(true)
    actions
      .requestNewRide(apiData)
      .then((res: any) => {
        setIsLoading(false)
        flatRef.current?.scrollToOffset({offset: 0, animated: false});
        setIsChoosed(true);
      })
      .catch(err => {
        setIsLoading(false)
      });
  };

  const onPressCancel = () => {
    setIsChoosed(false);
  };

  const onfinishProgress = () => {
    actions.bookedCab(true);
    navigation.navigate(navigationString.DRAWER_HOME);
  };

  return (
    <WrapperContainer isLoading={isLoading} removeBottomInset>
      <View style={styles.container}>
        <HeaderTitleBack title={rideName} isBottomBorder={isChoosed} />
        <View style={{flex: 1}}>
          <FlatList
            ref={flatRef}
            data={data}
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
            // onfinishProgress={onfinishProgress}
          />
        )}
      </View>
    </WrapperContainer>
  );
};

export default BookCab;
