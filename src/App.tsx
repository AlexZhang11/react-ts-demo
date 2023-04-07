import React from 'react';
import { Input } from 'antd';
import './index.less'
const App = ()=>{
    return (
    <div className="root">
        react测试:<Input/>
        <img src={require('./assets/images/butterfly.png')} style={{width:100}}/>
    </div>
    )
}

export default App