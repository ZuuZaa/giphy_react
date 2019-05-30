import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

let gifs = []

axios.get('https://api.giphy.com/v1/gifs/search?api_key=O5LyiGH753b9EWs8TEN6LL0DLtx8wqNm&q=cat&limit=25&offset=0&rating=G&lang=en').then((response) => {

    gifs = response.data.data.map((value, index) => {
        return (
            <div className='col-4 p-2'>
                <div className='card'>
                    <img src={value.images['480w_still'].url} className="img-thumbnail"/>
                </div>
            </div>
            )
    })

    ReactDOM.render(<div className='row'>{gifs}</div>, document.getElementById('root'));
})





