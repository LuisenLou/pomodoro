//ATL Academy support via YouTube.


import { useEffect, useState } from 'react';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
//Esto es para añadir un audio que iria en assets en formato MP3.
//import {Audio} from 'expo-av';


export default function App() {
//Array con colores a utilizar.
const color = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

//Variable de encendido. false : no comenzará el reloj por defecto.
const [isWorking, setIsWorking] = useState(false);

//Variable de tiempo. 
const [time, setTime] = useState(25 * 60);

//Variable de tiempo actual. POMO|SHORT|BREAK Indica cual tiempo es el actual.
const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

//Variable de actividad del boton.
const [isActive, setIsActive] = useState(false);

useEffect(() => {
  let interval = null;

  if(isActive){
    interval = setInterval(() => {
      setTime(time-1)
    },1)
    //run timer;
  }else{
    clearInterval(interval)
    //clear interval;
  }

  //Cuando finaliza el contador (podria incorporar sonido) se resetea el contador.

  if (time === 0 ){
    setIsActive(false) //boton pasa a Start
    setIsWorking((prev) => !prev)// estado previo (callback)
    setTime(isWorking ?300:1500);
  }

  //Este apartado limpia el intervalo del buffer.
  return () =>
  clearInterval(interval);

},[isActive, time])
//dependencia isActive, cada vez que cambie debe funcionar.
//tambien dependera del tiempo.

function handleStartStop(){
  //playSound(); aqui sonaria cuando se oulsa antes de activar.
  setIsActive(!isActive);

}

/* 
funcion asincrona  que espera que se toque el boton para sonar.
desestructura sound esperando el audio.
metodo soundcreateAsync - colocar audio 
1ºCarga el sonido en una constante.
2º Lo haria funcionar en la llamada de la función.

async function playSound(){
  const {sound} = await Audio.Sound.createAsync(
    require("./assets/click.mp3")
  )
  await sound.playAsync();
}

*/



  return (
    //Pasamos a Header como props ciertas variables.
    //El contenedor va a tener el color según la posicion del currentTime.
    <SafeAreaView 
      style={[
      styles.container, 
      {backgroundColor: color[currentTime]}
      ]}>
      <View 
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30}}>
        <Text style={styles.text}>Pomodoro 1.0v </Text>
        <Header
          currentTime= {currentTime}
          setCurrentTime={setCurrentTime} 
          time={time}
          setTime={setTime}
        />
        <Timer 
          time= {time}
        />
        <TouchableOpacity 
          style= {styles.button}
          onPress = {handleStartStop}
          >
          <Text style= {{fontWeight:"bold" , color: "white"}}
          > 
          {isActive? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Establece tamaño respecto al total.
  },
  text:{
    fontSize: 32, 
    fontWeight: "bold"
  },
  button:{
    alignItems: "center", //Alinea al centro los items contenidos.
    padding: 15, // Agrega espacio alrededor
    borderRadius:15, //Genera un borde curvo.
    marginTop: 15, //Establece el margen superior.
    backgroundColor: "black",
  }
});
