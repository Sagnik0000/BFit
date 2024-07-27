import { View, Text, StyleSheet, TextInput , TouchableOpacity,  Button} from 'react-native'
import React, { useState} from 'react'
import  Constants from 'expo-constants'
import { useNavigation } from "@react-navigation/native";

  

const BmiCalculator = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBmi = () => {
        const bmi = weight/ ((height/100) * (height/100))
        setBmi(bmi.toFixed(1))

        if (bmi < 18.5){
            setDescription('"UNDER WEIGHT !! 😟🤕" A good measure of whether you are a healthy weight is the body mass index (BMI). This is calculated using your weight (in kilograms) and your height (in meters squared). For most adults, a healthy weight range is a BMI of 18.5kg/m2 to 24.9kg/m2. If your BMI is under 18.5kg/m2 then you would be considered underweight.    Focus on eating.')
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            setDescription('NORMAL ❤️⭐ . But for maintaining your health go to gym and Always eat healthy foods 🙌')

        }
        else if (bmi >=25 ){
            setDescription(' "OVER WEIGHT !! 😵‍💫😱" BMI is a useful measure of overweight and obesity. It is calculated from your height and weight. BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat. The higher your BMI, the higher your risk for certain diseases such as heart disease, high blood pressure, type 2 diabetes, gallstones, breathing problems.')
        }


    }

    const navigation = useNavigation()


 return (
    <View style={styles.container}>
       <View style={styles.title}>
        <Text style={styles.titleText}>BMI Calculator</Text>
        <Button style={styles.gym} title='go to gymPage' onPress={() => navigation.navigate("Home")} />
       </View>
       <TextInput
       style={styles.input}
       value={weight}
       onChangeText={(text) => setWeight(text)}
       placeholder="weight in kg"
       keyboardType='numeric'
       />
       <TextInput
       style={styles.input}
       value={height}
       onChangeText={(text) => setHeight(text)}
       placeholder="Height in cm"
       keyboardType='numeric'
       />
       <TouchableOpacity style={styles.button} onPress={calculateBmi}>
       <Text style={styles.buttonText}>Calculate</Text>
       </TouchableOpacity>
       <View style={styles.resultView}>
         <Text style={styles.result}>{bmi}</Text>
         <Text style={styles.des}>{description}</Text>
       </View>
    </View>
       )
    }

     export default BmiCalculator

     const styles = StyleSheet.create({
        container:{
            flex: 1,
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#e0ecde' ,
        },
        title: {
            backgroundColor:'',
            height:80,
            justifyContent:'center',
            alignItems:'center',
            marginBottom:10
        },
        titleText:{
            fontSize:40,
            color:'#C04000',
            borderBlockColor:"#000000",
            fontWeight:'bold',

        },
        input: {
            height:55,
            margin:15,
            borderWidth:1/2,
            padding:10,
            borderRadius:5,
            backgroundColor:'#5D3FD3',
            fontSize:18,
            justifyContent:'center',
            marginTop:50
        },
        button:{
            height:45,
            margin:20,
            borderWidth:1/2,
            borderRadius:2,
            backgroundColor:'#68b2a0',
            fontSize:18,
            justifyContent:'center',
            alignItems:'center'
        },
        buttonText:{
            fontSize:20,
            color:'#fff',
            fontWeight:'condensedBold'
        },
        resultView:{
            margin:15,

        },
        result:{
            fontSize:30,
            color:'#006400',

        },
        bg:{
            height:'100%',
            width:'100%'
        },
        gym:{
            color:"#7CFC00",
            fontWeight:'bold'

        },
        des: {
            backgroundColor:"white",
            paddingTop: 5 ,
            margin:7,
            borderRadius:10,
            textAlign:'center',
            fontWeight:"300",

        }
     })
    