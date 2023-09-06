import ButtonHeader from '../header/ButtonHeader';
import Screen from '../layouts/Screen';
import { H1, H2, H3, H4, H5, H6 } from './Headline';

export default function TypographyView() {
  return (
    <Screen>
      <ButtonHeader />
      <H2 m={'10px 15px'}>Typography</H2>

      <H1>H1 Headline</H1>
      <H2>H2 Headline</H2>
      <H3>H3 Headline</H3>
      <H4>H4 Headline</H4>
      <H5>H5 Headline</H5>
      <H6>H6 Headline</H6>
    </Screen>
  );
}
