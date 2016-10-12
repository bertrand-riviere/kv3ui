import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import publicationActionCreators from '../actions/publicationActionCreators';
import PublicationList from '../views/publicationList';

class Publication extends Component {
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

    const { publication } = this.props

    let componentToBeDisplayed;
    if (publication.isFetching) {
      componentToBeDisplayed = <div>Loading...</div>
    }
    else if (publication.errorMessage !== '') {
      componentToBeDisplayed = <div>{publication.errorMessage}</div>
    }
    else {
      componentToBeDisplayed = <PublicationList data={publication.publications} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Publication)
