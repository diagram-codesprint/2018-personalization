
import React, { Component } from 'react';
import pos from 'pos';
import unirest from 'unirest';
import GoogleImageSearch from 'free-google-image-search';
import './App.css';


class App extends Component {

 
  

onSubmit(){

  let searchImg;
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
let key1;
console.log(keyValue[0]);
var words = new pos.Lexer().lex(Data);
var tags = new pos.Tagger()
  .tag(words)
  .map(function(tag){
    let newWord =   document.createElement('span');
    let wordImage =   document.createElement('span');
    newWord.classList.add('wordPart')
    let newWordIndex = keyValue.indexOf(tag[1]);
    let curDef;
    key1 = tag[1];
      for (var i = 0; i <keyValue.length; i++) {
          // This if statement depends on the format of your array
          if (keyValue[i][0] == tag[1]) {
            
    newWord.setAttribute('title',keyValue[i][1])

    curDef=keyValue[i][1];
          }
      }

      wordImage.innerHTML =  tag[0];
      wordImage.setAttribute('class',tag[0]+ ' textExample')
    newWord.innerHTML =  tag[0]+'  ------------  '+curDef;

    function queryApi(x){

      fetch('https://pixabay.com/api/?key=9244050-7c4261e5054ffec03e1344930&q='+x+'&image_type=photo&per_page=3')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(key1)
        if( tag[1] === "NN" ||  tag[1]=="NNS" ||  tag[1]=="NNPS" ||  tag[1] =="NNP"){
          let newImage = document.createElement('img');
          newImage.classList.add('imageResize');
          newImage.setAttribute('src',myJson.hits[0].webformatURL)
          newImage.setAttribute('alt',tag[0])
          newImage.setAttribute('title',tag[0]+' '+curDef)
          let newWord2 =   document.createElement('span');
          newWord2.innerHTML=  tag[0];
          // if(!document.querySelector('.'+tag[0]).hasChildNodes()){
            console.log(
              document.querySelector('.'+tag[0]).hasChildNodes()
            )
           
 document.querySelector('.'+tag[0]).appendChild(newImage);
        // }
      }
    
    
      });
      
    }
    document.getElementById('output').appendChild(newWord);
   

      document.getElementById('outputImage').appendChild(wordImage);
    

    queryApi(tag[0]);

 

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
  <div id="outputImage"className="imageOutput"></div>
      </div>
    );
  }
}

export default App;
