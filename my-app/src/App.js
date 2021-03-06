import './App.css';
import defaultCat from './GitCrossStitch.jpeg';
import { fetchCats, setStatusCode } from "./store/reducers/cats";
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const statusCode = useSelector(state => state.statusCode);
  const loading = useSelector(state => state.loading);
  const cats = useSelector(state => state.cats);

  const statusCodes = ["100", "101", "102",
    "200", "201", "202", "204", "206", "207",
    "300", "301", "302", "303", "304", "305", "307",
    "400", "401", "402", "403", "404", "405", "406", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "451", "499",
    "500", "501", "502", "503", "504", "506", "507", "508", "509", "510", "511", "599"]
  return (
    <div className="App">
      <div >
        <img width="1000px" height="auto" src={cats || defaultCat} alt="catCall" />
      </div >

      <div >
        <label for="pet-select">Choose a status code:</label>
        <select name="pets" id="pet-select" onChange={(e) => dispatch(setStatusCode(e.target.value))}>
          <option value="">--Please choose an option--</option>
          {statusCodes.map((cur) =>
            <option value={cur}>{cur}</option>
          )}
        </select>
      </div>
      <div >
        <button disabled={!statusCode || loading} onClick={() => dispatch(fetchCats(statusCode))}>Find a Cat</button>
      </div>
    </div>
  );
}

export default App;
