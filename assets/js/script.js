'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Function to copy text to clipboard
document.addEventListener('DOMContentLoaded', function() {
  const caText = document.getElementById('ca-text');
  const caCopy = document.querySelector('.ca-copy');
  const copyTextBtn = document.getElementById('copy-text-btn');

  // Add click event listener to caText area
  caText.addEventListener('click', function() {
      // Create a temporary textarea element to copy the text
      const textarea = document.createElement('textarea');
      textarea.value = caCopy.textContent;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px'; // Move the textarea off-screen
      document.body.appendChild(textarea);

      // Copy the text inside the textarea
      textarea.select();
      document.execCommand('copy');

      // Remove the textarea from the DOM after copying
      document.body.removeChild(textarea);

      // Visual feedback or alert (optional)
      copyTextBtn.classList.add('ri-check-line'); // Change icon to a check mark
      setTimeout(function() {
          copyTextBtn.classList.remove('ri-check-line'); // Remove check mark after some time
      }, 1000);
  });
});

function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }