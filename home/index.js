let solution = 0;

let st = "";

let previous_temp = '';
let symbols = ['+','-','/','*']

let a =0;
let temp_st = '';
function calculate(val){
    document.getElementById('solution').style.fontSize = '40px';
    document.getElementById('finalSolution').style.fontSize = '20px';
    let temp = val.innerHTML;
    //console.log(typeof(temp));
    if(temp === 'C'){
        solution = 0;
        st = "";
    }
    else if(temp === "backspace"){
        temp = '';
        st = st.substring(0,st.length-1)
    }
    else if(!isNaN(temp)){
        let temp_var = parseInt(temp);
        //console.log(temp_var);
    }
    else if(temp === 'x^2'){
        //console.log(temp);
        //console.log(st.indexOf('('));
        //console.log(st.lastIndexOf(')'));

        if(!(st.indexOf('(')))
        temp = '*'+st.substring(st.indexOf('('),st.lastIndexOf(')')+1);
        else
        temp = '*'+st;

        //console.log(temp);
    }
    else if(temp === 'x^3'){
        if(!(st.indexOf('(')))
        temp = '*'+st.substring(st.indexOf('('),st.lastIndexOf(')')+1);
        else
        temp = '*'+st+'*'+st;
    }
    else if(temp === 'pi'){
        temp = Math.PI;
    }
    else if(temp === 'e'){
        temp = Math.E;
    }
    else if(temp === '='){
        document.getElementById('solution').style.fontSize = '20px';
        document.getElementById('finalSolution').style.fontSize = '40px';
    }
    else if(temp === '1/x'){
        st = '1/'+st;
    }
/*     else if(temp === 'x*10^y'){
        temp = '*10^';
        a = 1;
    } */
    if(temp !== 'C' && temp !== '=' && temp !== '1/x' && temp !=='x^(1/2)' && temp !== 'x^(1/3)' && temp !== '|x|'){
            st += temp;
            temp_st = st;
    }
    /* else if (temp ==='2^x'){
        st = '2^'+st;
        for(let i =0 ;i< solution;i++){
            solution*=2;
        }
    } */
    else if(temp ==='x^(1/2)' && temp === 'x^(1/3)'){
            temp_st = st;
            if(temp === 'x^(1/2)'){
                temp = '^1/2';
            }
            else{
                temp = '^1/3';
            }
            st += temp;
            console.log(temp);
    }
/*     else if(temp === '*10^'){
        let temp_st = st;
        st += temp;
        
    } */


    //if(temp !== '=')
    document.getElementById('solution').innerHTML = st;

    console.log(st)
    
    if(temp === 'mod'){
        solution = eval(st.replace('mod','%'));
    }
    else if(temp === 'C'){
        solution = ''
    }
    else if(temp === '|x|'){
        solution = Math.abs(solution);
    }
/*     else if(temp === '*10^'){
        solution = temp_st;
    }
    else if(a === 1){
        for(let i = 0; i <= temp_var,i++){
            temp_st += '*10';
        }
        solution = eval(temp_st);
        st = temp_st;
    } */
    else if(temp === 'x^(1/2)'){
        solution = eval(temp_st);
        solution = Math.SQRT1_2(solution)
    }
    else if(temp === 'x^(1/3)'){
        solution = eval(temp_st);
        solution = Math.pow(solution,1/3)
    }
    /* else if(temp === '2^x'){
        solution = solution;
    } */
    else{
        solution = eval(temp_st);
    }

    console.log(solution)

    if(st !== '' || temp !== '=')
    document.getElementById('finalSolution').innerHTML = solution;
    else
    document.getElementById('finalSolution').innerHTML = '';
}