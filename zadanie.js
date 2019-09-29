//funkcja w wyiku której uzyskamy tablice ale tylko z liczbami parzystymi



const arr1= [];

 const addd = function (a,b,) {
    for (let i = a; i <= b; i++) {
      if (i%2===0) {
        console.log(i);
        arr1.push(i)
        
      }
    }
  };
addd('2',10);
console.log(arr1);

//"2"+2     22
//"2"-2     =0