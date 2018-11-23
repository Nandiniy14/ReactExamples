// import expect from 'expect';
// import React from 'react';
// import {mount, shallow, configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// //import { iterableEquality } from 'expect/build/utils';
// import About from './about';
// import { Provider } from 'react-redux';
// import configureStore from '../Store/configureStore';


// const store = configureStore();

// configure({ adapter: new Adapter() });
// function setup(){
//     const props = {
//         data : {},
//         handleSubmit:() => {},
//         onEventChange: () => {}
//     };
//     return shallow(<Provider store={store}> <About {...props} /> </Provider>);
// }
// it('renders form and h1', () => {
//     let wrapper = setup() ;
//     expect(wrapper.find('#userForm').length).toBe(1);
//     expect(wrapper.find('h3').text()).toEqual('Add User');
// }); 

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import About from './about'
import { Provider } from 'react-redux';
import configureStore from '../Store/configureStore';
import expect from 'expect';

const store = configureStore();
Enzyme.configure({ adapter: new Adapter() })
function setup() {
    const props = {
        data : {},
        handleSubmit:() => {},
        onEventChange: () => {}
    };
  const enzymeWrapper = shallow(<Provider store={store}> <About /> </Provider> )
  return {
    props,
    enzymeWrapper
  }
}
describe('components', () => {
  describe('About', () => {
    it('should render h3', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('h3').text()).toBe('Add User')
    })
  })
})
