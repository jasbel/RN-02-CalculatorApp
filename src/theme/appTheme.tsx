import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bkg: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerCalculator: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5) ',
        fontSize: 30,
        textAlign: 'right'
    },
    
});