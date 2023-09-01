import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Question: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,

    // flex: 1,
    // backgroundColor: 'red',
    // marginRight: 24,
    // marginLeft: 24,
    marginHorizontal: 24,
    marginTop: 16,
  },
  checkbox_text: {
    marginHorizontal: 24,
    fontWeight: '700',
    // color: 'black',
  },
  Multi_checkbox: {
    fontWeight: '700',
  },
  header: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    // textDecorationLine: 'underline',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  checkbox: {
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  render_ques: {
    flex: 1,
    // marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
    // backgroundColor: 'red',
  },
  textInput: {
    flex: 1,
    marginRight: 4,
    // marginTop: 24,
    // marginBottom
    color: 'green',
  },
  answer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  input_save: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'lightgray',
    alignSelf: 'stretch',
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 12,
    // width: 2,
  },
  image_single: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 16,
    // marginTop: 24,
    alignSelf: 'center',
    // paddingHorizontal: 24,
    marginHorizontal: 24,
  },
  addOne_img: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 16,
    // paddingHorizontal: 24,
  },
  chooseImage: {
    height: 48,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  btn_txt: {
    color: 'white',
  },
  card: {
    // marginTop: 8,
    // marginRight: 8,
    // marginBottom: 16,
    // borderRadius: 16,
    // backgroundColor: 'white',
    // marginHorizontal: 24,
  },
  imageList: {
    width: 64,
    height: 64,
    borderRadius: 8,
    // marginRight: 8,
    // marginBottom: 24,
    // marginLeft: 24,
  },
  multiimage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 8,
    // marginHorizontal: 24,
    // marginTop: 8,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom: 8,
  },
  main_Normal_multi: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  save: {
    marginTop: 8,
    marginRight: 10,
    color: 'blue',
    textAlign: 'center',
  },
  ans_edit_main: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
    // paddingHorizontal: 24,
    flex: 1,
    // backgroundColor: 'red',
  },
  radio_editImg: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 24,
    paddingRight: 24,
  },
  main_Radiobtn: {
    // backgroundColor: 'red',
    alignContent: 'center',
    flexDirection: 'row',
  },

  delete_img: {
    position: 'absolute',
    // top: -1,
    right: 1,
    // borderRadius: 10,
    // fontSize: 30,
  },
});

export default styles;

// working code
// import {useRoute} from '@react-navigation/native';
// import {useState} from 'react';
// import {ScrollView, Text, TextInput, View} from 'react-native';
// import Checkb from './Checkb';
// import ImageRenderer from './ImageRenderer';
// import Multcheck from './Multcheck';
// import Radio from './Radio';
// import styles from './styles';
// import Multichices from './Multichices';

// // Define the type for the route params
// type RouteParams = {
//   normalQuestions: [];
//   selectedQuestionTypes: string[];
//   savedText: string;
//   childtextInputData: {options: {answer: string}}[];
//   SavedOptions: any;
//   options: any;
//   dataToSend: any;
//   messages: [];
//   dtt: any;
// };

// // const extractTextValues = dataArr => {
// //   return dataArr.map(data => data.option.answer);
// // };

// const Answers = () => {
//   // Use the useRoute hook to get the route and extract the parameters
//   const route = useRoute<RouteParams>();

//   const {normalQuestions, selectedQuestionTypes, extractedTexts} = route.params;

// const [singleImage, setSingleImage] = useState<any[]>([]);
// const [imageList, setImageList] = useState<any[]>([]);
// const numberOfImages = 3;

//   console.log(normalQuestions, 'normalQuestions000ppppp'); // Adding null and 2 for formatting

//   console.log(selectedQuestionTypes, 'selectedQuestionTypes');

//   const uniqueSelectedTypes = [...new Set(selectedQuestionTypes)]; //{' '}

//   // Define a state to store the user's input for each question
//   const [userInputs, setUserInputs] = useState<{[key: string]: string[]}>({});

