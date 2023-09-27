import ButtonHeader from '../header/ButtonHeader';
import Screen from '../layouts/Screen';
import Headline from './Headline';
import Paragraph from './Paragraph';

export default function TypographyView() {
  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'Typography'} />

      <Headline name={'H3'} m={'20px 10px 0'} text={'해딩 텍스트'} />
      <Headline name={'H1'} m={'5px 10px'} text={'H1 Headline'} />
      <Headline name={'H2'} m={'5px 10px'} text={'H2 Headline'} />
      <Headline name={'H3'} m={'5px 10px'} text={'H3 Headline'} />
      <Headline name={'H4'} m={'5px 10px'} text={'H4 Headline'} />
      <Headline name={'H5'} m={'5px 10px'} text={'H5 Headline'} />
      <Headline name={'H6'} m={'5px 10px'} text={'H6 Headline'} />
      <Headline
        name={'SubTitleLarge'}
        m={'5px 10px'}
        text={'SubTitleLarge Headline'}
      />
      <Headline
        name={'SubTitleMedium'}
        m={'5px 10px'}
        text={'SubTitleMedium Headline'}
      />
      <Headline
        name={'SubTitleSmall'}
        m={'5px 10px'}
        text={'SubTitleSmall Headline'}
      />
      <Headline
        name={'SubTitleSmall'}
        m={'5px 10px'}
        text={
          'SubTitleSmall Headline SubTitleSmall 1줄 넘을시 1줄 넘을시  1줄 넘을시  1줄 넘을시  1줄 넘을시  1줄 넘을시  1줄 넘을시  1줄 넘을시 '
        }
      />

      <Headline name={'H3'} m={'20px 10px 0'} text={'일반 텍스트'} />
      <Paragraph name={'Large'} text={'Large'} m={'5px 10px'} />
      <Paragraph name={'Medium'} text={'Medium'} m={'5px 10px'} />
      <Paragraph name={'Small'} text={'Small'} m={'5px 10px'} />
      <Paragraph
        name={'Small'}
        text={
          'Small 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시 1줄 넘을시'
        }
        m={'5px 10px'}
      />
    </Screen>
  );
}
