import React, { PropTypes } from 'react';

const Publication = (props) => {
  const { data } = props;

  return (
    <li>{data.title} (id: {data.id})</li>
  );
};

Publication.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;