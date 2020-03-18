function ComputeDate() {
        var curdate = new Date();
        var year = curdate.getYear();
        if (year < 1000)
        year+=1900;
        var day = curdate.getDay();
        var month = curdate.getMonth();
        var daym = curdate.getDate();
        if (daym<10){
            daym ="0" + daym;
        }
        var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        return dayarray[day] + ", " + montharray[month] + " " + daym +", " + year;
    }

function getYear() {
        var curdate = new Date();
        var year = curdate.getYear();
        if (year < 1000)
        year += 1900
        return year;
    }