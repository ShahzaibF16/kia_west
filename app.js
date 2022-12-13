var state = document.getElementById("state")
var city = document.getElementById("city")
var dealer = document.getElementById("dealer")

var state_List =  ["Gujarat"]
var city_List = ["Ahmedabad", "Himmatnagar"]
var ahmed_dealer = ["West Coast,SG Highway North","West Coast,Ambawadi"]
var himmat_dealer = ["West Coast,Village motipura"]

if (state.value == state_List[0]){
    console.log(state_List[0])
    for(var i of city_List){
        city.innerHTML += `<option>${i}</option>` 
    }
}
