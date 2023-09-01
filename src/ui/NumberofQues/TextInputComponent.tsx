import {Picker} from '@react-native-picker/picker'; // Import Picker from '@react-native-picker/picker'
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import React, {useEffect, useState} from 'react'; // Import React and useState from 'react'
import {Image, ScrollView, TouchableOpacity, View} from 'react-native'; // Import View, ScrollView, TouchableOpacity, and Image from 'react-native'
import {Text, TextInput} from 'react-native-paper'; // Import Text and TextInput from 'react-native-paper'
import imagePath from '../../constants/imagePath'; // Import imagePath from '../../constants/imagePath'
import navigationString from '../../constants/navigationString'; // Import navigationString from '../../constants/navigationString'
import {Data} from '../Question/Data'; // Import Data from '../Question/Data'
import SelectOptions from './SelectOptions'; // Import SelectOptions from './SelectOptions'
import styles from './styles'; // Import styles from './styles'

type QuestionType =
  | 'normal'
  | 'multiline'
  | 'multiChoise'
  | 'checkbox'
  | 'multicheckbox'
  | 'radiobutton'
  | 'image'
  | 'multiimage';

type QuestionData = {
  type: QuestionType;
};
type FormData = {
  numInputs: string;
  inputValues: string[];
  submitted: boolean;
  selectedQuestionType: QuestionType[];
  savedText: string[];
  savedTexts: string[];
};

// Create an array of unique types from the Data array
const typesToFilter = [...new Set(Data.map(x => x?.type))];

