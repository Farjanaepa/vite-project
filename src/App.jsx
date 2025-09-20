
import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
function App() {
 const actors = ['bapparaj','omar sunny','salman shah']
  const singers=[
    {id:1, name: 'dc mahfuz' ,age: 68},
    {id:2, name: 'Tahsan' ,age: 44},
    {id:3, name: 'dc mahfuz' ,age: 68},
  ]
  return (
    <>
     <h2>React core concept</h2>

    {/* {
      actors.map(actor => <Actor actor ={actor}></Actor>)
    } */}
    {/* {
      singers.map(singer => <Singer key={singer.id} singer={singer}></Singer> )
    } */}


       {/* <Person></Person>
       <Student></Student>
       <Developer name="Farjana"></Developer>
       <Developer></Developer>
       <Developer></Developer>
       <Player name="tamim" runs='5000'></Player>
       <Player name="munshi" runs='5000'></Player>
       <Salami event='rojar eid'></Salami> */}

       <ToDo task = 'Learn React' isDone={true} time='20'></ToDo>
       <ToDo task = 'Revise JS' isDone={false}></ToDo>
       <ToDo task = 'Take a Shower' isDone={true}></ToDo>
    </>
 
  )
   
}
// destructuring
function Salami ({event}) {
  return(
    <div className='student'>
      <p>Salami for : {event}</p>
      <p>Amount</p>
    </div>
  )
}

// const {name,runs}={name: 'tamim', runs: '5000'}
function Player ({name,runs}) {
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs : {runs}</p>
    </div>
  )
}
// props
function Developer(props) {
  console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Web Develpper : {props.name}</h3>
      <p>Python</p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Farjana';

  return (
    <p>I am a webdeveloper name of : {name} {age}</p>
  )
}

function Student () {
  return(
    <div className='student'>
    <p>
      name:
    </p>
    <p> dep:</p>
  </div>
  )
}

export default App
