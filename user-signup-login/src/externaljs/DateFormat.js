export default {
    /**
     * y - 18
     * Y - 2018
     * m - 01 to 12
     * d - 01 to 31
     * M - Jan to Dec
     * F - January to December
     * H - 00 to 23
     * i - 00 to 59
     * h - 01 to 12
     * a - AM or PM
     * l - Sunday to Saturday
     * D - Sun to Sat
     * 
     * Available date formats
     * 
     * Y-m-d
     * d M, Y
     * M d, Y
     * d F, Y
     * F d, Y
     * l F d, Y
     * D F d, Y
     * Y-m-d H:i
     * Y-m-d h:i
     * y-m-d
     * d M, y
     * M d, y
     * d F, y
     * F d, y
     * l F d, y
     * D F d, y
     * y-m-d H:i
     * y-m-d h:i
     * M d, Y,h:i
     */
    getFormattedDateTime: function(date, format = 'Y-m-d'){
        if(date == "")
            return "";
        let dateObj = new Date(date);
        let dateFormats = {
            Y: dateObj.getFullYear(),
            y: this.formatYear(dateObj),
            m: this.formatMonth(dateObj),
            d: this.formatDate(dateObj),
            M: this.formatMonthName(dateObj),
            F: this.formatFullMonthName(dateObj),
            H: this.formatFullHour(dateObj),
            i: this.formatMinute(dateObj),
            h: this.formatShortHour(dateObj),
            a: this.getHourSymbol(dateObj),
            l: this.formatFullDay(dateObj),
            D: this.formatDay(dateObj)
        }

        switch(format){
            case 'Y-m-d':
                return `${dateFormats.Y}-${dateFormats.m}-${dateFormats.d}`;
            case 'm-d-Y':
                return `${dateFormats.m}-${dateFormats.d}-${dateFormats.Y}`;
            case 'm/d/Y':
                return `${dateFormats.m}/${dateFormats.d}/${dateFormats.Y}`;
            case 'd M, Y':
                return `${dateFormats.d} ${dateFormats.M}, ${dateFormats.Y}`;
            case 'M d, Y':
                return `${dateFormats.M} ${dateFormats.d}, ${dateFormats.Y}`;
            case 'd F, Y':
                return `${dateFormats.d} ${dateFormats.F}, ${dateFormats.Y}`;
            case 'F d, Y':
                return `${dateFormats.F} ${dateFormats.d}, ${dateFormats.Y}`;
            case 'l F d, Y':
                return `${dateFormats.l} ${dateFormats.F} ${dateFormats.d}, ${dateFormats.Y}`;
            case 'D F d, Y':
                return `${dateFormats.D} ${dateFormats.F} ${dateFormats.d}, ${dateFormats.Y}`;
            case 'Y-m-d H:i':
                return `${dateFormats.Y}-${dateFormats.m}-${dateFormats.d} ${dateFormats.H}:${dateFormats.i}`;
            case 'Y-m-d h:i':
                return `${dateFormats.Y}-${dateFormats.m}-${dateFormats.d} ${dateFormats.h}:${dateFormats.i} ${dateFormats.a}`;
            case 'y-m-d':
                return `${dateFormats.y}-${dateFormats.m}-${dateFormats.d}`;
            case 'd M, y':
                return `${dateFormats.d} ${dateFormats.M}, ${dateFormats.y}`;
            case 'M d, y':
                return `${dateFormats.M} ${dateFormats.d}, ${dateFormats.y}`;
            case 'd F, y':
                return `${dateFormats.d} ${dateFormats.F}, ${dateFormats.y}`;
            case 'F d, y':
                return `${dateFormats.F} ${dateFormats.d}, ${dateFormats.y}`;
            case 'l F d, y':
                return `${dateFormats.l} ${dateFormats.F} ${dateFormats.d}, ${dateFormats.y}`;
                case 'm-d-Y h:i a':
                    return `${dateFormats.m}-${dateFormats.d}-${dateFormats.Y} ${dateFormats.h}:${dateFormats.i} ${dateFormats.a}`;
            case 'D F d, y':
                return `${dateFormats.D} ${dateFormats.F} ${dateFormats.d}, ${dateFormats.y}`;
            case 'y-m-d H:i':
                return `${dateFormats.y}-${dateFormats.m}-${dateFormats.d} ${dateFormats.H}:${dateFormats.i}`;
            case 'y-m-d h:i':
                return `${dateFormats.y}-${dateFormats.m}-${dateFormats.d} ${dateFormats.h}:${dateFormats.i} ${dateFormats.a}`;
            case 'M d, Y,h:i':
                return `${dateFormats.M} ${dateFormats.d}, ${dateFormats.Y} ${dateFormats.h}:${dateFormats.i} ${dateFormats.a}`;
            case 'Y':
                return `${dateFormats.Y}`;
            case 'm/d/Y':
                return `${dateFormats.m}/${dateFormats.d}/${dateFormats.Y}`;
            case 'H:i':
                return `${dateFormats.H}:${dateFormats.i}`;
            default:
                return `${dateFormats.y}-${dateFormats.m}-${dateFormats.d}`; 
        }
    },
    formatMonth: function(dateObj){
        var month = dateObj.getMonth() + 1;
        return (month > 9) ? month : '0'+month;
    },
    formatDate: function(dateObj){
        var date = dateObj.getDate();
        return (date > 9) ? date : '0'+date;
    },
    formatMonthName: function(dateObj){
        var month = dateObj.getMonth();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return months[month];
    },
    formatFullMonthName: function(dateObj){
        var month = dateObj.getMonth();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return months[month];
    },
    formatFullHour: function(dateObj){
        var hour = dateObj.getHours();
        return (hour > 9) ? hour : '0'+hour;
    },
    formatMinute: function(dateObj){
        var minutes = dateObj.getMinutes();
        return (minutes > 9) ? minutes : '0'+minutes;
    },
    formatShortHour: function(dateObj){
        var hour = dateObj.getHours();
        if(hour === 0){
            hour = '12';
        }else if(hour > 12){
            hour = hour - 12;
        }
        return (hour > 9) ? hour : '0'+hour;
    },
    getHourSymbol: function(dateObj){
        var hour = dateObj.getHours();
        if(hour <= 12){
            return 'AM';
        }else{
            return 'PM';
        }
    },
    formatFullDay: function(dateObj){
        var day = dateObj.getDay();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return days[day];
    },
    formatDay: function(dateObj){
        var day = dateObj.getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    },
    formatYear(dateObj){
        var year = "" + dateObj.getFullYear() + "";
        return `${year[2]}${year[3]}`;
    }
}