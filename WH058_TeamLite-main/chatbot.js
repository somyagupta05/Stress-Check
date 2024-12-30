var e=document.getElementById('s8');
function c1(){
    var a = document.getElementById('s6').value;
    var c=document.getElementById('s7');
    if(a=='1'){
        var b=document.getElementById('s5');
        b.innerHTML+="<div><br>Do you have any this of issue(yes:1 and no:2) <br/>1. Difficulty Breathing <br/>2.Panic Attack <br/>3.Sleep Problem<br/>4.High Blood Pressure</div>";
        var c=document.getElementById('s7');
        c.innerHTML+="<div><br><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        
    }else if(a=='2'){
        var b=document.getElementById('s5');
        b.innerHTML+="<div><br>Do you have any this of issue(yes:1 and no:2)  <br/>1. Anxiety <br/>2.Depression <br/>3.Sleep Problem<br/>4.Headaches</div>";
        c.innerHTML+="<div><br><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        
    }else if(a=='3'){
        var b=document.getElementById('s5');
        b.innerHTML+="<div><br>Do you have any this of issue(yes:1 and no:2)  <br/>1. Mascular Tension <br/>2.Insomnia <br/>3. Dermatological<br/>4.Insomnia</div>";
        c.innerHTML+="<div><br><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        
    }else{
        var b=document.getElementById('s5');
        b.innerHTML+="<div><br>Do you have any this of issue(yes:1 and no:2)  <br/>1. Difficulty Concentrating <br/>2.Trust Issue <br/>3.Communication<br/>4.Sadness</div>";
        c.innerHTML+="<div><br><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"   
    }
}
function c2(){
    var d=document.getElementById('s9').value;
    if(d == '1'){
        e.innerHTML+="<div>Based on our evaluation, You should try the following activities to release your stress <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
    }else{
        e.innerHTML+="<div>YOU ARE ALL RIGHT.DON'T WORRY JUST TRY OUR FUN ACTIVITIES <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
    }
    var k=document.getElementById('s15');
    k.innerHTML+="<button><br/><br/><a href='doctor.html'>Consult Doctor</a></button>"
    var j=document.getElementById('s11');
    j.innerHTML+="<button><br/><br/><a href='acti.html'>GO TO ACTIVITIES</a></button>"
}