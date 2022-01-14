import {StyleSheet} from 'react-native';


  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        padding: 8
    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 5,
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOpacity: 0.25
    },
    imge: {
        width: 250,
        height: 250
    },
    wraptext: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center'
    }
  });

export default styles;
