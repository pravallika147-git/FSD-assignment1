//Count the Frequency of Characters in a String

let str="program";
let obj:any={};
for(let ch of str){
    if(obj[ch]){
        obj[ch]++;
    }
    else{
        obj[ch]=1;
    }
}
for(let key in obj){
    console.log(key,":",obj[key]);
}


//Remove Duplicate Characters from a String

let str1="programming";
let ans="";
for(let ch of str1){
    if(!ans.includes(ch)){
        ans+=ch;
    }
}
console.log(ans);


// Find the Second Largest Number in an Array

let arr=[10,25,8,40,15];
let first=-Infinity;
let second=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>first){
        second=first;
        first=arr[i];
    }
    else if(arr[i]>second && arr[i]!=first){
        second=arr[i];
    }
}

console.log("Second Largest:",second);


//Merge Two Arrays Using the Spread Operator

let a=[1,2,3];
let b=[4,5,6];
let c=[...a,...b];
console.log(c);


// Find the Missing Number in an Array

let arr1=[1,2,3,5];
let n=5;
let total=n*(n+1)/2;
let sum=0;

for(let i=0;i<arr1.length;i++){
    sum+=arr1[i];
}

console.log("Missing Number:",total-sum);


//Rotate an Array by N Positions

let arr2=[1,2,3,4,5];
let k=2;

let result=[...arr2.slice(k),...arr2.slice(0,k)];

console.log(result);


//Count the Occurrences of Each Element in an Array

let arr3=[1,2,2,3,1,4];
let map:any={};
for(let i=0;i<arr3.length;i++){
    if(map[arr3[i]]){
        map[arr3[i]]++;
    }
    else{
        map[arr3[i]]=1;
    }
}
for(let key in map){
    console.log(key,":",map[key]);
}


//Find Duplicate Elements in an Array

let arr4=[2,4,2,6,4,8];
for(let i=0;i<arr4.length;i++){
    let count=0;
    for(let j=0;j<arr4.length;j++){
        if(arr4[i]==arr4[j]){
            count++;
        }
    }
    if(count>1){
        let printed=false;

        for(let k=0;k<i;k++){
            if(arr4[k]==arr4[i]){
                printed=true;
            }
        }
        if(!printed){
            console.log(arr4[i]);
        }
    }
}


//Create a Student Class with a Constructor and Display Student Details

class Student{
    rollNo:number;
    name:string;
    branch:string;

    constructor(rollNo:number,name:string,branch:string){
        this.rollNo=rollNo;
        this.name=name;
        this.branch=branch;
    }

    display(){
        console.log("Roll No:",this.rollNo);
        console.log("Name:",this.name);
        console.log("Branch:",this.branch);
    }
}
const s1=new Student(11,"Rahul","CSE");
const s2=new Student(12,"Priya","AIDS");
s1.display();
console.log("------------");
s2.display();