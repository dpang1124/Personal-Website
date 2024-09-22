window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.my-picture');
    const scrollPosition = window.pageYOffset;
    // Adjust the multiplier (0.5) to control the speed of the scroll effect just putting this here for later
    parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
  }
);

  const button = document.getElementById('data-button1');
  const popup = document.getElementsByClassName('background-dark')[0];
  const close = document.getElementById('data-close');
  const popupcontent = document.getElementsByClassName('project-details-container')[0];
 
  let texts = [document.getElementById('data'), document.getElementById('enemy'), document.getElementById('instant'), document.getElementById('conway'),
               document.getElementById('short'), document.getElementById('personal'), document.getElementById('queen'), document.getElementById('self'), ];

  

  // add transition opening
  window.addEventListener('click', function(event){
    if (event.target.closest('#data-close')) {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.style.display = 'none'; 
      }, 300); //300 miliseconds
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

//add transition ease

//below are the data button opening specific texts
window.addEventListener('click', function(event){
  if (event.target.closest('#data-button')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[0].style.opacity='1';
      texts[0].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Data.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button2')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[1].style.opacity='1';
      texts[1].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Enemy.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button3')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[2].style.opacity='1';
      texts[2].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Instant.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button4')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[3].style.opacity='1';
      texts[3].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Conway.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button5')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[4].style.opacity='1';
      texts[4].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Short.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button6')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[5].style.opacity='1';
      texts[5].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Personal.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button7')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[6].style.opacity='1';
      texts[6].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Queen.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

window.addEventListener('click', function(event){
  if (event.target.closest('#data-button8')) {
    popup.style.display = 'block'; 
      popup.style.opacity = '1';
      texts[7].style.opacity= '1';
      texts[7].style.display='block';
      popupcontent.style.backgroundImage = "url('myimages/Projects/Self.png')";
    popupcontent.style.backgroundSize = 'cover';  
    popupcontent.style.backgroundPosition = 'center'; 
   
  } 
}
);

