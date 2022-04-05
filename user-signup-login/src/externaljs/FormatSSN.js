export function FormatSSN() {
        // SSN validation
        // trap keypress - only allow numbers
        window.$('input.ssn').on('keypress', function(event){
            // trap keypress
            var character = String.fromCharCode(event.which);
            if(!isInteger(character)){
                return false;
            }    
        });

        // checks that an input string is an integer, with an optional +/- sign character
        function isInteger (s) {
            if(s === '-') return true;
        var isInteger_re     = /^\s*(\+|-)?\d+\s*$/;
        return String(s).search (isInteger_re) != -1
        }

        // format SSN 
        window.$('input.ssn').on('keyup', function(){
        var val = this.value.replace(/\D/g, '');
        var newVal = '';
            if(val.length > 4) {
                this.value = val;
            }
            if((val.length > 3) && (val.length < 6)) {
                newVal += val.substr(0, 3) + '-';
                val = val.substr(3);
            }
            if (val.length > 5) {
                newVal += val.substr(0, 3) + '-';
                newVal += val.substr(3, 2) + '-';
                val = val.substr(5);
            }
            newVal += val;
            this.value = newVal;   
        });
}