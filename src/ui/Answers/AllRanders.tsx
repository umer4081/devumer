import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import imagePath from '../../constants/imagePath';
import Checkb from './Checkb'; // Import your Checkb component
import Multcheck from './Multcheck'; // Import your Multcheck component
import Multi_images from './Multi_images';
import Multichices from './Multichices'; // Import your Multichices component
import Radio from './Radio'; // Import your Radio component
import SingleImage from './SingleImage';
import styles from './styles';

interface RenderOptionsProps {
  questionType: string;
  questionIndex: number;
  isSavedw: boolean;
  options: any[];
  editMode: any; // Pass in editMode from your parent component
  userInputs: any; // Pass in userInputs from your parent component
  selectedOptionsByTyperadio: any; // Pass in selectedOptionsByTyperadio from your parent component
  selectedOptionsByType: any; // Pass in selectedOptionsByType from your parent component
  selectedOptionsByMultichoise: any; // Pass in selectedOptionsByMultichoise from your parent component
  selectedOptionsByTypeMultiCheckbox: any; // Pass in selectedOptionsByTypeMultiCheckbox from your parent component
  handleRadiobutton: any; // Pass in handleRadiobutton from your parent component
  handleCheckbox: any; // Pass in handleCheckbox from your parent component
  handleMultichoise: any; // Pass in handleMultichoise from your parent component
  handleMultiCheckboxToggle: any; // Pass in handleMultiCheckboxToggle from your parent component
  saveOptions: any; // Pass in toggleEditMode from your parent component
  handleTextInputChange: any; // Pass in handleTextInputChange from your parent component
  showSuccess: any; // Pass in showSuccess from your parent component
  setSaveClicked: any; // Pass in setSaveClicked from your parent component
}

