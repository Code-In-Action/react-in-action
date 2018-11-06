import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './button';


test('works', () => { expect(true).toBe(true) });

test('renders with text', () => { 
    const text = 'text';
    const renderer = TestRenderer.create(<Button text={text} />);
    
    const button = renderer.toJSON();
    expect(button.type).toBe('button');
    expect(button.props.children).toBe(text) 

});
