import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import publicationActionCreators from '../actions/publicationActionCreators';
import Publication from '../views/publication';

class App extends Component {
  static propTypes = {
  	publications: PropTypes.array.isRequired,
  	fetchPublications: PropTypes.func.isRequired,
  }

  componentDidMount() {
  	this.props.fetchPublications();
  }

  renderPublication(publication) {
    return (
    	<Publication key={publication.id} data={publication} />
    )
  }

  render() {

    const { publications } = this.props

    return (
      <div>
      	Publication list:
      	<ul>
        	{publications.map(this.renderPublication)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  publications: state.publications
})

const mapDispatchToProps = (dispatch) => ({
  fetchPublications: () => dispatch(publicationActionCreators.fetchPublications())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
