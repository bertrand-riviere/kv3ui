import React, { PropTypes } from 'react';

const Publication = ({ publication }) =>
    (<li>
      {publication.title} (id:{ " " }
      <a href="Expression/Details/{publication.id}">{publication.id}</a>)
    </li>);

Publication.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
