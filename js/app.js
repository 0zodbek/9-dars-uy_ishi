function createCard (el){
return`
<div class="card" >
                <div class="part-image">
                   <img class="flag_img" width="320" height="150" src="${el.flag}" alt="bu yerda bayrog' rasmi turibdi">
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
        //   console.log(keeper);
    data.length > 0 && data.forEach(function(el){
    let card = createCard(el)
    wrapper.innerHTML += card;
    const images = document.querySelectorAll(".flag_img");
      images.forEach(function (value) {
        value.onclick = mode;
        function mode() {
          if (value.check) {
            this.style.transform = "scale(1,1)";
          } else {
            this.style.transform = "scale(2.5,2.5)";
          }

          value.addEventListener("click", function () {
            this.style.transform = "scale(1,1)";
          });
        }
      });
    })

    })
    .catch(err=>{
       console.log(err);
    })
    .finally(function(){
    loader.style.display = 'none'
    })

})
const cards = document.getElementsByClassName('card')
const overlay = document.querySelector('#overlay')
// const keeper = [];
// const card = 
// cards.addEventListener('click',function(el){

// })
//     fetch("https://cars-pagination.onrender.com/all-countries",{
//     method:"GET"
//     })
    
//     .then(function(response){
//         if(response.status == 200){
//         return response.json();
//         }
//     })
    
//     .then(function(el){
//     //    keeper += el
//        console.log(el)
//        cards.addEventListener('click',function(){
//        return this.card.id == el.id
//     })
//     })
// ;
