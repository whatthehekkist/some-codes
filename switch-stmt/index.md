# switch statement; example #1
given that expression is a random number generated between 0 and 2, 
alert a matching case (matching number) in browser.
```javascript
//switch statement
let match = Math.floor(Math.random() * 3); //a random integer from 0 to 2
let a=0,b=1,c=2; //case a, b, and c

 switch (match) {  
    case a:
      alert("I got number " + a);
      break;

    case b:
      alert("I got number " + b);
      break;

    case c:
      alert("I got number " + c);
      break;
     
    default:
      // code block
      break;
  }
```

# switch statement; example #2
given that a JS object (array) contains a set of face shape prediction results for an input image returned by an AI, 
prepare and show the best matching face shape result with the input image in browser using swtich statement. <br/>

The following code is a sample for a specific logic in a task of program (web app), so it's NOT executable.
More on my ebook and source code at:

-  <a href="https://www.buymeacoffee.com/whatthehekkist/e/137168">[ebook | PDF] What The Hekk is HTML/CSS/JS?</a>
-  <a href="https://www.amazon.com/dp/B0C1NXJFPQ?tag=breakwindo-20">[ebook | EPUB] What The Hekk is HTML/CSS/JS?</a>   
-  <a href="https://www.instagram.com/whatthehekkist/">instagram</a>
-  <a href="https://facestyling.click/">facestyling.click</a>

```javascript

/* process to load image recognition AI.. */ 

  let image = document.getElementById('face-image'); //input
  const prediction = await model.predict(image, false); //API call
  
  switch (prediction[0].className) {  
    case 'oval':
        resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% OVAL FACE';
        resultExplain = '<div>Your have an oval face shape</div>';
        resultComment = 'Oval face is blah blah ....';
        break;

    case 'round':
      //code block
      break;

    case 'long':
      //code block
      break;
  
    case 'square':
      //code block
      break;  
  
    case 'triangle':
      //code block
      break; 
      
    default:
      resultTitle = '🤔unknown🤔 Please try again';
      resultExplain = '';
      resultComment = '';
  }

/* process to show human readable result (text & chat) in browser.. */ 
```