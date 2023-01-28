let arr1 = [5, 5, 5, 5];
let arr2 = [5, 5, 5, 10];

 function foo(a) {
   return !a.some(function(b) {
     return b !== a[0]
   })
 };

 console.log(foo(arr1));
 console.log(foo(arr2));
