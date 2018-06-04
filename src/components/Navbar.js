import {
	TopAppBar,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarNavigationIcon,
	TopAppBarActionItem,
	TopAppBarTitle
} from 'rmwc/TopAppBar';
import React from 'react';
import { toggleDrawer } from '../actions/ui';
import { connect } from 'react-redux';

const Navbar = props => (
	<TopAppBar fixed>
		<TopAppBarRow>
			<TopAppBarSection alignStart>
				<TopAppBarNavigationIcon
					use="menu"
					onClick={() => props.toggleDrawer(false)}
				/>
				<TopAppBarTitle>ISETimetable v2.0.0-alpha 1</TopAppBarTitle>
			</TopAppBarSection>
			<TopAppBarSection alignEnd>
				<TopAppBarActionItem aria-label="Login" alt="Login">
					lock
				</TopAppBarActionItem>
			</TopAppBarSection>
		</TopAppBarRow>
	</TopAppBar>
);

const mapDispatchToProps = {
	toggleDrawer
};

export default connect(
	null,
	mapDispatchToProps
)(Navbar);
