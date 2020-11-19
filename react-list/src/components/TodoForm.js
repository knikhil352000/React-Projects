import React,{useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input'
                value={input}
                name='text'
                placeholder='Add a todo'
                onChange={handleChange}
            />
            <button className="todo-button">Add Note</button>
        </form>
    )
}

export default TodoForm
