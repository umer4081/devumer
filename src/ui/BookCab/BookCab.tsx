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
import {useIsFocused} from '@react-navigation/native';
import {saveLastRideStatus} from '../../utils/utils';
const BookCab = ({navigation, route}: any) => {
  const ride = route?.params?.rideType;
  const rideName = route?.params?.rideName;
  const routeisChoosed = route?.params?.isChoosed;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [data, setData] = useState<any[]>([]);
  const [isChoosed, setIsChoosed] = useState(!!routeisChoosed);
  const [isLoading, setIsLoading] = useState(false);
  const flatRef = useRef<FlatList>(null);
  const jobId = useRef<any>(null);
  const apiInterval = useRef<any>(-1);
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
    rideDetail?.pickup?.latitude && listCabNearBy();
  }, [rideDetail]);
  const focus = useIsFocused();
  useEffect(() => {
    !focus && clearInterval(apiInterval.current);
  }, [focus]);

  const listCabNearBy = () => {
    const query = `?lat=${rideDetail?.pickup?.latitude}&lng=${rideDetail?.pickup?.longitude}`;
    // const query = `?lat=${76.772461}&lng=${30.719705}`;
    actions
      .listCabsNear(query)
      .then((res: any) => {
        setData(res);
        console.log(
          res,
          'resresresresridelistCabsNearlistCabsNearDetailresresresresresresresres',
        );
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
    setIsLoading(true);
    actions
      .requestNewRide(apiData)
      .then((res: any) => {
        jobId.current = res?.id;
        console.log(res, 'apiDataaprequestNewRiderequestNewRideiDataapiData');
        setIsLoading(false);
        flatRef.current?.scrollToOffset({offset: 0, animated: false});
        setIsChoosed(true);
        const ridedata = {
          id: res?.id,
          isSearching: true,
          time: Date.now(),
          rideName,
          rideDetail,
        };
        saveLastRideStatus(ridedata);
        apiInterval.current = setInterval(() => {
          checkCabJobDetail();
        }, 2000);
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  const checkCabJobDetail = (finished = false) => {
    let query = `?id=${jobId.current}`;
    actions
      .jobDetail(query)
      .then((res: any) => {
        if (res?.status == 'ACCEPTED') {
          actions.bookedCab(res);
          navigation.navigate(navigationString.DRAWER_HOME);
        }
        finished && navigation.navigate(navigationString.DRAWER_HOME);
      })
      .catch(err => {});
  };

  const onPressCancel = () => {
    clearInterval(apiInterval.current);
    setIsChoosed(false);
  };

  const onfinishProgress = () => {
    checkCabJobDetail(true);
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
            keyboardShouldPersistTaps={'handled'}
            keyboardDismissMode="none"
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
