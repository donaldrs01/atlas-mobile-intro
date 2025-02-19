import React, { createContext, useContext } from "react";
import { useActivities } from "@/hooks/useActivities";

const ActivitiesContext = createContext<ReturnType<typeof useActivities>>({
    activities: [],
    getActivities: () => [],
    insertActivity: () => {},
    deleteAllActivities: () => {},
    deleteActivity: () => {},
});

export const useActivitiesContext = () => useContext(ActivitiesContext);

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
    const activities = useActivities();
    return <ActivitiesContext.Provider value={activities}>{children}</ActivitiesContext.Provider>
}