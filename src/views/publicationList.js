import React, { PropTypes } from 'react';
import Publication from './publication';

const PublicationList = ({ publications }) => {
  const publicationList = publications.map((publication) => (
    <Publication key={publication.id} publication={publication} />
  ));

  return (
    <div>
      <strong>Publication list:</strong>
      <ul>
        {publicationList}
      </ul>
    </div>
  );
};

PublicationList.propTypes = {
  publications: PropTypes.array.isRequired,
};

export default PublicationList;
