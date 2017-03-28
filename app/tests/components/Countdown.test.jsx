var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');
describe('CountDown', () =>{
  it('should exist', () => {
    expect(CountDown).toExist();
    });
