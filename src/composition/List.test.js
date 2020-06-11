import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//Smoke Test
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
