import { TouchableOpacity } from 'react-native';
import ButtonHeader from '../header/ButtonHeader';
import MarginBox from '../layouts/MarginBox';
import PaddingBox from '../layouts/PaddingBox';
import Screen from '../layouts/Screen';
import Headline from '../typography/Headline';
import Avatar from './Avatar';
import { WIDTH } from '../../constants/WIDTH';
import Paragraph from '../typography/Paragraph';

export default function AvatarView() {
  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'Avatar'} />

      <MarginBox margin={'20px'}>
        <Headline
          name={'SubTitleSmall'}
          text={'등록된 이미지 데이터가 없을시'}
          m={'0 0 10px 0'}
        />
        <Avatar src={''} />
        <PaddingBox padding={'5px'} />
        <Avatar src={''} size={50} radius={50} />
      </MarginBox>
      <MarginBox margin={'20px'}>
        <Headline
          name={'SubTitleSmall'}
          text={'데이터가 있을시 (임의의 예시 이미지 url)'}
          m={'0 0 10px 0'}
        />
        <TouchableOpacity onPress={() => {}} style={{ width: 44 }}>
          <Avatar src={'https://i.ibb.co/FBrkFw4/ex.jpg'} />
        </TouchableOpacity>
        <PaddingBox padding={'5px'} />
        <Avatar size={55} radius={5} src={'https://i.ibb.co/28Dp26w/ex2.jpg'} />
        <PaddingBox padding={'5px'} />
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row' }}>
          <Avatar
            src={'https://i.ibb.co/28Dp26w/ex2.jpg'}
            size={50}
            radius={50}
          />
          <PaddingBox padding={'0 10px'} style={{ flexWrap: 'wrap' }}>
            <Headline
              name={'SubTitleMedium'}
              m={'4px 0'}
              text={'Avatar Name'}
            />
            <Paragraph
              name={'Medium'}
              m={'0'}
              text={'Avatar Name is something text'}
            />
          </PaddingBox>
        </TouchableOpacity>
        <PaddingBox padding={'5px'} />
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row' }}>
          <Avatar
            src={'https://i.ibb.co/28Dp26w/ex2.jpg'}
            size={50}
            radius={50}
          />
          <PaddingBox
            padding={'0 10px'}
            style={{ width: WIDTH - 100, flexWrap: 'wrap' }}
          >
            <Headline
              name={'SubTitleMedium'}
              m={'4px 0'}
              text={'Avatar Name'}
            />
            <Paragraph
              name={'Medium'}
              m={'0'}
              text={
                'Avatar Name is something text 사용자 지정 소개글 2줄 이상 일시'
              }
            />
          </PaddingBox>
        </TouchableOpacity>
      </MarginBox>
    </Screen>
  );
}
