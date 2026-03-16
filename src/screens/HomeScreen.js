import React from 'react'; 
import { 
    View, Text, TouchableOpacity,
    StyleSheet, StatusBar, ImageBackground 
} from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTodos } from '../hooks/useTodos'; 
import { useFilter } from '../hooks/useFilter'; 
import AddTodoForm from '../components/AddTodoForm'; 
import TodoItem from '../components/TodoItem'; 
import FilterBar from '../components/FilterBar'; 
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = () => { 
    const { dark, toggleTheme } = useTheme();

    const { activeFilter, setFilter } = useFilter(); 

    const theme = {
        background: dark ? "#0F172A" : "#F8FAFC",
        text: dark ? "#FFFFFF" : "#0F172A",
        subtext: dark ? "#CBD5F5" : "#64748B"
    };

    const { 
        todos, 
        stats, 
        addTodo, 
        toggleTodo, 
        deleteTodo, 
        clearDone, 
    } = useTodos(activeFilter); 
    
    return ( 
        // <ImageBackground
        //     source={require('../assets/bg-1.jpg')}
        //     style={{ flex: 1 }}
        //     resizeMode="cover"
        // >
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}> 
        <StatusBar barStyle='light-content' backgroundColor='#0F172A' /> 

        <View style={[styles.container, { backgroundColor: theme.background }]}> 
    
            <View style={styles.header}> 
                <Text style={[styles.title, { color: theme.text }]}>
                    My Todos
                </Text>

                <Text style={[styles.subtitle, { color: theme.subtext }]}>
                    {stats.completed} dari {stats.total} selesai
                </Text>
            </View> 

            <TouchableOpacity onPress={toggleTheme} style={{ marginBottom: 10 }}>
                <Text style={{ color: theme.text }}>
                    {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </Text>
            </TouchableOpacity>
    
            <AddTodoForm onAdd={addTodo} /> 
    
            <FilterBar 
                activeFilter={activeFilter} 
                onFilterChange={setFilter} 
                stats={stats} 
            /> 
    
            <DraggableFlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item, drag }) => (
                    <TouchableOpacity onLongPress={drag}>
                        <TodoItem
                            todo={item}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={[styles.emptyText, { color: theme.subtext }]}>
                        Tidak ada todo{' '}
                        {activeFilter !== 'all' ? `dengan filter '${activeFilter}'` : ''}
                    </Text>
                }
            />
    
            {stats.completed > 0 && ( 
                <Text style={styles.clearBtn} onPress={clearDone}> 
                    Hapus {stats.completed} item selesai 
                </Text> 
            )} 

        </View> 
        </SafeAreaView> 
        // </ImageBackground>
    ); 
}; 

const styles = StyleSheet.create({ 
    safe: { flex: 1 }, 
    container: { flex: 1, padding: 20 }, 

    header: { marginBottom: 24, paddingTop: 8 },

    title: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        marginBottom: 4, 
    }, 

    subtitle: { fontSize: 14 }, 

    emptyText: { 
        textAlign: 'center', 
        marginTop: 60, 
        fontSize: 16, 
    }, 

    clearBtn: { 
        textAlign: 'center', 
        color: '#F97316', 
        padding: 12, 
        fontSize: 14, 
    }, 
}); 

export default HomeScreen;
