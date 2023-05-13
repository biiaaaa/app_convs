import React, {useState} from "react";
import{View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Home(){

    let[celsius, setCelsius] = useState('');
    let[fahr, setFahr] = useState('');
    

    function CalcularTemperatura(){
        let res = (9 * parseFloat(celsius)+160) / 5   

        setFahr(res);     

    }


    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Conversão Temperatura</Text>
            </View>
            <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-7/32/temperature--fahrenheit-64.png'}}
                style={{width:80, height:80, resizeMode:'center'}}/>
                <TextInput onChangeText={setCelsius} style={styles.campo} placeholder= "temperatura em celsius"/>
                <TextInput onChangeText={setFahr} value={fahr} style={styles.campo} placeholder= "Fahrenheit"/>
            <TouchableOpacity style={styles.botao}onPress={CalcularTemperatura}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

//4 passo - Criando regras de estilos
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffb6c1',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },


    titulo:{
        color:'black',
        fontSize: 30,
        fontWeight:'bold',
        marginBottom:40,
        marginTop:40,
    },

    campo:{
        backgroundColor:'#FFF',
        borderColor:'black',
        borderWidth:1,
        color:'#0D0D0D',
        fontSize:20,
        fontWeight:'bold',
        padding:15,
        alignItems:'center',
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botao:{
        backgroundColor:'#000000',
        alignItems:'center',
        padding:18,
        borderRadius:7,
        marginTop:10,
        width:250
      },

      botaoTexto:{
        color: '#FFF'
      }
});