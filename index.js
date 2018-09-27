// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
};

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
};

var appendKitten = function(name){
  
};