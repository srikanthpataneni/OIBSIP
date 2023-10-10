let input = document.getElementById('inputBoxId');
let buttons = document.querySelectorAll('button');

let outputString = "";

let arr = Array.from(buttons);

arr.forEach(button =>
    {
        button.addEventListener('click',(e)=>
        {
            if(e.target.innerHTML == '=')
            {
                outputString = eval(outputString);
                input.value = outputString;
            }
            else if (e.target.innerHTML =='AC')
            {
                outputString = "";
                input.value = outputString;
            }
            else if (e.target.innerHTML == 'DEL')
            {
                outputString = outputString.substring(0,outputString.length-1)
                input.value = outputString;
            }
            else
            {
                outputString += e.target.innerHTML;
                input.value = outputString;   
            }
        })
    })