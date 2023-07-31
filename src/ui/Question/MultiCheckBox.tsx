import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';

interface Option {
  id: string;
  answer: string;
  status: boolean;
}

interface Item {
  question: string;
  options: Option[];
}

interface MultiCheckBoxProps {
  item: Item;
}

const MultiCheckBox: React.FC<MultiCheckBoxProps> = ({
  item,
  selectitem = () => {},
}) => {
  const [checkedOptions, setCheckedOptions] = useState<Option[]>(item?.options);

  const onPressCheck = (option: Option) => {
    selectitem();
    const updatedOptions = checkedOptions.map(product =>
      option.id === product.id
        ? {...product, status: !product.status}
        : product,
    );
    setCheckedOptions(updatedOptions);
  };

  // Display item prop on mount (initial render)
  useEffect(() => {
    console.log('Item prop:', item);
  }, [item]);

  // Display checkedOptions state on update
  useEffect(() => {
    console.log('Checked Options:', checkedOptions);
  }, [checkedOptions]);

  return (
    <View style={{marginHorizontal: 24, marginTop: 16}}>
      <Text>{item?.question}</Text>

      {checkedOptions?.map((checkboxOption, index) => (
        <Checkbox.Item
          key={index}
          label={checkboxOption.answer}
          status={checkboxOption?.status ? 'checked' : 'unchecked'}
          onPress={() => onPressCheck(checkboxOption)}
        />
      ))}
    </View>
  );
};

export default MultiCheckBox;
