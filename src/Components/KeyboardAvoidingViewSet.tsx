import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {moderateScale} from '../styles/responsiveSize';

interface KeyboardAvoidingViewSetProp {
  children: JSX.Element | JSX.Element[];
  isViewOffSet?: boolean;
  viewOffset?: number;
  isOnlyViewOffset?: boolean;
}
const KeyboardAvoidingViewSet = ({
  children,
  isViewOffSet = true,
  viewOffset = 0,
  isOnlyViewOffset = false,
}: KeyboardAvoidingViewSetProp) => {
  const viewref = useRef<View>(null);
  const [trackedViewOffset, settrackedViewOffset] = useState(-1);

  const measure = () => {
    viewref.current?.measure((x, y, width, height, pageX, pageY) => {
      trackedViewOffset == -1 && pageY < height && settrackedViewOffset(pageY);
    });
  };
  return (
    <View style={{flex: 1}} ref={viewref} onLayout={measure}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={
          isOnlyViewOffset
            ? viewOffset
            : isViewOffSet
            ? Platform.OS == 'ios'
              ? trackedViewOffset + viewOffset
              : 0
            : undefined
        }>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default KeyboardAvoidingViewSet;

const styles = StyleSheet.create({});
