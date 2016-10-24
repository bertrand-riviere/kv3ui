import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Publication from '../../src/views/publication';

function setup() {
  const props = {
    publication: {
      id: 'id',
      title: 'title',
    },
  };

  const wrapper = shallow(<Publication {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('Publication', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    const li = wrapper.find('li');

    expect(li.length).toBe(1);
    expect(li.text()).toEqual('title (id: id)');
    expect(li.find('a').prop('href')).toEqual('Expression/Details/{publication.id}');
  });
});
