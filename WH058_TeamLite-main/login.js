function submitall(){
        var name = document.getElementById('name').value;
        var gender = document.getElementById('gender').value;
        var profession = document.getElementById('profession').value;
        var dob = document.getElementById('dob').value;
        var weight = document.getElementById('weight').value;
        var disease = document.getElementById('disease').value;
        sessionStorage.setItem('nam', name);
        sessionStorage.setItem('gen', gender);
        sessionStorage.setItem('pro', profession);
        sessionStorage.setItem('do', dob);
        sessionStorage.setItem('wei', weight);
        sessionStorage.setItem('dis', disease);
}