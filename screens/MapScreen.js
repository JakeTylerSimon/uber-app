import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createStackNavigator()
;
  return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled= {true}
    >
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{ 
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='RideOptionCard'
                        component={RideOptionsCard}
                        options={{ 
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default MapScreen