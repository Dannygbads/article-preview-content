let hiddenFooter= document.querySelector('.hidden-footer')
let shareBtn= document.querySelector('.share')
let arrow= document.querySelector('.arrow')



shareBtn.addEventListener('click',  function (){
    hiddenFooter.classList.toggle('hidden-footer') 
    shareBtn.classList.toggle('svg-dec',)
    shareBtn.classList.toggle('share',)
    arrow.classList.toggle('show-arrow')

  
    
})