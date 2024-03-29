(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let launchday = "Oct 31, 2021 00:00:00",
        countDown = new Date(launchday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.querySelector("#days").innerText = Math.floor(distance / (day)) ,
            document.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something when date is reached
          if (distance < 0) {
            let headline = document.querySelector("#headline"),
                countdown = document.querySelector("#countdown"),
                content = document.querySelector("#content");
  
            headline.innerText = "It's time!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());