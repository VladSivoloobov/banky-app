import cardBackgroundImage from '@/shared/assets/images/card-background.png';
import virtualCardBackgroundImage from '@/shared/assets/images/virtual-card-background.png';
import { margins } from '@/shared/const';
import { LogoIcon } from '@/shared/icons';
import { ImageBackground, StyleSheet, View } from 'react-native';
import UText from '../utext';
import { CardProps } from './types';

export default function Card({
  balance,
  cardNumber,
  cardType = 'debit',
}: CardProps) {
  return (
    <ImageBackground
      blurRadius={20}
      source={
        cardType === 'debit' ? cardBackgroundImage : virtualCardBackgroundImage
      }
      style={[styles.card]}
    >
      <LogoIcon style={styles.logo} />
      <UText size='xm' weight={600}>
        ${balance}
      </UText>
      <View style={styles.cardInfo}>
        <UText size='xs'>{cardType === 'debit' ? 'Debit' : 'Virtual'}</UText>
        <UText size='xs'>•• 4385</UText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 13,
  },
  card: {
    height: 98,
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    padding: margins.xm,
    backdropFilter: 'blur',
    resizeMode: 'cover',
    maxWidth: 142,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    marginTop: margins.xs,
  },
});
