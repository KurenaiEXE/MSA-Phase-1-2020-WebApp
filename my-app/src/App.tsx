import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import MediaGrid from './components/MediaGrid/MediaGrid'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface IUserInput {
  SearchQuery: (string |undefined );
  SearchType: (string| undefined);
}
console.log(process.env.REACT_APP_API_KEY)

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
    SearchType: "movie"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  const[BaseURL, setBaseURL] = useState<string|undefined>("")
  if(process.env.REACT_APP_API_KEY){
    var key = process.env.REACT_APP_API_KEY
    }else{
        key=""
    }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/configuration`, {
        method: 'get',
        headers: new Headers({
            'Authorization': key
          })
    }).then(response =>{
            return response.json()
        })
        .then(response => {
            setBaseURL(response.images.base_url)
        })
        .catch((e) => console.log(e)
        );
  }, [key]);

  return (
    <Container fluid>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <MediaGrid BaseURL={BaseURL} SearchQuery={UserInput.SearchQuery} SearchType={UserInput.SearchType}/>
    </Container>
    
  );
}

export default App;
