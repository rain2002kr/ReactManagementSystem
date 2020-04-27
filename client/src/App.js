import React, { Component } from 'react';
import './App.css';
import img_react from "./images/react.png" ; //src에 폴더 지정할때는 가져오기. 
import Customer from './components/Customer';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop : theme.spacing.uint * 3,
    overflowX : "auto"
  },
  table : {
    minWidth : 600
  }
});



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
    const {classes } = this.props;
    return(
      <Paper className={classes.root}>
      <Table className={classes.table} >
      <TableHead>
        <TableRow>
          <TableCell >이미지</TableCell>
          <TableCell >이름</TableCell>
          <TableCell >나이</TableCell>
          <TableCell >성별</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
      customer.map(c => {
      return(
        <Customer key = {c.id} 
        id = {c.id} 
        name = {c.name} 
        age = {c.age} 
        gender = {c.gender} 
        image = {c.image} 
        />
      )
    })
  }
      </TableBody>
      </Table>
      </Paper>
    
    )
  }
}

export default withStyles(styles)(App);
