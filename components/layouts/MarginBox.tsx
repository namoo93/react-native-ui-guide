import React from 'react';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import styled from 'styled-components/native';

interface MarginBoxProps extends SingleChildComponentProps {
  margin?: string;
}

function MarginBox({ children, margin = '0' }: MarginBoxProps) {
  return <MarginBoxWrap margin={margin}>{children}</MarginBoxWrap>;
}

export default MarginBox;

const MarginBoxWrap = styled.View<{ margin: string }>`
  ${({ margin }) => `margin: ${margin}`}
`;
