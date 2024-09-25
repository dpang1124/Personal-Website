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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Data.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Enemy.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Instant.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Conway.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Short.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Personal.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Queen.png')";
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
  popupcontent.style.backgroundImage = "url('../icons/Projects/Self.png')";
popupcontent.style.backgroundSize = 'cover';  
popupcontent.style.backgroundPosition = 'center'; 

} 
}
);