import "./App.css";
import Search from "./Search";
import searchImages from "./response";
import {useState} from 'react';
import Images from "./Images";

function App() {
  const [Image, setImage] = useState([]); 
  const Submit = async(e) => {
    const shownImages = await searchImages(e); // api request is thrown to response.js
    setImage(shownImages); // the response is set to the state
  };

  return (
    <div className="App">
      <Search search={Submit} />
      <Images SendImage={Image} />
    </div>
  );
}

export default App;
