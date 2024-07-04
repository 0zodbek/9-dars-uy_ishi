fetch("https://cars-pagination.onrender.com/all-countries",{
method:"GET"
})

.then(function(response){
    if(response.status == 200){
    console.log(response);
    }
})