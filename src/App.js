import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import LoadingPage from './LoadingPage';
import PaintPage from './PaintPage';

import PrivacyPolicy from './PrivacyPolicy';
import ContactUs from './ContactUs';


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

  moveToFooterPages (page) {
    switch(page) {
      case('landingPage'): {
        this.setState({
          currentPage: LandingPage
        });
        break;
      }
      case('privacyPolicy'): {
        this.setState({
          currentPage: PrivacyPolicy
        });
        break;
      }
      case('contactUs'): {
        this.setState({
          currentPage: ContactUs
        });
        break;
      }
      default: 
        break;
    }
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
                <div className='subtitle'>
                    As simple as editing an image. Just $1.
                </div>
            </div>

            <div className='container-content main-content'>
                {renderedPage}
            </div>
            <div id='footer'>
              <div className='page-options'>
                <div className='page-option'
                  onClick={() => this.moveToFooterPages('landingPage')}
                >
                  Pdf Online Editor
                </div>
                <div 
                  className='page-option'
                  onClick={() => this.moveToFooterPages('privacyPolicy')}
                >
                  Privacy Policy
                </div>
                <div 
                  className='page-option'
                  onClick={() => this.moveToFooterPages('contactUs')}
                >
                  Contact Us
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
