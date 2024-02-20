import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { StatusBarHeight } from '@globalStyles'

const HomeScreen = () => {
    return <View style={styles.container}>
        <Text>This is HomeScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBarHeight
    }
})

export default HomeScreen ;
