let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == 'C'){
            string = string.substring(0,string.length - 1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '='){
            try{
                eval(string);
            }
            catch (err){
                document.querySelector('input').value = "Error Occurred";
                string = "";
            }
            if (document.querySelector('input').value == "Error Occurred"){
            }
            else{
                string = eval(string);
                document.querySelector('input').value = string;
            }
        }else{
           string = string + e.target.innerHTML;
           document.querySelector('input').value = string;
        }
    })
})