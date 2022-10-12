import { connect } from "react-redux";
import Registration from "../components/Registration/Registration";

const mapStateToProps = state => ({
	register: state.register
})

export default connect(
	mapStateToProps, null
)(Registration)