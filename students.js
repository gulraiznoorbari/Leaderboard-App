import React, {Component} from "react";
import "./student.css";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            success: false,
            failure: false,
        }
    }
    componentDidMount() {
        this.setState({
            score: this.props.score,
        })
    }
    addScore() {
        this.setState({
            score: this.state.score + 1
        },
            () => {
                if (this.state.score >= 400) {
                    this.setState({ success: true })
                }
            }
        )
    }
    decreaseScore() {
        this.setState({
            score: this.state.score - 1
        },
            () => {
                if (this.state.score <= 370) {
                    this.setState({ failure: true })
                }
            }
        )
    }
    render() {

        const isSuccess = this.state.success;
        let text1;
        if (isSuccess) {
            text1 = <span>Passed</span>
        } else {
            text1 = "";
        }
        
        const isFail = this.state.failure;
        let text2;
        if (isFail) {
            text2 = <span>Failed</span>
        } else {
            text2 = "";
        }

        return (
            <div className="studentInfo">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.studentName}
                        <button className="addScoreBtn" onClick={() => this.addScore()}>+</button>
                        <button className="decreaseScoreBtn" onClick={() => this.decreaseScore()}>-</button>
                    </h2>
                    <p className="university">{this.props.university}{text1}{text2}</p>
                </div>
                <div className="right">
                    <div className="score">{this.state.score}</div>
                </div>
            </div>
        )
    }
}

export default Student;