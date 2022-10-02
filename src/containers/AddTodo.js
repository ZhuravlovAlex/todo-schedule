import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo/AddTodo';

const mapStateToProps = state => ({
    todos: state.todos,
    register: state.register
})

export default connect(
    mapStateToProps, null
)(AddTodo)