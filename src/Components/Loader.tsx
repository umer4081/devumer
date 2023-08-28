import React from 'react';
import {View, Modal} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

interface Loader {
  isLoading?: boolean;
}
const Loader = ({isLoading = false}: Loader) => {
  if (isLoading) {
    return (
      <Modal transparent visible={isLoading}>
        <View
          style={{...commonStyles.loader, backgroundColor: 'rgba(0,0,0,0.2)'}}>
          <WaveIndicator size={70} color={colors._3B4FF4} animating />
        </View>
      </Modal>
    );
  }
  return null;
};

export default Loader;
