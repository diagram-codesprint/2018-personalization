
import React, { Component } from 'react';
import pos from 'pos';
import './App.css';

class App extends Component {

onSubmit(){
  let Data = document.getElementById('myData').value
console.log(Data);
let keyValue = [
["CC", "Coord Conjunction"],           
["CD", "Cardinal number"],     
["DT", "Determiner"  ],             
["EX", "Existential there"],       
["IN","Preposition"],             
["JJ", "Adjective"],           
["JJR", "Adj., comparative"],      
["JJS", "Adj., superlative"],       
["LS","List item marker"],         
["MD", "Modal"],                    
["NN", " Noun sing. or mass"],     
["NNP", "Proper noun, sing."],      
["NNPS", "Proper noun, plural"],    
["NNS","Noun, plural"],           
["POS" ,"Possessive ending"],       
["PDT", "Predeterminer"],           
["PP$" ,"Possessive pronoun"],    
["PRP", "Personal pronoun"],         
["RB","Adverb"],                   
["RBR","Adverb, comparative"],   
["RBS","Adverb, superlative"],    
["RP", "Particle"],                
["SYM", "Symbol"],                 
["TO","to"],                    
["UH", "Interjection"],             
["VB","verb, base form"],          
["VBD", "verb, past tense"],        
["VBG","verb, gerund"],           
["VBN", "verb past part"],         
["VBP", "Verb present"],           
["VBZ", " Verb present"],           
["WDT","Wh-determiner"],          
["WP", "Wh pronoun"],              
["WP$", "Possessive-Wh"],           
["WRB", "Wh-adverb"],               
["," ,"Comma"],                     
[".","Sent-final punctuation"],      
[":", "Mid-sent punctiation."],           
["$" ,"Dollar sign"],               
["#", "Pound sign"],               
['"',"quote"],                    
["(", "Left paren"],                
[")", "Right paren"]     
  
];

console.log(keyValue[0]);
var words = new pos.Lexer().lex(Data);
var tags = new pos.Tagger()
  .tag(words)
  .map(function(tag){
    let newWord =   document.createElement('span');
    let newWordIndex = keyValue.indexOf(tag[1]);
  
      for (var i = 0; i <keyValue.length; i++) {
          // This if statement depends on the format of your array
          if (keyValue[i][0] == tag[1]) {
            
    newWord.setAttribute('title',keyValue[i][1])
          }
      }


    newWord.innerHTML =  tag[0];
    document.getElementById('output').appendChild(newWord);
    
    return tag[0] + '/' + tag[1];})
  .join(' ');
  console.log(tags)

}

  render() {
    return (
      <div className="App">
  <textarea className="styleText" id="myData" ></textarea>
  <div id="output"className="textReadOut"></div>
  <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
