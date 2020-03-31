import React, {useState} from 'react';


function App() {
    const [developerState, setDeveloperState] = useState({
      name: "",
      mood: "",
      lifeLongLearner: true,
      excitementLevel: 0
    });
  
    function changeMood(mood) {
      if(mood === "determined") {
        developerState.excitementLevel += 10000;
      }
      else {
        developerState.excitementLevel -= 10000;
      }
      setDeveloperState({
        ...developerState,
        mood
      });
    }
  
    useEffect(() => {
      // For demonstration purposes, we mock an API call.
      API.getDeveloper.then((res) => {
        setDeveloperState(res);
      });
    }, []);
  
    return (
      <div className="container">
        <Route path={developerState}>
          <Nav />
          <DeveloperInfo />
          <MoodBtns changeMood={changeMood} />
        </DeveloperContext.Provider>
      </div>
    );
  }