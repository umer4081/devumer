import React, {useImperativeHandle, useState} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import PressableImage from './PressableImage';
import WrapperContainer from './WrapperContainer';
import {GOOGLE_MAP_KEY} from '../constants/contant';

export interface SearchPlacesMethod {
  open: () => void;
  close: () => void;
}

interface SearchPlacesProp {
  close?: () => void;
  onPlaceSelect?: (res: any) => void;
}
const SearchPlaces = (
  {close = () => {}, onPlaceSelect}: SearchPlacesProp,
  ref: any,
) => {
  const [text, setText] = useState('');
  const [visible, setvisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setvisible(true),
      close: () => setvisible(false),
    };
  });

  const onClosing = () => {
    setvisible(false);
    setText('');
  };

  return (
    <Modal
      onRequestClose={onClosing}
      animationType="fade"
      visible={visible}
      statusBarTranslucent>
      <WrapperContainer>
        <View style={{flex: 1}}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            nearbyPlacesAPI={'GoogleReverseGeocoding'}
            onPress={(data, details = null) => {
              onClosing()
              !!onPlaceSelect &&
                onPlaceSelect({
                  address: data.description,
                  lat: details?.geometry?.location.lat,
                  lng: details?.geometry?.location.lng,
                });
            }}
            keyboardShouldPersistTaps={'handled'}
            textInputProps={{
              placeholderTextColor: colors._B2B2B2,
              onChangeText: value => setText(value),
            }}
            enableHighAccuracyLocation={true}
            isRowScrollable={false}
            numberOfLines={4}
            renderLeftButton={() => (
              <PressableImage
                iconSource={imagePath.back_ic}
                onPress={onClosing}
              />
            )}
            // renderRightButton={() =>
            //   !!text ? (
            //     <PressableImage
            //       iconSource={imagePath.menu_close_ic}
            //       onPress={() => setvisible(false)}
            //     />
            //   ) : (
            //     <></>
            //   )
            // }
            styles={{
              container: styles.container,
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              separator: styles.separator,
              description: styles.description,
              listView: styles.listView,
            }}
            query={{
              key: GOOGLE_MAP_KEY,
              language: 'en',
            }}
            autoFillOnNotFound={true}
          />
        </View>
      </WrapperContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal:moderateScale(23)
  },
  textInputContainer: {
    // borderRadius: moderateScale(16),
    // paddingLeft: moderateScale(8),
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors._E2E2E2,
    paddingBottom: moderateScale(4),
    // marginTop: -moderateScaleVertical(5),
  },
  textInput: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(10),
  },
  separator: {
    height: 0.8,
    marginVertical: moderateScaleVertical(4),
    backgroundColor: colors._020202,
  },
  description: {
    ...commonStyles.fontSizeMedium15,
    color: colors._020202,
    lineHeight: moderateScaleVertical(24),
    marginRight: moderateScale(5),
  },
  listView: {
    marginLeft: moderateScale(20),
  },
});

export default React.forwardRef(SearchPlaces);
