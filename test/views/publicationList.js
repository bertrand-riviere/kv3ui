import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import PublicationList from '../../src/views/publicationList';

function setup() {
  const props = {
    publications: [
      {
        id: 'id1',
        title: 'title1',
      },
      {
        id: 'id2',
        title: 'title2',
      },
    ],
  };

  const wrapper = shallow(<PublicationList {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('PublicationList', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find('strong').text()).toBe('Publication list:');
    expect(wrapper.find('ul').length).toBe(1);

    expect(wrapper.find('Publication').length).toBe(2);

    let publication = wrapper.find('Publication').nodes[0];
    expect(publication.key).toEqual('id1');
    expect(publication.props.publication).toEqual({
      id: 'id1',
      title: 'title1',
    });

    publication = wrapper.find('Publication').nodes[1];
    expect(publication.key).toEqual('id2');
    expect(publication.props.publication).toEqual({
      id: 'id2',
      title: 'title2',
    });
  });
});
