// 先安装axios
import axios from 'axios';

import React, { Component } from 'react';

export default class componentName extends Component {
    readFile = () => {
        axios.get('这里写public下面的路径    如     data/month2/day23/0.txt')
            .then((res) => {
                // res.data就是读取到的数据
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
        <div> textInComponent </div>
        );
    }
}
