import './App.css';
import {useState} from "react";

function App(){

    const [title, setTitle] = useState(["Java", "Kotlin", "Go"]);
    const [likes, setLikes] = useState([0, 0, 0]);
    const [modal, setModal] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState("");

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
                                setTitleIndex(i);
                            }}>{title[i]} <span onClick={(e) => {
                                e.stopPropagation();

                                const copy = [...likes];
                                copy[i] = copy[i] + 1;
                                setLikes(copy);
                            }}>💛</span> {likes[i]}</h4>
                            <p>2024. 04. 02</p>
                            <button onClick={() => {
                                const copy = [...title];
                                copy.splice(i, 1);
                                setTitle(copy);
                            }}>삭제</button>
                        </div>
                    )
                })
            }

            <input onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button onClick={() => {
                const copy = [...title];
                copy.unshift(text);
                setTitle(copy);
            }}>등록</button>

            {
                modal === true ? <Modal title={title} titleIndex={titleIndex}/> : null
            }
        </div>
    );

}

const Modal = (props) => {

    return (
        <div className="modal">
            <h4>{props.title[props.titleIndex]}</h4>
            <p>Date</p>
            <p>Contents</p>
            <button>수정</button>
        </div>
    )

}

export default App;
