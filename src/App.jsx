import './App.css'
import Item from "./Item.jsx";
function App({obj}) {

  return (
    <div className="App">
        {obj.map((item,index)=><Item key={index}  item={item}/>)}
    </div>
  )
}

export default App
