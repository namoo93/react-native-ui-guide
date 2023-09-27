import React from 'react';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface MarginBoxProps extends SingleChildComponentProps {
  margin?: string;
  style?: StyleProp<ViewStyle>;
}

function MarginBox({ children, margin = '0', style }: MarginBoxProps) {
  return (
    <MarginBoxWrap margin={margin} style={style}>
      {children}
    </MarginBoxWrap>
  );
}

export default MarginBox;

const MarginBoxWrap = styled.View<{ margin: string }>`
  ${({ margin }) => `margin: ${margin}`}
`;
