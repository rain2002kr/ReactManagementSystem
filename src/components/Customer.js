import React from 'react'

class Customer extends React.Component {
    render(){
        return(
            <div> 
                <p> {this.props.name} </p>
                <p> {this.props.age} </p>
                <p> {this.props.gender} </p>
            </div>
        )
    }
}
export default Customer;
