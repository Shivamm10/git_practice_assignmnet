function identifyPrime(num) {
    let sum=0;
    for(let i=1;i<=num;i++){
        if((num%i)==0){
            sum=sum+1;
        }
    }
        if(sum==2){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
        
  } identifyPrime(11);



function checkPalindrome(N, str) {
    //write code here
    let bag="";
  for(let i=str.length-1;i>=0;i--){
      bag+=str[i]
  }if(bag==str){
      console.log("Yes");
  }else{
      console.log("No");
  }
}
checkPalindrome(5,"naman");




// additional code for prime function 
// function check_prime(a)
  
// {let f=0;
//   for (let i=1;i<=a; i++)
// {
//   if (a%i===0)
//   {f++;}
// }
//  if (f==2)
//   console.log("True")
// else 
// console.log("False")
// }

// check_prime(97);