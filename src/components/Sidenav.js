import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { ListItem, ListItemText } from 'rmwc/List';
import { connect } from 'react-redux';
import React from 'react';
import store from '../store';
import { push } from 'react-router-redux';
import { setDrawer } from '../actions/ui';
import { logout } from '../actions/auth';

const paths = [
	{
		path: '/',
		text: 'Home'
	},
	{
		path: '/info',
		text: 'Basic Info'
	},
	{
		path: '/timetable',
		text: 'Timetable'
	},
	{
		path: '/timetable/create',
		text: 'Create Timetable'
	}
];
class Sidenav extends React.Component {
	state = {
		isMobile: true
	};

	componentDidMount() {
		window.addEventListener('resize', () => this.doSizeCheck());
		this.doSizeCheck(true);
	}

	componentDidUpdate(prevProps, prevState) {
		// a hack to help components layout that depend on window events
		// The size of the content changes on drawer open and close
		if (prevState.menuIsOpen !== this.props.open) {
			setTimeout(() => {
				window.dispatchEvent(new Event('resize'));
			}, 300);
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', () => this.doSizeCheck(), true);
	}

	doSizeCheck(initial) {
		const isMobile = window.innerWidth < 640;
		const menuIsOpen =
			initial && window.innerWidth > 640 ? true : this.state.menuIsOpen;

		if (
			this.state.isMobile !== isMobile ||
			this.state.menuIsOpen !== menuIsOpen
		) {
			this.setState({ isMobile, menuIsOpen });
		}
	}

	render() {
		let { isLoggedIn } = this.props;
		return (
			<Drawer
				className="nav"
				open={this.props.open}
				persistent={!this.state.isMobile}
				temporary={this.state.isMobile}
				onClose={() => this.props.setDrawer(false)}
			>
				{/* <DrawerHeader>Main Navigation</DrawerHeader> */}
				<DrawerContent>
					{paths.map(e => (
						<ListItem
							key={e.path}
							onClick={() => store.dispatch(push(e.path))}
						>
							<ListItemText>{e.text}</ListItemText>
						</ListItem>
					))}
					{isLoggedIn ? (
						<ListItem onClick={() => store.dispatch(logout())}>
							<ListItemText>Logout</ListItemText>
						</ListItem>
					) : (
						<ListItem
							onClick={() => store.dispatch(push('/login'))}
						>
							<ListItemText>Login</ListItemText>
						</ListItem>
					)}
				</DrawerContent>
			</Drawer>
		);
	}
}

const mapStateToProps = state => {
	return {
		open: state.ui.drawer,
		isLoggedIn: state.auth.isLoggedIn
	};
};

const mapDispatchToProps = {
	setDrawer
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidenav);