//   // Define a state to keep track of whether the "Save" button has been clicked for each question
//   const [isSavedByType, setIsSavedByType] = useState<{
//     [key: string]: boolean[];
//   }>(selectedQuestionTypes.reduce((acc, type) => ({...acc, [type]: []}), {}));

//   // Define a counter for all the questions
//   let questionCounter = 0;

//   // Function to update the user's input for a specific question
// const handleTextInputChange = (
//   text: string,
//   questionIndex: number,
//   questionType: string,
// ) => {
//   setUserInputs(prevInputs => ({
//     ...prevInputs,
//     [questionType]: {
//       ...(prevInputs[questionType] || []),
//       [questionIndex]: text,
//     },
//   }));
// };

//   // Function to handle the "Save" button click for a specific question
//   const handleSaveClick = (questionType: string, questionIndex: number) => {
//     const userInput = userInputs[questionType]?.[questionIndex];
// if (userInput && userInput.trim() !== '') {
//   setIsSavedByType(prevSaved => ({
//     ...prevSaved,
//     [questionType]: {
//       ...(prevSaved[questionType] || []),
//       [questionIndex]: true,
//     },
//   }));
//     } else {
//     }
//   };

//   const [selectedOptionsByType, setSelectedOptionsByType] = useState<{
//     [key: string]: number[];
//   }>({});

//   // Function to handle option toggle
//   const handleCheckboxToggle = (
//     questionType: string,
//     questionIndex: number,
//     optionIndex: number,
//   ) => {
//     setSelectedOptionsByType(prevSelectedOptions => ({
//       ...prevSelectedOptions,
//       [questionType]: {
//         ...(prevSelectedOptions[questionType] || {}),
//         [questionIndex]: prevSelectedOptions[questionType]?.[
//           questionIndex
//         ]?.includes(optionIndex)
//           ? prevSelectedOptions[questionType]?.[questionIndex]?.filter(
//               index => index !== optionIndex,
//             )
//           : [
//               ...(prevSelectedOptions[questionType]?.[questionIndex] || []),
//               optionIndex,
//             ],
//       },
//     }));
//   };

//   const handleRadioToggle = (
//     questionType: string,
//     questionIndex: number,
//     optionIndex: number,
//   ) => {
//     setSelectedOptionsByType(prevSelectedOptions => ({
//       ...prevSelectedOptions,
//       [questionType]: {
//         ...(prevSelectedOptions[questionType] || {}),
//         [questionIndex]: optionIndex,
//       },
//     }));
//   };
//   const checkbox = (
//     questionType: string,
//     questionIndex: number,
//     optionIndex: number,
//   ) => {
//     setSelectedOptionsByType(prevSelectedOptions => ({
//       ...prevSelectedOptions,
//       [questionType]: {
//         ...(prevSelectedOptions[questionType] || {}),
//         [questionIndex]: optionIndex,
//       },
//     }));
//   };

//   // Function to render questions of a specific type

//   const renderQuestionsByType = (questionType: string) => {
//     return (
//       <View key={`questions_${questionType}`}>
//         {normalQuestions
//           .filter(question => question.type === questionType)
//           .map((question: any, index: number) => {
//             questionCounter++; // Increment question counter

//             const renderOptions = () => {
//               if (
//                 questionType === 'checkbox' ||
//                 questionType === 'radiobutton' ||
//                 question.type === 'multiChoise' ||
//                 questionType === 'multicheckbox'
//               ) {
//                 return (
//                   <View style={{marginHorizontal: 24}}>
//                     {question.options.map(
//                       (option: any, optionIndex: number) => (
//                         <View key={optionIndex}>
//                           {questionType === 'multicheckbox' && (
//                             <View style={styles.checkbox}>
//                               <Multcheck
//                                 item={option.option.option.answer}
//                                 index={optionIndex}
//                                 isSelected={selectedOptionsByType[
//                                   questionType
//                                 ]?.[index]?.includes(optionIndex)}
//                                 onPress={() =>
//                                   handleCheckboxToggle(
//                                     questionType,
//                                     index,
//                                     optionIndex,
//                                   )
//                                 }
//                               />
//                             </View>
//                           )}

