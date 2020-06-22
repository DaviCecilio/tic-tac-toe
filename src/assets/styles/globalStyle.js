import { createGlobalStyle } from 'styled-components'
import GetSchwifty from '../fonts/get_schwifty.ttf'
import Calligraphr from '../fonts/Calligraphr-Regular.ttf'
import Shittychan from '../fonts/shittychan.ttf'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color:#1B1C20;
  }


  @font-face {
  font-family: 'Get Schwifty';
  src: local('Get Schwifty'),local('GetSchwifty'), 
  url(${GetSchwifty}) format('truetype');
  font-weight: bold;
  font-style: normal;
  }

  @font-face {
  font-family: 'Calligraphr';
  src: local('Calligraphr'),
  url(${Calligraphr}) format('truetype');
  font-weight: bold;
  font-style: normal;
  }

  @font-face {
  font-family: 'Shittychan';
  src: local('Shittychan'),
  url(${Shittychan}) format('truetype');
  font-weight: bold;
  font-style: normal;
  }


  .btn{
    margin: 10px 0px;
    padding: 10px 30px;

    border-radius: 3px;
    font-weight: bold;
    letter-spacing: 3px;

    cursor: pointer;
  }

  .fontTitle{
    text-align: center;
    margin: 15px 0;
    font-family: 'Calligraphr';
    font-size: 2.5em;
  }
  
  .fontSubTitle{
    text-align: center;
    font-family: 'Shittychan';
    font-size: 1.5em;
  }

  .fontDanger{
    color: #C4314B;
    font-weight: bold
  }

  .mt-2{
    margin-top: 20px;
  }

`
