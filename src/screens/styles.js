import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: { textAlign: "center" },
    container: {
        paddingTop: 50
    },
    containerStartButton: {
        alignItems: "center",
        marginTop: 50
    },
    containerHead: {
        flexDirection: "row",
        alignItems: 'center',
        flex:1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    display: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    calculatorContainer: {
        flex: 9,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    previousResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
});

export default styles;
