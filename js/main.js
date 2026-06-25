// random backgrounds
let contBackimg = true,
    continer; 
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("maincolor"));
    localStorage.getItem("maincolor");
    console.log(localStorage.getItem("maincolor"));
    document.querySelector(".wor").onclick = function(){
           localStorage.remove();
    }

let landingBage = document.querySelector('.landingBage');
//Array to bicture
       myArray  = ["h1.jpg","h2.jpg","h3.jpg","h4.jpg","h5.jpg","h6.jpg"];
// set interval
// function to control 
function funcContRan(){
       continer = setInterval(() => {

              let random = Math.floor( Math.random () * myArray.length );
      
             landingBage.style.backgroundImage = 'url("img/'+ myArray[random]+'")';
                 
            } ,1000);
      // end landing bage
}

// end function to control 
//check to stop or randomize background images
       
// starting loop to stop or randomize
       document.querySelectorAll(".optionBack span").forEach( span => {

          span.addEventListener( "click", (e) => {

              e.target.parentElement.querySelectorAll(".active").forEach( element =>{
                     console.log( e.target.parentElement.querySelectorAll(".active"));

// every element selected remove active from it
                 element.classList.remove("active");
// every element selected add active from it
             

                                               });

       e.target.classList.add("active");
       

              
                if(e.target.dataset.back === "yes"){ 
                       contBackimg = true;   
                     funcContRan();

                     localStorage.setItem("random", true);
                     console.log(localStorage.getItem("random"));
                }else{
                     
                      contBackimg = false; 
                      localStorage.setItem("random", false);
                      
                      console.log(localStorage.getItem("random"));
                     clearInterval(continer);  
                }

                                                });




                                                   });

// startting option Box  
        document.querySelector(".setingBox .congear i").onclick = function (){

         this.classList.toggle("fa-spin");
         document.querySelector(".setingBox ").classList.toggle("opin");
         

           };
// end option Box
//start optioncolor
              document.querySelectorAll(".optionColor li").forEach(li =>{
// every li to add function 
               li.addEventListener("click" , (e) => {

                     localStorage.setItem("maincolor",e.target.dataset.color);

                   
// in the click change color are selector
                 document.documentElement.style.setProperty("--main-color",localStorage.getItem("maincolor"));


// to remove class active from all li color
                 e.target.parentElement.querySelectorAll(".active").forEach(element => {

                     element.classList.remove("active");
                     e.target.classList.add("active");
                 });
// to add class active from all li color 
                 

               });


              });
//end optioncolor
// start option to stop random background images
//start our scroll
     let ourScroll = document.querySelector('.ourskill');
     console.log(ourScroll);
     window.onscroll = function onScrollFun()
     { 
       if( this.pageYOffset > (ourScroll.offsetTop + ourScroll.offsetHeight - this.innerHeight)){

               
       
                     document.querySelectorAll('.skill-progress span').forEach(span =>{
                       span.style.width = span.dataset.progress;
                     });
      }
     
     };
//end our scroll
//start my gallary
let my_gallary = document.querySelectorAll(".gallaryImag img");
              my_gallary.forEach( img =>{

                img.addEventListener( 'click', (e)=>{


                 let overlay = document.createElement('overlay');

                 overlay.className = "overlay";

                 document.body.appendChild(overlay);

                 let boxImage = document.createElement("popup_img");

                     boxImage.className = 'popup_img';

                 let imgOnBox = document.createElement("img");
                 console.log(img.src);

                 
                 
                 
                 
                
                 imgOnBox.src = img.src;
                 
                 let span_img = document.createElement('span');

                 let  text_span = document.createTextNode('X');
                  
                 span_img.appendChild(text_span);
                  
                 span_img.className = "close_span";
           
                  boxImage.appendChild(span_img);
                 
                 
                 boxImage.appendChild(imgOnBox);
              

                

                 document.body.appendChild(boxImage);

//about span an close
                 
                  
                 

                });
                

              }); 
           
             
          
             document.addEventListener( "click" , function (e) {
             
              if( e.target.className == 'close_span')
              {
                e.target.parentNode.remove();
                
                document.querySelector(".overlay").remove();
              }


             });
             var c = this.innerWidth;
             console.log(c);


            
            
//end my gallary
