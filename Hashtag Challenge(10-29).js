var message = "How the Avocado Became the Fruit of the Global Trade";
const i = message.length;
const words = message.split(" ");
words.sort();

if(i<3){
console.log("#"+words[0]+" #"+words[1]);
}

else{
console.log("#"+words[0]+" #"+words[1]+" #"+words[2]);
}