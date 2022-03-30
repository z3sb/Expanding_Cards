// Z3sb

let places = document.querySelectorAll('.place');

places.forEach(place => {
    place.addEventListener('click', ()=>{
        removeActiveClasses();
        place.classList.add('active')
    })
})
function removeActiveClasses(){
    places.forEach(place => {
        place.classList.remove('active')
    })
}