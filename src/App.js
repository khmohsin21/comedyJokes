import {JokePunch} from './MyComponent/JokePunch'
import {Jokes} from './MyComponent/Jokes'
import JokesData from './MyComponent/JokesData'
function App() {
  
  const newdata=JokesData.map(data=>{
    return <JokePunch key={data.setup} data1={data.setup} data2={data.punchline}/>
  })
  return (
    <div >
      <Jokes/>
      {newdata}
    </div>
  );
}

export default App;
