// Vanta Fog Animation
VANTA.FOG({
    el: "#landing",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x7c6966,
    midtoneColor: 0x443835,
    lowlightColor: 0x301c1a,
    baseColor: 0x443835,
    speed: 2.00,
    zoom: 0.90
})

// Sliding Navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// Mobile Navbar Option
function expansion() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
      x.className += " expanded";
    } else {
      x.className = "";
    }
}