import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React , {useContext} from "react";
import Fitnesscards from "../Components/Fitnesscards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {
    minutes,
    calories,
    workout,
} = useContext(FitnessItems);
  
  return (
    <ScrollView style={{marginTop:40}}>
      <View
        style={{
          backgroundColor: "#40E0D0",
          padding: 10,
          height: 200,
          marginBottom: 58,
          width: "100%",
        }}
      >
        <Text style={{ color: "#770737", fontWeight: "bold", fontSize: 22, textAlign:"center"}}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{color:"#FFBF00", fontSize: 18, marginTop:20, fontWeight:"bold"}}>
            </Text>
          <Image
            style={{
              width: "95%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://images.app.goo.gl/byUBrFdvRDpkJqTa9.png",
            }}
          />
        </View>
      </View>
      <Fitnesscards/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});