function tribonacci(signature,n){
   let sig = [];
   let newfib = 0;
   if(n <3){
     for(let i = 0; i< n; i++){
       sig.push(signature[i]);
     }
     return sig;
   }
   sig = signature;
   while(sig.length < n){
      newfib = sig.slice(-1)[0] + sig.slice(-2,-1)[0] + sig.slice(-3,-2)[0];
      console.log(newfib);
      sig.push(newfib);
   }
   return sig;
}