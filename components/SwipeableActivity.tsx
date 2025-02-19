import Activity from "./Activity";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Swipeable  from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivitiesContext } from "./ActivitiesProvider";

export default function SwipeableActivity({ activity }: { activity: any}) {
    const { deleteActivity } = useActivitiesContext();

    return (
        <View key={activity.id} style={styles.view}>
            <Swipeable
                renderLeftActions={() => <Action text="Delete" onDelete={() => deleteActivity(activity.id)} />}
                renderRightActions={() => <Action text="Delete" onDelete={() => deleteActivity(activity.id)} />}
            >
                {/*Wrap activity card inside a stable View so text doesn't shift on swipe */}
                <View style={styles.activityWrapper}>
                        <Activity activity={activity} />
                </View>
            </Swipeable>
        </View>
    );
}

export const Action = ({ text, onDelete }: { text: string; onDelete: () => void }) => {
    return (
        <Pressable style={styles.actionView} onPress={onDelete}>
            <Text style={styles.actionText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginBottom: 10,
    },
    activityWrapper: {
    },
    actionView: {
        backgroundColor: "#D00414",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: "100%",
        padding: 10,
    },
    actionText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },
});