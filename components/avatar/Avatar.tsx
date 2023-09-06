import styled from 'styled-components/native';
import { COLOR } from '../../constants/COLOR';

import Profile from '../../assets/images/icon/check-on.svg';

interface Props {
  size?: number;
  iconSize?: number;
  src?: string;
}

const IcContainer = styled.View<{ size?: number }>`
  ${({ size }) => (size ? `height: ${size}px; width: ${size}px;` : '')};
  background: ${COLOR.VIOLET};
`;

const Img = styled.Image<{ iconSize?: number }>`
  ${({ iconSize }) =>
    iconSize
      ? `height: ${iconSize}px; width: ${iconSize}px;`
      : 'height: inherit; width: inherit;'};
`;

export const Avatar = ({ size = 44 }: Props) => {
  // if (!!src && !src?.includes('?')) {
  //   src += `?w=${size * 2}&h=${size * 2}`;
  // }
  return (
    <>
      {/* {!src?.length ? ( // || src === 'private' */}
      {/* <IcContainer size={size}>
        <Profile width={160} height={60} />
      </IcContainer> */}
      {/* // ) : ( */}
      <Img
        size={size}
        source={require('/assets/images/icon/check-disabled.svg')}
      />
      {/* )}  */}
    </>
  );
};
