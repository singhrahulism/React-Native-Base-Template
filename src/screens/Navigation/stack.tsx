import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// AuthStack imports

import AuthScreen from "@authStack/AuthScreen/AuthScreen";

// AppStack imports

import HomeScreen from "@appStack/HomeScreen/HomeScreen";

// Stack initialization

const Stack = createNativeStackNavigator()

// AppStack

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, animation: 'none'}} />
        </Stack.Navigator>
    )
}

// AuthStack

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown: false, animation: 'none'}} />
        </Stack.Navigator>
    )
}
