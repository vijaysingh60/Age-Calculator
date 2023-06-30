let today = new Date();
let result = ()=>{

    let dd = document.getElementById("iday").value;
    let mm = document.getElementById("imonth").value;
    let yy = document.getElementById("iyear").value;

    let str = yy+"/"+mm+"/"+dd;
    var date1  = new Date(str);
    var date2 = new Date();

    var count = 0;
    var m = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(dd === '' || dd>(mm>12?31:m[mm])){
        if(dd === ''){
            document.querySelector(".error").innerHTML = "The field is required"
        }else{
            document.querySelector(".error").innerHTML = "Must be a valid day"
        }
        document.querySelector(".day p").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".day").classList.add("show");
        count++;
    }else{
        document.querySelector(".error").innerHTML = " ";
        document.querySelector(".day p").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".day").classList.remove("show");
    }
    if(mm === '' || mm>12){
        if(mm === ''){
            document.querySelector(".month .error").innerHTML = "The field is required"
        }else{
            document.querySelector(".month .error").innerHTML = "Must be a valid month"
        }
        document.querySelector(".month p").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".month").classList.add("show");
        count++;
    }else{
        document.querySelector(".month p").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".month").classList.remove("show");
        document.querySelector(".month .error").innerHTML = " ";
    }
    if(yy === '' || yy>date2.getFullYear()){
        if(yy === ''){
            document.querySelector(".year .error").innerHTML = "The field is required"
        }else{
            document.querySelector(".year .error").innerHTML = "Must be a valid past"
        }
        document.querySelector(".year p").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".year").classList.add("show");
        return;
    }else{
        document.querySelector(".year p").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".year").classList.remove("show");
        document.querySelector(".year .error").innerHTML = " ";
    }
    if(count>0)return;
    
    let days , months , years;
    let tday = date2.getDate();
    let tmon = date2.getMonth()+1;
    years = date2.getFullYear()-yy;
    months = (tmon<mm) ? 12+tmon-mm : tmon-mm;
    if(tmon<mm)years--;
    days = (tday<dd) ? 30+tday-dd : tday-dd;
    if(tday<dd)months--;
    if(months<0){
        months = 11;
        years--;
    }


    document.getElementById("day").innerHTML = days + "  ";
    document.getElementById("month").innerHTML = months + "  ";
    document.getElementById("year").innerHTML = years + "  ";
}




