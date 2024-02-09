import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

//Array con las opciones del menú.
const options = ["Pomodoro", "Short Break" , "Long Break"]

//Al haber pasado props podemos pasarlas a la funcion como parametros.
export default function Header({currentTime, setCurrentTime , setTime}){

    //Función encargada de cambiar tiempo y tipo de cronometro al pulsar.
    function handlePress(index){
        //Si el index es 0 es el primer si 1 el segundo etc.
        const newTime = index === 0 ? 25: index === 1 ? 5: 15
        //El cronometro en el que se encuentra.
        setCurrentTime(index)
        //El tiempo actual.
        setTime(newTime * 60)
    }



//option.map : iterar sobre elementos. option: array , item: cada opcion. 
//index : del arreglo de la propiedad map.
//Se añade un estilo condicional a si es el pulsado para el borde.
//onPress es arrow function que hace que cuando pulses realice la funcion con el parametro pasado.
    return(
    <View style={{flexDirection: "row"}}>
        {options.map((item, index) => (
            <TouchableOpacity 
            key={index} 
            style={[
                styles.itemStyle, 
                currentTime !== index && {borderColor: "transparent"},
            ]}
            onPress = {() => handlePress(index)}
            >
                <Text style={{fontWeight: "bold"}}> {item} </Text>
            </TouchableOpacity>
        ))}
        

    </View>
    );
}

 
const styles = StyleSheet.create({

    itemStyle:{
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "white",
        marginVertical: 20,

    }





})