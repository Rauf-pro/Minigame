import {Text, StyleSheet, Platform} from 'react-native';



function Title({children}) {
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: 2,
        // borderWidth: Platform.OS === 'android' ? 2 : 0,      //  Platform specific code
        borderWidth: Platform.select({ios: 0, android: 2 }),    // Platform with select method 
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})