import './App.css'
//import HookForm from './components/HookForm/HookForm'
//import RefForm from './components/RefForm/RefForm'
//import SimpleForm from './components/SimpleForm/SimpleForm'
//import StateFullForm from './components/StateFullForm/StateFullForm';
import ReUseAbleForm from './components/ReUseAbleForm/ReUseAbleForm';

function App() {
  const handleSingUpSubmit = data => {
    console.log("singUpSubmit", data);

  }
  const handleUpdateSubmit = data => {
    console.log("updateSubmit", data);

  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm/> */}
      {/* <StateFullForm/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}
      <ReUseAbleForm FormTitle={'Sing UP'} handleSubmit={handleSingUpSubmit}/>
      <ReUseAbleForm FormTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}/>
    </>
  )
}

export default App
