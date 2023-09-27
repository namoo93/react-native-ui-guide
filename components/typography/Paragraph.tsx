import styled from 'styled-components/native';
import { light, dark } from '../../theme';
import { useContext, useMemo } from 'react';
import { ColorContext } from '../../store/context';

type ParagraphProps = {
  p?: string;
  m?: string;
  name: string;
  text: string;
};

export default function Paragraph({ p, m, name, text }: ParagraphProps) {
  const {
    state: { theme },
  } = useContext(ColorContext);

  const color = useMemo(() => {
    return theme === 'dark' ? `${dark.colors.text}` : `${light.colors.text}`;
  }, [theme]);
  const background = useMemo(() => {
    return theme === 'dark'
      ? `${dark.colors.background}`
      : `${light.colors.background}`;
  }, [theme]);

  return (
    <>
      {name === 'Large' && (
        <Large color={color} background={background} p={p} m={m}>
          {text}
        </Large>
      )}
      {name === 'Medium' && (
        <Medium color={color} background={background} p={p} m={m}>
          {text}
        </Medium>
      )}
      {name === 'Small' && (
        <Small color={color} background={background} p={p} m={m}>
          {text}
        </Small>
      )}
    </>
  );
}

const Large = styled.Text<StyleProps>`
  font-size: 16px;
  font-weight: 400;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const Medium = styled.Text<StyleProps>`
  font-size: 14px;
  font-weight: 400;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const Small = styled.Text<StyleProps>`
  font-size: 12px;
  font-weight: 400;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;
