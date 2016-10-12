import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import publicationActionCreators from '../actions/publicationActionCreators';
import PublicationList from '../views/publicationList';

class App extends Component {
  static propTypes = {
  	publication: PropTypes.shape({
      publications: PropTypes.array.isRequired,
      errorMessage: PropTypes.string,
      isFetching: PropTypes.bool.isRequired,
    }).isRequired,
  	fetchPublications: PropTypes.func.isRequired,
  }

  componentDidMount() {
  	this.props.fetchPublications();
  }

  render() {

    let componentToBeDisplayed;
    if (this.props.publication.isFetching) {
      componentToBeDisplayed = <div>Loading...</div>
    }
    else if (this.props.publication.errorMessage !== '') {
      componentToBeDisplayed = <div>{this.props.publication.errorMessage}</div>
    }
    else {
     componentToBeDisplayed = 
        <PublicationList data={this.props.publication.publications} />
    }

    return (
      componentToBeDisplayed
    )
  }
}

const mapStateToProps = (state) => ({
  publication: state.publication
})

const mapDispatchToProps = (dispatch) => ({
  fetchPublications: () => dispatch(publicationActionCreators.fetchPublications())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
