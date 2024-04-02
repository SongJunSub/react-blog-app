import './App.css';
import {useState} from "react";

function App(){

    const [title, setTitle] = useState(["Java", "Kotlin", "Go"]);
    const [likes, setLikes] = useState([0, 0, 0]);
    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h2>Jun's Blog</h2>
            </div>

            {/*<button onClick={() => {
                const copy = [...title];
                copy.sort();
                setTitle(copy);
            }}>정렬</button>

            <button onClick={() => {
                const copy = [...title];
                copy[0] = "JavaScript";
                setTitle(copy);
            }}>수정</button>*/}

            {
                title.map((result, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {
                                modal === true ? setModal(false) : setModal(true);
                            }}>{title[i]} <span onClick={() => {
                                const copy = [...likes];
                                copy[i] = copy[i] + 1;
                                setLikes(copy);
                            }}>💛</span> {likes[i]}</h4>
                            <p>2024. 04. 02</p>
                        </div>
                    )
                })
            }

            {
                modal === true ? <Modal/> : null
            }
        </div>
    );

}

const Modal = () => {

    return (
        <div className="modal">
            <h4>Title</h4>
            <p>Date</p>
            <p>Contents</p>
        </div>
    )

}

export default App;
