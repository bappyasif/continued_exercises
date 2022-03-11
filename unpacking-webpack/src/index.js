import _ from 'lodash';
import './style.css'
import icon01 from '../resources/icon01.png'
import Data from '../resources/data.xml';
// import Notes from '..resources/data.csv';
import DataJson5 from '../resources/data.json5';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('hello');

    const btn = document.createElement('button');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = icon01;

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    console.log(Data, DataJson5);
    // console.log(Notes);

    return element;
}

document.body.appendChild(component());