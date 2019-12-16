import React, { Fragment, Component } from 'react';
import './App.css';
import WordCloud from './component/figure/wordcloud';
import Pie from './component/figure/pie'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <WordCloud />
                <Pie />
            </Fragment>
        )
    }
}
