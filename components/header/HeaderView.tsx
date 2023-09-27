import { useContext } from 'react';
import { COLOR } from '../../constants/COLOR';
import { ColorContext } from '../../store/context';
import Screen from '../layouts/Screen';
import Headline from '../typography/Headline';
import ButtonHeader from './ButtonHeader';
import CloseWhite from '../../assets/images/icon/icon-close-white.svg';
import Close from '../../assets/images/icon/icon-close.svg';

export default function HeaderView() {
  const {
    state: { theme },
  } = useContext(ColorContext);

  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'Header Title'} />
      <ButtonHeader onPressIconButton={() => {}} title={'Title'} />
      <ButtonHeader
        onPressIconButton={() => {}}
        title={'프로필 편집'}
        textButton={'완성'}
      />
      <ButtonHeader
        onPressIconButton={() => {}}
        title={'채팅 그룹명/설명 입력'}
        textButton={'저장'}
        textButtonColor={COLOR.SECONDARY}
      />
      <ButtonHeader
        onPressIconButton={() => {}}
        title={'채팅 그룹명/설명 입력'}
        leftIcon={theme === 'dark' ? <CloseWhite /> : <Close />}
      />
    </Screen>
  );
}
