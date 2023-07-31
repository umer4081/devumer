import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Data} from '../Question/Data';
import CheckBox from '../Question/CheckBox';
import MultiChoise from '../Question/MultiChoise';
import MultiCheckBox from '../Question/MultiCheckBox';
import ImageComponent from '../Question/Image';
import MultiImage from '../Question/MultiImage';
import SelectOptionsRenderPicker from './SelectOptionsRenderPicker';
import {data} from '../Home/Data';

type SelectOptionsProps = {
  itemIndex: number;
  setQuestionTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedType: any;
  typesToFilter: any;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const SelectOptions: React.FC<SelectOptionsProps> = ({
  itemIndex,
  selectedType,
}) => {
  const [state, setState] = useState({
    questionTypes: [] as string[], //Questions
    numInputs: 0, // number of inputs
    isSaveButtonVisible: false, //save button
    isTextInputVisible: false, // show inputs
    enteredTexts: [] as string[], // text inputs
    isSavePressed: false, //  used for textinput after save
    isCheckBoxVisible: true,
    isMultiBoxVisible: true,
    checkedIndex: [] as number[], // Add checkedIndex to the initial state
    selectedText: null as string | null,
  });

  const {numInputs, isSaveButtonVisible, isTextInputVisible, isSavePressed} =
    state;
  const currentQuestionType = selectedType[itemIndex];

  const handleSubmit = () => {
    setState(prevState => ({
      ...prevState,
      isSaveButtonVisible: true,
      isTextInputVisible: false,
      isSavePressed: true,
    }));
  };

  const handleTextChange = (text: string, inputIndex: number) => {
    setState(prevState => {
      const updatedTexts = [...prevState.enteredTexts];
      updatedTexts[inputIndex] = {option: {answer: text}};
      const enteredTextsAsObjects = [{options: updatedTexts}];
      console.log(
        JSON.stringify(enteredTextsAsObjects),
        'JSOSNSNSOSNSOSNSdata',
      );
      return {...prevState, enteredTexts: updatedTexts};
    });
  };

  const handlebuttonMulti = () => {
    Alert.alert('You text will be update soon....');
    setState(prevState => ({
      ...prevState,
      isMultiBoxVisible: !prevState.isMultiBoxVisible,
    }));
  };

  const handlemultiiii = () => {
    console.log('Image added! Performing action...');
  };

  const handlebutton = (index: number, selectType: string) => {
    Alert.alert('You text will be update soon....');

    setState(prevState => {
      const isChecked = prevState.checkedIndex.includes(index);
      const updatedCheckedIndex = isChecked
        ? prevState.checkedIndex.filter(item => item !== index)
        : [...prevState.checkedIndex, index];

      const selectedText = isChecked
        ? null
        : Data[index]?.option?.answer || null;

      console.log('Selected Text:', selectedText);

      return {
        ...prevState,
        checkedIndex: updatedCheckedIndex,
        selectedText,
        isCheckBoxVisible: !prevState.isCheckBoxVisible,
        selectType,
      };
    });
  };

  const optionsd = (value: string, itemIndex: number) => {
    console.log('Selected value:', value);
    console.log('000Item index:', itemIndex);

    setState(prevState => {
      const updatedState = {...prevState};
      if (updatedState.questionTypes[itemIndex] === value) {
        updatedState.questionTypes[itemIndex] = '';
        updatedState.numInputs = 0;
        updatedState.isSaveButtonVisible = false;
        updatedState.isTextInputVisible = false;
      } else {
        updatedState.questionTypes[itemIndex] = value;
        if (value === '') {
          updatedState.numInputs = 0;
        } else {
          updatedState.numInputs = parseInt(value, 10);
          updatedState.isSaveButtonVisible = true;
          updatedState.isTextInputVisible = true;
        }
      }
      console.log('Updated question types:', updatedState.questionTypes);
      return updatedState;
    });
  };
  const handleImageAdded = () => {
    console.log('kjdhflehf');
  };
  const handlesingleImageAdded = () => {
    console.log('kjdhflehf');
  };

  const slelctmulticheck = () => {
    console.log('lijioo;jio');
  };

  const renderPicker = () => (
    <>
      <SelectOptionsRenderPicker
        currentQuestionType={currentQuestionType}
        isTextInputVisible={isTextInputVisible}
        isSavePressed={isSavePressed}
        itemIndex={itemIndex}
        selectedType={selectedType}
        numbers={numbers}
        optionsd={optionsd}
      />
    </>
  );

  return (
    <ScrollView style={{flex: 1}}>
      {renderPicker()}
      <View
        style={{
          alignContent: 'center',
        }}>
        {isSavePressed
          ? null
          : Array.from({length: numInputs}).map((_, index) => (
              <View key={index} style={styles.View_textinput}>
                {isSaveButtonVisible && (
                  <Text style={{marginLeft: 12, color: 'black'}}>
                    {`(${index + 1})`}
                  </Text>
                )}
                <>
                  <>
                    <TextInput
                      onChangeText={text => handleTextChange(text, index)}
                      label={`Choose your option ${index + 1}`}
                      mode="outlined"
                      placeholder=" Option.."
                      style={[styles.textInput]}
                    />
                  </>
                </>
              </View>
            ))}

        {isSavePressed &&
          state.isCheckBoxVisible &&
          selectedType === 'checkbox' && (
            <View style={{}}>
              <CheckBox
                item={state.enteredTexts}
                style={isSavePressed && styles.customStyle}
                handlebutton={handlebutton}
              />
            </View>
          )}
        {isSavePressed &&
          state.isMultiBoxVisible &&
          selectedType === 'multiChoise' && (
            <MultiChoise
              item={state.enteredTexts}
              handlebuttonMulti={handlebuttonMulti}
            />
          )}

        {selectedType === 'image' && (
          <ImageComponent singleImageAdded={handlesingleImageAdded} />
        )}

        {/* {selectedType === 'multiimage' && (
          <MultiImage onImageAdded={handleImageAdded} />
        )} */}
        {selectedType === 'multiimage' && (
          <MultiCheckBox selectitem={selectitem} />
        )}

        {isSaveButtonVisible && !isSavePressed && (
          <>
            <TouchableOpacity style={styles.save} onPress={handleSubmit}>
              <Text style={{fontSize: 12, color: 'black'}}>Save</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default SelectOptions;

const styles = StyleSheet.create({
  save: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 18,
    fontSize: 18,
  },

  View_textinput: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginHorizontal: 24,
  },

  textInput: {
    marginHorizontal: 8,
    // backgroundColor: 'orange',
    marginTop: 8,
    borderWidth: 1,
    flex: 0.7,
    width: 200,
    // paddingHorizontal: 8,
    borderRadius: 4,
    // color: 'green',
    // marginRight: 29
    marginBottom: 8,
    color: 'red',
  },

  customStyle: {
    // flex: 1,

    justifyContent: 'space-between',
    marginHorizontal: 24,
    backgroundColor: 'red',
  },
});
