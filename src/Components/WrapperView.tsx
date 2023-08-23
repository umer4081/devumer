import React from 'react';
import {StatusBar, StatusBarStyle, StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../styles/colors';
import Loader from './Loader';

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  isLoading?: boolean;
  statusBarColor?: string;
  bodyColor?: string;
  barStyle?: StatusBarStyle;
  removeTopInset?: boolean;
  removeBottomInset?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}
const WrapperView = ({
  children,
  statusBarColor = 'transparent',
  bodyColor = 'transparent',
  barStyle = 'dark-content',
  removeTopInset = false,
  removeBottomInset = false,
  isLoading = false,
  wrapperStyle
}: WrapperProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bodyColor,
        paddingTop: removeTopInset ? 0 : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
      <StatusBar
        backgroundColor={statusBarColor}
        translucent
        barStyle={barStyle}
      />
      <View
        style={{
          backgroundColor: bodyColor,
          flex: 1,
          ...(typeof wrapperStyle == 'object' && wrapperStyle),
        }}>
        {children}
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default WrapperView;
