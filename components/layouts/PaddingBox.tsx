import React from 'react';
import SingleChildComponentProps from '../../types/SingleChildComponentProps';
import styled from 'styled-components/native';

interface PaddingBoxProps extends SingleChildComponentProps {
  padding?: string;
}

function PaddingBox({ children, padding = '0' }: PaddingBoxProps) {
  return <PaddingBoxWrap padding={padding}>{children}</PaddingBoxWrap>;
}

export default PaddingBox;

const PaddingBoxWrap = styled.View<{ padding: string }>`
  ${({ padding }) => `padding: ${padding}`}
`;
