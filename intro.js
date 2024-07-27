import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, Button } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const styles = StyleSheet.create({
    slide: {
      flex: 1,
      paddingTop: 80,
      marginHorizontal: 30,
    },
    img: {
      alignSelf: "center",
      borderTopRightRadius: 80,
      borderBottomLeftRadius: 80,
      height: h * 0.5,
      width: w * 0.9,
    },
    title: {
      fontFamily: "Montserrat_700Bold",
      marginTop: 60,
      marginHorizontal: 10,
      fontSize: 32,
    },
    text: {
      color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: 20,
      fontSize: 16,
      lineHeight: 25,
      marginLeft: 10,
    },
    started: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
  });
  
  const intro = () => {
    let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_500Medium,
      montserrat_600SemiBold,
      Montserrat_700Bold,
    });

    const navigation = useNavigation()

  
    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // } else {
    return (
        <Swiper
        loop = {false}
          buttonWrapperStyle={{
            backgroundColor: "transparent",
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            left: 0,
            flex: 1,
            paddingHorizontal: 30,
            paddingVertical: 20,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
          style={styles.wrapper}
          showsButtons={true}
          paginationStyle={{
            marginRight: w * 0.7,
            marginBottom: h * 0.02,
          }}
          activeDotColor="#8A56AC"
          dotColor="#998FA2"
          nextButton={
            <View
              style={{
                height: 60,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                backgroundColor: "#8A56AC",
              }}
            >
              <AntDesign name="arrowright" size={22} color="#FFF" />
            </View>
          }
          prevButton={
            <View
              style={{
                height: 60,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                backgroundColor: "#8A56AC",
                marginHorizontal: 20,
              }}
            >
              <AntDesign name="arrowleft" size={22} color="#FFF" />
            </View>
          }
        >
          <View style={styles.slide}>
            <Image source={require("./assets/img.png")} style={styles.img} />
            <Text style={styles.title}>Happiness</Text>
            <Text style={styles.text}>
            “I have chosen to be happy because it is good for my health.” – Voltaire
            </Text>
          </View>
          <View style={styles.slide}>
            <Image source={require("./assets/img2.png")} style={styles.img} />
            <Text style={styles.title}>Discover</Text>
            <Text style={styles.text}>
            “Wellness is the complete integration of body, mind, and spirit – the realization that everything we do, think, feel, and believe has an effect on our state of well-being.” – Greg Anderson
            </Text>
          </View>
  
          <View style={styles.slide}>
            <Image source={require("./assets/img3.png")} style={styles.img} />
            <Text style={styles.title}>Fitness</Text>
            <Text style={styles.text}>
            “Sufficient sleep, exercise, healthy food, friendship, and peace of mind are necessities, not luxuries.” – Mark Halperin
            </Text>
          </View>
          <View style={styles.slide}>
            <Image source={require("./assets/img4.png")} style={styles.img} />
            <Text style={styles.title}>Positivity</Text>
            <Text style={styles.text}>
            “Nobody can be in good health if he does not have all the time fresh air, sunshine, and good water.” – Flying Hawk
            </Text>
            <Button style={styles.started} title='Get Started' onPress={() => navigation.navigate("welcome")} />

          </View>
        </Swiper>
    );
    // }
  };
  
  export default intro;