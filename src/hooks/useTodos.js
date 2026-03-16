import { useTodoContext } from '../context/ToDoContext';
import { useMemo } from 'react'; 

export const useTodos = (filter = 'all') => { 
    const { todos, addTodo, toggleTodo, deleteTodo, clearDone } = useTodoContext(); 
    
    const filteredTodos = useMemo(() => {
        let result;

        switch (filter) {
            case 'active':
            result = todos.filter(t => !t.done);
            break;

            case 'completed':
            result = todos.filter(t => t.done);
            break;

            default:
            result = todos;
        }

        const priorityOrder = {
            high: 1,
            medium: 2,
            low: 3
        };

        return result.sort(
            (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        );

    }, [todos, filter]);
    
    const stats = {
        total: todos.length,
        completed: todos.filter(todo => todo.done).length,
        active: todos.filter(todo => !todo.done).length
    };
    
    return { 
        todos: filteredTodos, 
        stats, 
        addTodo, 
        toggleTodo, 
        deleteTodo, 
        clearDone, 
    }; 
};