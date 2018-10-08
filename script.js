let message;
function addAlphabet(key) {
   message = "";
    message += key;
    document.querySelector(".inputs").innerHTML +=message;
   }

   function  enter(){
    alert("Your message has been sent!!");
    message="";

    document.querySelector(".inputs").innerHTML = message;


    


}
