import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import LottieView from 'lottie-react-native';

const welcome = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/welcome.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
             <View style={styles.title}><Text >HI THERE !!🫡 </Text></View>
            <Text style={styles.text}>
            START YOUR DAY BY KNOW HOW MUCH CALORIE YOU NEED AND HOW MUCH TO BURN
            AND WORKOUT EVERYDAY🙌
            </Text>
        </View>
    );
};

export default welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    lottie: {
        width: 300,
        height: 400,
    },
    title: {
        fontWeight:"900",
        color:"#138D75 "
    
    }

});


