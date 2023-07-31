import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 16,
  },
  questionTypeButton: {
    marginHorizontal: 24,
    marginTop: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    marginHorizontal: 24,
    marginTop: 34,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {marginHorizontal: 24},
  picker: {marginHorizontal: 24},
  submit: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 16,
    backgroundColor: 'pink',
    paddingHorizontal: 24,
    marginTop: 24,
    borderRadius: 12,
  },
  submitText: {
    fontSize: 16,
  },

  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnStyle: {
    marginTop: 16,
    paddingVertical: 9,

    // justifyContent: 'center',
    width: '100%',
  },
  selectOptionsItem: {
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  numberButton: {
    // backgroundColor: 'red',
    color: 'black',
  },
  numberText: {
    color: 'black',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'green',
  },
  dropdow: {
    // marginHorizontal: 24,
    color: 'black',
    fontSize: 18,
  },
  drop_image: {
    height: 24,
    width: 24,
    tintColor: 'black',
    marginTop: 4,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 12,
    alignContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    paddingHorizontal: 24,

    // padding: 8,
  },
  numinput: {},
  segment: {
    marginTop: 16,
    marginBottom: 16,
    // height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownss: {
    width: '100%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },

  image_single: {
    marginBottom: 24,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 16,
    marginTop: 24,
    alignSelf: 'center',
    // paddingHorizontal: 24,
    marginHorizontal: 24,
  },
  save: {
    alignContent: 'center',
    marginLeft: 16,
    marginBottom: 24,
    // borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,

    // marginTop: 18,
    fontSize: 18,
  },
  savedText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 16,
    flex: 1,
    // backgroundColor: 'red',
    // marginRight: 24,
    // marginLeft: 24,
    marginHorizontal: 24,
  },

  editButton: {
    marginHorizontal: 24,
    borderRadius: 8,
    // marginTop: 20,
  },
  editButtonText: {
    color: 'black',
    textAlign: 'center',
    marginRight: 24,
  },
  image: {
    height: 18,
    width: 18,
    marginRight: 16,
  },
  quest_text: {
    marginHorizontal: 24,
  },
  edit: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginBottom: 24,
    // marginHorizontal: 24,
    alignSelf: 'center',
    // backgroundColor: 'lightgray',
    paddingVertical: 8,
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
});

export default styles;

// const typesToFilter = [...new Set(Data.map(x => x, ';;;;;'))];

// const checkbox = typesToFilter
//   .filter(item => item.type === 'checkbox')
//   .map(item => item.options);

// console.log(checkbox, '345678904567890');

// const checkbox = Data.filter(item => item.type === 'checkbox').map(
//   item => item.options,
// );

// console.log(checkbox, 'yyyyy--------checkbox');

// const checkboxfilter = typesToFilter
//   .filter(item => item.type === 'checkbox')
//   .map(item => item.options.map(option => option.option.answer));

// console.log(checkboxfilter, 'checkboxfilter345678904567890');

// console.log(checkboxfilter, 'CheckboxCheckboxrrrumerrrumerrr9999999999');

// const multicheckbox = Data.filter(item => item.type === 'multicheckbox').map(
//   item => item.options,
// );

// console.log(multicheckbox, '3333multicheckboxmulticheckbox00000');

{
  /* {checkboxfilter.map((option, optionIndex) => (
        <Checkbox
          key={optionIndex}
          label={option}
          // status={optionIndex === checked ? 'checked' : 'unchecked'}
          // onPress={() => handleCheckboxPress(optionIndex)}
        />
      ))} */
}

//  <>
//    <>
//      {/* {selectedQuestionType.map((type, typeIndex) => (
//                   <React.Fragment key={typeIndex}>
//                     {typeIndex === itemIndex &&
//                       (selectedQuestionType[itemIndex] === type ? (
//                         <>
//                           {textInputVisible[itemIndex] && (
//                             <TextInput
//                               key={typeIndex}
//                               onChangeText={text =>
//                                 console.log(text, itemIndex)
//                               }
//                               label={`Enter your ${type.toUpperCase()} Question`}
//                               mode="outlined"
//                               style={{
//                                 marginHorizontal: 24,
//                                 marginTop: 8,
//                                 // color: 'black',
//                               }}
//                             />
//                           )}
//                         </>
//                       ) : null)}
//                   </React.Fragment>
//                 ))} */}
//    </>
//  </>;

