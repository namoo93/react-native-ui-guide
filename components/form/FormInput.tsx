import { Text, View, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { dark, light } from '../../theme';
import { ColorContext } from '../../store/context';
import { COLOR } from '../../constants/COLOR';

type FormInputProps = {
  register?: () => void;
  setValue?: () => void;
  reset?: () => void;
  handleSubmit?: () => void;
  onSubmit?: () => void;
  label: string;
  placeholder: string;
  displayLabel: boolean;
  p?: string | number;
};
type defaultValuesProps = {
  textValue: String;
};

export const FormInput = ({
  // register,
  // setValue,
  // reset,
  // onSubmit,
  label,
  displayLabel,
  placeholder,
  p,
}: FormInputProps) => {
  // 폼 셋팅
  const {
    register,
    setValue,
    onSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm(defaultValues);

  const defaultValues: defaultValuesProps = {
    textValue: '',
  };

  // const onSubmit = (data) => {
  //   handleSubmit(data);
  // };

  // 테마 셋팅
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
    <View
      style={[
        styles({ displayLabel, p }).container,
        {
          backgroundColor: background,
          borderBottomColor: color,
        },
      ]}
    >
      <Text style={[styles({ displayLabel, p }).label, { color: color }]}>
        {label}
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles({ displayLabel, p }).input, { color: color }]}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={`${COLOR.LIGHT_GRAY}`}
          />
        )}
        name={label}
      />
      {errors.textValue && <Text>This is required.</Text>}

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

const styles = ({ displayLabel, p }: { displayLabel: boolean; p: string | number; }) =>
  StyleSheet.create({
    container: {
      padding: p ? `${p}` : `0`,
      borderBottomWidth: 1,
    },
    input: {
      height: 40,
      padding: 8,
    },
    label: {
      opacity: displayLabel ? 1 : 0,
      position: displayLabel ? 'relative' : 'absolute',
    },
  });
