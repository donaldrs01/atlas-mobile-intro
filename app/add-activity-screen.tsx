import { View, Pressable, Button, StyleSheet, Text, TextInput } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function AddActivity() {
    const [steps, setSteps] = useState<number>(0);
    const {insertActivity} = useActivitiesContext();

    return (
        <View style={styles.container}>
            <Text>AddActivityScreen</Text>
            <TextInput style={styles.TextInput} placeholder="Enter steps" keyboardType="number-pad" onChangeText={(value) => setSteps(parseInt(value))} />
                <Pressable style={styles.addButton} onPress={() => {
                    insertActivity(steps, new Date());
                    router.push("/");
                }}>
                    <Text style={styles.buttonText}>Add Activity</Text>
                </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    router.replace("/");
                }}
            >
                <Text style={styles.buttonText}>Go back to homepage</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        backgroundColor: "#1ED2AF",
        padding: 16,
        width: "100%",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#D00414",
        padding: 16,
        width: "100%",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    TextInput: {
        padding: 16,
    }
})