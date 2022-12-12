import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';


function App() {
  return (
    <div className="App">

    <NameList/>

    {/* <UserGreeting/> */}

{/* <ParentComponent/> */}

    {/* <EventBind/> */}

    {/* <ClassClick/> */}
    {/* <FunctionClick/> */}

    {/* <Counter/> */}

    {/* <Message/> */}

    {/* function component */}
      {/* <Greet name='udin' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='idin' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='odin' heroName='Thor Father'/> */}
      

      {/* class component */}
       {/* <Welcome name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/> */}
    </div>
  );
}

export default App;
