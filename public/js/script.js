const numElm = document.querySelectorAll('.btn');
const input = document.getElementById('result');
const operationElm = document.getElementById('operation');

let string = "";
numElm.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(string === '0'){
            string = '';
        }
        if(e.target.innerHTML == '='){
            if(input.value == '') {
                return;
            }
            else{
                string = eval(string);
                operationElm.value = string;
            }
            
        }

        else if(e.target.innerHTML == 'AC'){
            string = "0";
            input.value = string;
            operationElm.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})