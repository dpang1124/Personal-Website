  window.addEventListener('scroll', function() {
      const parallax = document.querySelector('.my-picture');
      const scrollPosition = window.pageYOffset;
      // Adjust the multiplier (0.5) to control the speed of the scroll effect putting this here as a reminder.
      parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
  );

    const button = document.getElementById('data-button1');
    const popup = document.getElementsByClassName('background-dark')[0];
    const close = document.getElementById('data-close');
    const popupcontent = document.getElementsByClassName('project-details-container')[0];
  
    let texts = 
    [document.getElementById('data'), document.getElementById('enemy'), document.getElementById('instant'), document.getElementById('conway'),
    document.getElementById('short'), document.getElementById('personal'), document.getElementById('queen'), document.getElementById('self')];

  
  window.addEventListener('click', function(event){

    if (event.target.closest('#data-close')){

      popup.style.opacity = '0';

      setTimeout(() => {
        popup.style.display = 'none'; 
      }, 300); 

      for(var i=0; i<texts.length; i++){
        texts[i].style.opacity='0';
        texts[i].style.display='none';
      }

      popupcontent.style.backgroundImage='none';

    } 
  }
  );

  window.addEventListener('click', function(event){

    if (event.target.classList.contains('background-dark')) {

      popup.style.opacity = '0';

      setTimeout(() => {
        popup.style.display = 'none'; 
      }, 300); 

      for(var i=0; i<texts.length; i++){
        texts[i].style.opacity='0';
        texts[i].style.display='none';
      }
    
    popupcontent.style.backgroundImage='none';

    } 
  }
  ); 


//Icon Open Buttons

let moredetails = document.getElementsByClassName('more-details-button');

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[0].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[0].style.opacity='1';
      texts[0].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Data.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button2')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[1].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[1].style.opacity='1';
      texts[1].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Enemy.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button3')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[2].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[2].style.opacity='1';
      texts[2].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Instant.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button4')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[3].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[3].style.opacity='1';
      texts[3].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Conway.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button5')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[4].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[4].style.opacity='1';
      texts[4].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Short.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button6')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[5].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[5].style.opacity='1';
      texts[5].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Personal.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button7')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[6].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[6].style.opacity='1';
      texts[6].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Queen.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button8')) {
    for(var i=0; i<moredetails.length; i++){
      moredetails[i].style.display = 'none';
    }
    moredetails[7].style.display = 'block';
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[7].style.opacity= '1';
      texts[7].style.display='block';
      popupcontent.style.backgroundImage = "url('Projects/Self.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
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



