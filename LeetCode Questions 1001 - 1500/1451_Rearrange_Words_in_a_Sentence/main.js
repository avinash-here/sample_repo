// Solution

var arrangeWords = function(text) {

    let arr = text.split(" ");
    arr.sort((a,b) => (a.length - b.length));

    let s = arr[0][0].toUpperCase();
    for(let i = 1; i < arr[0].length; i++) {
        s += arr[0][i];
    }

    let ans = s;
    for(let i = 1; i < arr.length; i++) {
        ans += " " + arr[i].toLowerCase();
    }
    console.log(ans);

    return ans;
    
};