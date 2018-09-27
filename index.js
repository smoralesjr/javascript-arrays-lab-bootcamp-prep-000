// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
};

