function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from('.line h1', {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from('#line-part1, .line h2, #now h3', {
    opacity: 0,
    onStart: function () {
      let incH5 = document.querySelector('#line-part1 h5');
      let inc = 0;
      function callClearInterval() {
        clearInterval(increaseInc);
      }
      let increaseInc = setInterval(() => {
        incH5.innerHTML = inc++;
        if (inc >= 101) {
          callClearInterval();
        }
      }, 27);
    },
  });

  tl.to('#loader', {
    opacity: 0,
    duration: 0.2,
    delay: 1.3,
  });

  tl.from('#page1', {
    y: 1200,
    opacity: 1,
    delay: 0.2,
    ease: Power4,
    duration: 0.4,
  });

  tl.to('#loader', {
    display: 'none',
  });

  tl.from('#navigation', {
    opacity: 0,
  });

  tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1', {
    y: 140,
    stagger: 0.3,
  });
}

function cursorAnimation() {
  document.addEventListener('mousemove', function (e) {
    gsap.to('#cursor', {
      left: e.x,
      top: e.y,
    });
  });

  Shery.makeMagnet('#nav-links h4');
}

loadingAnimation();
cursorAnimation();
