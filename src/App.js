import './App.css';
import {useState} from "react";

function App(){

    const post = "강남 우동 맛집";

    const [title, b] = useState(["Java", "Kotlin", "Go"]);
    const [likes, increaseLikes] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h2>Jun's Blog</h2>
            </div>

            <div className="list">
                <h4>{title[0]} <span onClick={() => {increaseLikes(likes + 1)}}>💛</span> {likes}</h4>
                <p>2024. 04. 02</p>
            </div>
        </div>
    );

}

export default App;
