import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {useIsFocused} from '@react-navigation/native';

type RenderPickerProps = {
  currentQuestionType: string;
  isTextInputVisible: boolean;
  isSavePressed: boolean;
  itemIndex: number;
  selectedType: any;
  numbers: number[];
  optionsd: (value: string, itemIndex: number) => void;
  selectedOptionsCount: number;
};

const SelectOptionsRenderPicker: React.FC<RenderPickerProps> = ({
  currentQuestionType,
  isTextInputVisible,
  isSavePressed,
  itemIndex,
  selectedType,
  numbers,
  optionsd,
  selectedOptionsCount,
}) => {
  const [isPickerLabelUpdated, setIsPickerLabelUpdated] = useState(false);
  console.log(currentQuestionType, 'currentQuestionType0000');

  console.log(isPickerLabelUpdated, 'isPickerLabelUpdated');
  console.log(isPickerLabelUpdated, 'selectedOptionsCount');
  const renderPicker = () => (
    <>
      <View>
        {/* {state.selectedText && <Text>Selected Text: {state.selectedText}</Text>} */}
      </View>
      {selectedType !== 'normal' &&
        selectedType !== 'multiline' &&
        selectedType !== 'image' &&
        selectedType !== 'multiimage' &&
        !isTextInputVisible &&
        !isSavePressed && (
          <Picker
            selectedValue={currentQuestionType}
            onValueChange={value => {
              optionsd(value, itemIndex);
              setIsPickerLabelUpdated(true);
            }}
            style={styles.picker_main}>
            <Picker.Item
              // label={`Select Option`}
              label={
                isPickerLabelUpdated
                  ? `Selected ${selectedOptionsCount} ${
                      selectedOptionsCount !== 1 ? '' : ''
                    }`
                  : 'Select Options' // Initial label
              }
              value=""
              style={styles.optionss}
            />
            {numbers.map(number => (
              <Picker.Item
                key={number}
                label={`${number}`}
                value={number.toString()}
              />
            ))}
          </Picker>
        )}
    </>
  );

  return <ScrollView style={{flex: 1}}>{renderPicker()}</ScrollView>;
};

export default SelectOptionsRenderPicker;

const styles = StyleSheet.create({
  picker_main: {
    marginLeft: 24,
    paddingLeft: 24,
    marginRight: 145,
  },
  optionss: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});
