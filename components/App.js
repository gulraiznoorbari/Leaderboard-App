import React, { Component } from "react";
import "./App.css";
import Student from "./students";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="leaderBoard">Leaderboard</h1>
                <div className="subheading">
                    <p className="subheading1">Name</p>
                    <p className="subheading2">Score</p>
                </div>
                <Student studentName="Ahmad" university="NUCES - FAST University" score={393} />
                <Student
                    studentName="Gulraiz"
                    university="Forman Christian College University"
                    score={388}
                />
                <Student
                    studentName="Saad"
                    university="National University of Science and Technology"
                    score={385}
                />
                <Student
                    studentName="Abdullah"
                    university="Lahore University of Management Sciences"
                    score={383}
                />
                <Student
                    studentName="Bilal"
                    university="COMSATS Institute of Technology"
                    score={380}
                />
                <Student
                    studentName="Hamza"
                    university="University of Central Punjab"
                    score={376}
                />
                <Student
                    studentName="Usman"
                    university="University of Management and Technology"
                    score={374}
                />
            </div>
        );
    }
}

export default App;
