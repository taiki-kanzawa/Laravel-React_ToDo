import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function RenderRows(props) {
    return props.todos.map(todo => {
        return (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td><button className="btn btn-secondary">完了</button></td>
            </tr>
        );
    });
}

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todo: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        axios
            .get('/api/get')
            .then((res) => {
                this.setState({
                    todos: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    inputChange(event) {
        switch(event.target.name) {
            case 'todo':
                this.setState({
                    todo: event.target.value
                });
                break;
            
            default:
                break;
        }
    }

    addTodo() {
        if (this.state.todo == '') {
            return;
        }

        axios
            .post('/api/add', {
                title: this.state.todo
            })
            .then((res) => {
                this.setState({
                    todos: res.data,
                    todo: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                {/* 登録フォーム */}
                <div className="form-group mt-4">
                    <label htmlFor="todo">新規Todo</label>
                    <input type="text" className="form-control" name="todo" value={this.state.todo} onChange={this.inputChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.addTodo}>登録</button>

                {/* テーブル */}
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タスク</th>
                            <th>完了</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderRows
                            todos={this.state.todos}
                        />
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));