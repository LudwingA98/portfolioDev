let clock = () => {
    let hoursUpdate = () => {
        let date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            daysWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        
        let pHours = document.getElementById('hours'),
            pAmPm = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pDayWeek = document.getElementById('weekDay'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            pDayWeek.textContent = week[daysWeek],
            pDay.textContent = day;

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            pMonth.textContent = months[month]
            pYear.textContent = year;

       if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
       }
       else
       {
           ampm = 'AM';
       }

       if(hours == 0){
           hours = 12;
       }

       pHours.textContent = hours;

       if(minutes < 10){
           minutes = "0" + minutes;
       }

       if(seconds < 10){
           seconds = "0" + seconds;
       }

       pMinutes.textContent = minutes;

       pSeconds.textContent = seconds;

       pAmPm.textContent = ampm;
    }



    hoursUpdate();
    let interval = setInterval(hoursUpdate, 1000);
}

clock();
