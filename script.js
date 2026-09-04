setInterval(() => {
  const now = new Date();

  // Extract and format time components
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = now.getMilliseconds();
  hours = 19
  const timeIndicator = hours < 12 ? "AM" : "PM"

  // Reference to the sun/moon shape
  const timeShape = document.getElementById("time-shape");

  // Update horizontal position of sun/moon
  const timePercent = (hours / 24) * 100;
  timeShape.style.left = `${timePercent - 4}%`;

  // Update vertical arc motion (sun rising and setting)
  const topOffset = Math.abs(hours - 12) * (40 / 12);
  timeShape.style.top = `${topOffset}%`;


  // Day/Night mode

  if (hours > 6 && hours < 12) {
    // Day
    timeShape.style.backgroundColor = "yellow";
    timeShape.style.boxShadow = "5px 5px 50px orange";
    document.body.style.backgroundColor = "rgba(0, 157, 255, 0.84)";
  } else if (hours >= 12 && hours < 18) {
    // Afternoon
    timeShape.style.backgroundColor = "yellow";
    timeShape.style.boxShadow = "5px 5px 50px orange";
    document.body.style.backgroundColor = "rgba(255, 81, 0, 0.5)";
  } else if (hours >= 18 || hours <= 6) {
    // Night
    timeShape.style.backgroundColor = "grey";
    timeShape.style.boxShadow = "2px 2px 50px grey";
    document.body.style.backgroundColor = "rgba(0, 21, 255, 0.84)";
  }

  // Convert 24hr to 12hr format
  const displayHours = String(hours % 12 || 12).padStart(2, "0");
  const displayMillis = String(milliseconds).padStart(3, "0").slice(0, 2);

  // Update DOM
  document.getElementById("hours").innerText = displayHours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("mili-sec").innerText = displayMillis;
  document.getElementById("indicators").innerText = timeIndicator;
}, 1); // Repeat after every 1 milisecond
