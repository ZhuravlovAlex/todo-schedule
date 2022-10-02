import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo } from '../store/action/toggleTodo';
import TodoList from '../components/Todo/TodoList';
import { deleteTodo } from '../store/action/deleteTodo';

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos,
    register: state.register
})


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)