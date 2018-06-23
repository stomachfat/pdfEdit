import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import LoadingPage from './LoadingPage';
import PaintPage from './PaintPage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: LandingPage
        }

        this.moveToNextPage = this.moveToNextPage.bind(this);
    }
    async moveToNextPage () {
        const pageTransitions = [
            [LandingPage, LoadingPage],
            [LoadingPage, PaintPage]
        ];
        const currentPage = this.state.currentPage;

        const nextPage = pageTransitions.find(page => {
            return currentPage.name === page[0].name
        })[1];

        if (this.state.currentPage === LoadingPage) {
            const a = this[LandingPage.name];
            // this ensures the PDF has converted
            // before loading in the PaintPage
            await this[LandingPage.name].get_saveToServerNetworkCall();
        }

        this.setState({
            currentPage: nextPage
        });
    }
    render() {
        var renderedPage = React.createElement(this.state.currentPage, {
            done: this.moveToNextPage,
            ref: el => this[this.state.currentPage.name] = el,
        });

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

                <div className='footer'>
                    <div className='subtitle'>
                        The only PDF online editor as simple as editing an image. Just $1.
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
