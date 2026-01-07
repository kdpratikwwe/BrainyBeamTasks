let myMap=new Map();

myMap.set("Apple","30");
myMap.set("Banana","20");
myMap.set("Mango",'50');


console.log(" ",myMap.get("Apple"));


myMap.delete("Banana");

for (let [key,value] of myMap ){
    console.log(key+" : "+value);
}