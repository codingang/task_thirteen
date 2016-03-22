/**
 * Created by Owner on 3/14/2016.
 */

(function(){
    var ipt=document.getElementById("aqi-input"),
        btn=document.getElementById("button"),
        text=document.getElementById("aqi-display");

    function listener(){
        var str=ipt.value;
        if(str==null || /^ *$/.test(str))
            text.innerHTML="尚无录入";
        else
            text.innerHTML=ipt.value;
    }


    if(btn.addEventListener) {
        btn.addEventListener('click',listener,false);
    }
    else if(btn.attachEvent) {
        btn.attachEvent('onclick',listener);
    }
    else {
        btn.onclick=listener;
    }
})();