// typewriter
var i=0;
var j=0;
let txt=["Physics.","Chemistry.",'Mathematics.','Coding.','Electrical.'];
var x=0;
let content=[];
let text=document.getElementById('typewriter');
function typewriter()
{
    if(i<txt.length)
    {    
      if(j<=txt[i].length && x==0)
      {
        content.push(txt[i].charAt(j));
        text.innerHTML=content.join('');
        j++;
      }
      
  if(j==txt[i].length+1)
  {
     x++;
     j--;
  }
  if(j>=0 && x!=0)
  {
    content.pop();
    text.innerHTML=content.join('');
    j--;
  }
  if(j<0)
  {
    i++;
    j=0;
    x=0;
    if(i==txt.length) i=0;
  }
  let time=x==0?j==txt[i].length?1500:300:50;
  setTimeout(typewriter,time);
    }
}
typewriter();

//quotes slideshow
var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("comment");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
   dots[i].style.backgroundColor = "#bbb";
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.backgroundColor = "#717171";
  slideIndex++;
  setTimeout(showSlides,7000,slideIndex);
}

//subjects slides
var subindex=1;
slidesub(subindex);
function plusSub(n)
{
  slidesub(subindex+=n);
}
function slidesub(n)
{
  var i;
  let subject=document.getElementsByClassName('subject');
  if(n>subject.length){subindex=1;}
  if(n<1){subindex=subject.length;}
  for( i=0;i<subject.length;i++)
  {
    subject[i].style.display="none";
  }
  var m=subindex-1;
  for(var j=0;j<3;j++)
  {
    if(m==subject.length){m=0;}
  subject[m].style.display="inline-block";
  m++;

  }
}