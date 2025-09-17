// export default function ToDo (props) {
//     return (
//         <li>Task : {props.task}</li>
//     )
// }

// export default function ToDo ({task}) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// export default function ToDo ({task, isDone}) {
//     if (isDone === true) {
//         return <li>Done : {task}</li>
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
// }

// conditional rendering : 3 ternary
// condition ? true : false

// export default function ToDo({task,isDone, time=0}) {
//     return isDone ? <li>Done : {task} time: {time}</li> : <li>Not Done : {task}</li>
// }

// conditional rendering : 4 &&


// export default function ToDo({task,isDone, time=0}) {
//     return isDone && <li>Done task : {task} time: {time}</li> 
// }

// conditional rendering : 5 ||


// export default function ToDo({task,isDone, time=0}) {
//     return isDone || <li> Not Done task : {task} time: {time}</li> 
// }

// export default function ToDo ({task, isDone}) {
//     if (isDone === true) {
//         return null;
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
// }

// conditional rendering : 6 using variable
export default function ToDo ({task, isDone}) {
     let listItem;
    
    if (isDone === true) {
        listItem= <li>Done : {task}</li>
    }
    else{
        listItem=<li>Pending : {task}</li>
    }
    return listItem
}