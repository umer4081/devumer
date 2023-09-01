import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import styles from './styles';

type CustomRadioProps = {
  item: string; // The answer option
  index: number; // The index of the answer option
  isSelected: boolean; // Whether the radio option is selected
  onPress: () => void; // Function to handle press event
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  item,
  index,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: moderateScale(24),
        // marginTop: moderateScale(4),
        // marginBottom: moderateScale(4),
        backgroundColor: isSelected ? 'lightgray' : 'transparent', // White center when selected
        paddingHorizontal: 20,
        paddingVertical: 4,
      }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: isSelected ? 'pink' : 'gray', // Customize the colors as needed
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 12,
          backgroundColor: isSelected ? 'white' : 'transparent',
          // paddingVertical: 12, // Add this line to change the background color
        }}>
        {isSelected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'pink', // White dot inside pink center
            }}
          />
        )}
      </View>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default CustomRadio;
