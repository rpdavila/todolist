import React from 'react';
import './Todo.styles.scss'
import {ReactComponent as Checkmark} from '../../images/icon-check.svg'




const Todo = ({todo, check, isChecked, setTodos, handleComplete}) => {
    const handleCheckbox = () => {
        handleComplete(todo.id)
    }
    return (
        <div className='item'
            style={{backgroundColor: check.isChecked ? 'hsl(236, 9%, 61%)' : 'hsl(235, 24%, 19%)',
                color: check.isChecked ? 'hsl(235, 19%, 35%)' : 'hsl(233, 11%, 52%)',
                transition: 'ease-in .3s'}}>
            <li style={{textDecoration: todo.completed ?  
            'line-through' : 'none'
            }}>
                <div style={{backgroundImage: todo.completed ? 'linear-gradient( rgb(85, 0, 255), rgb(117, 0, 128))' : 'none'}} className='check'>
                {todo.completed ?  <Checkmark  /> : ''}  
                    <input onChange={handleCheckbox} className='check__box' type='checkbox' />
                </div>
                
                {todo.task}
            
            </li>

        </div>
            
        )
}

export default Todo