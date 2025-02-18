import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Homepage
            </Text>
            <Pressable
                onPress={() => {
                    router.replace("/add-activity-screen");
                }}
            >
                <Text>Add activity</Text>
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
    heading: {
        fontSize: 24,
    },
});