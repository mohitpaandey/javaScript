
-
-/*777777777777777777777777777777777777777777777777*/
-
-var a = prompt("Enter a word");
-
-var l = a.length;
-var arr = [];
-
-function myFunction(x){
-  for(var i = 0;i < l;i++){
-    for(var j = i+1;j <= l;j++){
-      arr.push(x.substring(i, j));  
-     
-    }
-  }
-}
-myFunction(a);
-console.log(arr);
-
-/*
-Exception: ReferenceError: s is not defined
-myFunct@Scratchpad/1:21:7
-@Scratchpad/1:25:1
-*/
-/*
-Exception: ReferenceError: s is not defined
-myFunction@Scratchpad/1:22:7
-@Scratchpad/1:26:1
-*/ 