// import React, {useState, useEffect} from 'react';
// import {Alert, TouchableOpacity, View, ScrollView, Image} from 'react-native';
// import {Text, TextInput} from 'react-native-paper';
// import {Picker} from '@react-native-picker/picker';
// import styles from './styles';
// import SelectOptions from './SelectOptions';
// import {Data} from '../Question/Data';

// const typesToFilter: string[] = [
//   'normal',
//   'multiline',
//   'multiChoice',
//   'checkbox',
//   'multicheckbox',
//   'radiobutton',
//   'multiimage',
//   'image',
// ];

// interface State {
//   isSaveButtonVisible: boolean;
//   numInputs: string;
//   inputValues: string[];
//   submitted: boolean;
//   selectedQuestionType: string[];
//   textInputVisible: boolean[];
//   textInputValues: string[];
//   questionTypes: string[];
//   // setTextInputVisible: any;
// }

// interface NumberofQuesProps {
//   setTextInputVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
//   setTextInputValues: React.Dispatch<React.SetStateAction<string[]>>;
// }

// const NumberofQues: React.FC<NumberofQuesProps> = ({
//   setTextInputVisible,
//   setTextInputValues,
// }) => {
//   const [state, setState] = useState<State>({
//     isSaveButtonVisible: false,
//     numInputs: '',
//     inputValues: [],
//     submitted: false,
//     selectedQuestionType: [],
//     textInputVisible: Array(typesToFilter.length).fill(false),
//     textInputValues: [],
//     questionTypes: [],
//     // setTextInputVisible:,
//   });

//   const updateState = (data: Partial<State>) => {
//     setState(prevState => ({...prevState, ...data}));
//   };

//   const handleNumInputsChange = (value: string) => {
//     const num = parseInt(value, 10);
//     if (!isNaN(num) && num >= 1 && num <= 8) {
//       updateState({numInputs: value, inputValues: Array(num).fill('')});
//     } else {
//       updateState({numInputs: '', inputValues: []});
//     }
//   };

//   const handleSubmit = () => {
//     updateState({submitted: true});
//   };

//   const handlePickerValueChange = (value: string, itemIndex: number) => {
//     const updatedSelectedQuestionType = [...state.selectedQuestionType];
//     updatedSelectedQuestionType[itemIndex] = value;

//     setTextInputVisible(prev =>
//       prev.map((val, idx) => (idx === itemIndex ? value !== '' : val)),
//     );
//   };

//   // useEffect(() => {
//   //   setTextInputVisible(Array(typesToFilter.length).fill(false));
//   //   setTextInputValues([]);
//   // }, [state.numInputs]);

//   const IsaveVisible =
//     state.selectedQuestionType.includes('normal') ||
//     state.selectedQuestionType.includes('multiline');

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView style={{flex: 1}}>
//         <Text
//           style={{
//             marginHorizontal: 24,
//             marginTop: 34,
//             fontSize: 20,
//             fontWeight: 'bold',
//           }}>
//           Questions
//         </Text>
//         {!state.submitted && (
//           <TextInput
//             value={state.numInputs}
//             onChangeText={handleNumInputsChange}
//             label={'Number of Questions'}
//             keyboardType="numeric"
//             maxLength={1}
//             textColor="black"
//             mode="outlined"
//             activeOutlineColor="black"
//             style={{marginHorizontal: 24}}
//           />
//         )}

//         {state.submitted &&
//           state.inputValues
//             .slice(0, parseInt(state.numInputs))
//             .map((value, itemIndex) => (
//               <View key={itemIndex}>
//                 <Picker
//                   selectedValue={state.selectedQuestionType[itemIndex]}
//                   onValueChange={value =>
//                     handlePickerValueChange(value, itemIndex)
//                   }
//                   style={{marginHorizontal: 24, marginTop: 8}}>
//                   <Picker.Item
//                     label={
//                       state.selectedQuestionType[itemIndex]
//                         ? `Select Type of ${state.selectedQuestionType[itemIndex]} Question`
//                         : 'Select Type of Question'
//                     }
//                     value=""
//                   />
//                   {typesToFilter.map((type, index) => (
//                     <Picker.Item
//                       key={type}
//                       label={`TYPE:  ${type.toUpperCase()}`}
//                       value={type}
//                     />
//                   ))}
//                 </Picker>

