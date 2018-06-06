import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';
import { search, clear, add } from '../../../actions/timetable';
import { connect } from 'react-redux';
import { Button } from 'rmwc/Button';
import { List, SimpleListItem } from 'rmwc/List';

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
										key={`${e.id}-${e.section}`}
										text={`${e.id} - ${e.name}`}
										secondaryText={`Section: ${
											e.section
										} Building: ${e.building} Room: ${
											e.room
										}`}
										meta="add"
										onClick={() => this.props.add(e)}
									/>
								))}
							</List>
							<Button onClick={() => this.props.clear()}>
								Clear Results
							</Button>
							<br />
						</React.Fragment>
					)}
				{this.props.unannounced &&
					this.props.unannounced.length > 0 && (
						<React.Fragment>
							<h4>Unannounced Subjects</h4>
							<List>
								{this.props.unannounced.map((e, i) => (
									<SimpleListItem
										// graphic={`looks_${toNum(i + 1)}`}
										key={`${e.id}-${e.section}`}
										text={`${e.id} - ${e.name}`}
										meta="close"
									/>
								))}
							</List>
							<br />
						</React.Fragment>
					)}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	search,
	clear,
	add
};

const mapStateToProps = state => ({
	results: state.timetable.searchResults,
	unannounced: state.timetable.unannounced
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchArea);
