import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/action";
import "./App.css";

function App() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Fetch Data from API</h1>
      <button onClick={() => dispatch(fetchPosts())}>Get Data</button>
      {!loading ? (
        posts.map((post) => <h3> {post.body} </h3>)
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
}

export default App;
