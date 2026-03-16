import React, { createContext, useContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { todoReducer, ACTIONS } from "../context/TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    // load data saat app start
    useEffect(() => {
        const loadTodos = async () => {
        const saved = await AsyncStorage.getItem("todos");
        if (saved) {
            const parsed = JSON.parse(saved);
            parsed.forEach(todo => {
            dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
            });
        }
        };
        loadTodos();
    }, []);

    // simpan setiap todos berubah
    useEffect(() => {
        AsyncStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text, dueDate, priority) => {
        dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { text, dueDate, priority }
        });
    };

    const toggleTodo = (id) => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, id });
    };

    const deleteTodo = (id) => {
        dispatch({ type: ACTIONS.DELETE_TODO, id });
    };

    const clearDone = () => {
        dispatch({ type: ACTIONS.CLEAR_DONE });
    };

    return (
        <TodoContext.Provider
        value={{ todos, addTodo, toggleTodo, deleteTodo, clearDone }}
        >
        {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);