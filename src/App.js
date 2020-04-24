import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name' : '홍길동111' ,
  'age' : '38',
  'gender' : '남성'

}

class App extends Component {
  render() {
    return(
    <div>
      <Customer
        name = {customer.name}
        age = {customer.age}
        gender = {customer.gender}
      />
    </div>
    )
  }
}

export default App;
