import React, {ComponentType} from 'react';
import {StyleSheet, View} from 'react-native';
import NormalQuestion from './NormalQuestion';
import MultilineQuestion from './MultilineQuestion';
import MultiChoise from './MultiChoise';
import CheckBox from './CheckBox';
import MultiCheckBox from './MultiCheckBox';
import Radiobuttons from './Radiobuttons';
import Image from './Image';
import MultiImage from './MultiImage';

interface QuestionRenderProps {
  item: {
    type: string;
    // Add other properties of the item here
  };
  index: number;
}
//

const componentMap: Record<string, ComponentType<any>> = {
  normal: NormalQuestion,
  multiline: MultilineQuestion,
  multiChoise: MultiChoise, // 'multiChoise' should match the type in Data
  checkbox: CheckBox, // Corrected 'checkbox' to match the type in Data
  multicheckbox: MultiCheckBox, // 'multicheckbox' should match the type in Data
  radiobutton: Radiobuttons,
  multiimage: MultiImage,
  image: Image,
};

const QuestionRender: React.FC<QuestionRenderProps> = ({item, index}) => {
  const QuestionComponent = componentMap[item.type] || View;

  return <QuestionComponent item={item} index={index} />;
};

export default QuestionRender;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import NormalQuestion from './NormalQuestion';
// import MultilineQuestion from './MultilineQuestion';
// import MultiChoise from './MultiChoise';
// import CheckBox from './CheckBox';
// import MultiCheckBox from './MultiCheckBox';
// import Radiobuttons from './Radiobuttons';
// import Image from './Image';
// import MultiImage from './MultiImage';

// const QuestionRender = ({item, index}: any) => {
//   const questionoptions = () => {
//     switch (item.type) {
//       case 'normal': {
//         return <NormalQuestion item={item} index={index} />;
//       }
//       case 'multiline': {
//         return <MultilineQuestion item={item} index={index} />;
//       }
//       case 'multiChoise': {
//         return <MultiChoise item={item} index={index} />;
//       }
//       case 'checkbox': {
//         return <CheckBox item={item} index={index} />;
//       }
//       case 'multicheckbox': {
//         return <MultiCheckBox item={item} index={index} />;
//       }
//       case 'radiobutton': {
//         return <Radiobuttons item={item} index={index} />;
//       }

//       case 'multiimage': {
//         return <MultiImage item={item} index={index} />;
//       }
//       case 'image': {
//         return <Image item={item} index={index} />;
//       }
//     }
//   };
//   return <View>{questionoptions()}</View>;
// };

// export default QuestionRender;

// const styles = StyleSheet.create({});
