import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  //Can't set to variable because get error below:
  //Error: This method is only meant to be run on single node. 0 found instead

  it('should add 1 to 4 and get 5', () => {
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () =>{
    container.find('#number1').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#number3').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('123');
  })

  it('should chain multiple operations together', () => {
    container.find('#number1').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number9').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should clear the running total without affecting the calculation', () => {
    container.find('#number1').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#clear').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('16');
  })

})

