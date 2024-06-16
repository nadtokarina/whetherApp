import React from 'react';
import renderer from 'react-test-renderer';
import Days from '../pages/Days';

test('Days SnapShot', () => {
    const snap = renderer.create(
        <Days /> 
    ).toJSON();

expect(snap).toMatchSnapshot();
});