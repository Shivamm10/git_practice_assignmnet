function identifyPrime(num) {
    let sum=0;
    for(let i=1;i<=num;i++){
        if((num%i)=0){
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
  }if(bag=str){
      console.log("Yes");
  }else{
      console.log("No");
  }
}
checkPalindrome(5,"naman");