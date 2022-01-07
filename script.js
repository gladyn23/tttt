//Dom Elements
 const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');

 // Show Time
 function showTime() {
     let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();

     // Set Am or Pm
     const amPm = hour >= 12 ? 'Pm' : 'Am';

     // 12hr Format
    hour = hour % 12 || 12;

     // Output Time
     time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    
     setTimeout(showTime, 1000);

     // Add Zero
     function addZero(n) {
         return (parseInt(n,10) <10 ? '0' : '') + n;
     }

     //set background and greeting
     function setBgGreet() {
         let today = new Date(),
         hour = today.getHours();

         if(hour < 12) {
             //morning
             document.body.style.backgroundImage = "url('../img/morning.jpg')";
             greeting.textContent = 'Good morning';
         }else if(hour < 18){
             //afternoon
             document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
             greeting.textContent = 'Good Afternoon';
         }else{
             //evening
             document.body.style.backgroundImage = "('../img/evening.jpg')";
             greeting.textContent = 'Good Evening';
             document.body.style.color = 'white';
         }
        }
 }
 // Run
 showTime();
setBgGreet();
