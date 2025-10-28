import { RootStackNavigationTypes } from '@/src/routes/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';

type Navigation = NativeStackNavigationProp<RootStackNavigationTypes>;

export type PropTypes = {
  navigation?: Navigation;
  route?: any;
};

