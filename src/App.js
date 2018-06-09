
import React, { Component } from 'react';
import pos from 'pos';
import './App.css';

class App extends Component {

onSubmit(){
  let Data = document.getElementById('myData').value
console.log(Data);
// let wordFun = new word();
// wordFun.isAdjective('awesome', function(result){
//   console.log(result);
// });

var words = new pos.Lexer().lex(Data);
var tags = new pos.Tagger()
  .tag(words)
  .map(function(tag){return tag[0] + '/' + tag[1];})
  .join(' ');
  console.log(tags)

}

  render() {
    return (
      <div className="App">
  <textarea className="styleText" id="myData" ></textarea>
  <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
