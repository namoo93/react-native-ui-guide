import React from 'react';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface PaddingBoxProps extends SingleChildComponentProps {
  padding?: string;
  style?: StyleProp<ViewStyle>;
}

function PaddingBox({ children, padding = '0', style }: PaddingBoxProps) {
  return (
    <PaddingBoxWrap padding={padding} style={style}>
      {children}
    </PaddingBoxWrap>
  );
}

export default PaddingBox;

const PaddingBoxWrap = styled.View<{ padding: string }>`
  ${({ padding }) => `padding: ${padding}`}
`;
