import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StatusBarHeight } from '@globalStyles'

const DrawerHeader = () => {

    const navigation = useNavigation()

    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={{fontSize: 18}}>
                Drawer Header.
            </Text>
            <TouchableOpacity
                style={styles.closeContainer}
                activeOpacity={0.5}
                onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
            >
                <EvilIcons name="close" size={25} color="black" />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    headerContainer: {
        paddingTop: StatusBarHeight,
        marginLeft: 18,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      closeContainer: {
        backgroundColor: '#f3f4f6',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50/2
    },
})

export default DrawerHeader ;