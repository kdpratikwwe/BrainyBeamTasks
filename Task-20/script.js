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

function fibonacci(n) {
  let a = 0, b = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(fibonacci(10));