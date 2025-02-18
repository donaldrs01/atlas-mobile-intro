import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function Index() {
    const {activities} = useActivitiesContext();
    return (
        <View style={styles.container}>
            {activities.map((activity) => (
                <Text key={activity.id}>
                    {activity.steps} steps taken on{" "}
                    {new Date(activity.date).toLocaleDateString()}
                </Text>
            ))}
            <Pressable
                style={styles.button}
                onPress={() => {
                    router.replace("/add-activity-screen");
                }}
            >
                <Text style={styles.buttonText}>Add activity</Text>
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
    button: {
        backgroundColor: "#1ED2AF",
        padding: 16,
        width: "100%",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
});