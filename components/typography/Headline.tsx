import styled from 'styled-components/native';
import { light, dark } from '../../theme';

type HeadlineProps = {
  p?: string;
  m?: string;
  theme: string;
};

export const H1 = styled.Text<HeadlineProps>`
  font-size: 38px;
  font-weight: 600;
  ${(props) =>
    props.theme === 'dark'
      ? `color: ${dark.colors.text}`
      : `color:${light.colors.text}`},
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

export const H2 = styled.Text<HeadlineProps>`
  font-size: 30px;
  font-weight: 700;
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
   ${({ theme }) =>
    theme === 'dark'
      ? `color: ${dark.colors.text}`
      : `color:${light.colors.text}`},
`;

export const H3 = styled.Text<HeadlineProps>`
  font-size: 26px;
  font-weight: 700;
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

export const H4 = styled.Text<HeadlineProps>`
  font-size: 24px;
  font-weight: 700;
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

export const H5 = styled.Text<HeadlineProps>`
  font-size: 20px;
  font-weight: 700;
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

export const H6 = styled.Text<HeadlineProps>`
  font-size: 20px;
  font-weight: 600;
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;