//                 {state.textInputVisible[itemIndex] &&
//                   state.selectedQuestionType[itemIndex] !== 'multiimage' &&
//                   state.selectedQuestionType[itemIndex] !== 'image' && (
//                     <>
//                       <TextInput
//                         key={itemIndex}
//                         onChangeText={text => console.log(text, itemIndex)}
//                         value={state.textInputValues[itemIndex]}
//                         label={`Enter your ${
//                           state.selectedQuestionType[itemIndex] ?? 'question'
//                         } Question`}
//                         mode="outlined"
//                         multiline={
//                           state.selectedQuestionType[itemIndex] === 'multiline'
//                         }
//                         numberOfLines={
//                           state.selectedQuestionType[itemIndex] === 'multiline'
//                             ? 4
//                             : 1
//                         }
//                         style={{marginHorizontal: 24, marginBottom: 24}}
//                       />

//                       {IsaveVisible && (
//                         <TouchableOpacity
//                           style={styles.save}
//                           // onPress={handleSave
//                         >
//                           <Text style={{fontSize: 12, color: 'black'}}>
//                             Save
//                           </Text>
//                         </TouchableOpacity>
//                       )}

//                       {/* {state.showSavedText && state.savedText !== '' && (
//                         <Text style={styles.savedText}>{state.savedText}</Text>
//                       )} */}

//                       {/* {state.showEditButton && (
//                         <TouchableOpacity
//                           onPress={handleEdit}
//                           style={styles.editButton}>
//                           <Text style={styles.editButtonText}>Edit</Text>
//                         </TouchableOpacity>
//                       )} */}
//                     </>
//                   )}

//                 <SelectOptions
//                   selectedQuestionType={state.selectedQuestionType}
//                   textInputVisible={state.textInputVisible}
//                   setTextInputVisible={setTextInputVisible}
//                   itemIndex={itemIndex}
//                   questionTypes={state.questionTypes}
//                   // setQuestionTypes={state.setQuestionTypes}
//                 />
//               </View>
//             ))}

//         {!state.submitted && (
//           <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
//             <Text style={{fontSize: 12, color: 'black'}}>Submit</Text>
//           </TouchableOpacity>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default NumberofQues;

// =====================working

// / import React, {useState, useEffect} from 'react';
// // import {Alert, TouchableOpacity, View, ScrollView, Image} from 'react-native';
// // import {Text, TextInput} from 'react-native-paper';
// // import {Picker} from '@react-native-picker/picker';
// // import styles from './styles';
// // import SelectOptions from './SelectOptions';
// // import {Data} from '../Question/Data';

// // const typesToFilter = ['normal', 'multiline'];

// // const NumberofQues = () => {
// //   const [numInputs, setNumInputs] = useState('');
// //   const [inputValues, setInputValues] = useState<string[]>([]);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [selectedQuestionType, setSelectedQuestionType] = useState<string[]>(
// //     [],
// //   );
// //   const [textInputVisible, setTextInputVisible] = useState(
// //     Array(typesToFilter.length).fill(false),
// //   );
// //   const [textInputValues, setTextInputValues] = useState<string[]>([]);
// //   const [questionTypes, setQuestionTypes] = useState<string[]>([]);

// //   // Data.map(x => {
// //   //   console.log(x, 'DataDataDataDataDataData');
// //   // });

// //   const handleNumInputsChange = (value: string) => {
// //     // alert('jjjj');
// //     const num = parseInt(value, 10);
// //     if (!isNaN(num) && num >= 1 && num <= 8) {
// //       setNumInputs(value);
// //       //
// //       setInputValues(Array(num).fill(''));
// //     } else {
// //       setNumInputs('');
// //       setInputValues([]);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     setSubmitted(true);
// //   };

// //   const handlePickerValueChange = (value: string, itemIndex: number) => {
// //     // alert('jjjj');
// //     // setQuestionTypes('');
// //     setSelectedQuestionType(prevState => {
// //       const updatedState = [...prevState];
// //       updatedState[itemIndex] = value;

// //       return updatedState;
// //     });
// //     setTextInputVisible(prev =>
// //       prev.map((val, idx) => (idx === itemIndex ? value !== '' : val)),
// //     );
// //   };

// //   const handleTextChange = (text: string, index: number) => {
// //     const updatedValues = [...textInputValues];
// //     updatedValues[index] = text;
// //     setTextInputValues(updatedValues);
// //   };

// //   useEffect(() => {
// //     setTextInputVisible(Array(typesToFilter.length).fill(false));
// //     setTextInputValues([]);
// //   }, [numInputs]);

