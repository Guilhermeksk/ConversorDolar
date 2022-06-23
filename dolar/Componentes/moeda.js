import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Moeda(props) {
    return(
        <>
        <Text  style={styles.texto}>nome: {props.data.name} </Text>
        <Text  style={styles.texto}>compra: {props.data.bid} </Text>
        <Text  style={styles.texto}>venda: {props.data.ask}</Text>
        <Text style={styles.texto}>variação: {props.data.varBid}</Text>
        <Text style={styles.texto}>maximo:{props.data.high}</Text>
        <Text style={styles.texto}>minimo: {props.data.low}</Text>
        </>
    );
}



const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop: 10,
    },
});