const NumberofQues = ({navigation}: any) => {
  // Define the state using the useState hook
  const [formData, setFormData] = useState({
    numInputs: 0,
    inputValues: [],
    submitted: false,
    selectedQuestionType: [],
    savedText: Array(typesToFilter.length).fill('') as string[],
    childtextInputData: [],
    selectedOptions: [],
    // dataToSend: null,
  });

  // Function to update selected options in state
  const updateSelectedOptions = (index: number, options: any[]) => {
    const updatedOptions = [...formData.selectedOptions];
    updatedOptions[index] = options;
    setFormData(updatedOptions);
  };

  const [dtt, setdtt] = useState([]);
  // console.log(JSON.stringify(dtt), 'irfaan=========================');

  const [questions, setQuestions] = useState<Question[]>([]); // Initialize with an empty array
  const [textdata, setTextdata] = useState([]);
  console.log(JSON.stringify(textdata), 'textdatar____reciveeeedddd');

  // Inside your component or wherever you fetch or update the questions
  const updateQuestions = (QuestionType: Question[]) => {
    setQuestions(QuestionType);
  };
  const chldhandle = (data, itemIndex) => {
    const updatedTextdata = [...textdata, data];
    updatedTextdata[itemIndex] = data;
    setTextdata(updatedTextdata);

    const updatedQuestions = [...questions];

    updateQuestions(updatedQuestions);
  };

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
  const handleSave = (updatedText: string, itemIndex: number) => {
    setFormData(prevState => {
      const updatedSavedText = [...prevState.savedText];
      updatedSavedText[itemIndex] = updatedText;
      return {
        ...prevState,
        savedText: updatedSavedText,
      };
    });
  };
  const [editModes, setEditModes] = useState(
    Array(formData.savedText.length).fill(false),
  );

  /// SAVED LOGIC PART OF ALL QUESTIONS
  const renderSavedText = (itemIndex: number, questionNumber: number) => (
    <View style={styles.edit}>
      {editModes[itemIndex] ? (
        <TextInput
          value={formData.savedText[itemIndex]}
          onChangeText={text => {
            const updatedText = [...formData.savedText];
            updatedText[itemIndex] = text;
            handleSave(updatedText[itemIndex], itemIndex);
          }}
          onBlur={() =>
            setEditModes(prevModes =>
              prevModes.map((mode, index) =>
                index === itemIndex ? false : mode,
              ),
            )
          }
          label={`Enter your ${
            formData.selectedQuestionType[itemIndex] ?? 'question'
          } Question`}
          mode="outlined"
          multiline={formData.selectedQuestionType[itemIndex] === 'multiline'}
          numberOfLines={
            formData.selectedQuestionType[itemIndex] === 'multiline' ? 4 : 1
          }
          style={{marginHorizontal: 24, marginTop: 8}}
        />
      ) : (
        <Text numberOfLines={4} style={styles.savedText}>
          QN0-{questionNumber}: {formData.savedText[itemIndex]}
        </Text>
      )}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          setEditModes(prevModes =>
            prevModes.map((mode, index) => (index === itemIndex ? true : mode)),
          )
        }>
        <Image style={styles.image} source={imagePath.edit} />
      </TouchableOpacity>
    </View>
  );

  /// TEXT INPUT OF All QUESTIONS
  const renderTextInput = (itemIndex: number) => {
    const selectedType = formData.selectedQuestionType[itemIndex];
    const isSaved = formData.savedText[itemIndex] !== '';

    if (selectedType) {
      const questionNumber = itemIndex + 1;

      return (
        <View key={`textInput_${itemIndex}`}>
          {isSaved ? (
            <>
              {renderSavedText(itemIndex, questionNumber)}
              <SelectOptions
                selectedType={selectedType}
                itemIndex={itemIndex}
                onTextChange={data => chldhandle(data, itemIndex)}
              />
              <View style={styles.line} />
            </>
          ) : (
            <>
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
              {selectedType !== 'image' && selectedType !== 'multiimage' && (
                <TouchableOpacity
                  style={styles.save}
                  onPress={() =>
                    handleSave(formData.inputValues[itemIndex], itemIndex)
                  }>
                  <Text style={styles.savedText}>Save</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      );
    }

    return null;
  };

  // Function to render the "Next" button for navigation

  const Answers = () => {
    const navigation = useNavigation();

    // Function to get 'all' questions from the form data
    const getAllQuestions = () => {
      const normalQuestions = formData.inputValues
        .slice(0, parseInt(formData.numInputs))
        .map((text, itemIndex) => {
          const selectedType = formData.selectedQuestionType[itemIndex];

          const questionOptions =
            selectedType !== 'normal' || selectedType !== 'multiline'
              ? selectedType === 'checkbox' ||
                selectedType === 'multicheckbox' ||
                selectedType === 'multiChoise' ||
                selectedType === 'radiobutton'
                ? textdata[itemIndex]?.map(
                    (option: {option: {answer: any}}) => ({
                      option: option.option.answer,
                    }),
                  ) || []
                : [] // Empty array for non-checkbox questions
              : [];

          if (selectedType !== 'normal' && questionOptions.length > 0) {
            console.log('Options====:', JSON.stringify(questionOptions));
          }

          return {
            question: text,
            type: selectedType,
            options: questionOptions,
          };
        });

      return normalQuestions;
    };

    // Handle 'Next' button press
    const handleNextPress = (itemIndex: number) => {
      const normalQuestions = getAllQuestions();
      console.log('JSONJSON:', JSON.stringify(normalQuestions)); // Debugging output

      navigation.navigate(navigationString.ANSWERS, {
        normalQuestions,
        selectedQuestionTypes: formData.selectedQuestionType,
        // questionNumber: itemIndex + 1,
      });
    };
    // Navigate to the next screen and pass the 'normal' questions as a parameter

    const isSaved = formData.savedText.some(savedText => savedText !== '');
    if (isSaved) {
      return (
        <>
          <TouchableOpacity onPress={handleNextPress} style={styles.next}>
            <Text>Next</Text>
          </TouchableOpacity>
        </>
      );
    }
    // If none of the questions are saved, return null (i.e., don't render the "Next" button)
    return null;
  };

  // Return statement for the component
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
        {/* Render the number of questions input field */}
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
        {/* Render the questions */}
        {formData.submitted &&
          formData.inputValues
            .slice(0, parseInt(formData.numInputs))
            .map((index, itemIndex) => (
              <View style={{}} key={itemIndex}>
                <View style={{}}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    {/* Render the picker for selecting the question type */}
                    <Picker
                      selectedValue={formData.selectedQuestionType[itemIndex]}
                      onValueChange={value =>
                        handlePickerValueChange(value, itemIndex)
                      }
                      style={{marginHorizontal: 24, marginTop: 8}}>
                      <Picker.Item
                        label={
                          formData.selectedQuestionType[itemIndex]
                            ? `  Select Type of Question`
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

                    <Text
                      style={{
                        marginRight: 8,
                        marginHorizontal: 24,
                        marginTop: -36,
                      }}>{`${itemIndex + 1} `}</Text>
                  </View>
                  {/* Render the horizontal line separator */}
                  {formData.selectedQuestionType[itemIndex] ? null : (
                    <View style={styles.line} />
                  )}
                  {/* Render the text input based on the selected question type */}
                  {renderTextInput(itemIndex)}
                </View>
              </View>
            ))}
        {/* Render the "Next" button */}
        {Answers()}

        {/* Render the "Submit" button */}
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
