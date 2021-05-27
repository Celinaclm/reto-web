import React from "react";

class Phones extends React.Component {
    state = {
        phone: {}
    }

    render() {
        return(
            <div className="box">
                <div className="media-content">
                        <div className="content">
                            <h2>Input, more input!</h2>
                            <img src="https://cdnb.20m.es/sites/144/2020/03/cortocircuito2-620x312.jpg" alt="Johnny5"></img>
                            <h2>{ this.state.phone.name}</h2>
                            <p>
                            <strong>{ this.props.name }</strong> <br />
                            <small>{ this.props.manufacturer } </small>
                            </p>
                        </div>
                    </div>
            </div>
        )
    } 
}

export default Phones;