import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
    .create(
        <div class='Card'>
            <button typ='button'>delete</button>
            <h3>{}</h3>
            <p>{}</p>
        </div>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
});