import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{route.params?.message}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
