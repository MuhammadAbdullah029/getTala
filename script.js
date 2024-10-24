
var flag = 0;
var menu = document.querySelector('#menu');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
menu.addEventListener('click', () => {
  if (flag === 0) {
    document.getElementById('topmenu').style.transform = `translateY(0)`
    line1.style.backgroundColor = `#232025`;
    line2.style.backgroundColor = `#232025`;
    line1.style.transform = `rotate(40deg)`;
    line1.style.width = `70%`;
    line2.style.transform = `rotate(-40deg)`;
    line2.style.backgroundColor = `#232025`;
    document.querySelector('nav').style.color = `#232025`;
    flag = 1;
  }
  else {
    document.getElementById('topmenu').style.transform = `translateY(-100%)`
    line1.style.backgroundColor = `#cecece`;
    line2.style.backgroundColor = `#cecece`;
    line1.style.transform = `rotate(00deg)`;
    line1.style.width = `100%`;
    line2.style.transform = `rotate(-0deg)`;
    line2.style.backgroundColor = `#cecece`;
    document.querySelector('nav').style.color = `#cecece`;
    flag = 0;
  }
})

function page1Animation() {
  gsap.from('#page1 h1', {
    duration: 2,
    opacity: 0,
    onStart: function () {
      $(document).ready(function () {
        $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
      })
    }
  })
  gsap.from(['.p1-flex-elm1 h2', '.p1-flex-elm2 a'], {
    duration: 1.5,
    delay: 0.5,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: {
      amount: 0.5
    }
  });


gsap.to('#p1-img img', {
    duration: 2,
    scale: 1.11,
    scrollTrigger: {
      trigger: '#p1-img img',
      scrub: 2,
      end: 'bottom 35%',
      start: 'top 35%',
    //   markers: true
  
    },
  });


}


function page2Animation() {
  gsap.from("#page2 h1", {
    opacity: 0,
    y: 90,
    duration: 2,
    scrollTrigger:{
      trigger: '#page2 h1',
      // scroller: 'page2',
      start: "top 80%",
      end: "bottom 95%",
      scrub: 2,
      // markers: true
    }
  })
}


function page3Animation() {
  let items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener('mouseenter', function(){
    gsap.to(item.childNodes[5], {
      opacity: 1,
      scale: 1,
      zIndex: -1
    });
  });
  item.addEventListener('mouseleave', function(){
    gsap.to(item.childNodes[5], {
      opacity: 0,
      scale: 0
    });
  });
  item.addEventListener('mousemove', function(dets){
    gsap.to(item.childNodes[5], {
      x: dets.x - item.getBoundingClientRect().x - 35,
      y: dets.y - item.getBoundingClientRect().y - 35,
    });
  });
})


gsap.from('.line h1', {
  duration: 2,
  y: 75,
  opacity: 0,
  scrollTrigger: {
    trigger: '.line h1',
    scrub: 2,
    end: 'bottom 85%',
    start: 'top 85%',
    // markers: true

  },
});
gsap.from('.line h1', {
  duration: 2,
  y: 75,
  opacity: 0,
  scrollTrigger: {
    trigger: '.line h1',
    scrub: 2,
    end: 'bottom 85%',
    start: 'top 85%',
    // markers: true

  },
});
gsap.from('.item', {
  duration: 2,
  y: 75,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: '.item',
    scrub: 2,
    end: 'bottom 75%',
    start: 'top 80%',
    // markers: true,

  },
});
}

function page4Animation() {
  gsap.from('#p4-h1', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#p4-h1',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
  gsap.from('#p4-flex-left h1, #p4-flex-right h2', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#p4-flex-left h1, #p4-flex-right h2',
      scrub: 2,
      end: 'bottom 95%',
      start: 'top 85%',
      // markers: true
  
    },
  });
}

function page5Animation() {
  gsap.from('#page5 h1', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#page5 h1',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
  gsap.from('#page5 p', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#page5 p',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
  gsap.from('#page5 img', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#page5 img',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
}

function page6Animation() {
  gsap.from('#page6 h1', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#page6 h1',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
  gsap.from('#p6-flex-left h1, #p6-flex-right h1', {
    duration: 1,
    y: 75,
    opacity: 0,
    scrollTrigger: {
      trigger: '#p6-flex-left h1, #p6-flex-right h1',
      scrub: 2,
      end: 'bottom 90%',
      start: 'top 85%',
      // markers: true
  
    },
  });
  
  let items = document.querySelectorAll(".p6-flex-elm");
  
  items.forEach((item) => {
    item.addEventListener('mouseenter', function(){
      gsap.to(item.childNodes[3], {
        opacity: 1,
        scale: 1,
        zIndex: -1
      });
    });
    item.addEventListener('mouseleave', function(){
      gsap.to(item.childNodes[3], {
        opacity: 0,
        scale: 0
      });
    });
    item.addEventListener('mousemove', function(dets){
      gsap.to(item.childNodes[3], {
        x: dets.x - item.getBoundingClientRect().x - 45,
        y: dets.y - item.getBoundingClientRect().y - 115,
      });
    });
  })
}


page1Animation()
page2Animation()
page3Animation()
page4Animation()
page5Animation()
page6Animation()