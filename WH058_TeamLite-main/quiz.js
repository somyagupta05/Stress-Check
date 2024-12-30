b=document.getElementById('cp23');
s=sessionStorage.getItem('nam');
b.innerHTML+=s;

yescount=0;
nocount=0;
function prin(){
    if(document.getElementById('cp1').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp2').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp3').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp4').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp5').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp6').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp7').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp8').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp9').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp10').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp11').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp12').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp13').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp14').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp15').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp16').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp17').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp18').checked) {
        nocount++;
        console.log(nocount);
    }
    if(document.getElementById('cp19').checked) {
        yescount++;
        console.log(yescount);
    }else if(document.getElementById('cp20').checked) {
        nocount++;
        console.log(nocount);
    }
    a=document.getElementById('cp21');
    if(yescount>nocount){
        a.innerHTML+="<button><a href='acti.html'>Continue</a></button>"
    }else{
        b=document.getElementById('cp22');
        alert('You are all right '+ sessionStorage.getItem('nam'))
        a.innerHTML+="<a href='index.html'><button>Continue</button></a>"
    }
}