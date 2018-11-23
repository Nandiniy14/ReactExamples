import expect from 'expect';
import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home';

configure({ adapter: new Adapter() });
function setup(){
    return shallow(<Home />);
}

it('renders form and h1', () => {
    let wrapper = setup() ;
    expect(wrapper.find('h1').text()).toEqual('Hello');
}); 


