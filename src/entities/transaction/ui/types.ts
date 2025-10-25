import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { ITransaction } from '../model/ITransaction';

export type TransactionItemProps = {
  transaction: ITransaction;
} & ViewProps;
