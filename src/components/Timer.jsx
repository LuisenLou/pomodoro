import { StyleSheet, View, Text } from "react-native"

export default function Timer({time}) {
    //Formateamos el tiempo para que se muestre correctamente.
    //Pasamos los minutos con toString y luego de String pasamos a padStart
    // de esa forma podemos conseguir el tiempo con cero a la izquierda.
    //
    const formattedTime = `${Math.floor(time/60)
        .toString()
        .padStart(2,"0")}:${(time % 60)//Los segundos se obtienen mediante el resto.
            //Volvemos a formatear, dos valores con un cero cuando no haya valor.
            .toString()
            .padStart(2,"0")}`

return(
<View style = { styles.container}>

<Text style= {styles.time}> {formattedTime}</Text>

</View>


)}

const styles = StyleSheet.create ({
    //Aportamos borde, color, y espacio que ocupa respecto del padre.
    container: {
        flex: 0.3,
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius:15,

    },
    time:{
        textAlign: "center",
        fontSize: 80,
        fontWeight: "bold",
        color: "#333333"


    }



})