import { NavigationContainer } from "@react-navigation/native"
import { AppStack, AuthStack } from "@navigationStack/stack"

import { Provider } from "react-redux"
import store from "@redux/store"

const isSignedIn = true

const App = () => {

  // const isSignedIn = useSelector(state => state.firebaseStore.user.uid)

  return (
  <NavigationContainer>
    { isSignedIn ? <AppStack /> : <AuthStack /> }
  </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}
