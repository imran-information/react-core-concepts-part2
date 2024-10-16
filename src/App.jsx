import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {
  function handleClickMe() {
    alert('click the button')
  }
  const handleClickMe3 = (num) => {
    alert(num * 2)
  }

  return (
    <>
      <h1>React part- 2</h1>
      <Users></Users>


      <Counter></Counter>
      <Team></Team>



      <button onClick={handleClickMe}>Click me</button>
      <button onClick={() => alert("Second Button Clicked")}>Click me</button>
      <button onClick={() => handleClickMe3(10)}>Click me</button>
      <button onClick={() => alert(10 * 2)}>Click me</button>
    </>
  )
}


export default App
