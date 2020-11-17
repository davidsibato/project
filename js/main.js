var nbDrop = 800;
   
   function randRange(maxNum, minNum) {
    return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
   }
   //creating the rain drop
   function createRain() {
    for (i = 0; i < nbDrop; i++) {
     
     var dropLeft = randRange(0, 2500);
     var dropTop = randRange(-1000, 1000);
     $('.rain').append('<div class="drop" id="drop'+ i +'"></div>');
     $('#drop' + i).css('left', dropLeft);
     $('#drop' + i).css('top', dropTop); 
    }
   }

   const container = document.querySelector(".container")
   const project=[
       {name: "online payment", image:"images/card.png", link:""},
       {name: "tosala", image:"images/t_logo.png", link:"https://letwork.herokuapp.com/"},
       {name: "portfolio", image:"images/dav.png", link:"https://davidsibato.github.io/portfolio/"},
       {name: "Siphone app", image:"images/images.png", link:"https://siphone.netlify.app/"},
       {name: "Sixbato weather app", image:"images/sixbato.png", link:"https://sibato-smashit.web.app/"},
       {name: "SixMovie", image:"images/self.png", link:"https://sibato-movie.netlify.app/"},
       {name: "2j water", image:"images/water-drop.png", link:""},
       {name: "Priscy's Liquorshop", image:"images/liquor.png", link:""},
       {name: "first-rate care", image:"images/first-rate.png", link:""},
       {name: "Aulda", image:"images/aulda.png", link:""}
   ]

   const showProject=()=>{
       let output=""
       project.forEach(
           ({name,image,link})=>
           (output +=`
                    <div class="card">
                    <img class="card--img" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <a class ="card--link" href=${link}>Go To</a>
                    </div>         
           `)
       )
       container.innerHTML=output
   }

   document.addEventListener("DOMContentLoaded", showProject)

   if("serviceWorker" in navigator){
       window.addEventListener("load", function(){
           navigator.serviceWorker
           .register("/serviceWorker.js")
           .then(res => this.console.log("service Worker registered"))
           .catch(err => this.console.log("service worker not registered", err))
       })
   }