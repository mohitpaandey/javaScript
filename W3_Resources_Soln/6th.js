
-/*666666666666666666666666666666666666666666*/
-
-function swap(arr, x, y){
-  var temp = arr[x];
-  arr[x] = arr[y];
-  arr[y] = temp;
-}
-
-function myFunct(arr){
-  var l = arr.length;
-  for(var i = 0;i < l-1;i++){
-    for(var j = 0;j < l-i-1;j++){
-      if(arr[j] > arr[j+1])
-        swap(arr, j, j+1);
-    }
-  }
-  return arr;
-}
-
-console.log(myFunct([5, 1, 0, 10, 8, -4]));
-