//                           <>
//                             {question.type === 'radiobutton' && (
//                               <View
//                                 style={{
//                                   ...styles.checkbox,
//                                   // backgroundColor: 'red',
//                                 }}>
//                                 <Radio
//                                   item={option.option.option.answer}
//                                   index={optionIndex}
//                                   isSelected={
//                                     selectedOptionsByType[questionType]?.[
//                                       index
//                                     ] === optionIndex
//                                   }
//                                   onPress={() =>
//                                     handleRadioToggle(
//                                       questionType,
//                                       index,
//                                       optionIndex,
//                                     )
//                                   }
//                                 />
//                               </View>
//                             )}
//                           </>

//                           <>
//                             {question.type === 'checkbox' && (
//                               <View style={styles.checkbox}>
//                                 <Checkb
//                                   item={option.option.option.answer}
//                                   index={optionIndex}
//                                   isSelected={
//                                     selectedOptionsByType[questionType]?.[
//                                       index
//                                     ] === optionIndex
//                                   }
//                                   onPress={() =>
//                                     checkbox(questionType, index, optionIndex)
//                                   }
//                                 />
//                               </View>
//                             )}
//                           </>

//                           <>
//                             {question.type === 'multiChoise' && (
//                               <View style={styles.checkbox}>
//                                 <Multichices
//                                   item={option.option.option.answer}
//                                   index={optionIndex}
//                                   isSelected={selectedOptionsByType[
//                                     questionType
//                                   ]?.[index]?.includes(optionIndex)}
//                                   onPress={() =>
//                                     handleCheckboxToggle(
//                                       questionType,
//                                       index,
//                                       optionIndex,
//                                     )
//                                   }
//                                 />
//                               </View>
//                             )}
//                           </>
//                         </View>
//                       ),
//                     )}
//                     <View style={styles.line} />
//                   </View>
//                 );
//               } else {
//                 return null;
//               }
//             };
//             const renderQuestionInput = () => {
//               if (!isSavedByType[questionType]?.[index]) {
//                 switch (questionType) {
//                   case 'normal':
//                   case 'multiline':
//                     return (
//                       <>
// <View style={[styles.input_save]}>
//   <TextInput
//     value={userInputs[questionType]?.[index] || ''}
//     onChangeText={text =>
//       handleTextInputChange(text, index, questionType)
//     }
//     placeholder="Enter your answer"
//     style={styles.textInput}
//     multiline={questionType === 'multiline'}
//     numberOfLines={questionType === 'multiline' ? 4 : 1}
//   />
//   <Text
//     style={{marginRight: 10, color: 'blue'}}
//     onPress={() =>
//       handleSaveClick(questionType, index)
//     }>
//     Save
//   </Text>
// </View>
//                       </>
//                     );
//                   case 'image':
//                   case 'multiimage':
//                     return (
//                       <View>
//                         <ImageRenderer
//                           questionType={questionType}
//                           singleImage={singleImage}
//                           imageList={imageList}
//                           numberOfImages={numberOfImages}
//                           setSingleImage={setSingleImage}
//                           setImageList={setImageList}
//                         />
//                         <View style={styles.line} />
//                       </View>
//                     );
//                   default:
//                     return null;
//                 }
//               } else {
//                 return (
//                   <>
//                     <View style={styles.answer}>
//                       <Text style={{marginBottom: 8, color: 'green'}}>
//                         {`Ans.`} {userInputs[questionType]?.[index] || ''}
//                       </Text>
//                     </View>
//                     <View style={styles.line} />
//                   </>
//                 );
//               }
//             };

//             return (
//               <View key={index}>
//                 <Text style={styles.Question}>
//                   {`Qno.${questionCounter}:`} {question.question}
//                 </Text>
//                 <View>
//                   {renderOptions()}
//                   {renderQuestionInput()}
//                 </View>
//               </View>
//             );
//           })}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.render_ques}>
//       {/* Display questions for each selected question type */}
//       <ScrollView>
//         {uniqueSelectedTypes.map(type => renderQuestionsByType(type))}

//         <View></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Answers;
