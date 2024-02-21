import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const DrawerFooter = () => {
    return <View style={styles.container}>
        <FontAwesome5 name="react" size={30} color="#61D9FB" />
        <Text style={{ fontSize: 16, fontWeight:'bold' }}>
            &nbsp;Drawer Footer.
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 30,
        paddingLeft: 15,
        alignItems: 'center'
    }
})

export default DrawerFooter ;
