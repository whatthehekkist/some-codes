# jquery selector and method

```html
<!DOCTYPE html>
<html>
<head>
   <!-- JQuery reference -->
  <script src="https://code.jquery.com/jquery-3.6.0.js" 
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
  crossorigin="anonymous"></script>
</head>

<body>
  <p style="display: none;">I'm hidden.</p>
  <p class="class">hi</p>
  <p id="id">hello</p>
  
  <script>
    $('p').show();
    $('.class').css('color', 'blue');
    $('#id').hide();
  </script>
</body>
</html>
```

# jquery and active link


```html
<!DOCTYPE html>
<html>
<head>
  <!-- JQuery reference -->
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
  
  <!-- Bootstrap css reference -->
  <link 
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
    crossorigin="anonymous">
    
    <!-- Bootstrap js reference -->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>

<body>
  
  <!-- Bootstrap nav -->
  <nav class="p-3 container navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" style="font-weight: bold;" href="#">
      Home
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav mr-auto">
        <div class="nav-item">
          <a class="navbar-brand nav-link" 
          target="_blank"
          href="https://www.amazon.com/dp/B0C1NXJFPQ?tag=breakwindo-20">
          	#link1
          </a>
        </div>
        <div class="nav-item">
          <a class="navbar-brand nav-link" target="_blank"
          href="https://facestyling.click/">
          	#link2
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  <script>  
   $(document).ready(function () {
     //change an active link dynamically
     $(".navbar-nav a").on("click", function(){
       $(".navbar-nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
     });  
   });
  </script>
  
</body>
</html>
```

# BS-nav example code for browser inspection
sample page at https://bs-nav-example-v2.netlify.app/

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>bs-nav example for browser inspection</title>

  <!-- JQuery reference -->
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
  
  <!-- Bootstrap css reference -->
  <link 
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
    crossorigin="anonymous">
    
    <!-- Bootstrap js reference -->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

  <style>
    body {
      font-family: sans-serif;
      background-color: #fff6df;
    }

    .myclass {
      background-color: #ffffff;
      width: 600px;
      height: auto;
      margin: 0 auto;
      padding: 20px;
    }

    footer {
      background-color: #fff6df;
      width: 600px;
      height: auto;
      margin: 0 auto;
      padding: 20px;
    }
  </style>
</head>

<body>

  <div class="myclass mt-5">
    <!-- https://mdbootstrap.com/docs/b4/jquery/navigation/navs/ -->
    <nav class="p-3 container navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" style="font-weight: bold;" href="#">
        Home
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 

      <div class="collapse navbar-collapse" id="navbarNav">

        <div class="navbar-nav mr-auto">
          <div class="nav-item">
            <a class="navbar-brand nav-link" href="#">#link1</a>
          </div>
          <div class="nav-item">
            <a class="navbar-brand nav-link" href="#">#link2</a>
          </div>
        </div>
      </div>
    </nav>
    
    
    <div class="text-center mt-3 mb-5">
      <h5>Lorem ipsum dolor sit amet. Et ipsa rerum est accusamus voluptate eos quia eius ab dolorum reiciendis et fuga pariatur. Cum assumenda nulla ea consectetur officiis qui quidem atque! Ea quia corrupti ut Quis quis ut repellendus galisum ut quasi Quis hic nihil voluptatem.
      </h5>
    </div>
  </div>

  <footer class="text-center">
    <p class="copy-right mt-5">
      <strong>&copy; <a href="#">example.com</a> All Rights Reserved</strong>
    </p>
  </footer>

 <script>  
   $(document).ready(function () {
     //change an active link dynamically
     $(".navbar-nav a").on("click", function(){
       $(".navbar-nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
     });  
   });
  </script>


</body>

</html>
```

<br/>

# JS if-else statemant
```javascript
let condition, decision;
condition = "it's pouring now";
decision = "bring an umbrella";

if (condition.includes("pouring")) { //true
 console.log(decision); //bring an umbrella
}
```

```javascript
let condition, decision;
condition = "it's pouring now";
condition = condition.replace("pouring", "drizzling");
console.log(condition); //it's drizzling now

if (condition.includes("pouring")) { //false

 decision = "bring an umbrella";
 console.log(decision);

}else {
 decision = "go hoodie";
 console.log(decision); //go hoodie
}
```
