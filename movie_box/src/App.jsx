import Video_player from "./component/video_player"

function App() {

  return (
   <div className="">
    <Video_player/>
    <Video_player/>
    <Video_player/>
     <Video_player display='nice and good looking video display'/>
    <Video_player />
    <Video_player display= 'This is our first React code'/>
    <Text display= 'This is our first React code'/>

    
   </div>
  )
}

export default App

function Text({display}) {
    return <div>
        <h2>{display}</h2>
    </div>
}
