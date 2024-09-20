window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.my-picture');
    const scrollPosition = window.pageYOffset;
    // Adjust the multiplier (0.5) to control the speed of the scroll effect just putting this here for later
    parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
  }
);

  const button = document.getElementById('data-button');
  const popup = document.getElementsByClassName('background-dark')[0];
  const close = document.getElementById('data-close');
  const popupcontent = document.getElementsByClassName('project-details-container')[0];

  // add transition opening
  window.addEventListener('click', function(event){
    if (event.target.closest('#data-button')) {
      popup.style.display = 'block'; 
        popup.style.opacity = '1';
    } 
  }
);


window.addEventListener('click', function(event){
  if (event.target.closest('#data-close')) {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.style.display = 'none'; 
  }, 300); //300 miliseconds
  } 
}
);


window.addEventListener('click', function(event){
  if (event.target.classList.contains('background-dark')) {
    popup.style.display='none';
    popup.style.opacity = '0';
  } 
}
); 


//add transition ease