import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type Activity = {
    id: number;
    steps: number;
    date: number;
};

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const db = useSQLiteContext();

    function getActivities() {
        return db.getAllSync<Activity>("SELECT * FROM activities");
    }

    function reload() {
        const data = getActivities();
        setActivities(data);
    }

    function insertActivity(steps: number, date: Date) {
        db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`);
        reload(); // Refresh activity list when adding a new activity
    }

    useEffect(() => {
        reload();
    }, []);

    return { getActivities, activities, insertActivity }
}