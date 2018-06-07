import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import LoadingPage from './LoadingPage';
import Paywall from './Paywall';
import PaintPage from './PaintPage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: LandingPage
        }

        this.moveToNextPage = this.moveToNextPage.bind(this);
    }
    moveToNextPage () {
        const pageTransitions = [
            [LandingPage, LoadingPage],
            [LoadingPage, PaintPage]
        ];
        const currentPage = this.state.currentPage;

        const nextPage = pageTransitions.find(page => {
            return currentPage.name === page[0].name
        })[1];

        this.setState({
            currentPage: nextPage
        });
    }
    render() {
        var renderedPage = React.createElement(this.state.currentPage, { done: this.moveToNextPage});

        return (
            <div className='container'>
                <div className='header'>
                    <div className='container-content'>
                        Edit One Page PDFs
                    </div>
                </div>
                <div className='container-content main-content'>
                    {renderedPage}
                </div>
            </div>
        );
    }
}

export default App;
