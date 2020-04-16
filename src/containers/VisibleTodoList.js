import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapState2Props = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatch2Props = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapState2Props, mapDispatch2Props)(TodoList);
