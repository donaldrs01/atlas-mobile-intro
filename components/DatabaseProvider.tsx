import React, { useEffect, useState, Suspense } from 'react';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import { View, Text } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { SQLiteProvider } from 'expo-sqlite';

async function loadDatabase() {
    const name = "activities.db"
    const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`;
    const fileInfo = await FileSystem.getInfoAsync(dbPath);

    if (!fileInfo.exists) {
        // Create the DB if the file info doesn't already exist on user's phone
        const dbAsset = require("@/assets/" + name)
        const dbURI = Asset.fromModule(dbAsset).uri; // Provides URI representation of DB file
        // Create and copy directory
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
        await FileSystem.downloadAsync(dbURI, dbPath);
    }
}

function useDB() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        loadDatabase()
            .then(() => setLoaded(true));
    }, [])
    // Check to render everything else now that DB is loaded
    return { loaded };
}

// Calls useDB function on mount, creates DB if it doesn't already exist
export function DatabaseProvider({ children }: { children: React.ReactNode }) {
    const { loaded } = useDB();

    if (!loaded) {
        return null;
    }

    return (
    <Suspense fallback={<View></View>}>
        <SQLite.SQLiteProvider useSuspense databaseName="activities.db">{children}</SQLite.SQLiteProvider>;
    </Suspense>
    );
}