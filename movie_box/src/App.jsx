import Vide from "./component/video_player"

function App() {

  return (
   <div className="">
    <Vide/>
    <Vide/>
    <Text name='john'/>
    <Text name='mary'/>
   </div>
  )
}

export default App

function Text({name}) {
    // const name = prompt('who are you');
    return <div>

        <h2>My is {name}. welcome back</h2>
    </div>
}
