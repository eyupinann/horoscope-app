import React, { useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';


const Horoscope = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const navigation = useNavigation();

  const calculateHoroscope = () => {
    const selectedDate = new Date(birthDate);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;

    navigation.navigate('Result', { days: day, months: month });
  };

  const handleCalculatePress = () => {
    calculateHoroscope();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/walpeper2.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.icon}>♌♍♎♏♐♑♒♓</Text>
        <View style={styles.contentContainer}>
          <DatePicker
            date={birthDate}
            onDateChange={setBirthDate}
            mode="date"
            locale="tr"
            style={{ ...styles.datePicker, backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
            textColor="black"
          />

          <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
            <Text style={styles.buttontext}> Calculate</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    padding: 20,
  },
  datePicker: {
    width: 350,
    borderTop: '2px solid red',
    borderBottom: '2px solid red',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  resultText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  icon: {
    fontSize: 30,
    textAlign: 'center',
  },
  button:{
    backgroundColor:'white',
    padding:10,
    width:'100%',
    textAlign:'center',
    margin:40,
    opacity:0.7
  },
  buttontext:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20

  },
});

export default Horoscope;
