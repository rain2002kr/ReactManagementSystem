import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Customer extends React.Component {
    render(){
        return(
            
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name} ({this.props.id})</TableCell>
                <TableCell> {this.props.age + "대"} </TableCell>
                <TableCell> {this.props.gender} </TableCell>
            </TableRow> 
            
        )
    }
}

export default Customer;
