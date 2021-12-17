import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home:   undefined
  Consult: undefined
}

export type ScreenProps = NativeStackScreenProps<RootStackParamList>
