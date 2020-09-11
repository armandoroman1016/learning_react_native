import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const ComponentScreen = () => {
    const name = "Armando Roman"

    return (
        <View>
            <Text style = {styles.textStyle}>This is my custom component</Text>
            <Text style = {styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color: "blue"
    }
})

export default ComponentScreen
