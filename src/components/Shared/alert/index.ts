import Toast from 'react-native-toast-message'
import { alertType } from './type'

export const alert = ({ message, type, title }: alertType) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
  })
}

alert.hide = Toast.hide
