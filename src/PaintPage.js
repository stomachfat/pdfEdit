import React, { Component } from 'react';

import Paint from './Paint';


class PaintPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Paint />
            </div>
        );
    }
}

export default PaintPage;