//   console.log(textInputVisible, 'textInputVisible=========');
//   console.log(questionTypes, 'questionType-----------------s');
//   console.log(selectedQuestionType, 'selectedQuestionType9999999999');
//   console.log(textInputValues, 'textInputValues--------------r');

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView style={{flex: 1}}>
//         <Text
//           style={{
//             marginHorizontal: 24,
//             marginTop: 34,
//             fontSize: 20,
//             fontWeight: 'bold',
//           }}>
//           Questions
//         </Text>
//         {!submitted && (
//           <TextInput
//             value={numInputs}
//             onChangeText={handleNumInputsChange}
//             label={'Number of Questions'}
//             keyboardType="numeric"
//             maxLength={1}
//             textColor="black"
//             mode="outlined"
//             activeOutlineColor="black"
//             style={{marginHorizontal: 24}}
//           />
//         )}

//         {submitted &&
//           inputValues.slice(0, parseInt(numInputs)).map((value, itemIndex) => (
//             <View key={itemIndex}>
//               <Picker
//                 selectedValue={selectedQuestionType[itemIndex]}
//                 onValueChange={value =>
//                   handlePickerValueChange(value, itemIndex)
//                 }
//                 style={{marginHorizontal: 24, marginTop: 8}}>
//                 <Picker.Item
//                   label={
//                     selectedQuestionType[itemIndex]
//                       ? `Select Type of ${selectedQuestionType[itemIndex]} Question`
//                       : 'Select Type of Question'
//                   }
//                   value=""
//                 />
//                 {typesToFilter.map((type, index) => (
//                   <Picker.Item
//                     key={type}
//                     label={`TYPE:  ${type.toUpperCase()}`}
//                     value={type}
//                   />
//                 ))}
//               </Picker>

//               {textInputVisible[itemIndex] &&
//                 selectedQuestionType[itemIndex] !== 'multiimage' &&
//                 selectedQuestionType[itemIndex] !== 'image' && (
//                   <>
//                     <TextInput
//                       key={itemIndex}
//                       onChangeText={text => handleTextChange(text, itemIndex)}
//                       label={`Enter your ${
//                         selectedQuestionType[itemIndex] ?? 'question'
//                       } Question`}
//                       mode="outlined"
//                       multiline={
//                         selectedQuestionType[itemIndex] === 'multiline'
//                       }
//                       numberOfLines={
//                         selectedQuestionType[itemIndex] === 'multiline' ? 4 : 1
//                       }
//                       style={{marginHorizontal: 24, marginTop: 8}}
//                     />
//                   </>
//                 )}
//               <SelectOptions
//                 selectedQuestionType={selectedQuestionType}
//                 textInputVisible={textInputVisible}
//                 setTextInputVisible={setTextInputVisible}
//                 itemIndex={itemIndex}
//                 questionTypes={questionTypes}
//                 setQuestionTypes={setQuestionTypes}
//               />
//             </View>
//           ))}

//         {!submitted && (
//           <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
//             <Text style={{fontSize: 12, color: 'black'}}>Submit</Text>
//           </TouchableOpacity>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default NumberofQues;

// ==============CHILD COMP=======================================================>>>>>>>>>

// import React, {useState} from 'react';
// import {
//   TextInput,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import imagePath from '../../constants/imagePath';

