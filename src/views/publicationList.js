import React, { PropTypes } from 'react';
import Publication from './publication';

const PublicationList = ({ data }) => {
  const publicationList = data.map((publication) => (
    <Publication key={publication.id} data={publication} />
  ));

  return (
    <div>
    Publication list:
        <ul>
          {publicationList}
        </ul>
    </div>
  );
};

PublicationList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PublicationList;
