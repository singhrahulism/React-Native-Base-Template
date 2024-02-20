import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'

import { StatusBarHeight } from '@globalStyles'

const AuthScreen = () => {
    return <View style={styles.container}>
        <Text>This is AuthScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBarHeight
    }
})

export default AuthScreen ;
