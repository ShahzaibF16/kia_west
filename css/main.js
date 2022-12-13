let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 20);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 20);
});
}


var state = document.getElementById("state")
var city = document.getElementById("city")
var dealer = document.getElementById("dealer")

var state_List =  ["Gujarat"]
var city_List = ["Ahmedabad", "Himmatnagar"]
var ahmed_dealer = ["West Coast,SG Highway North","West Coast,Ambawadi"]
var himmat_dealer = ["West Coast,Village motipura"]

if (state.value == state_List[0]){
    for(var i of city_List){
        city.innerHTML += `<option>${i}</option>` 
    }
}

