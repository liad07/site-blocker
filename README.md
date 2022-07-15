you can generate in set page and copy ths text and replace   


after you download add this to chrome addon on developer mode
```javascript
//site to block
var arr=["https://www.google.co.il/"];
for (let i = 0; i < arr.length; i++) {
    if (window.location.href.indexOf(arr[i])!=-1){
        window.location.href="https://liad07.github.io/site-blocker/";
        //var win = window.open("https://liad07.github.io/site-blocker/", "_self");
        //win.close();
    }

}
194 of the 365 chalenge in 2022 1 day 1 challenge

