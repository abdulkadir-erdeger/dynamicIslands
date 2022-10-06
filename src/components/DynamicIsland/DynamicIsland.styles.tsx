import { StyleSheet,Dimensions  } from 'react-native'

export const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const dIWidth = SCREEN_WIDTH / 3;
export const dIFinalyWidth = SCREEN_WIDTH * 0.9;

export default StyleSheet.create({
    container: {
        height: 40,
        width: dIWidth,
        borderRadius: 20,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginHorizontal: 16,
      },
      imageItem: {
        width: 16,
      },
      textContainer: { flex: 1, marginHorizontal: 16 },
      firstLineText: {
        color: '#7B7B7D',
        fontSize: 16,
      },
      secondLineText: {
        color: '#fff',
        fontSize: 18,
      },
})