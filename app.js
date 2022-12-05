const hour = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function displayTime() {
  let date = new Date();
  let hr = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = "AM";

  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
  }

  if (sec > 59) {
    sec = 0;
    mins = mins + 1;
  }


  hr = hr < 10 ? "0" + hr : hr;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;
 
  hour.innerText = hr;
  hour.style.fontSize = 50 + 'px';

  minutes.innerText = mins;
  minutes.style.fontSize = 50 + 'px';

  seconds.innerText = sec;
  seconds.style.fontSize = 50 + 'px';

  ampmEl.innerText = ampm
  ampmEl.style.fontSize = 50 + 'px';
 
}


setInterval(displayTime, 1000);

// Morning 5 am to 12 pm (noon)
// Afternoon 12 pm to 5 pm.
// Evening 5 pm to 9 pm.
// Night 9 pm to 4 am.
