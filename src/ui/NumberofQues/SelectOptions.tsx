import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Checkbox, PaperProvider} from 'react-native-paper';
import imagePath from '../../constants/imagePath';
import SelectOptionsRenderPicker from './SelectOptionsRenderPicker';
import {Provider} from 'react-redux';
import {Radio} from '@material-ui/icons';

type SelectOptionsProps = {
  itemIndex: number;
  selectedType: any;
  onTextChange: (data: any) => void;
  inputIndex: any;
  option: any;
  // chldhandle: any;
};

type RootState = {
  SavedOptions: {
    options: any[];
  };
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const SelectOptions: React.FC<SelectOptionsProps> = ({
  itemIndex,
  selectedType,
  onTextChange,
  option,
}) => {
  const [state, setState] = useState({
    questionTypes: [] as string[],
    numInputs: 0,
    isSaveButtonVisible: false,
    isTextInputVisible: false,
    isSavePressed: false,
    childtextInputData: [],
    checkedb: Array.from(numbers).map(() => false),
    enteredText: [] as string[],
  });
  const [enteredText, setEnteredText] = useState([]);

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

    // Create an array of objects from the text input data
    const updatedValues = state.childtextInputData.map((text, inputIndex) => ({
      option: {answer: text},
      inputIndex, // Include the inputIndex in each object
    }));

    console.log(JSON.stringify(updatedValues), 'SEND TO PARENT ');

    // Pass the updated values to the onTextChange function
    onTextChange(updatedValues, itemIndex);
  };

  const chldhandleTextChange = (text: string, inputIndex: number) => {
    let data = {
      option: {answer: text},
    };
    const updatedTextInputData = [...state.childtextInputData];
    updatedTextInputData[inputIndex] = data;
    console.log(updatedTextInputData[inputIndex], 'TYPING TEXT');
    setState(prevState => ({
      ...prevState,
      childtextInputData: updatedTextInputData,
    }));

    const updatedEnteredText = [...enteredText];
    updatedEnteredText[inputIndex] = text;
    setEnteredText(updatedEnteredText);
  };

  const optionsd = (value: string, itemIndex: number) => {
    console.log('Selected value:', value);
    console.log('Item index:', itemIndex);

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

  const handleEditPress = () => {
    setEnteredText(
      state.childtextInputData.map(item => item.option?.answer || ''),
    );
    setState(prevState => ({
      ...prevState,
      isTextInputVisible: true, // Toggle to text input mode (Edit)
    }));
  };
  const typeStyles: Record<string, {iconStyle: any; marginLeft: number}> = {
    checkbox: {
      iconStyle: styles.check_box,
      marginLeft: 24,
    },
    multicheckbox: {
      iconStyle: styles.check_box,
      marginLeft: 24,
    },
    radiobutton: {
      iconStyle: styles.radio,
      marginLeft: 12,
    },
    multiChoise: {
      iconStyle: styles.multichoice,
      marginLeft: 4,
    },
  };
  const multiChoiceStyles =
    selectedType === 'multiChoise'
      ? {
          flex: 1,
          backgroundColor: 'pink',
          borderRadius: 4,
          height: 28,
          marginLeft: 12,
        }
      : {};

  const selectedOptionsCount = state.childtextInputData.filter(
    item => item?.option?.answer !== '',
  ).length;

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
        selectedOptionsCount={selectedOptionsCount}
      />
    </>
  );

  const numberOfImages = 4;

  const renderImage = () => {
    if (selectedType === 'image') {
      return (
        <View style={styles.image_single}>
          <Image source={imagePath.User2} />
        </View>
      );
    } else if (selectedType === 'multiimage') {
      return (
        <View style={styles.multiimage}>
          <Image source={imagePath.puls} />
          {[...Array(numberOfImages)].map((_, index) => (
            <Image
              key={index}
              source={imagePath.user1}
              style={{marginLeft: 8, marginRight: 8}}
            />
          ))}
        </View>
      );
    } else {
      return null;
    }
  };
  const renderInputs = () => {
    if (isTextInputVisible) {
      const allFieldsEmpty = enteredText.every(text => !text.trim());

      return (
        <View>
          <View style={{}}>
            {Array.from({length: numInputs}).map((_, index) => (
              <View key={index} style={styles.View_textinput}>
                {!!isSaveButtonVisible && (
                  <Text style={{marginLeft: 12, color: 'black'}}>{`(${
                    index + 1
                  })`}</Text>
                )}
                <TextInput
                  onChangeText={text => chldhandleTextChange(text, index)}
                  value={enteredText[index] || ''} // Display entered text
                  label={`Choose your option ${index + 1}`}
                  mode="outlined"
                  placeholder="Option.."
                  style={[styles.textInput, isSavePressed && styles.textx]}
                />
              </View>
            ))}
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={handleSubmit}
              disabled={allFieldsEmpty}>
              {/* Disable the button if all fields are empty */}
              <Text
                style={{
                  fontSize: 12,
                  color: allFieldsEmpty ? 'gray' : 'black',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (isSavePressed) {
      return (
        <View style={styles.show_Edit_main}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              {state.childtextInputData.map((item, index) => (
                <View style={styles.checkboxx_color} key={index}>
                  {selectedType in typeStyles && (
                    <View
                      style={{
                        ...styles.main_text_Box,
                        ...multiChoiceStyles,
                      }}>
                      <View style={typeStyles[selectedType].iconStyle as any} />

                      <Text
                        style={{
                          marginLeft: typeStyles[selectedType]
                            .marginLeft as number,
                        }}>
                        {` ${item.option?.answer}`}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
            {selectedType === 'multiChoise' && (
              <View>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={handleEditPress}>
                  <Text style={{marginTop: 8}}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          {selectedType !== 'multiChoise' && (
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={handleEditPress}>
              <Image
                style={{width: 14, height: 14, marginRight: 18}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      {renderPicker()}
      {renderInputs()}
      {renderImage()}
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
  main_text_Box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'black',
  },

  customStyle: {
    // flex: 1,

    justifyContent: 'space-between',
    marginHorizontal: 24,
    backgroundColor: 'red',
    tintColor: 'red',
  },
  multiimage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginHorizontal: 24,
    marginTop: 8,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textx: {
    // color: 'red',
  },
  checkboxx_color: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    alignContent: 'center',
    // justifyContent: 'space-around',
    marginHorizontal: 24,
    paddingVertical: 4,
    paddingHorizontal: 4,
    paddingRight: 24,
  },

  unselected: {
    backgroundColor: 'pink',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: 'green',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
  image_single: {
    marginBottom: 24,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 16,
    marginTop: 8,
    alignSelf: 'center',
    // paddingHorizontal: 24,
    marginHorizontal: 24,
  },
  multichoice: {
    // borderRadius: 8,
  },
  edit_img: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 24,
    alignContent: 'center',
    // paddingLeft: 24,
    backgroundColor: 'red',
    // paddingLeft: 2,
  },
  Edit_img_style: {
    width: 18,
    height: 18,
    marginTop: -28,
  },
  check_box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  show_Edit_main: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 24,
    alignItems: 'center',
  },
});
