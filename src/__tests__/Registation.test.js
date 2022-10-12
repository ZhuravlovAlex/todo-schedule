import renderer from 'react-test-renderer';
import Registration from '../components/Registration/Registration';


it('renders correctly when not signed up ', () => {
	const tree = renderer.create(<Registration
		register={false}
		dispatch={() => {}}
	/>).toJSON();

	expect(tree).toMatchSnapshot();
});

it('renders correctly when signed up ', () => {
	const tree = renderer.create(<Registration
		register={true}
		dispatch={() => {}}
	/>).toJSON();

	expect(tree).toMatchSnapshot();
});


