import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native'

import { StatusBarHeight } from '@globalStyles'

const HomeScreen = () => {

    const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false)

    // Listen to Keyboard Events
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true)
        })

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false)
        })

        // clear keyboard listeners
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])

    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingViewContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.rootScrollViewContainer}
                keyboardShouldPersistTaps="always"
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        if (isKeyboardOpen) {
                            Keyboard.dismiss()
                        }
                    }}
                >
                    {/* This is Root "View". Everything should be inside this "View", and NOT OUTSIDE it! */}
                    <View style={styles.rootViewContainer}>
                        <Text>This is AuthScreen</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    keyboardAvoidingViewContainer: {
        flex: 1,
        paddingTop: StatusBarHeight,
    },
    rootScrollViewContainer: {
        flexGrow: 1,
        paddingBottom: StatusBarHeight
    },
    rootViewContainer: {
        
    }
});

export default HomeScreen ;
