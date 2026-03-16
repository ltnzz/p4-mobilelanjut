import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const AddTodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("medium");

    const handleAdd = () => {
        if (!text.trim()) return;

        onAdd(text, dueDate, priority);

        setText("");
        setDueDate("");
        setPriority("medium");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tambah todo..."
                value={text}
                onChangeText={setText}
            />

            <TextInput
                style={styles.input}
                placeholder="Due date (2026-03-20)"
                value={dueDate}
                onChangeText={setDueDate}
            />

            <View style={styles.priorityRow}>
                <TouchableOpacity
                    style={[
                    styles.priorityBtn,
                    priority === "low" && styles.lowActive
                    ]}
                    onPress={() => setPriority("low")}
                >
                    <Text style={styles.priorityText}>Low</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.priorityBtn,
                    priority === "medium" && styles.mediumActive
                    ]}
                    onPress={() => setPriority("medium")}
                >
                    <Text style={styles.priorityText}>Medium</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.priorityBtn,
                    priority === "high" && styles.highActive
                    ]}
                    onPress={() => setPriority("high")}
                >
                    <Text style={styles.priorityText}>High</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Tambah</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginBottom: 20 },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },
    priority: { fontSize: 14 },
    button: {
        backgroundColor: "#38BDF8",
        padding: 10,
        borderRadius: 8,
        alignItems: "center"
    },
    buttonText: { color: "#fff", fontWeight: "bold" },
    priorityRow: {
        flexDirection: "row",
        gap: 8,
        marginTop: 10,
        marginBottom: 10
    },
    priorityBtn: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#E2E8F0"
    },
    priorityText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#1E293B"
    },
    lowActive: {
        backgroundColor: "#22C55E"  
    },
    mediumActive: {
        backgroundColor: "#F59E0B"
    },
    highActive: {
        backgroundColor: "#EF4444"
    }
});

export default AddTodoForm;