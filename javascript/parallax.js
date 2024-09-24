  window.addEventListener('scroll', function() {
      const parallax = document.querySelector('.my-picture');
      const scrollPosition = window.pageYOffset;
      // Adjust the multiplier (0.5) to control the speed of the scroll effect putting this here as a reminder.
      parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
  );



//Section Detectors

function totaldistance(item){
  let distance = item.offsetTop;
  const style = window.getComputedStyle(item);
  distance += parseInt(style.marginTop, 10);
  return distance;
}

let offsets = 
[document.getElementById('page1').offsetTop, document.getElementById('page2').offsetTop, document.getElementById('page3').offsetTop,  
 document.getElementById('page4').offsetTop, document.getElementById('page5').offsetTop, document.getElementById('page6').offsetTop];

 let pages = 
 [document.getElementById('home'), document.getElementById('about'),  document.getElementById('education'), 
  document.getElementById('experience'),  document.getElementById('projects'),  document.getElementById('contact')];

  let heights =
  [document.getElementById('page1').offsetHeight/2, document.getElementById('page2').offsetHeight/2, document.getElementById('page3').offsetHeight/2,
   document.getElementById('page4').offsetHeight/2, document.getElementById('page5').offsetHeight/2, document.getElementById('page6').offsetHeight/2];

 const navmenu = document.getElementsByClassName('Nav-menu')[0];


 window.addEventListener('scroll', function(){
  const scrollPosition = window.pageYOffset;
 
    if(scrollPosition >= offsets[0] && scrollPosition < (offsets[0] + heights[0])){
      navmenu.style.opacity = '0';

        navmenu.style.display = 'none';
   
    }

    else if(scrollPosition >= (offsets[0] + heights[0]) && scrollPosition < (offsets[1] + heights[1] + 100)){
      for(var i=0; i<5; i++){
        pages[i].style.color = 'gray';
      }
      navmenu.style.opacity = '1';
      navmenu.style.display = 'flex';
          pages[1].style.color = 'white';
    }

    else if(scrollPosition >= (offsets[1] + heights[1]) && scrollPosition < (offsets[2] + heights[2] + 500)){
      for(var i=0; i<6; i++){
        pages[i].style.color = 'gray';
      }
 navmenu.style.opacity = '1';
  navmenu.style.display = 'flex';
      pages[2].style.color = 'white';
    }

    else if(scrollPosition >= (offsets[2] + heights[2]) && scrollPosition < (offsets[3] + heights[3] + 300)){
      
      for(var i=0; i<6; i++){
        pages[i].style.color = 'gray';
      }
navmenu.style.opacity = '1';
      navmenu.style.display = 'flex';
      pages[3].style.color = 'white';
      
    }

    else if(scrollPosition >= (offsets[3] + heights[3]) && scrollPosition < (offsets[4] + heights[4])){
    
      
      for(var i=0; i<6; i++){
        pages[i].style.color = 'gray';
      }
  navmenu.style.opacity = '1';
      navmenu.style.display = 'flex';
      pages[4].style.color = 'white';
    }

    else if(scrollPosition >= (offsets[4] + heights[4]) && scrollPosition < (offsets[5] + heights[5])){
      
      
      for(var i=0; i<6; i++){
        pages[i].style.color = 'gray';
      }
navmenu.style.opacity = '1';
      navmenu.style.display = 'flex';
      pages[5].style.color = 'white';
    }
 });

//when DOM loads hide navmenu by default

window.addEventListener('DOMContentLoaded', function(){
  navmenu.style.opacity = '0';
  navmenu.style.display = 'none';
});



