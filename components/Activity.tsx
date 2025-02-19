import { Activity as ActivityType } from "@/hooks/useActivities"
import { StyleSheet, Text, View } from "react-native";

type ActivityProps = {
    activity: ActivityType;
}

export default function Activity({ activity }: ActivityProps) {
    // Timestamp config
    const timestampedDate = new Date(activity.date).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <View style={styles.activityContainer}>
            <Text style={styles.dateText}>{timestampedDate}</Text>
            <Text style={styles.stepsText}>Steps: {activity.steps}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    activityContainer: {
        borderWidth: 2,
        borderColor: "#000",
        width: "100%",
        padding: 10,
        alignSelf: "center",
        backgroundColor: "#fff",
    },
    dateText: {
        fontSize: 11,
        marginBottom: 5,
        
    },
    stepsText: {
        fontSize: 20,
        fontWeight: "semibold",
    },
})