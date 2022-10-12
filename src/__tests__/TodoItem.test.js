import renderer from 'react-test-renderer';
import TodoItem from '../components/Todo/TodoItem';

const onChange = () => {

};
const todo = {
	id: 1,
	title: test,
	completed: false
}

it('renders correctly', () => {
	const tree = renderer.create(<TodoItem
		todo={todo}
		onChange={onChange}
	/>).toJSON();

	expect(tree).toMatchSnapshot();
});


