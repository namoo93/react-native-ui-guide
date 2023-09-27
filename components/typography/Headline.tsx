import styled from 'styled-components/native';
import { light, dark } from '../../theme';
import { useContext, useMemo } from 'react';
import { ColorContext } from '../../store/context';

type HeadlineProps = {
  p?: string;
  m?: string;
  name: string;
  text: string;
};
type StyleProps = {
  p?: string;
  m?: string;
  color: string;
  background: string;
};

export default function Headline({ p, m, name, text }: HeadlineProps) {
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
      {name === 'H1' && (
        <H1 color={color} background={background} p={p} m={m}>
          {text}
        </H1>
      )}
      {name === 'H2' && (
        <H2 color={color} background={background} p={p} m={m}>
          {text}
        </H2>
      )}
      {name === 'H3' && (
        <H3 color={color} background={background} p={p} m={m}>
          {text}
        </H3>
      )}
      {name === 'H4' && (
        <H4 color={color} background={background} p={p} m={m}>
          {text}
        </H4>
      )}
      {name === 'H5' && (
        <H5 color={color} background={background} p={p} m={m}>
          {text}
        </H5>
      )}
      {name === 'H6' && (
        <H6 color={color} background={background} p={p} m={m}>
          {text}
        </H6>
      )}
      {name === 'SubTitleLarge' && (
        <SubTitleLarge color={color} background={background} p={p} m={m}>
          {text}
        </SubTitleLarge>
      )}
      {name === 'SubTitleMedium' && (
        <SubTitleMedium color={color} background={background} p={p} m={m}>
          {text}
        </SubTitleMedium>
      )}
      {name === 'SubTitleSmall' && (
        <SubTitleSmall color={color} background={background} p={p} m={m}>
          {text}
        </SubTitleSmall>
      )}
    </>
  );
}

const H1 = styled.Text<StyleProps>`
  font-size: 38px;
  font-weight: 600;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const H2 = styled.Text<StyleProps>`
  font-size: 30px;
  font-weight: 700;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const H3 = styled.Text<StyleProps>`
  font-size: 26px;
  font-weight: 700;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const H4 = styled.Text<StyleProps>`
  font-size: 24px;
  font-weight: 700;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const H5 = styled.Text<StyleProps>`
  font-size: 20px;
  font-weight: 700;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const H6 = styled.Text<StyleProps>`
  font-size: 20px;
  font-weight: 600;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const SubTitleLarge = styled.Text<StyleProps>`
  font-size: 18px;
  font-weight: 600;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const SubTitleMedium = styled.Text<StyleProps>`
  font-size: 16px;
  font-weight: 600;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;

const SubTitleSmall = styled.Text<StyleProps>`
  font-size: 14px;
  font-weight: 600;
  ${({ color }) => `color: ${color};`}
  ${({ background }) => `background: ${background};`}
  ${(props) => (props.m ? `margin: ${props.m}` : 'margin: 0')}
  ${(props) => (props.p ? `padding: ${props.p}` : 'padding: 0')}
`;
