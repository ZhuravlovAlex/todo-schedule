import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleTodo } from '../store/action/toggleTodo';
import Done from '../components/Done/Done';

Done.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Done);