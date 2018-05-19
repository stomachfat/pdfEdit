import React, { Component } from 'react';

class LoadingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        };            
        this.loadingProgress = this.loadingProgress;
    }
    componentDidMount() {
        this.loadingProgress();
    }
    loadingProgress() {
        if(this.state.progress >= 100) {
            this.setState({
                progress: 100
            });
            setTimeout(this.props.done, 250);
            return;
        }

        setTimeout(
            () => {
                this.setState({
                    progress: Math.min(this.state.progress + Math.floor(Math.random() * 10), 100)
                });
                this.loadingProgress(); 
            },
            Math.floor(Math.random() * 300)
        );
    }        
    render() {
        return (
            <div>
                <img src="loading.gif"/>
                Loading... {this.state.progress}%
            </div> 
        );
    }
}

export default LoadingPage;
