import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import img_react from "./images/react.png" ; //src에 폴더 지정할때는 가져오기. 
import Customer from './components/Customer';

//public images 폴더 경로 <img src={"images/react.png"} alt={"react"}/>
//src 경로 <img src={'react.png'} alt={"react"}/>

const customer = [
  {
  'id' :'1',
  'name' : '이미연' ,
  'age' : '50',
  'gender' : '여성',
  'image' : img_react, //값으로 가져가려면, public에 이미지넣어야 함. 
  'image_inside' : "./images/react.png"
},
{  'id' :'2',
  'name' : '강남길' ,
  'age' : '60',
  'gender' : '남성',
  'image' : img_react, //값으로 가져가려면, public에 이미지넣어야 함. 
  'image_inside' : "./images/react.png"
},
{  'id' :'3',
  'name' : '이민정' ,
  'age' : '30',
  'gender' : '여성',
  'image' : img_react, //값으로 가져가려면, public에 이미지넣어야 함. 
  'image_inside' : "./images/react.png"

}
]


class App extends Component {
  render() {
    return(
      
    <div>{
      customer.map(c => {
      return(
        <Customer
          key = {c.id} //key 값
          id = {c.id}
          name = {c.name}
          age = {c.age}
          gender = {c.gender}
          image = {c.image}
        />
      )
    })
  }
        
    </div>
    
    )
  }
}

export default App;
