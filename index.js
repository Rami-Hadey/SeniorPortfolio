var string = "I am an aspiring web and software developer";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();

var string2 = "I am an aspiring web and software developer";
var str2 = string2.split("");
var el2 = document.getElementById('str2');
(function animate() {
str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running2); 
var running2 = setTimeout(animate, 90);
})();