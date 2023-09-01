import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

type CustomCheckboxProps = {
  item: string; // The answer option
  index: number; // The index of the answer option
  isSelected: boolean; // Whether the checkbox option is selected
  onPress: () => void; // Function to handle press event
};

const Checkb: React.FC<CustomCheckboxProps> = ({
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
        // marginTop: moderateScale(16),
        backgroundColor: isSelected ? 'lightgray' : 'transparent', // White center when selected
        paddingHorizontal: 20,
        paddingVertical: 4,
      }}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: isSelected ? 'pink' : 'gray', // Customize the colors as needed
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 12,
          backgroundColor: isSelected ? 'white' : 'transparent', // Add background color when selected
        }}>
        {isSelected && (
          // You can customize the icon or content here
          // For example, you can use an image or an icon font

          <Text style={{color: 'pink'}}>✓</Text>
        )}
      </View>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default Checkb;
