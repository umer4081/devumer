import React, {useImperativeHandle, useState} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import PressableImage from './PressableImage';
import WrapperContainer from './WrapperContainer';
import { GOOGLE_MAP_KEY } from '../constants/contant';

const SearchPlaces = ({close = () => {}, place = () => {}}, ref: any) => {
  const [text, setText] = useState('');
  const [visible, setvisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setvisible(true),
      close: () => setvisible(false),
    };
  });

  return (
    <Modal visible={visible} statusBarTranslucent>
      <WrapperContainer>
        <View style={{flex: 1,paddingTop:moderateScale(24)}}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            nearbyPlacesAPI={'GoogleReverseGeocoding'}
            onPress={(data, details = null) => {}}
            keyboardShouldPersistTaps={'handled'}
            // ref={googlePlacesRef}
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
                onPress={() => close()}
              />
            )}
            renderRightButton={() =>
              !!text ? (
                <PressableImage
                  iconSource={imagePath.menu_close_ic}
                  onPress={() => close()}
                />
              ) : (
                <></>
              )
            }
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
    paddingHorizontal: moderateScale(20),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors._B2B2B2,
    marginTop: -moderateScaleVertical(5),
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
