import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

type RenderPickerProps = {
  currentQuestionType: string;
  isTextInputVisible: boolean;
  isSavePressed: boolean;
  itemIndex: number;
  selectedType: any;
  numbers: number[];
  optionsd: (value: string, itemIndex: number) => void;
};

const SelectOptionsRenderPicker: React.FC<RenderPickerProps> = ({
  currentQuestionType,
  isTextInputVisible,
  isSavePressed,
  itemIndex,
  selectedType,
  numbers,
  optionsd,
}) => {
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
            }}
            style={styles.picker_main}>
            <Picker.Item
              label={`Select Option`}
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
    marginRight: 196,
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
