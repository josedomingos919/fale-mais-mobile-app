import Toast from 'react-native-toast-message'
import { AlertType } from './type'

export const alert = ({ message, type, title }: AlertType) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
  })
}

alert.hide = Toast.hide
