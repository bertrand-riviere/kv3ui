import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import publicationActionCreators from '../actions/publicationActionCreators';
import PublicationList from '../views/publicationList';

class Publication extends Component {

  componentDidMount() {
    this.props.fetchPublications();
  }

  render() {
    const { publication } = this.props;

    let componentToBeDisplayed;
    if (publication.isFetching) {
      componentToBeDisplayed =
                              (<div>
                                <Spin tip="Loading..." size="large" />
                                <br /><br /><br /><br /><br /><br /><br /><br />
                                <br /><br /><br /><br /><br /><br /><br /><br />
                                <br /><br /><br />
                              </div>);
    } else if (publication.errorMessage !== '') {
      componentToBeDisplayed = <div>{publication.errorMessage}</div>;
    } else {
      componentToBeDisplayed = <PublicationList publications={publication.publications} />;
    }

    return (
      componentToBeDisplayed
    );
  }
}

Publication.propTypes = {
  publication: PropTypes.shape({
    publications: PropTypes.array.isRequired,
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  fetchPublications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  publication: state.publication,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublications: () => dispatch(publicationActionCreators.fetchPublications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Publication);
