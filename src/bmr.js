import { StyleSheet, Button, View, Text, TextInput, Switch, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

const Separator = () => (
    <View style={styles.separator} />
);

const BMR = () => {
    const [height, heightChange] = useState('');
    const [weight, weightChange] = useState('');
    const [age, ageChange] = useState('');
    const [bmr, bmrChange] = useState('');
    const [gender, genderChange] = useState(false);
    const [workout, workoutChange] = useState(false);
    const [description, setDescription] = useState('');

    function calBMR() {
        const numHeight = parseFloat(height);
        const numWeight = parseFloat(weight);
        const numAge = parseFloat(age);

        if (isNaN(numHeight) || isNaN(numWeight) || isNaN(numAge)) {
            bmrChange('Invalid input');
            return;
        }

        let calculatedBMR;
        if (gender) {
            calculatedBMR = ((88.362 + (13.397 * numWeight) + (4.799 * numHeight) + (5.677 * numAge)) * (workout ? 1.5 : 1.2));
        } else {
            calculatedBMR = ((447.539 + (9.247 * numWeight) + (3.098 * numHeight) + (4.330 * numAge)) * (workout ? 1.12 : 1.2));
        }

        bmrChange(calculatedBMR.toFixed(2)); // Setting BMR with 2 decimal places

        if (bmr < 1300) {
            setDescription("Your per day Calorie intake is already very less 🤕.... Focus on your eating.. you will be fine.❤️")
        }
        else if (bmr > 1400 && bmr < 1800) {
            setDescription(" .... Focus on your eating and burn ⭐400 - 500⭐ calories to maintain a good phisique .. you will be fine.❤️")
        }
        else if (bmr > 1800) {
            setDescription("burn ⭐500 - 650⭐ calorie to maintain a good phisique .. you will be fine.❤️")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Calorie intake and burnout per Day </Text>
            <Text style={styles.nt}>Height (in meter)</Text>
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={height => heightChange(height)}
                placeholder="Height in m"
                keyboardType='numeric'
            />
            <Text style={styles.nt}>Weight (in kg)</Text>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={weight => weightChange(weight)}
                placeholder="Weight in kg"
                keyboardType='numeric'
            />
            <Text style={styles.nt}>Age</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={age => ageChange(age)}
                placeholder="Enter your age"
                keyboardType='numeric'
            />
            <Text style={styles.nt}>Onclick if you are a Male</Text>
            <Switch
                trackColor={{ false: "#C04000", true: "#2E86C1" }}
                thumbColor={gender ? "#C04000" : "#2E86C1"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={genderChange}
                value={gender}
            />
            <Text style={styles.nt}>Onclick if you do exercises</Text>
            <Switch
                trackColor={{ false: "#C04000", true: "#2E86C1" }}
                thumbColor={workout ? "#C04000" : "#2E86C1"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={workoutChange}
                value={workout}
            />
            <Separator />
            <TouchableOpacity style={styles.button} onPress={calBMR}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            <View style={styles.resultView}>
                <Text style={styles.nt}>Your intake calories should be: {bmr}</Text>
                <Text style={styles.des}>{description}</Text>
            </View>

        </ScrollView>
    );
}

export default BMR;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCF3CF",
    },
    title: {
        shadowColor: "#A04000",
        shadowRadius: 22,
        color: "white",
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 55,
        fontFamily: "cochin",
        fontWeight: "bold"
    },
    input: {
        height: 48,
        margin: 14,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#D7BDE2',
        fontSize: 18,
        justifyContent: 'center',
        marginTop: 50
    },
    nt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 40,
        color: '#C04000',
        borderBlockColor: "#000000",
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C04000',
        padding: 10,
        margin: 12,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#C04000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    des: {
        backgroundColor:"white",
        paddingTop: 8 ,
        margin:5,
        borderRadius:10,
        textAlign:'center',
        fontWeight:"400",
        paddingBottom: 20,

    },
    resultView:{
        margin:20,
    }
});
