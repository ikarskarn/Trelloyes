import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List.js';

describe('List Group', () => {
    it('renders empty given no items', () => {
        const wrapper = shallow(<List />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('Renders List when supplied with an items prop', () => {
        const testItems = [
            { title: 'test-item', content: 'lorem'},
            { title: 'test-item2', content: 'ipsum'}
        ];
        const wrapper = shallow(<List items={testItems} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Card key={0} title=" " content=" "/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
