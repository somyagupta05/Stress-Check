function c1(){
    var a = document.getElementById('s6').value;
    var e=document.getElementById('s8');
    var c=document.getElementById('s7');
    if(a=='1'){
        var b=document.getElementById('s5');

        b.innerHTML+="<div>Do you have any this of issue <br/>1. Difficulty Breathing <br/>2.Panic Attack <br/>3.Sleep Problem<br/>4.High Blood Pressure</div>";
        var c=document.getElementById('s7');
        c.innerHTML+="<div><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        function c2(){
            var d=document.getElementById('s9').value;
            if(s9 == 'y'){
                d.innerHTML+="<div>Based on our evaluation, You should try the following activities to release your stress <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
            }
        }
    }else if(a=='2'){
        var b=document.getElementById('s5');
        b.innerHTML+="<div>Do you have any this of issue <br/>1. Anxiety <br/>2.Depression <br/>3.Sleep Problem<br/>4.Headaches</div>";
        c.innerHTML+="<div><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        function c2(){
            var d=document.getElementById('s9').value;
            if(s9 == 'y'){
                d.innerHTML+="<div>Based on our evaluation, You should try the following activities to release your stress <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
            }
        }
    }else if(a=='3'){
        var b=document.getElementById('s5');
        b.innerHTML+="<div>Do you have any this of issue <br/>1. Mascular Tension <br/>2.Insomnia <br/>3. Dermatological<br/>4.Insomnia</div>";
        c.innerHTML+="<div><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        function c2(){
            var d=document.getElementById('s9').value;
            if(s9 == 'y'){
                d.innerHTML+="<div>Based on our evaluation, You should try the following activities to release your stress <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
            }
        }
    }else{
        var b=document.getElementById('s5');
        b.innerHTML+="<div>Do you have any this of issue <br/>1. Difficulty Concentrating <br/>2.Trust Issue <br/>3.Communication<br/>4.Sadness</div>";
        c.innerHTML+="<div><input type='text' id='s9'><br/><button onclick='c2()'>Submit</button></div>"
        function c2(){
            var d=document.getElementById('s9').value;
            if(s9 == 'y'){
                d.innerHTML+="<div>Based on our evaluation, You should try the following activities to release your stress <br/>PLAY GAMES<br/>LISTEN SONG<br/>DO YOGA</div>"
            }
        }
    }
}