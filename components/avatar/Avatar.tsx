import styled from 'styled-components/native';
import { COLOR } from '../../constants/COLOR';

interface Props {
  size?: number | any;
  src: string;
  radius?: number;
}

const IcContainer = styled.View<{ size?: number; radius?: number }>`
  ${({ size }) => (size ? `height: ${size}px; width: ${size}px;` : '')};
  background: ${COLOR.VIOLET};
  ${({ radius }) =>
    radius ? `  border-radius: ${radius};` : `  border-radius: 10;`}
  border-width: 1;
  border-color: ${COLOR.PALE_GRAY};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const IconImg = styled.Image`
  width: 65;
  height: 88;
  transform: scale(0.4);
`;

const Img = styled.Image`
  background-size: cover;
  width: inherit;
  height: inherit;
`;

export default function Avatar({ size = 44, src = '', radius }: Props) {
  // if (!!src && !src?.includes('?')) {
  //   src += `?w=${size * 2}&h=${size * 2}`;
  // }
  return (
    <>
      {src !== '' ? ( // || src === 'private'
        <IcContainer size={size} radius={radius}>
          <Img source={{ uri: src }} alt="avatar image" />
        </IcContainer>
      ) : (
        <IcContainer size={size} radius={radius}>
          <IconImg
            source={require('../../assets/images/anychat-icon.png')}
            alt="avatar icon"
          />
        </IcContainer>
      )}
    </>
  );
}
