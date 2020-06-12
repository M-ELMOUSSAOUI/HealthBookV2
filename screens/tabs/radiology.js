import React, { Component } from 'react'
import { StyleSheet,Text, View,TouchableOpacity } from 'react-native'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';



export default class radiology extends Component {
    render() {
        return (
            <View style={styles.container}>                
                    <TouchableOpacity style={styles.addBtn}>
                    <FontAwesome5  name="x-ray" size={30} color={'black'} />
                    <Ionicons style={{ position: 'absolute',left:0}} name="md-add" size={29} color="black" />
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    addBtn: {
        width: 70,
        height: 70,
        borderColor:'powderblue',
        borderWidth: 2,
        borderRadius: 50,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 13,
        backgroundColor: '#ff3d00',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:10,
    }
})