import React from 'react';
import { useState } from 'react';

function Header({ todos, setTodos }) {
    const [input, setInput] = useState("");
    
    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (event.target.value === "") {
                return false;
            }
            setTodos([ ...todos, {id: todos.length + 1, text:input, completed: false}]);
            setInput("");
        }
    }

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form>
                    <input
                    value={input}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={onKeyPress}
                    />
                </form>
            </header>
        </div>
    )
}

export default Header;