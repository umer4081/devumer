import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../styles/responsiveSize';

const MultiChoise = ({
  item,
  index,
  style,
  handlebuttonMulti = () => {},
}: any) => {
  const [selectedindex, setselectedindex] = useState<any>();
  // const [checked, setChecked] = useState();
  // const data = item?.options;

  console.log(data, 'item');

  let data = {};
  if (item?.options) {
    data = item?.options;
  } else {
    data = item;
  }

  console.log(data, 'oooooo888');

  const handlePress = (index: number) => {
    handlebuttonMulti();
    setselectedindex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <Text>{item?.question}</Text>

      {data?.map((item: any, index: number) => {
        return (
          <>
            <TouchableOpacity
              style={
                index == selectedindex ? styles.selected : styles.unselected
              }
              onPress={() => handlePress(index)}>
              <Text style={{color: 'white'}}>{item.option?.answer}</Text>
            </TouchableOpacity>

            {console.log(item, 'MUltichoisee================000')}
          </>
        );
      })}
    </View>
  );
};

export default MultiChoise;

const styles = StyleSheet.create({
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
});
