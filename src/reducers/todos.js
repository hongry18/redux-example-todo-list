const todos = (state = [], action) => {
    switch(action.types) {
        case 'ADD_TODO':
            return [
                ...state
                ,{
                    id: action.id
                    ,text: action.text
                    ,completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            });
        default:
            return state;
    }
};

export default todos;