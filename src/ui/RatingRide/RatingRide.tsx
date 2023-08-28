import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import WrapperView from '../../Components/WrapperView';
import styles from './styles';
import {static_url} from '../../constants/contant';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import StepSlider from '../../Components/StepSlider';
import BlueButton from '../../Components/BlueButton';
import KeyboardAvoidingViewSet from '../../Components/KeyboardAvoidingViewSet';
const ratingColor = ['#FFDDDD', '#FCDBA1', '#FFF2D3', '#E7FFD3', '#D3FFFB'];
const ratingText = ['Bad', 'Okay', 'Good', 'Great', 'Excellent'];
const ratingEmoji = [
  imagePath.bad_ic,
  imagePath.okay_ic,
  imagePath.good_ic,
  imagePath.great_ic,
  imagePath.excellent_ic,
];

const RatingRide = () => {
  const [state, setState] = useState({rating: 0});
  const updateState = (data: any) => setState(prev => ({...prev, ...data}));
  const {rating} = state;
  const currentColor = ratingColor[rating];
  return (
    <WrapperView
      removeBottomInset
      statusBarColor={currentColor}
      bodyColor={currentColor}>
      <KeyboardAvoidingViewSet>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.rideText}>Ride Completed</Text>
              <Image source={{uri: static_url}} style={styles.profileImage} />
            </View>
            <Text style={styles.howwasrideText}>{'How was your\nride?'}</Text>
            <Text style={styles.ratingText}>{ratingText[rating]}</Text>
            <Image source={ratingEmoji[rating]} style={styles.emoji} />
            <StepSlider
              slidevalue={rating}
              onStepChange={val => {
                updateState({rating: val});
              }}
              backgroundColor={currentColor}
            />
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Write your feedback here…"
                placeholderTextColor={colors._020202}
              />
            </View>
            <BlueButton buttonTitle="Submit Feedback" />
            <Text style={styles.skipText}>{'Skip feedback'}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingViewSet>
    </WrapperView>
  );
};

export default RatingRide;
