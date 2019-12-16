import React, { Fragment, Component } from 'react';
import './App.css';
import WordCloud from './component/figure/wordcloud';
import Pie from './component/figure/pie'
import Histogram from './component/figure/histogram'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Pie />
                <Histogram />
                <WordCloud />
            </Fragment>
        )
    }
}
