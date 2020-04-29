import React, {PureComponent} from 'react';
import store from '../../store/store'

const whiteKing = require('../../images/white-king.png');
const whiteQueen = require('../../images/white-queen.png');
const whiteOfficer = require('../../images/white-officer.png');
const whiteHorse = require('../../images/white-horse.png');
const whiteElephant = require('../../images/white-elephant.png');
const whitePawn = require('../../images/white-pawn.png');

const blackKing = require('../../images/black-king.png');
const blackQueen = require('../../images/black-queen.png');
const blackOfficer = require('../../images/black-officer.png');
const blackHorse = require('../../images/black-horse.png');
const blackElephant = require('../../images/black-elephant.png');
const blackPawn = require('../../images/black-pawn.png');

class ShahvatsDashboard extends PureComponent {

  state = {
    activeFigure: null,
    activeAddress: null,
    a8: blackElephant,
    b8: blackHorse,
    c8: blackOfficer,
    d8: blackQueen,
    e8: blackKing,
    f8: blackOfficer,
    g8: blackHorse,
    h8: blackElephant,
    a7: blackPawn,
    b7: blackPawn,
    c7: blackPawn,
    d7: blackPawn,
    e7: blackPawn,
    f7: blackPawn,
    g7: blackPawn,
    h7: blackPawn,
    a6: '',
    b6: '',
    c6: '',
    d6: '',
    e6: '',
    f6: '',
    g6: '',
    h6: '',
    a5: '',
    b5: '',
    c5: '',
    d5: '',
    e5: '',
    f5: '',
    g5: '',
    h5: '',
    a4: '',
    b4: '',
    c4: '',
    d4: '',
    e4: '',
    f4: '',
    g4: '',
    h4: '',
    a3: '',
    b3: '',
    c3: '',
    d3: '',
    e3: '',
    f3: '',
    g3: '',
    h3: '',
    a2: whitePawn,
    b2: whitePawn,
    c2: whitePawn,
    d2: whitePawn,
    e2: whitePawn,
    f2: whitePawn,
    g2: whitePawn,
    h2: whitePawn,
    a1: whiteElephant,
    b1: whiteHorse,
    c1: whiteOfficer,
    d1: whiteQueen,
    e1: whiteKing,
    f1: whiteOfficer,
    g1: whiteHorse,
    h1: whiteElephant,
  }

  clickField = (event) => {

    const color = JSON.parse(localStorage.getItem('storeon')).color

    if (!this.state.activeFigure) {
      try {
        let colorFigure = this.state[event.target.alt].substr(14, 5);
        if (colorFigure === color) {
          event.target.classList.add('active-square');
          this.setState({activeFigure: this.state[event.target.alt]});
          this.setState({activeAddress: event.target.alt})
        }
      } catch (e) {
        console.log('клик не по белой фигуре')
      }

    } else {
      document.querySelector(`#${this.state.activeAddress}`).classList.remove('active-square');
      this.setState({[this.state.activeAddress]: null})
      let address = event.target.id || event.target.alt
      this.setState({[address]: this.state.activeFigure})
      this.setState({activeAddress: null})
      this.setState({activeFigure: null});
    }
  };

  showField = (color) => {
    let result = [];
    let arrayField = [
      ['a8', 'white-field'],
      ['b8', 'black-field'],
      ['c8', 'white-field'],
      ['d8', 'black-field'],
      ['e8', 'white-field'],
      ['f8', 'black-field'],
      ['g8', 'white-field'],
      ['h8', 'black-field'],
      ['a7', 'black-field'],
      ['b7', 'white-field'],
      ['c7', 'black-field'],
      ['d7', 'white-field'],
      ['e7', 'black-field'],
      ['f7', 'white-field'],
      ['g7', 'black-field'],
      ['h7', 'white-field'],
      ['a6', 'white-field'],
      ['b6', 'black-field'],
      ['c6', 'white-field'],
      ['d6', 'black-field'],
      ['e6', 'white-field'],
      ['f6', 'black-field'],
      ['g6', 'white-field'],
      ['h6', 'black-field'],
      ['a5', 'black-field'],
      ['b5', 'white-field'],
      ['c5', 'black-field'],
      ['d5', 'white-field'],
      ['e5', 'black-field'],
      ['f5', 'white-field'],
      ['g5', 'black-field'],
      ['h5', 'white-field'],
      ['a4', 'white-field'],
      ['b4', 'black-field'],
      ['c4', 'white-field'],
      ['d4', 'black-field'],
      ['e4', 'white-field'],
      ['f4', 'black-field'],
      ['g4', 'white-field'],
      ['h4', 'black-field'],
      ['a3', 'black-field'],
      ['b3', 'white-field'],
      ['c3', 'black-field'],
      ['d3', 'white-field'],
      ['e3', 'black-field'],
      ['f3', 'white-field'],
      ['g3', 'black-field'],
      ['h3', 'white-field'],
      ['a2', 'white-field'],
      ['b2', 'black-field'],
      ['c2', 'white-field'],
      ['d2', 'black-field'],
      ['e2', 'white-field'],
      ['f2', 'black-field'],
      ['g2', 'white-field'],
      ['h2', 'black-field'],
      ['a1', 'black-field'],
      ['b1', 'white-field'],
      ['c1', 'black-field'],
      ['d1', 'white-field'],
      ['e1', 'black-field'],
      ['f1', 'white-field'],
      ['g1', 'black-field'],
      ['h1', 'white-field'],
    ];

    if (color === 'white') {
      for (let i = 0; i < 64; i = i + 8) {
        let row = [];
        for (let j = i; j < i + 8; j++) {
          if (this.state[arrayField[j][0]]) {
            row.push(
              <div key={arrayField[j][0]}
                   id={arrayField[j][0]}
                   className={arrayField[j][1]}
                   onClick={this.clickField}>
                <img src={this.state[arrayField[j][0]]} alt={arrayField[j][0]}/>
              </div>)
          } else {
            row.push(
              <div key={arrayField[j][0]}
                   id={arrayField[j][0]}
                   className={arrayField[j][1]}
                   onClick={this.clickField}>
              </div>)
          }
        }
        result.push(
          <div key={i} className='row'>
            {row}
          </div>
        )
      }
    }
    if (color === 'black') {
      for (let i = 63; i >= 0; i = i - 8) {
        let rowblack = [];
        for (let j = i; j > i - 8; j--) {
          if (this.state[arrayField[j][0]]) {
            rowblack.push(
              <div key={arrayField[j][0]}
                   id={arrayField[j][0]}
                   className={arrayField[j][1]}
                   onClick={this.clickField}>
                <img src={this.state[arrayField[j][0]]} alt={arrayField[j][0]}/>
              </div>)
          } else {
            rowblack.push(
              <div key={arrayField[j][0]}
                   id={arrayField[j][0]}
                   className={arrayField[j][1]}
                   onClick={this.clickField}>
              </div>)
          }
        }
        result.push(
          <div key={i} className='row'>
            {rowblack}
          </div>
        )
      }
    }
    return result;
  };

  render() {
    store.dispatch('initColor', 'white')
    return (
      <div className="shahvats-dashboard">
        {this.showField('white')}
      </div>
    );
  }
}

export default ShahvatsDashboard;
