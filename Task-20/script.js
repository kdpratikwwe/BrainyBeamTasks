for(let i=0;i<5;i++){
    console.log("Iteration number: "+i);
}


let a=[10,20,30,40,50];
for(let i=0;i<a.length;i++){
    console.log("Array element at index "+i+" is: "+a[i]);
}
let student=['John', 'Doe', 25, 'New York']

for(let i=0;i<student.length;i++){
    console.log("Student info at index "+i+" is: "+student[i]);
}

let num1=0; num2=1;

for(let i=0;i<10;i++){
    
    console.log(num1);
    num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;

}