import { Platform } from 'react-native'

const fonts = {
    EXTRA_BOLD: Platform.OS === "ios" ? 'Poppins-ExtraBold' : 'Poppins-ExtraBold',
    BOLD: Platform.OS === "ios" ? 'Poppins-Bold' : 'Poppins-Bold',
    LIGHT: Platform.OS === "ios" ? 'Poppins-Light' : 'Poppins-Light',
    MEDIUM: Platform.OS === "ios" ? 'Poppins-Medium' : 'Poppins-Medium',
    REGULAR: Platform.OS === "ios" ? 'Poppins-Regular' : 'Poppins-Regular',
    SEMIBOLD: Platform.OS === "ios" ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
}

export default fonts