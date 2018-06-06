import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';
import { search, clear } from '../../../actions/timetable';
import { connect } from 'react-redux';
import { Button } from 'rmwc/Button';
import { List, SimpleListItem } from 'rmwc/List';
import { toNum } from '../../../utils/index';

const label = {
	marginBottom: 0
};
class SearchArea extends Component {
	state = {
		query: ''
	};
	render() {
		return (
			<React.Fragment>
				<h4 style={label}>Search Subjects</h4>
				<TextField
					type="text"
					onChange={e => this.setState({ query: e.target.value })}
					value={this.state.query}
					fullwidth
				/>
				<br />
				<Button
					raised
					onClick={() => this.props.search(this.state.query)}
				>
					Search
				</Button>
				<br />
				{this.props.results &&
					this.props.results.length > 0 && (
						<React.Fragment>
							<h4>Search Results</h4>
							<List twoLine>
								{this.props.results.map((e, i) => (
									<SimpleListItem
										graphic={`looks_${toNum(i + 1)}`}
										key={`${e.id}-${e.section}`}
										text={`${e.id} - ${e.name}`}
										secondaryText={`Section: ${
											e.section
										} Building: ${e.building} Room: ${
											e.room
										}`}
										meta="add"
									/>
								))}
							</List>
							<Button onClick={() => this.props.clear()}>
								Clear
							</Button>
							<br />
						</React.Fragment>
					)}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	search,
	clear
};

const mapStateToProps = state => ({
	results: state.timetable.searchResults
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchArea);
