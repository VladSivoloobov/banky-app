import { colors, fonts } from '@/shared/const';
import { useInject } from '@/shared/hooks/useInject';
import { FontService } from '@/shared/lib';
import { StyleSheet, Text } from 'react-native';
import { UTextProps } from './types';

export default function UText({
  style,
  size = 'm',
  weight = 400,
  ...props
}: UTextProps) {
  const fontService = useInject(FontService);

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: fonts[size],
          fontFamily: fontService.getFont('Inter', weight),
        },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
