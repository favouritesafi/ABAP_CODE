<script>
    function changeBGColor(element) {
	
	  document.getElementById('r1').style.width = "33%";
      var bgColor = window.getComputedStyle(element).backgroundColor;
      document.body.style.backgroundColor = bgColor;
	  document.getElementById(element).style.width = "100%";
    }
	function decreaseSize() {
	document.getElementById('initial').style.borderBottomRightRadius = "350px";
	document.getElementById('initial').style.borderTopRightRadius = "350px";
	document.getElementById('photoHolder').style.left = "50%";
	document.getElementById('initial-back').style.width = "32%";
	document.getElementById('rightText').style.opacity = "0.2";
	document.getElementById('r1d').style.left = "35%";
	document.getElementById('r1').style.width = "100%";
	document.getElementById('r7').style.width = "100%";
	var rightText = document.getElementById('r1d');
	rightText.style.display = "block";
            
    var initialDiv = document.getElementById('initial');
    initialDiv.style.width = '30%';
    }
	
	    function updateTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();

      // Display the time values
      document.getElementById('hourValue').textContent = hours;
      document.getElementById('minuteValue').textContent = minutes;
      document.getElementById('secondValue').textContent = seconds;

      // Adjust the height of each time unit
      document.querySelector('.hour').style.height = (hours * 15) + 'px'; // Assuming maximum 24 hours
      document.querySelector('.minute').style.height = (minutes * 6) + 'px'; // Assuming maximum 60 minutes
      document.querySelector('.second').style.height = (seconds * 6) + 'px'; // Assuming maximum 60 seconds
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Initial call to display the time immediately
    updateTime();
  </script>