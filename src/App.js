import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div>
            <div className={'d-flex'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    )
}

export default App;