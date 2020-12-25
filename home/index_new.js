let solution = 0;

let st = "";

let previous_temp = '';

let temp_st = '';

function calculate(val){
    document.getElementById('solution').style.fontSize = '40px';
    document.getElementById('finalSolution').style.fontSize = '20px';
    let temp = val.innerHTML;
    if(temp === 'C'){
        solution = 0;
        st = "";
        temp = '';
        temp_st = '';
    }
    else if(temp === "backspace"){
        temp = '';
        st = st.substring(0,st.length-1);
        temp_st = temp_st.substring(0,st.length-1);
    }
    else if(temp === 'x^2'){
        //console.log(temp);
        console.log(st.indexOf('('));
        //console.log(st.lastIndexOf(')'));
        st += '^2';
        if(!(st.indexOf('(')))
        temp_st += '*'+temp_st.substring(st.indexOf('('),temp_st.lastIndexOf(')')+1);
        else
        temp_st += '*'+temp_st;

        //console.log(temp);
    }
    else if(temp === 'x^3'){
        st += '^3';
        if(!(st.indexOf('(')))
        temp_st += '*'+temp_st.substring(temp_st.indexOf('('),temp_st.lastIndexOf(')')+1);
        else
        temp_st += '*'+temp_st+'*'+temp_st;
    }
    else if(temp === 'pi'){
        st += temp;
        temp = Math.PI;
        temp_st += temp;;
    }
    else if(temp === 'e'){
        st += temp;
        temp = Math.E;
        temp_st += temp;
    }
    else if(temp === '='){
        document.getElementById('solution').style.fontSize = '20px';
        document.getElementById('finalSolution').style.fontSize = '40px';
        temp = '';
    }
    else if(temp === '1/x'){
        st = '1/'+st;
        temp_st = st;
    }
    else if(temp ==='x^(1/2)' && temp === 'x^(1/3)'){
            temp_st = st;
            if(temp === 'x^(1/2)'){
                temp = '^1/2';
            }
            else{
                temp = '^1/3';
            }
            st += temp;
    }
    else if(temp === '|x|'){
        st = '|'+st+'|';
        solution = Math.abs(solution);
    }
    else if(temp === '+/-'){
        temp_st = '-('+temp_st+')';
        st = 'negate('+st+')';
    }
    else if(temp === 'log'){
        temp_st = Math.log10(solution);
        st = "log("+st+")";
    }
    else if(temp === 'ln'){
        temp_st = Math.log(solution);
        st = "log("+st+")";
    }
    else{
        temp_st += temp;
        st += temp;
    }


    document.getElementById('solution').innerHTML = st;

    //console.log(st)
    
    if(temp === 'mod'){
        solution = eval(st.replace('mod','%'));
    }
    else if(temp === 'x^(1/2)'){
        solution = eval(temp_st);
        solution = Math.SQRT1_2(solution)
    }
    else if(temp === 'x^(1/3)'){
        solution = eval(temp_st);
        solution = Math.pow(solution,1/3)
    }
    else{
        if(temp === 'log' || temp === 'ln'){
            solution = temp_st;
        }
        else if(temp !== '')
        solution = eval(temp_st);
        else
        solution = '';
    }

    //console.log(solution)

    /* if(st !== '' || temp !== '=') */
    /* if(solution !== 'undefined') */
    document.getElementById('finalSolution').innerHTML = solution;
    /* else
    document.getElementById('finalSolution').innerHTML = ''; */
}
