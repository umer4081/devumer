import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';
import {moderateScale} from '../../styles/responsiveSize';
import {Data} from './Data';
import Checkb from '../Answers/Checkb';

const CheckBox = ({item, index, style, handlebutton = () => {}}: any) => {
  const [checked, setChecked] = useState();
  let data = {};
  if (item?.options) {
    data = item?.options;
  } else {
    data = item;
  }

  console.log(data, 'oooooo99');

  const handlePress = (index: number) => {
    handlebutton();
    setChecked(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <View>
      <View
        style={{
          marginHorizontal: moderateScale(24),
          marginTop: moderateScale(16),
        }}>
        <Text>{item?.question}</Text>
      </View>
      {data?.map((item: any, index: any) => {
        // console.log(item, 'fffffff...........');
        return (
          <>
            <Checkbox.Item
              label={item?.option?.answer}
              status={index === checked ? 'checked' : 'unchecked'}
              style={styles.checkboxItem}
              onPress={() => handlePress(index)}
            />
            {/* <Checkb */}
            {/* // label={item?.option?.answer}
            // status={index === checked ? 'checked' : 'unchecked'}
            // style={styles.checkboxItem}
            // onPress={() => handlePress(index)}
            /> */}
          </>
        );
      })}
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkboxItem: {
    marginHorizontal: 24,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
});
