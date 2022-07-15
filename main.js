//site to block
var arr=["https://www.google.co.il/"];
for (let i = 0; i < arr.length; i++) {
    if (window.location.href.indexOf(arr[i])!=-1){
        var win = window.open("https://liad07.github.io/site-blocker/", "_self");
        win.close();
    }

}
