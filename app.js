function find() {
    date1 = document.getElementById("date1").value
    date2 = document.getElementById("date2").value
    date3 = document.getElementById("date3").value
    pin1 = document.getElementById("pin").value
    console.log(pin1);
    fetch(`http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin1}&date=${date1}-${date2}-${date3}`)
    .then(res=>res.json())
    .then(result =>{
        let a = result.centers
        for(i=0;i<10;i++){
            document.createElement("centername"+i)
            document.getElementById("centername"+i).innerHTML += a[i].name
            console.log(a[i].name)
            document.getElementById("centeradd"+i).innerHTML += a[i].address
            console.log(a[i].name)
            let b= a[i].sessions[0] 
            document.getElementById("age"+i).innerHTML += b.min_age_limit
            document.getElementById("slots"+i).innerHTML += b.available_capacity
            document.getElementById("v"+i).innerHTML += b.vaccine
        }        
        // a.map(obj=>{document.getElementById("minage").innerHTML += obj.address + "<br>"})
        // a.map(obj=>{document.getElementById("ava").innerHTML += obj.address + "<br>"})
        // a.map(obj=>{document.getElementById("vac").innerHTML += obj.address + "<br>"})
        console.log(result.centers[0].name);
        // document.getElementById("result").innerHTML = result.centers[0].name +"<br>"+ result.centers[1].address
    })
}
