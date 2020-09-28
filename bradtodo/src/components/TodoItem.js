import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle =() => {
        // A better way to write the function
        // in this method the styling attribute takes a normal css syntax
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom : '5px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through': 'none'
        }
        // // props is used to access the todo state in Todos.js
        //     if(this.props.todo.completed){
        // // note the syntax for return outside render is with curly bracket
        //         return{
        //             textDecoration : 'line-through'
        //         }
        //     }else{
        //         return {
        //             textDecoration:'none'
        //         }
        //     }
        
    }
    
    // adding an event to the checkbox
    // es6 function syntax is very important in referencing using 'this.props'
    // markComplete = (e)=>{
    //    console.log(this.props)
    
    // }
    render() {
        // destructuring for easy coding
        const { id, title } = this.props.todo
        // note the syntax for return inside render function is with normal bracket
        return (
            // inline styling not a good practice
            // <div style = {{ backgroundColor : '#f4f4f4'}}>
            // functional styling
            <div style = { this.getStyle() }>
            <p>
            <input type = "checkbox" onChange = { this.props.markComplete.bind(this, id) }/>{' '}
            </p>
                <h3> { title }</h3>
                <button onClick = { this.props.delTodo.bind(this, id) }style = {btnStyle}>x</button>
            </div>
        )
    }
}
// functional styling
// const itemStyle = {)
//     // the styling attribute requires no dash but it is in a camelCase form
//     backgroundColor : '#f4f4f4'
// }
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    float :'right',
    marginBottom: '1rem',
    cursor : 'pointer'
}