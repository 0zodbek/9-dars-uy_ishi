function createCard (el){
return`
<div class="card" >
                <div class="part-image">
                   <img id="img" width="320" height="150" src="${el.flag}" alt="bu yerda bayrog' rasmi turibdi">
                </div>
                <div class="part-info">
                   <h1>${el.country}</h1>
                   <p>${el.code}</p>
                </div>
            </div>
`
}
const loader = document.querySelector('#loader')
const wrapper = document.querySelector('#wrapper')
document.addEventListener('DOMContentLoaded',function() {
    fetch("https://cars-pagination.onrender.com/all-countries",{
    method:"GET"
    })
    
    .then(function(response){
        if(response.status == 200){
        return response.json();
        }
    })
    
    .then(function(data){
        wrapper.style.display = 'flex'     
        //   console.log(data);
    data.length > 0 && data.forEach(function(el){
    let card = createCard(el)
    wrapper.innerHTML += card;
    })
    // console.log(data);
    })
    .catch(err=>{
       console.log(err);
    })
    .finally(function(){
    loader.style.display = 'none'
    })


})
// const card = document.querySelectorAll('')