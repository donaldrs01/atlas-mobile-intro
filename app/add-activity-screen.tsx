import { View, Pressable, Button, StyleSheet, Text, TextInput } from "react-native";
import { router } from "expo-router";

export default function AddActivity() {
    return (
        <View style={styles.container}>
            <Text>AddActivityScreen</Text>
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
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#D00414",
        padding: 16,
        width: "100%",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
})