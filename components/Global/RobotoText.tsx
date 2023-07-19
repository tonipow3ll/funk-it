import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../styles/global';

interface Props {
  children: any,
  bold?: boolean,
  medium?: boolean,
  h4?: boolean,
  h3?: boolean,
  h2?: boolean,
  h1?: boolean,
  style?: any[],
  center?: boolean,
  left?: boolean,
  right?: boolean,
};

const RobotoText: React.FC<Props> = (props: Props) => {
  const {
    children,
    bold,
    medium,
    h4,
    h3,
    h2,
    h1,
    style,
    center,
    left,
    right,
  } = props;

  return (
    <Text
      style={[
        globalStyles.robotoRegular,
        globalStyles.p,
        (bold && globalStyles.robotoBold),
        (medium && globalStyles.robotoMedium),
        (h4 && globalStyles.h4),
        (h3 && globalStyles.h3),
        (h2 && globalStyles.h2),
        (h1 && globalStyles.h1),
        (center && globalStyles.tCenter),
        (left && globalStyles.tLeft),
        (right && globalStyles.tRight),
        (style && (style as []))
      ]}
    >
      {children}
    </Text>
  );
};

RobotoText.defaultProps = {
  bold: false,
  medium: false,
  h4: false,
  h3: false,
  h2: false,
  h1: false,
  style: [],
  center: false,
  left: false,
  right: false,
}

export default RobotoText;