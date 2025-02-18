import { View, Pressable, Button, StyleSheet, Text, TextInput } from "react-native";
import { router } from "expo-router";

export default function AddActivity() {
    return (
        <View>
            <Text>AddActivityScreen</Text>
            <Pressable
                onPress={() => {
                    router.replace("/");
                }}
            >
                <Text>Go back to homepage</Text>
            </Pressable>
        </View>
    );
}