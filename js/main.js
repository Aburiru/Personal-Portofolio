
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
const progressLine = document.getElementById('progressLine');
let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.left=mx+'px';cursor.style.top=my+'px';
});

function animateRing(){
  rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animateRing);
}
animateRing();

window.addEventListener('scroll',()=>{
  const pct=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100;
  progressLine.style.height=pct+'%';
  
  const navItems=document.querySelectorAll('.nav-item');
  const sections=document.querySelectorAll('section[id]');
  let current='';
  sections.forEach(s=>{
    if(window.scrollY>=s.offsetTop-200) current=s.getAttribute('id');
  });
  navItems.forEach(n=>{
    n.classList.remove('active');
    if(n.getAttribute('href')==='#'+current) n.classList.add('active');
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth'});
  });
});
