import React, {Component} from 'react';


// class ToDoItem extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: false,
//             edit: false,
//         };
//     }
//
//     edit() {
//         this.setState((props, state) => ({
//             edit: true
//         }))
//     }
//
//     saveEditing() {
//         this.setState((props, state) => ({
//             edit: false
//         }));
//         this.props.editAction(this.refs.newTask.value, this.props.index);
//     }
//
//     cancelEditing() {
//         this.setState((props, state) => ({
//             edit: false
//         }))
//     }
//
//     remove() {
//         this.props.removeAction(this.props.index);
//     }
//
//     handleCheck() {
//         this.setState((props, state) => ({
//             checked: !this.state.checked
//         }))
//     }
//
//     renderEditing() {
//         return (
//             <div className="to-do-item">
//                 <textarea ref="newTask" defaultValue={this.props.children}></textarea>
//                 <button onClick={this.saveEditing.bind(this)} className="btn save">Save</button>
//                 <button onClick={this.cancelEditing.bind(this)} className="btn cancel">Cancel</button>
//             </div>
//         );
//     }
//
//     renderRepresenting() {
//         return (
//             <div className="to-do-item">
//                 <div className="text">{this.props.children}</div>
//                 <input type="checkbox"
//                        onChange={() => this.handleCheck.apply(this)}
//                        defaultChecked={this.state.checked}
//                 />
//                 <p>Task is {this.state.checked ? "done" : "undone"}</p>
//                 <button onClick={this.edit.bind(this)} className="btn edit">Edit</button>
//                 <button onClick={this.remove.bind(this)} className="btn remove">Remove</button>
//             </div>
//         );
//     }
//
//     render() {
//         return !this.state.edit
//             ? this.renderRepresenting()
//             : this.renderEditing();
//     }
// }
//
// class ToDoList extends React.Component {
//
//     constructor(props) {
//         super(props);
//         if (this.props.default === undefined || this.props.default === "") {
//             this.state = {
//                 tasks: ["Done hw", "Make breakfast", "Go to romantic", "Buy stuff"],
//             };
//         } else {
//             this.state = {
//                 tasks: [],
//             };
//         }
//     }
//
//     editToDo(edited, toDoId) {
//         var restTasks = this.state.tasks;
//         restTasks[toDoId] = edited;
//         this.setState({
//             tasks: restTasks
//         });
//     }
//
//     removeToDo(toDoId) {
//         var restTasks = this.state.tasks;
//         restTasks.splice(toDoId, 1);
//         this.setState({
//             tasks: restTasks
//         });
//     }
//
//     addToDo() {
//         var restTasks = this.state.tasks;
//         restTasks.push("New todo");
//         this.setState({
//             tasks: restTasks
//         });
//     }
//
//     render() {
//         let convertActionToTask = (action, index) =>
//             <ToDoItem
//                 key={index}
//                 index={index}
//                 editAction={this.editToDo.bind(this)}
//                 removeAction={this.removeToDo.bind(this)}>
//                 {action}
//             </ToDoItem>;
//         return (
//             <React.Fragment>
//                 <h1>It's personal TODO list</h1>
//                 {this.state.tasks.map(convertActionToTask)}
//                 <button onClick={this.addToDo.bind(this)}>Add new todo</button>
//             </React.Fragment>
//         )
//     }
// }
//
//
// class ProgderBody extends React.Component {
//
//     render() {
//         return (
//             <ToDoList default="empty"/>
//         );
//     }
// }
//
// export default ProgderBody;