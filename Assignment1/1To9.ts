//Check Prime Number

let n=17;
let count=0;

for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}


//Generate Prime Numbers in a Range

let start=1;
let end=20;
for(let i=start;i<=end;i++){
    let c=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(i);
    }
}


//Find GCD and LCM of Two Numbers

let a=12;
let b=18;
let gcd=1;
for(let i=1;i<=Math.min(a,b);i++){
    if(a%i==0 && b%i==0){
        gcd=i;
    }
}
let lcm=(a*b)/gcd;
console.log("GCD:",gcd);
console.log("LCM:",lcm);


//Check Armstrong Number

let num=153;
let temp=num;
let sum=0;
while(temp>0){
    let digit=temp%10;
    sum=sum+digit*digit*digit;
    temp=Math.floor(temp/10);
}
if(sum==num){
    console.log("Armstrong");
}
else{
    console.log("Not Armstrong");
}


// Check Perfect Number

let n1=28;
let total=0;
for(let i=1;i<n1;i++){
    if(n1%i==0){
        total=total+i;
    }
}
if(total==n1){
    console.log("Perfect Number");
}
else{
    console.log("Not Perfect Number");
}


//Check Strong Number

let num1=145;
let temp1=num1;
let total1=0;
while(temp1>0){
    let digit=temp1%10;
    let fact=1;
    for(let i=1;i<=digit;i++){
        fact=fact*i;
    }
    total1=total1+fact;
    temp1=Math.floor(temp1/10);
}
if(total1==num1){
    console.log("Strong Number");
}
else{
    console.log("Not Strong Number");
}


// Find the Sum of Digits of a Number

let num2=1234;
let sum1=0;
while(num2>0){
    sum1=sum1+(num2%10);
    num2=Math.floor(num2/10);
}
console.log("Sum:",sum1);


//Convert Decimal to Binary

let decimal=13;
let binary="";
while(decimal>0){
    binary=(decimal%2)+binary;
    decimal=Math.floor(decimal/2);
}
console.log(binary);


//Convert Binary to Decimal

let binaryNum="1101";
let decimalNum=0;
let power=0;
for(let i=binaryNum.length-1;i>=0;i--){
    if(binaryNum[i]=="1"){
        decimalNum=decimalNum+Math.pow(2,power);
    }
    power++;
}
console.log(decimalNum);

