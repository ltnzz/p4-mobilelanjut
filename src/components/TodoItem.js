import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = memo(({ todo, onToggle, onDelete }) => {

    const getPriorityColor = () => {
        if (todo.priority === 'high') return '#EF4444';
        if (todo.priority === 'medium') return '#F59E0B';
        if (todo.priority === 'low') return '#22C55E';
        return '#94A3B8';
    };

    return (
        <View style={styles.container}>
        
        {/* Checkbox */}
        <TouchableOpacity
            style={[styles.checkbox, todo.done && styles.checkboxDone]}
            onPress={() => onToggle(todo.id)}
        >
            {todo.done && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>

        {/* Content */}
        <View style={{ flex: 1 }}>
            <Text style={[styles.text, todo.done && styles.textDone]}>
                {todo.text}
            </Text>

            <View style={styles.metaRow}>
                <Text style={styles.dueDate}>
                    📅 {todo.dueDate || "No deadline"}
                </Text>

                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor() }]}>
                    <Text style={styles.priorityText}>
                        {todo.priority}
                    </Text>
                </View>
            </View>
        </View>

        {/* Delete */}
        <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => onDelete(todo.id)}
        >
            <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#38BDF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    checkboxDone: {
        backgroundColor: '#38BDF8',
        borderColor: '#38BDF8',
    },

    checkmark: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'
    },

    text: {
        fontSize: 16,
        color: '#1E293B'
    },

    textDone: {
        textDecorationLine: 'line-through',
        color: '#94A3B8'
    },

    metaRow: {
        flexDirection: 'row',
        marginTop: 4,
        gap: 10
    },

    priorityBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },

    priorityText: {
        fontSize: 11,
        color: '#FFFFFF',
        fontWeight: '600'
    },

    dueDate: {
        fontSize: 12,
        color: '#64748B'
    },

    priority: {
        fontSize: 12,
        fontWeight: '600'
    },

    deleteBtn: {
        padding: 6
    },

    deleteText: {
        color: '#F97316',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default TodoItem;