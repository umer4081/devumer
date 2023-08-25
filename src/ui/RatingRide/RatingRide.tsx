import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WrapperView from '../../Components/WrapperView';
import styles from './styles';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {static_url} from '../../constants/contant';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import {moderateScale, width} from '../../styles/responsiveSize';
const ratingColor = ['#FFDDDD', '#FCDBA1', '#FFF2D3', '#E7FFD3', '#D3FFFB'];

const RatingRide = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(5);

  const [state, setState] = useState({rating: 0});
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {rating} = state;
  const currentColor = ratingColor[rating];
  return (
    <WrapperView statusBarColor={currentColor} bodyColor={currentColor}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.rideText}>Ride Completed</Text>
            <Image source={{uri: static_url}} style={styles.profileImage} />
          </View>
          <Text style={styles.howwasrideText}>{'How was your\nride?'}</Text>
          <View style={styles.sliderView}>
            <View style={styles.sliderLine} />
            <Slider
              progress={progress}
              minimumValue={min}
              maximumValue={max}
              step={5}
              bubbleWidth={0}
              onValueChange={res => {
                progress.value = res;
                updateState({rating:res})
              }}
              renderMark={() => <></>}
              renderBubble={() => <></>}
              sliderHeight={2}
              theme={{
                minimumTrackTintColor: 'transparent',
                maximumTrackTintColor: 'transparent',
              }}
              renderThumb={() => {
                return (
                  <Image
                    source={imagePath.slider_ic}
                    style={{
                      backgroundColor: currentColor,
                      height: moderateScale(56),
                      width: moderateScale(56),
                    }}
                    resizeMode="contain"
                  />
                );
              }}
              style={{width: width - moderateScale(90)}}
            />
          </View>
        </View>
      </ScrollView>
    </WrapperView>
  );
};

export default RatingRide;
