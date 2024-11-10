import * as React from 'react';
import {Button, Text} from './styles';
import {useTheme} from '@react-navigation/native';
import {ComponentProps} from 'react';
import {Button as ButtonType} from 'react-native-paper';

//Referencia: https://callstack.github.io/react-native-paper/button.html
export type Props = ComponentProps<typeof ButtonType> & {
  text: string;
  disabled?: boolean;
  onPress(): void;
  icon?: string;
  mode?: string;
  loading?: boolean;
  props?: Object;
  testID?: string;
};

const Main: React.FC<Props> = ({
  text,
  disabled = false,
  onPress = () => null,
  mode = 'contained',
  loading = false,
  testID,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <Button
      accessibilityLabel={testID}
      testID={testID}
      disabled={loading ? true : disabled}
      onPress={onPress}
      loading={loading}
      mode={mode}
      uppercase={false}
      style={{borderColor: colors.primary}}
      maxFontSizeMultiplier={2}
      {...props}>
      {/* <Text
        style={{color: mode != 'contained' ? colors.text : '#fff'}}
        disabled={disabled}> */}
      {text}
      {/* </Text> */}
    </Button>
  );
};

export default Main;
