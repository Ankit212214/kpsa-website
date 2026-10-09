
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('.navlinks a').forEach(a=>{
  a.addEventListener('click',()=>nav && nav.classList.remove('open'));
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

function sendWhatsApp(event){
  event.preventDefault();
  const form=event.target;
  const name=form.name.value.trim();
  const phone=form.phone.value.trim();
  const service=form.service.value;
  const message=form.message.value.trim();
  const text=`KPSA Website Enquiry%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/918090082695?text=${text}`,'_blank');
}
