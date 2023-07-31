import React, {useState, useEffect} from 'react'; // Import React, useState, and useEffect from 'react'
import {View, ScrollView, TouchableOpacity, Image} from 'react-native'; // Import View, ScrollView, TouchableOpacity, and Image from 'react-native'
import {Text, TextInput} from 'react-native-paper'; // Import Text and TextInput from 'react-native-paper'
import {Picker} from '@react-native-picker/picker'; // Import Picker from '@react-native-picker/picker'
import styles from './styles'; // Import styles from './styles'
import {Data} from '../Question/Data'; // Import Data from '../Question/Data'
import imagePath from '../../constants/imagePath'; // Import imagePath from '../../constants/imagePath'
import SelectOptions from './SelectOptions'; // Import SelectOptions from './SelectOptions'

// Create an array of unique types from the Data array
const typesToFilter = [...new Set(Data.map(x => x?.type, ';;;;;'))];

console.log(typesToFilter); // Output the typesToFilter array to the console

const NumberofQues = () => {
  // Define the state using the useState hook
  const [formData, setFormData] = useState({
    numInputs: '',
    inputValues: [],
    submitted: false,
    selectedQuestionType: [],
    savedText: Array(typesToFilter.length).fill('') as string[],
    setSavedText: Array(typesToFilter.length).fill('') as string[],
  });

  // Destructure state variables from formData
  const {numInputs, inputValues, submitted, selectedQuestionType, savedText} =
    formData;

  // Function to handle the number of inputs (questions) change
  const handleNumInputsChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 8) {
      setFormData({
        ...formData,
        numInputs: value,
        inputValues: Array(num).fill(''),
      });
    } else {
      setFormData({
        ...formData,
        numInputs: '',
        inputValues: [],
      });
    }
  };

  // Function to handle text change for a specific input (question)
  const handleTextChange = (text: string, itemIndex: number) => {
    const selectedType = formData.selectedQuestionType[itemIndex];
    if (
      selectedType === 'normal' ||
      selectedType === 'multiline' ||
      selectedType === 'multiChoise' ||
      selectedType === 'checkbox' ||
      selectedType === 'multicheckbox' ||
      selectedType === 'radiobutton' ||
      selectedType !== 'image' ||
      selectedType !== 'multiimage'
    ) {
      const updatedValues = [...formData.inputValues];
      updatedValues[itemIndex] = text;
      setFormData({
        ...formData,
        inputValues: updatedValues,
      });
    }
    console.log(formData.inputValues, '7formData.inputValues');
  };

  // Function to handle picker value change for a specific input (question)
  const handlePickerValueChange = (value: string, itemIndex: number) => {
    if (formData.savedText[itemIndex]) {
      // If text is already displayed, return early without updating the question type
      return;
    }

    const updatedTypes = [...formData.selectedQuestionType];
    updatedTypes[itemIndex] = value;
    setFormData({
      ...formData,
      selectedQuestionType: updatedTypes,
      isTyping: true,
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setFormData({
      ...formData,
      submitted: true,
    });
  };

  // Function to set saved text for a specific input (question)
  const setSavedText = (updatedText: string, itemIndex: number) => {
    setFormData(prevState => {
      const updatedSavedText = [...prevState.savedText];
      updatedSavedText[itemIndex] = updatedText;
      return {
        ...prevState,
        savedText: updatedSavedText,
      };
    });
    console.log(updatedText, '440000updatedText');
  };

  console.log(typesToFilter, '888typesToFilter'); // Output typesToFilter to the console

  // Function to render the text input based on the selected question type
  const renderTextInput = (itemIndex: number) => {
    const selectedType = formData.selectedQuestionType[itemIndex];
    const isSaved = formData.savedText[itemIndex] !== '';

    if (selectedType) {
      const questionNumber = itemIndex + 1;
      return (
        <View key={`textInput_${itemIndex}`}>
          {isSaved ? (
            <>
              {/* Render saved text and "Edit" button */}
              <View style={styles.edit}>
                <Text numberOfLines={2} style={styles.savedText}>
                  QN0-{questionNumber}: {formData.savedText[itemIndex]}
                </Text>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setSavedText('', itemIndex)}>
                  <Image style={styles.image} source={imagePath.edit} />
                </TouchableOpacity>
              </View>
              <SelectOptions
                selectedType={formData.selectedQuestionType[itemIndex]}
                typesToFilter={typesToFilter}
              />
              <View style={styles.line} />
            </>
          ) : (
            <>
              {/* Render text input if not saved */}
              <TextInput
                key={`textInput_${itemIndex}`}
                value={formData.inputValues[itemIndex]}
                onChangeText={text => handleTextChange(text, itemIndex)}
                label={`Enter your ${selectedType ?? 'question'} Question`}
                mode="outlined"
                multiline={selectedType === 'multiline'}
                numberOfLines={selectedType === 'multiline' ? 4 : 1}
                style={{marginHorizontal: 24, marginTop: 8}}
              />
            </>
          )}
          {/* Conditionally render the "Save" button */}
          {(selectedType === 'normal' ||
            selectedType === 'multiline' ||
            selectedType === 'multiChoise' ||
            selectedType === 'checkbox' ||
            selectedType === 'multicheckbox' ||
            selectedType === 'radiobutton' ||
            selectedType !== 'image' ||
            selectedType !== 'multiimage') &&
            !isSaved && (
              <TouchableOpacity
                style={styles.save}
                onPress={() =>
                  setSavedText(formData.inputValues[itemIndex], itemIndex)
                }>
                <Text style={styles.savedText}>Save</Text>
              </TouchableOpacity>
            )}
        </View>
      );
    }
    return null; // Return null if selectedType is falsy
  };
  console.log(selectedQuestionType, 'selectedQuestionType================='); // Output selectedQuestionType to the console
  console.log(formData.selectedQuestionType, 'selectedQuestionType'); // Output formData.selectedQuestionType to the console

  // Define a state variable data using the useState hook
  const [data, setData] = useState([]);
  console.log(selectedQuestionType, 'selectedQuestionType================='); // Output selectedQuestionType to the console

  return (
    <View style={{flex: 1, paddingBottom: 24}}>
      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            marginHorizontal: 24,
            marginTop: 34,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Questions
        </Text>
        {!formData.submitted && (
          <TextInput
            value={formData.numInputs}
            onChangeText={handleNumInputsChange}
            label={'Number of Questions'}
            keyboardType="numeric"
            maxLength={1}
            textColor="black"
            mode="outlined"
            activeOutlineColor="black"
            style={{marginHorizontal: 24}}
          />
        )}
        {formData.submitted &&
          formData.inputValues
            .slice(0, parseInt(formData.numInputs))
            .map((index, itemIndex) => (
              <View style={{}} key={itemIndex}>
                <View>
                  {/* {`(${index + 1})`} */}
                  <Picker
                    selectedValue={formData.selectedQuestionType[itemIndex]}
                    onValueChange={value =>
                      handlePickerValueChange(value, itemIndex)
                    }
                    style={{marginHorizontal: 24, marginTop: 8}}>
                    <Picker.Item
                      label={
                        formData.selectedQuestionType[itemIndex]
                          ? ` ${itemIndex + 1} Select Type of  Question`
                          : `Select Type of Question`
                      }
                      value=""
                    />
                    {typesToFilter.map((type, index) => (
                      <Picker.Item
                        key={type}
                        label={`TYPE: ${type.toUpperCase()}`}
                        value={type}
                      />
                    ))}
                  </Picker>
                  {formData.selectedQuestionType[itemIndex] ? null : (
                    <View style={styles.line} />
                  )}
                  {renderTextInput(itemIndex)}
                </View>
              </View>
            ))}

        {!formData.submitted && (
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={{fontSize: 12, color: 'black'}}>Submit</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default NumberofQues;
