$(document).ready(function() {
    var options = {
        strings: ["Computer Engineering @ Queen's Uni.^2000", 
                  "HoloLens cancer cell visualization @ Microsoft.^2000",
                  "Music producer &amp; DJ.^2000",
                  "Full-stack web developer.^2000",
                  "Freelance software consultant.^2000",
                  "Princeton &amp; Queen's hackathon champion.^2000",
                  "1&#47;2 Californian 1&#47;2 Canadian ^1000 &amp; confused.^2000",
                  "Always learning,^1000 always creating.^2000",
                  "NorCal -> Kingston -> Vancouver -> Seattle -> ^1000 ...^2000",
                  "Software Engineer."
                 ],
        typeSpeed:60
    }
    
    var typed = new Typed("#type_target", options);
});