        import Client from 'pg';
        
        
        var nam = sessionStorage.getItem('nam');
        var gende = sessionStorage.getItem('gen');
        var professio= sessionStorage.getItem('pro');
        var d = sessionStorage.getItem('do');
        var weigh = sessionStorage.getItem('wei');
        var diseas = sessionStorage.getItem('dis');
        

        const db = new Client({
            user:"postgres",
            host:"localhost",
            database:"postgres",
            password:"tiger",
            port:5432
        });

        client.connect();

        client.query("INSERT INTO Login(Name,Gender,Profession,DOB,Weight,Disease) VALUES ($1,$2,$3,$4,$5,$6)", [nam,gende,professio,d,weigh,diseas], (err, res) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Data inserted successfully");
    }
});
client.query('Select * from Login',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end();
})