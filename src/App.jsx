//import thingys  (STATE/HOOKS - CSS - COMPONENTS)
import {useState, useEffect, useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'
import GetData from './utils/GetData.js'
import PeopleTabs from './components/people/PeopleTabs.jsx'
import Degrees from './components/degrees/Degrees.jsx'
import Minors from './components/minors/Minors.jsx'
import TopNav from './components/topNav/TopNav.jsx'
import Employment from './components/employment/Employment.jsx'
import './App.css'


function App() { 
  //state
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();
  const [coursesObj, setCoursesObj] = useState();
  const [searchResults, setSearchResults] = useState([]);

  // loading bar ref
  const loadingRef = useRef(null);

  useEffect(()=>{
    // start the loading bar
    loadingRef.current.continuousStart();

    GetData('about/').then((json)=>{
      setAboutObj(json);
      // finish loading bar
      loadingRef.current.complete();
    });
  },[]);

  useEffect(()=>{
    GetData('course/').then((json)=>{
      setCoursesObj(json);
      setLoaded(true);
    })
  }, []);

  if (!loaded) return (
    <div>
      <LoadingBar color="#4f7cff" ref={loadingRef} height={4} shadow />

      <div className="stick">
        <h1>Welcome to Tyler Szalach's ischool Website</h1>
      </div>

      <div className="App">
        <h1>Loading...</h1>
      </div>
    </div>
  );

  return(    
    <div>
      <LoadingBar color="#4f7cff" ref={loadingRef} height={4} shadow />

      <div className="stick">
        <TopNav courses={coursesObj}/>

      </div>

      <div className="App">
        <div className="about">
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
          <div className="aboutQuote">
            <h4 className="quote">{aboutObj.quote}</h4>
            <h4>--{aboutObj.quoteAuthor}--</h4>
          </div>
        </div>
      </div>

      <hr/>
      <Degrees/>
      <hr/>
      <Minors/>
      <hr/>
      <Employment/>
            <hr/>
      <PeopleTabs/>
      <hr/>
      <footer>{new Date().getFullYear()} Tyler Szalach - Project 2</footer>
    </div>
  );
}

export default App

