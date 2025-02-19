import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type Activity = {
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

    function deleteAllActivities() {
        db.execSync(`DELETE FROM activities`);
        reload();
    }

    function deleteActivity(id: number) {
        db.execSync(`DELETE FROM activities WHERE id = ${id}`);
        reload();
    }

    function reload() {
        const data = getActivities();
        setActivities(data);
    }

    function insertActivity(steps: number) {
        const timestamp = new Date().toISOString();
        db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, '${timestamp}')`);
        reload(); // Refresh activity list when adding a new activity
    }

    useEffect(() => {
        reload();
    }, []);

    return { getActivities, activities, insertActivity, deleteAllActivities, deleteActivity }
}