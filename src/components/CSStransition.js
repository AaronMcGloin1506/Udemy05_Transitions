import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class CssTr extends Component{

    state={
        show:true
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return(
            <>
            <CSSTransition
                in={this.state.show}
                timeout={500}
                classNames="cssSq">
                <div className="cssSq">
                    Hello
                </div>
            </CSSTransition>
                <button onClick={this.showDiv}>Toggle it</button>
            </>
        )
    }
}


export default CssTr;