const AllRanders: React.FC<RenderOptionsProps> = ({
  questionType,
  questionIndex,
  isSavedw,
  options,
  editMode,
  userInputs,
  selectedOptionsByTyperadio,
  selectedOptionsByType,
  selectedOptionsByMultichoise,
  selectedOptionsByTypeMultiCheckbox,
  handleRadiobutton,
  handleCheckbox,
  handleMultichoise,
  handleMultiCheckboxToggle,
  saveOptions,
  handleTextInputChange,
}) => {
  const isCurrentlyInEditMode =
    editMode[questionType]?.[questionIndex] || false;
  const savedAnswer = userInputs[questionType]?.[questionIndex];
  const selectedOptionIndices =
    selectedOptionsByTypeMultiCheckbox[questionType]?.[questionIndex] || [];
  const selectedOptionsText = selectedOptionIndices.map(
    (optionIndex: number) => options[optionIndex]?.option.option.answer,
  );
  const selectedOptionIndex = [
    selectedOptionsByTyperadio[questionType]?.[questionIndex],
    selectedOptionsByType[questionType]?.[questionIndex],
    selectedOptionsByMultichoise[questionType]?.[questionIndex],
  ].find(optionIndex => optionIndex !== undefined);
  const selectedOptionIndicesMultiCheckbox =
    selectedOptionsByTypeMultiCheckbox[questionType]?.[questionIndex] || [];
  const isAnyCheckboxSelected = selectedOptionIndicesMultiCheckbox.length > 0;

  const renderRadioButton = () => (
    <>
      {isCurrentlyInEditMode ? null : (
        <View style={{marginHorizontal: 24}}>
          {options.map((option: any, optionIndex: number) => (
            <View key={optionIndex}>
              <View style={styles.checkbox}>
                <Radio
                  item={option.option.option.answer}
                  index={optionIndex}
                  isSelected={
                    selectedOptionsByTyperadio[questionType]?.[
                      questionIndex
                    ] === optionIndex
                  }
                  onPress={() =>
                    handleRadiobutton(questionType, questionIndex, optionIndex)
                  }
                />
              </View>
            </View>
          ))}
          {selectedOptionIndex !== undefined && (
            <TouchableOpacity
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          )}
          <View style={styles.line} />
        </View>
      )}
      {isCurrentlyInEditMode && (
        // Display mode: Show saved option and edit button
        <View>
          <View style={styles.main_Radiobtn}>
            {selectedOptionsText !== undefined && (
              <View style={{marginHorizontal: 24}}>
                <Text
                  style={
                    styles.Multi_checkbox
                  }>{`Ans: ${userInputs[questionType]?.[questionIndex]}`}</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.radio_editImg}
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Image
                style={{width: 14, height: 14}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      )}
    </>
  );

  const renderCheckbox = () => (
    <>
      {isCurrentlyInEditMode ? null : (
        <>
          <View style={{marginHorizontal: 24}}>
            {options?.map((option: any, optionIndex: number) => (
              <View key={optionIndex}>
                <View
                  style={{
                    ...styles.checkbox,
                    // backgroundColor: 'red',
                  }}>
                  <Checkb
                    item={option.option.option.answer}
                    index={optionIndex}
                    isSelected={
                      selectedOptionsByType[questionType]?.[questionIndex] ===
                      optionIndex
                    }
                    onPress={() =>
                      handleCheckbox(questionType, questionIndex, optionIndex)
                    }
                  />
                </View>
              </View>
            ))}
            {selectedOptionIndex !== undefined && (
              <TouchableOpacity
                onPress={() => saveOptions(questionType, questionIndex)}>
                <Text style={styles.save}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.line} />
        </>
      )}
      {isCurrentlyInEditMode && (
        // Display mode: Show saved option and edit button
        <View>
          <View style={styles.main_Radiobtn}>
            {selectedOptionsText !== undefined && (
              <View style={{marginHorizontal: 24}}>
                <Text
                  style={
                    styles.Multi_checkbox
                  }>{`Ans: ${userInputs[questionType]?.[questionIndex]}`}</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.radio_editImg}
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Image
                style={{width: 14, height: 14}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      )}
    </>
  );

  const renderMultiChoice = () => (
    <>
      {isCurrentlyInEditMode ? null : (
        <>
          <View style={{marginHorizontal: 24}}>
            {options.map((option: any, optionIndex: number) => (
              <View key={optionIndex}>
                <View
                  style={{
                    ...styles.checkbox,
                    // backgroundColor: 'red',
                  }}>
                  <Multichices
                    item={option.option?.option?.answer}
                    index={optionIndex}
                    isSelected={
                      selectedOptionsByMultichoise[questionType]?.[
                        questionIndex
                      ] === optionIndex
                    }
                    onPress={() =>
                      handleMultichoise(
                        questionType,
                        questionIndex,
                        optionIndex,
                      )
                    }
                  />
                </View>
              </View>
            ))}
            {selectedOptionIndex !== undefined && (
              <TouchableOpacity
                onPress={() => saveOptions(questionType, questionIndex)}>
                <Text style={styles.save}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.line} />
        </>
      )}
      {isCurrentlyInEditMode && (
        // Display mode: Show saved option and edit button
        <View>
          <View style={styles.main_Radiobtn}>
            {selectedOptionsText !== undefined && (
              <View style={{marginHorizontal: 24}}>
                <Text
                  style={
                    styles.Multi_checkbox
                  }>{`Ans: ${userInputs[questionType]?.[questionIndex]}`}</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.radio_editImg}
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Image
                style={{width: 14, height: 14}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      )}
    </>
  );

  const renderMultiCheckbox = () => (
    <>
      {isCurrentlyInEditMode ? null : (
        <>
          <View style={{marginHorizontal: 24}}>
            {options.map((option: any, optionIndex: number) => (
              <View key={optionIndex}>
                <View
                  style={{
                    ...styles.checkbox,
                    // backgroundColor: 'red',
                  }}>
                  <Multcheck
                    item={option.option.option.answer}
                    index={optionIndex}
                    isSelected={
                      selectedOptionsByTypeMultiCheckbox[questionType]?.[
                        questionIndex
                      ]?.includes(optionIndex) ?? false
                    }
                    onPress={() => {
                      handleMultiCheckboxToggle(
                        questionType,
                        questionIndex,
                        optionIndex,
                      );
                    }}
                  />
                </View>
              </View>
            ))}
            {isAnyCheckboxSelected && (
              <TouchableOpacity
                onPress={() => saveOptions(questionType, questionIndex)}>
                <Text style={styles.save}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.line} />
        </>
      )}
      {isCurrentlyInEditMode && (
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 24, flexDirection: 'row'}}>
              <Text style={{...styles.checkbox_text, marginHorizontal: 4}}>
                ANS:
              </Text>
              {selectedOptionsText.map((optionText: string, index: number) => (
                <Text
                  style={{...styles.Multi_checkbox, marginLeft: 2}}
                  key={index}>{`${optionText}, `}</Text>
              ))}
            </View>
            <TouchableOpacity
              style={styles.radio_editImg}
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Image
                style={{width: 14, height: 14}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      )}
    </>
  );

  const renderImage = () => (
    <View style={{marginHorizontal: 24}}>
      <View style={{marginTop: 18}}>
        <SingleImage />
        <View style={styles.line} />
      </View>
    </View>
  );

  const renderMultiImage = () => (
    <View style={{}}>
      <View style={{}}>
        <Multi_images />

        <View style={{...styles.line, marginBottom: 8}} />
      </View>
    </View>
  );

  const renderNormalOrMultiline = () => (
    <>
      <View>
        {isCurrentlyInEditMode ? null : (
          <>
            <View style={styles.main_Normal_multi}>
              <TextInput
                value={savedAnswer}
                onChangeText={text =>
                  handleTextInputChange(text, questionIndex, questionType)
                }
                style={{flex: 1}}
                multiline={questionType === 'multiline'}
                numberOfLines={questionType === 'multiline' ? 4 : 1}
              />
              <TouchableOpacity
                onPress={() => saveOptions(questionType, questionIndex)}>
                <Text style={styles.save}>Save</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {isCurrentlyInEditMode && (
          <View style={styles.ans_edit_main}>
            <Text
              style={{
                ...styles.Multi_checkbox,
                marginRight: 24,
                flex: 1,
              }}>{`Ans: ${savedAnswer}`}</Text>
            <TouchableOpacity
              onPress={() => saveOptions(questionType, questionIndex)}>
              <Image
                style={{width: 14, height: 14, marginRight: 24}}
                source={imagePath.edditt}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.line} />
      </View>
    </>
  );

  return (
    <>
      <View>
        {questionType === 'radiobutton' && renderRadioButton()}
        {questionType === 'checkbox' && renderCheckbox()}
        {questionType === 'multiChoise' && renderMultiChoice()}
        {questionType === 'multicheckbox' && renderMultiCheckbox()}
        {questionType === 'image' && renderImage()}
        {questionType === 'multiimage' && renderMultiImage()}
        {(questionType === 'normal' || questionType === 'multiline') &&
          renderNormalOrMultiline()}
      </View>
    </>
  );
};

export default AllRanders;
