import { StackActions } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Enable-disable Navigation Features

const USE_SIDE_DRAWER = true as const

// AuthStack imports

import AuthScreen from "@authStack/AuthScreen/AuthScreen";

// AppStack imports

import DrawerHeader from "@components/Drawer/DrawerHeader";
import DrawerFooter from "@components/Drawer/DrawerFooter";
import HomeScreen from "@appStack/HomeScreen/HomeScreen";

// Stack initialization

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

// AppStack

// Side-Drawer

function DrawerContent(props: any) {
    return (
      <>
        <DrawerHeader />
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <DrawerFooter />
      </>
    );
}

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, animation: 'none'}} />
        </Stack.Navigator>
    )
}

export const AppStack = () => {
    return (
        USE_SIDE_DRAWER
        ?   <Drawer.Navigator drawerContent={DrawerContent} >
                <Drawer.Screen
                    name='HomeStack'
                    component={HomeStack}
                    options={{
                        title: 'Home',
                        headerShown: false,
                        drawerActiveTintColor: '#535cda',
                        drawerActiveBackgroundColor: 'transparent',
                        drawerIcon: (tintColor) => {return <FontAwesome5 name={'home'} size={22} color={tintColor.color} />}
                    }}
                />
            </Drawer.Navigator>
        : <HomeScreen />
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
