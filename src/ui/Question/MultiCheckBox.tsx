// import React, {useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
// import {Checkbox} from 'react-native-paper';

// interface Option {
//   id: string;
//   answer: string;
//   status: boolean;
// }

// interface Item {
//   question: string;
//   options: Option[];
// }

// interface MultiCheckBoxProps {
//   item: Item;
//   selectitem?: () => void;
// }

// interface CheckBoxItemProps {
//   option: Option;
//   onPress: () => void;
// }

// const CheckBoxItem: React.FC<CheckBoxItemProps> = ({option, onPress}) => {
//   return (
//     <Checkbox.Item
//       label={option.answer}
//       status={option.status ? 'checked' : 'unchecked'}
//       onPress={onPress}
//     />
//   );
// };

// const MultiCheckBox: React.FC<MultiCheckBoxProps> = ({
//   item,
//   selectitem = () => {},
// }) => {
//   const [checkedOptions, setCheckedOptions] = useState<Option[]>(item?.options);

//   const onPressCheck = (option: Option) => {
//     selectitem();
//     const updatedOptions = checkedOptions.map(product =>
//       option.id === product.id
//         ? {...product, status: !product.status}
//         : product,
//     );
//     setCheckedOptions(updatedOptions);
//   };

//   // Display item prop on mount (initial render)
//   useEffect(() => {
//     console.log('Item prop:', item);
//   }, [item]);

//   // Display checkedOptions state on update
//   useEffect(() => {
//     console.log('Checked Options:', checkedOptions);
//   }, [checkedOptions]);

//   return (
//     <View style={{marginHorizontal: 24, marginTop: 16}}>
//       <Text>{item?.question}</Text>

//       {checkedOptions?.map((option, index) => (
//         <CheckBoxItem
//           key={index}
//           option={option}
//           onPress={() => onPressCheck(option)}
//         />
//       ))}
//     </View>
//   );
// };

// export default MultiCheckBox;

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../styles/responsiveSize';
import {Checkbox} from 'react-native-paper';

const MultiCheckBox = ({item, index, selectitem = () => {}}: any) => {
  const [checkedOptions, setCheckedOptions] = useState(
    item?.options ? item?.options : item,
  );

  const onPressCheck = (item: any) => {
    selectitem();
    console.log(item, 'ddd');

    let updatedOptions = checkedOptions.map((option: any) => {
      if (item.id === option.id) {
        return {...option, status: !option.status};
      }
      return option;
    });
    setCheckedOptions(updatedOptions);

    console.log(updatedOptions, '3333======ss------');
  };

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
        // backgroundColor: 'red',
      }}>
      <Text>{item?.question}</Text>

      {checkedOptions?.map((option: any, index: number) => {
        console.log(option, 'hjhjhj');
        return (
          <React.Fragment key={index}>
            <Checkbox.Item
              label={option.answer}
              status={option?.status ? 'checked' : 'unchecked'}
              // onPress={() => {
              //   // onPressCheck(option);

              // }}
              onPress={() => onPressCheck(option)}
            />
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default MultiCheckBox;
