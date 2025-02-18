import { Activity as ActivityType } from "@/hooks/useActivities"
import { StyleSheet, Text, View } from "react-native";

type ActivityProps = {
    activity: ActivityType;
}

export default function Activity({ activity }: ActivityProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {activity.steps} steps on {new Date(activity.date).toLocaleDateString()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    text: {
        textAlign: "center",
    }
})