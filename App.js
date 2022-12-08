
import './App.css';


 const time = {
   winter: 'winter',
   summer: 'summer',
   spring: 'spring',
   autumn: 'autumn',
   allyear: 'all the year',
}

const element1 = <p>Today is a good {time.winter} day</p>
const element2 = <p>Today is a good {time.summer} day</p>
const element3 = <p>Today is a good {time.spring} day</p>
const element4 = <p>Today is a good {time.autumn} day</p>
const element5 = <p>We have a good day {time.allyear}</p>

const MyComponent = ({text}) =>{
  return <div>{text}</div>;
}

function Welcome(props){
  return props.children || element5;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome>
            <MyComponent text = {element1}/>
        </Welcome>      
        <Welcome>
            <MyComponent text = {element2}/>
        </Welcome> 
        <Welcome>
            <MyComponent text = {element3}/>
        </Welcome> 
        <Welcome>
            <MyComponent text = {element4}/>
        </Welcome> 
      
        <Welcome/>
    
      </header>
    </div>
  );
}

export default App;
