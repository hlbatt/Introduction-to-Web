let weatherStatus = "snowing";
let wind = 40;
let isStorm = false;

let update = document.getElementById("weather");

if ( weatherStatus == "raining"){
    update.innerHTML = "It's raining! Best not put out any washing.";
}
else if ( weatherStatus == "snowing"){
    update.innerHTML = "It's snowing! Can't dry washing today.";
}
else if (wind > 30){
    update.innerHTML = "It's really windy! Our washing might blow away.";
}
else if (weatherStatus == "sunny" && wind > 10){
    update.innerHTML = "It's perfect for washing today!";
}
else {
    update.innerHTML = "It's dry outside. We can put out washing.";
};

function stormCheck() {
    weatherStatus == "raining" || weatherStatus == "snowing" && wind > 30 ? isStorm = true : isStorm = false;
    isStorm ? update.innerHTML = "There's a storm! Stay inside." : null ;
};

stormCheck();