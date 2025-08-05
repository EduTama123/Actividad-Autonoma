import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';

export type RootStackParams = {
    Pantalla1: undefined,
    Pantalla2: undefined,
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{ headerShown: false }} component={Pantalla2Screen} />
        </Stack.Navigator>
    );
};