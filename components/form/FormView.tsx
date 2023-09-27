import { Button } from '../button/Button';
import ButtonHeader from '../header/ButtonHeader';
import MarginBox from '../layouts/MarginBox';
import Screen from '../layouts/Screen';
import Headline from '../typography/Headline';
import { FormInput } from './FormInput';
import { useForm } from 'react-hook-form';

export default function AvatarView() {
  const { handleSubmit, reset } = useForm();
  const handleOnPress = () => {
    reset({
      textValue: 'is reset',
    });
  };

  return (
    <Screen topItem={<ButtonHeader />}>
      <Headline name={'H2'} m={'10px 15px'} text={'Form'} />
      <MarginBox margin="20px">
        <FormInput
          label={'label'}
          placeholder={'placeholder1'}
          displayLabel={true}
        />
      </MarginBox>
      <MarginBox margin="10px 20px">
        <FormInput
          register={() => {}}
          setValue={() => {}}
          reset={() => {}}
          handleSubmit={() => {}}
          label={'label'}
          displayLabel={true}
          placeholder={'placeholder2'}
        />
      </MarginBox>
      <MarginBox margin="10px 20px">
        <FormInput
          register={() => {}}
          setValue={() => {}}
          reset={() => {}}
          handleSubmit={() => {}}
          label={'label'}
          displayLabel={false}
          placeholder={'placeholder3'}
        />
      </MarginBox>

      <MarginBox margin="10px 20px">
        <Button
          onPress={() => {
            reset({ textValue: 'is reset' });
          }}
          label={'reset'}
        />
      </MarginBox>
      <MarginBox margin="10px 20px">
        <Button onPress={() => {}} label={'submit'} />
      </MarginBox>
    </Screen>
  );
}