// type SelectOptionsProps = {
//   selectedQuestionType: any[];
//   textInputVisible: any;
//   itemIndex: number;
//   setQuestionTypes: React.Dispatch<React.SetStateAction<string[]>>;
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const SelectOptions: React.FC<SelectOptionsProps> = ({
//   selectedQuestionType,
//   textInputVisible,
//   itemIndex,
//   setQuestionTypes,
// }) => {
//   const currentQuestionType = selectedQuestionType[itemIndex];
//   const isVisible = currentQuestionType && textInputVisible[itemIndex];

//   const [numInputs, setNumInputs] = useState();
//   const [isSaveButtonVisible, setSaveButtonVisible] = useState(false); // Initialize as false

//   console.log(itemIndex, ' itemIndex');

//   const handleSubmit = () => {
//     // Perform the save operation here
//     const dataToSave = ['Data 1', 'Data 2', 'Data 3']; // Replace this with the data you want to save
//     // ...
//     setQuestionTypes('');
//     setNumInputs('');
//     setSaveButtonVisible(false); // Hide the "Save" button after it's clicked
//   };

//   const options = (value: string, itemIndex: number) => {
//     console.log('Selected value:', value);
//     console.log('Item index:', itemIndex);

//     setQuestionTypes(prevState => {
//       const updatedState = [...prevState];
//       if (updatedState[itemIndex] === value) {
//         updatedState[itemIndex] = '';
//         setNumInputs(null);
//         setSaveButtonVisible(false); // Hide the "Save" button when selecting "Select an Option"
//       } else {
//         updatedState[itemIndex] = value;
//         if (value === '') {
//           setNumInputs(null);
//         } else {
//           setNumInputs(parseInt(value, 10));
//           setSaveButtonVisible(true); // Show the "Save" button when selecting other options
//         }
//       }
//       console.log('Updated question types:', updatedState);
//       return updatedState;
//     });
//   };
//   const singleimage = () => {};
//   const addmultiimage = () => {};
//   const TextFeild =
//     currentQuestionType === 'normal' || currentQuestionType === 'multiline';

//   const Images = currentQuestionType === 'multiimage';
//   const singleImage = currentQuestionType === 'image';
//   const choose = () => {
//     const options = [
//       {
//         text: 'Cancel',
//         style: 'default',
//       },
//       {
//         text: 'Gallery',
//         onPress: addmultiimage,
//         style: 'default',
//       },
//       {
//         text: 'Camera',
//         onPress: singleimage,
//         style: 'default',
//       },
//     ];

//     //  if (shouldShowCameraOption) {
//     //    options.push({
//     //      text: 'Gallery',
//     //      onPress: imagePicker,
//     //      style: 'default',
//     //    });
//     //  }

//     // Alert.alert('Alert Title', 'My Alert Msg', options);
//   };
//   return (
//     <View>
//       {/* {!Images && !singleImage && TextFeild && (
//         <TextInput
//           onChangeText={text => console.log(text, itemIndex, 'iiiii')}
//           label={`Choose your option`}
//           mode="outlined"
//           placeholder="please select an option"
//           multiline={selectedQuestionType[itemIndex] === 'multiline'}
//           numberOfLines={
//             selectedQuestionType[itemIndex] === 'multiline' ? 4 : 1
//           }
//           style={{
//             marginHorizontal: 24,
//             marginTop: 8,
//             borderWidth: 1,
//             marginBottom: 24,
//           }}
//         />
//       )} */}
//       {/* <Text>{displayText}</Text> */}

//       {Images && (
//         <>
//           <Text style={styles.text_Add_img}>Choose your Images </Text>

//           <TouchableOpacity style={styles.chooseImage} onPress={choose}>
//             <Text style={styles.btn_txt}>{'Add Image'}</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {singleImage && (
//         <>
//           <Text style={styles.text_Add_img}>Plese Add you Image here</Text>
//           <TouchableOpacity style={styles.image_single} onPress={choose}>
//             <Image source={imagePath.User2} />
//           </TouchableOpacity>
//         </>
//       )}
//       {!Images && !singleImage && !TextFeild && isVisible && (
//         <Picker
//           selectedValue={currentQuestionType}
//           onValueChange={value => options(value, itemIndex)}
//           style={{marginHorizontal: 24, marginTop: 8}}>
//           <Picker.Item label={` Select an Option`} value="" />

//           {numbers.map(number => (
//             <Picker.Item
//               key={number}
//               label={
//                 textInputVisible[itemIndex]
//                   ? `${number} - Choose an Option`
//                   : `Select Type of Question`
//               }
//               value={number.toString()}
//             />
//           ))}
//         </Picker>
//       )}

//       {!Images &&
//         textInputVisible[itemIndex] &&
//         Array.from({length: numInputs}).map((_, index) => (
//           <TextInput
//             key={index}
//             onChangeText={text => console.log(text, itemIndex, 'iiiii')}
//             label={`Choose your option`}
//             mode="outlined"
//             placeholder="please select an option"
//             style={{marginHorizontal: 24, marginTop: 8, borderWidth: 1}}
//           />
//         ))}

//       {isSaveButtonVisible && textInputVisible[itemIndex] && (
//         <TouchableOpacity style={styles.save} onPress={handleSubmit}>
//           <Text style={{fontSize: 12, color: 'black'}}>submit</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default SelectOptions;

// const styles = StyleSheet.create({
//   text_Add_img: {
//     alignContent: 'center',
//     marginBottom: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginTop: 18,
//     fontSize: 18,
//     marginHorizontal: 24,
//     color: 'black',
//   },
//   save: {
//     alignContent: 'center',

//     marginBottom: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',

//     marginTop: 18,
//     fontSize: 18,
//   },

//   image_single: {
//     marginBottom: 24,
//     borderWidth: 0.5,
//     borderColor: 'lightgray',
//     borderRadius: 16,
//     marginTop: 24,
//     alignSelf: 'center',
//     // paddingHorizontal: 24,
//     marginHorizontal: 24,
//   },
//   chooseImage: {
//     height: 48,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 16,
//     borderRadius: 12,
//     marginHorizontal: 24,
//   },
//   btn_txt: {
//     color: 'white',
//   },
// });

// [[[[[
//   [
//     [
//       [

//       ]
//     ]
//   ]
// ]]]]]

// import React, {useState, useEffect} from 'react';
// import {Alert, TouchableOpacity, View, ScrollView, Image} from 'react-native';
// import {Text, TextInput} from 'react-native-paper';
// import {Picker} from '@react-native-picker/picker';
// import styles from './styles';
// import SelectOptions from './SelectOptions';
// import {Data} from '../Question/Data';

// const typesToFilter = ['normal', 'multiline', 'miultichoice', 'checkbox'];

// const NumberofQues = () => {
//   const [numInputs, setNumInputs] = useState('');
//   const [inputValues, setInputValues] = useState<string[]>([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedQuestionType, setSelectedQuestionType] = useState<string[]>(
//     [],
//   );
//   const [textInputVisible, setTextInputVisible] = useState(
//     Array(typesToFilter.length).fill(false),
//   );
//   const [textInputValues, setTextInputValues] = useState<string[]>([]);
//   const [questionTypes, setQuestionTypes] = useState<string[]>([]);

//   // Data.map(x => {
//   //   console.log(x, 'DataDataDataDataDataData');
//   // });

//   const handleNumInputsChange = (value: string) => {
//     // alert('jjjj');
//     const num = parseInt(value, 10);
//     if (!isNaN(num) && num >= 1 && num <= 8) {
//       setNumInputs(value);
//       //
//       setInputValues(Array(num).fill(''));
//     } else {
//       setNumInputs('');
//       setInputValues([]);
//     }
//   };

//   const handlePickerValueChange = (value: string, itemIndex: number) => {
//     // alert('jjjj');
//     // setQuestionTypes('');
//     setSelectedQuestionType(prevState => {
//       const updatedState = [...prevState];
//       updatedState[itemIndex] = value;

//       return updatedState;
//     });
//     setTextInputVisible(prev =>
//       prev.map((val, idx) => (idx === itemIndex ? value !== '' : val)),
//     );
//   };

//   const handleTextChange = (text: string, itemIndex: number) => {
//     const selectedType = selectedQuestionType[itemIndex];
//     if (selectedType === 'normal' || selectedType === 'multiline') {
//       const updatedValues = [...textInputValues];
//       updatedValues[itemIndex] = text;
//       setTextInputValues(updatedValues);
//       console.log(text, 'texttexttexttexttexttext');
//     }
//   };
//   const [savetext, setSavetext] = useState(false);
//   const [showinput, setShowinput] = useState(true);

//   const save = (itemIndex: number) => {
//     const selectedType = selectedQuestionType[itemIndex];
//     if (selectedType === 'normal') {
//       setSavetext(true);
//     }
//   };

//   const edit = (itemIndex: number) => {
//     setShowinput(false);
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };
//   // useEffect(() => {
//   //   setTextInputVisible(Array(typesToFilter.length).fill(false));
//   //   setTextInputValues([]);
//   // }, [numInputs]);

//   console.log(textInputVisible, 'textInputVisible=========');
//   console.log(questionTypes, 'questionType-----------------s');
//   console.log(selectedQuestionType, 'selectedQuestionType9999999999');
//   console.log(textInputValues, 'textInputValues--------------r');

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView style={{flex: 1}}>
//         <Text
//           style={{
//             marginHorizontal: 24,
//             marginTop: 34,
//             fontSize: 20,
//             fontWeight: 'bold',
//           }}>
//           Questions
//         </Text>
//         {!submitted && (
//           <TextInput
//             value={numInputs}
//             onChangeText={handleNumInputsChange}
//             label={'Number of Questions'}
//             keyboardType="numeric"
//             maxLength={1}
//             textColor="black"
//             mode="outlined"
//             activeOutlineColor="black"
//             style={{marginHorizontal: 24}}
//           />
//         )}

//         {submitted &&
//           inputValues.slice(0, parseInt(numInputs)).map((value, itemIndex) => (
//             <View key={itemIndex}>
//               <Picker
//                 selectedValue={selectedQuestionType[itemIndex]}
//                 onValueChange={value =>
//                   handlePickerValueChange(value, itemIndex)
//                 }
//                 style={{marginHorizontal: 24, marginTop: 8}}>
//                 <Picker.Item
//                   label={
//                     selectedQuestionType[itemIndex]
//                       ? `Select Type of ${selectedQuestionType[itemIndex]} Question`
//                       : 'Select Type of Question'
//                   }
//                   value=""
//                 />
//                 {typesToFilter.map((type, index) => (
//                   <Picker.Item
//                     key={type}
//                     label={`TYPE:  ${type.toUpperCase()}`}
//                     value={type}
//                   />
//                 ))}
//               </Picker>

//               {textInputVisible[itemIndex] &&
//                 selectedQuestionType[itemIndex] !== 'multiimage' &&
//                 selectedQuestionType[itemIndex] !== 'image' && (
//                   <>
//                     {savetext &&
//                     selectedQuestionType[itemIndex] === 'normal' ? (
//                       textInputValues.map((value, itemIndex) => (
//                         <Text key={itemIndex}>{value}</Text>
//                       ))
//                     ) : (
//                       // Show the TextInput for other question types

//                       <>
//                         {showinput ? null : (
//                           <TextInput
//                             key={itemIndex}
//                             value={textInputValues[itemIndex]}
//                             onChangeText={text =>
//                               handleTextChange(text, itemIndex)
//                             }
//                             label={`Enter your ${
//                               selectedQuestionType[itemIndex] ?? 'question'
//                             } Question`}
//                             mode="outlined"
//                             multiline={
//                               selectedQuestionType[itemIndex] === 'multiline'
//                             }
//                             numberOfLines={
//                               selectedQuestionType[itemIndex] === 'multiline'
//                                 ? 4
//                                 : 1
//                             }
//                             style={{marginHorizontal: 24, marginTop: 8}}
//                           />
//                         )}
//                       </>
//                     )}

//                     {savetext &&
//                     textInputVisible[itemIndex] &&
//                     selectedQuestionType[itemIndex] === 'normal' ? (
//                       <TouchableOpacity
//                         style={styles.save}
//                         onPress={() => edit(itemIndex)}
//                         // onPress={() =>
//                         //   setTextInputVisible(prevState => !prevState)
//                         // }
//                       >
//                         <Text>Edit</Text>
//                       </TouchableOpacity>
//                     ) : (
//                       <TouchableOpacity
//                         style={styles.save}
//                         onPress={() => save(itemIndex)}>
//                         <Text style={styles.savedText}>Save</Text>
//                       </TouchableOpacity>
//                     )}
//                   </>
//                 )}

//               <SelectOptions
//                 selectedQuestionType={selectedQuestionType}
//                 textInputVisible={textInputVisible}
//                 setTextInputVisible={setTextInputVisible}
//                 itemIndex={itemIndex}
//                 questionTypes={questionTypes}
//                 setQuestionTypes={setQuestionTypes}
//               />
//             </View>
//           ))}

//         {!submitted && (
//           <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
//             <Text style={{fontSize: 12, color: 'black'}}>Submit</Text>
//           </TouchableOpacity>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// export default NumberofQues;

// [[[[

//   [[[[

//     [[[
//       [[[

//         [pp

//         ppp]]]
//         [[[

//         ]]]
//       ]]]
//     ]]]
//   ]]]]
// ]]]]==========================================+Child=======

import React, {useState} from 'react';
// import {
//   TextInput,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import imagePath from '../../constants/imagePath';

// type SelectOptionsProps = {
//   selectedQuestionType: any[];
//   textInputVisible: any;
//   itemIndex: number;
//   setQuestionTypes: React.Dispatch<React.SetStateAction<string[]>>;
//   setTextInputVisible: any;
//   selectedType: any;
// };

// const numbers = [1, 2, 3, 4, 5];
// const SelectOptions: React.FC<SelectOptionsProps> = ({
//   selectedQuestionType,
//   textInputVisible,
//   itemIndex,
//   setTextInputVisible,
//   selectedType,
// }) => {
//   const currentQuestionType = selectedType[itemIndex];
//   const isVisible = currentQuestionType && textInputVisible[itemIndex];
//   const [questionTypes, setQuestionTypes] = useState<string[]>([]);
//   const [numInputs, setNumInputs] = useState(0);
//   const [isSaveButtonVisible, setSaveButtonVisible] = useState(false); // Initialize as false

//   console.log(itemIndex, ' itemIndex');

//   const handleSubmit = () => {
//     // Perform the save operation here
//     const dataToSave = ['Data 1', 'Data 2', 'Data 3']; // Replace this with the data you want to save
//     // ...
//     setQuestionTypes('');
//     setNumInputs('');
//     setSaveButtonVisible(false); // Hide the "Save" button after it's clicked
//   };

//   const options = (value: string, itemIndex: number) => {
//     console.log('Selected value:', value);
//     console.log('Item index:', itemIndex);

//     setQuestionTypes((prevState: string[]) => {
//       const updatedState = [...prevState];
//       if (updatedState[itemIndex] === value) {
//         updatedState[itemIndex] = '';
//         setNumInputs(0);
//         setSaveButtonVisible(false); // Hide the "Save" button when selecting "Select an Option"
//       } else {
//         updatedState[itemIndex] = value;
//         if (value === '') {
//           setNumInputs(0);
//         } else {
//           setNumInputs(parseInt(value, 10));
//           setSaveButtonVisible(true); // Show the "Save" button when selecting other options
//         }
//       }
//       console.log('Updated question types:', updatedState);
//       return updatedState;
//     });
//   };

//   console.log(selectedType, 'selectedType0000000000');

//   const renderPicker = (inputCount: any) => (
//     <Picker
//       selectedValue={currentQuestionType}
//       onValueChange={value => {
//         options(value, itemIndex);
//         setNumInputs(inputCount); // Set numInputs based on the selected value
//       }}
//       style={{marginHorizontal: 24}}>
//       <Picker.Item label={`Choose an Option`} value="" />
//       {numbers.map(number => (
//         <Picker.Item
//           key={number}
//           label={`${number}`}
//           value={number.toString()}
//         />
//       ))}
//     </Picker>
//   );

//   return (
//     <View>
//       {/* {selectedType === 'multiChoise' && renderPicker()}
//       {selectedType === 'checkbox' && renderPicker()}
//       {selectedType === 'multicheckbox' && renderPicker()}
//       {selectedType === 'radiobutton' && renderPicker()} */}
//       {/*
//    { questionTypes[itemIndex] &&( */}
//       <>
//         {selectedType === 'multiChoise' && renderPicker(3)}
//         {selectedType === 'checkbox' && renderPicker(2)}
//         {selectedType === 'multicheckbox' && renderPicker(3)}
//         {selectedType === 'radiobutton' &&
//           renderPicker(4) &&
//           Array.from({length: numInputs}).map((_, index) => (
//             <TextInput
//               key={index}
//               onChangeText={text => console.log(text, itemIndex, 'iiiii')}
//               label={`Choose your option ${index + 1}`}
//               mode="outlined"
//               placeholder="please select an option"
//               style={{marginHorizontal: 24, marginTop: 8, borderWidth: 1}}
//             />
//           ))}
//       </>

//       {/* )} */}
//       {isSaveButtonVisible && questionTypes[itemIndex] && (
//         <>
//           {currentQuestionType === 'normal' ||
//           currentQuestionType === 'multiline' ? null : (
//             <TouchableOpacity style={styles.save} onPress={handleSubmit}>
//               <Text style={{fontSize: 12, color: 'black'}}>submit</Text>
//             </TouchableOpacity>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// export default SelectOptions;

// const styles = StyleSheet.create({
//   text_Add_img: {
//     alignContent: 'center',
//     marginBottom: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginTop: 18,
//     fontSize: 18,
//     marginHorizontal: 24,
//     color: 'black',
//   },
//   save: {
//     alignContent: 'center',

//     marginBottom: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',

//     marginTop: 18,
//     fontSize: 18,
//   },

//   image_single: {
//     marginBottom: 24,
//     borderWidth: 0.5,
//     borderColor: 'lightgray',
//     borderRadius: 16,
//     marginTop: 24,
//     alignSelf: 'center',
//     // paddingHorizontal: 24,
//     marginHorizontal: 24,
//   },
//   chooseImage: {
//     height: 48,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 16,
//     borderRadius: 12,
//     marginHorizontal: 24,
//   },
//   btn_txt: {
//     color: 'white',
//   },
// });
