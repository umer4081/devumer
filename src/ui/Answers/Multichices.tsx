import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

type CustomCheckboxProps = {
  item: string; // The answer option
  index: number; // The index of the answer option
  isSelected: boolean; // Whether the checkbox option is selected
  onPress: () => void; // Function to handle press event
};

const Multichices: React.FC<CustomCheckboxProps> = ({
  item,
  index,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.main_multicheck,
        isSelected && styles.selected_multicheck, // Apply additional style when isSelected is true
      ]}>
      <View
        style={[
          styles.checkbox,
          isSelected && styles.selected_checkbox,
          isSelected && styles.selected_border,
        ]}>
        {isSelected && (
          <Text style={{color: 'pink', textAlign: 'center'}}></Text>
        )}
      </View>
      <Text
        style={{
          textAlign: 'center',
          // justifyContent: 'center',
          // alignContent: 'center',
          flex: 1,
          paddingVertical: 4,
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Multichices;

const styles = StyleSheet.create({
  main_multicheck: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: 'pink',
    textAlign: 'center',
    borderRadius: 8,
  },
  selected_multicheck: {
    backgroundColor: 'green',
  },
  checkbox: {
    // width: 24,
    // height: 24,
    // borderRadius: 5,
    // borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginRight: 12,
    // color: 'red',
    // tintColor: 'red',
    // backgroundColor: 'pink',
  },
  selected_checkbox: {
    // borderColor: 'pink',
    // backgroundColor: 'white',
  },
  selected_border: {
    // borderColor: 'yellow',
  },
});
