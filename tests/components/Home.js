import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<Home/>', function() {
    var wrapper;

    it('`props` contains a `text` property with a value of "Hello, world!"', function() {
        // 4
        expect(wrapper.props().text).to.equal('Hello, world!');
    });

    it('has an `h1` tag with the text "Home page"', function() {
        // 5
        expect(wrapper.contains(<h1>Home page</h1>)).to.equal(true);
    });

    after(function() {
        // 6
        global.window.close();
    });
});
