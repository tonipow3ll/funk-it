import React from 'react';
import { Pressable, ViewStyle, StyleProp } from 'react-native';
interface Props {
  buttonText: string,
  callback: Function,
  outline?: boolean,
  disabled?: boolean,
  styles?: StyleProp<ViewStyle>,
};

const PrimaryButton: React.FC<Props> = (props: Props) => {
  const {
    buttonText,
    callback,
    outline,
    disabled,
    styles,
  } = props;

  if (outline) {
    return (
      <Pressable
        disabled={disabled}
        style={({ pressed }) => {
          if (pressed) {
            return [inputStyle.primaryButton, inputStyle.outlineButton, inputStyle.pressed, styles];
          } else {
            return [inputStyle.primaryButton, inputStyle.outlineButton, styles];
          }
        }}
        onPress={() => callback()}
      >
        <RobotoText bold={true}>{buttonText}</RobotoText>
      </Pressable>
    )
  }
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => {
        if (pressed) {
          return [inputStyle.primaryButton, inputStyle.pressed, styles];
        } else {
          return [inputStyle.primaryButton, styles];
        }
      }}
      onPress={() => callback()}
    >
      <RobotoText  bold={true}>{buttonText}</RobotoText>
    </Pressable>
  );
};

export default PrimaryButton;

PrimaryButton.defaultProps = {
  outline: false,
  disabled: false,
  styles: undefined,
}

import { StyleSheet } from 'react-native';
import RobotoText from './Global/RobotoText';

const inputStyle = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#CB1406',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  outlineButton: {
    backgroundColor: '#FAFAFA',
    borderColor: '#CB1406',
    borderWidth: 1,
  },
  pressed: {
    backgroundColor: "#e52e20",
  }
});