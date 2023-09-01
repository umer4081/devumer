import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {showSuccess} from '../../utils/helperFunction';
import AllRanders from './AllRanders';
import styles from './styles';

// Define the type for the route params
type RouteParams = {
  normalQuestions: [];
  selectedQuestionTypes: string[];
  savedText: string;
  childtextInputData: {options: {answer: string}}[];
  SavedOptions: any;
  // options: any;
  dataToSend: any;
  messages: [];
  dtt: any;
  question: string;
  options: {}[];
  type: string;
  questiontype: any;
  originalIndex: any;
  index: any;
};

const Answers = () => {
  // Use the useRoute hook to get the route and extract the parameters
  const route = useRoute<RouteParams>();

  const {normalQuestions, selectedQuestionTypes, extractedTexts} = route.params;

  console.log('GETGETGET_____JSONJSON:', JSON.stringify(normalQuestions)); // Debugging output

  const [questions, setQuestions] = useState<Question[]>(normalQuestions);

  // Define a state to store the user's input for each question
  const [userInputs, setUserInputs] = useState<{[key: string]: string[]}>({});

  const [saveClicked, setSaveClicked] = useState(false);

  const [isSaved, setIsSaved] = useState<{[key: string]: boolean[]}>(
    selectedQuestionTypes.reduce((acc, type) => ({...acc, [type]: []}), {}),
  );

  const [savedQuestionType, setSavedQuestionType] = useState<string | null>(
    null,
  );
  const [selectedOptionsByType, setSelectedOptionsByType] = useState<{
    [key: string]: number[];
  }>({});

  const [selectedOptionsByTyperadio, setSelectedOptionsByTyperadio] = useState<{
    [key: string]: number[];
  }>({});

  const [selectedOptionsByMultichoise, setSelectedOptionsByMultichoise] =
    useState<{
      [key: string]: number[];
    }>({});
  const [
    selectedOptionsByTypeMultiCheckbox,
    setSelectedOptionsByTypeMultiCheckbox,
  ] = useState<{[key: string]: number[]}>({});

  const [isTextSaved, setIsTextSaved] = useState({}); // Initialize with an empty object

  // Function to update the user's input for a specific question
  const handleTextInputChange = (
    text: string,
    questionIndex: number,
    questionType: string,
  ) => {
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [questionType]: {
        ...(prevInputs[questionType] || []),
        [questionIndex]: text,
      },
    }));
  };

  // Multi Checkbox toggle function
  const handleMultiCheckboxToggle = (
    questionType: string,
    questionIndex: number,
    optionIndex: number,
  ) => {
    if (questionType === 'multicheckbox') {
      setSelectedOptionsByTypeMultiCheckbox(prevSelectedOptions => {
        const selectedOptionIndices =
          prevSelectedOptions[questionType]?.[questionIndex] || [];
        const isSelected = selectedOptionIndices.includes(optionIndex);
        console.log(selectedOptionIndices, 'selectedOptionIndices=====');

        const updatedSelectedOptions = {
          ...prevSelectedOptions,
          [questionType]: {
            ...(prevSelectedOptions[questionType] || {}),
            [questionIndex]: isSelected
              ? selectedOptionIndices.filter(index => index !== optionIndex)
              : [...selectedOptionIndices, optionIndex],
          },
        };

        const selectedOptionText =
          questions[questionIndex].options[optionIndex].option.option.answer;

        console.log(
          `Selected option (multicheck): Question ${questionIndex}, Option ${optionIndex}, Text: ${selectedOptionText}`,
        );
        return updatedSelectedOptions;
      });
    }
  };

  const handleCheckbox = (
    questionType: string,
    questionIndex: number,
    optionIndex: number,
  ) => {
    setSelectedOptionsByType(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionType]: {
        ...(prevSelectedOptions[questionType] || {}),
        [questionIndex]: optionIndex,
      },
    }));

    const selectedOptionText =
      questions[questionIndex].options[optionIndex].option.option.answer;

    setUserInputs(prevInputs => ({
      ...prevInputs,
      [questionType]: {
        ...(prevInputs[questionType] || {}),
        [questionIndex]: selectedOptionText,
      },
    }));

    console.log('Selected Option Text CHECKBox:', selectedOptionText);
  };

  const handleRadiobutton = (
    questionType: string,
    questionIndex: number,
    optionIndex: number,
  ) => {
    setSelectedOptionsByTyperadio(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionType]: {
        ...(prevSelectedOptions[questionType] || {}),
        [questionIndex]: optionIndex,
      },
    }));

    const selectedOptionText =
      questions[questionIndex].options[optionIndex].option.option.answer;
    console.log(selectedOptionText, 'selectedOptionText============');
    console.log(
      `Selected option (Radiobutton): Question ${questionIndex}, Option ${optionIndex}, Text: ${selectedOptionText}`,
    );

    setUserInputs(prevInputs => ({
      ...prevInputs,
      [questionType]: {
        ...(prevInputs[questionType] || {}),
        [questionIndex]: selectedOptionText,
      },
    }));
  };

  const handleMultichoise = (
    questionType: string,
    questionIndex: number,
    optionIndex: number,
  ) => {
    setSelectedOptionsByMultichoise(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionType]: {
        ...(prevSelectedOptions[questionType] || {}),
        [questionIndex]: optionIndex,
      },
    }));

    const selectedOptionText =
      questions[questionIndex].options[optionIndex].option?.option?.answer;
    console.log(selectedOptionText, 'selectedOptionText============');
    console.log(
      `Selected option (Multichoise): Question ${questionIndex}, Option ${optionIndex}, Text: ${selectedOptionText}`,
    );

    setUserInputs(prevInputs => ({
      ...prevInputs,
      [questionType]: {
        ...(prevInputs[questionType] || {}),
        [questionIndex]: selectedOptionText,
      },
    }));
  };
  console.log(savedQuestionType, 'savedQuestionType');
  console.log(isSaved, 'isSaved');

  // Define a state to track whether the question is in edit mode or not
  const [editMode, setEditMode] = useState<{[key: string]: boolean[]}>({});

  // Function to toggle edit mode for a specific question
  const saveOptions = (questionType: string, questionIndex: number) => {
    setEditMode(prevEditMode => ({
      ...prevEditMode,
      [questionType]: {
        ...(prevEditMode[questionType] || {}),
        [questionIndex]: !prevEditMode[questionType]?.[questionIndex],
      },
    }));
  };

  // const handleSaveClick = (questionType: string, questionIndex: number) => {
  //   const userInput = userInputs[questionType]?.[questionIndex];
  //   let selectedOptions;

  //   if (questionType === 'multicheckbox') {
  //     selectedOptions =
  //       selectedOptionsByTypeMultiCheckbox[questionType]?.[questionIndex];
  //     console.log('Selected option:', selectedOptions);
  //   } else if (questionType === 'checkbox') {
  //     // Check for checkbox question type
  //     selectedOptions = selectedOptionsByType[questionType]?.[questionIndex];
  //   }

  //   if (
  //     (userInput && userInput.trim() !== '') ||
  //     (selectedOptions && selectedOptions.length > 0)
  //   ) {
  //     setIsSaved(prevSaved => ({
  //       ...prevSaved,
  //       [questionType]: {
  //         ...(prevSaved[questionType] || {}),
  //         [questionIndex]: true,
  //       },
  //     }));

  //     setIsTextSaved(prevIsTextSaved => ({
  //       ...prevIsTextSaved,
  //       [questionType]: {
  //         ...(prevIsTextSaved[questionType] || {}),
  //         [questionIndex]: true,
  //       },
  //     }));

  //     setSavedQuestionType(questionType);
  //   }
  // };

  // Define the unique selected types within the component
  const uniqueSelectedTypes = [...new Set(selectedQuestionTypes)];
  console.log(uniqueSelectedTypes, '0000==================uniqueSelectedTypes');
  useEffect(() => {
    // sorting();
    // Now you can use the sortedArray as needed
  }, []);

  // const sorting = (): RouteParams[] => {
  //   const arr: RouteParams[] = [];
  //   uniqueSelectedTypes.forEach(type => {
  //     normalQuestions
  //       .filter((question: RouteParams) => question.type === type)
  //       .forEach((question: RouteParams, index) => {
  //         arr.push({...question, questiontype: question.type});
  //       });
  //   });
  //   console.log(JSON.stringify(arr), 'arrararararar');
  //   return arr;
  // };

  // // Define a function to sort and organize questions
  const sorting = (): RouteParams[] => {
    const arr: RouteParams[] = [];
    uniqueSelectedTypes.forEach(type => {
      normalQuestions
        .filter((question: RouteParams) => question.type === type)
        .forEach((question: RouteParams, index: RouteParams) => {
          arr.push({
            ...question,
            questiontype: question.type,
            originalIndex: index, // Add the original index to each question
          });
        });
    });
    return arr;
  };
  let questionCounter = 1; // Initialize the question counter

  return (
    <View style={styles.render_ques}>
      <ScrollView>
        {/* {sorting().map((question, index) => { */}
        {sorting()
          .sort((a, b) => a.originalIndex - b.originalIndex)
          .map((question, index) => {
            questionCounter++; // Increment question counter
            console.log();
            const type = question.questiontype;
            const isSavedw = isSaved[type]?.[index] || false;
            console.log(isSavedw, 'isSavedwisSavedw--', index);
            //Check if the question has content before displaying it
            const questionContent = question.question
              ? `Qno.${questionCounter}:${question.question}`
              : '';
            console.log(
              questionContent,
              'questionContquestionContentquestionContentent',
            );
            return questionContent ? (
              <View key={index}>
                <Text style={styles.Question}>
                  {/* {`Qno.${questionCounter}:`} {question.question} */}
                  {questionContent}
                </Text>

                <View>
                  {/* {renderOptionsByType(type, index, isSavedw, question.options)} */}
                  <AllRanders
                    questionType={type} // Use 'type' from the question object
                    questionIndex={index}
                    isSavedw={isSavedw}
                    options={question.options}
                    editMode={editMode}
                    userInputs={userInputs}
                    selectedOptionsByTyperadio={selectedOptionsByTyperadio}
                    selectedOptionsByType={selectedOptionsByType}
                    selectedOptionsByMultichoise={selectedOptionsByMultichoise}
                    selectedOptionsByTypeMultiCheckbox={
                      selectedOptionsByTypeMultiCheckbox
                    }
                    handleRadiobutton={handleRadiobutton}
                    handleCheckbox={handleCheckbox}
                    handleMultichoise={handleMultichoise}
                    handleMultiCheckboxToggle={handleMultiCheckboxToggle}
                    saveOptions={saveOptions}
                    handleTextInputChange={handleTextInputChange}
                    showSuccess={showSuccess}
                    setSaveClicked={setSaveClicked}
                  />
                </View>
              </View>
            ) : (
              <></>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default Answers;
