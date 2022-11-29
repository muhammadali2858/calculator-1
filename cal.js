    function calculate(){
        let a =parseInt(document.getElementById('bookone').value);
        let b =parseInt(document.getElementById('booktwo').value);
        let c =parseInt(document.getElementById('bookthree').value);
        let d =parseInt(document.getElementById('bookfour').value);
        let e =parseInt(document.getElementById('bookfive').value);
        if(a>100 || b>100 || c>100 || d>100 || e>100){
            alert("Please enter the correct value"); 
        }
        else{
            let obtain=a+b+c+d+e;
            document.getElementById('obtain').innerHTML=obtain;
            let per =obtain/500*100;
            document.getElementById('per').innerHTML=per;
        }
        if(a>40 && b>40 && c>40 && d>40 && e>40){
            document.getElementById('remarks').innerHTML="Pass";
        }
        else{
        document.getElementById('remarks').innerHTML="Fail";
        }
        if(per>=80){
            document.getElementById('grade').innerHTML="A";
        }
        else if(per>=70){
            document.getElementById('grade').innerHTML="B";
        }
        else if(per>=60){
            document.getElementById('grade').innerHTML="C";
        }
        else if(per>=50){
            document.getElementById('grade').innerHTML="D";
        }
        else if(per>=40){
            document.getElementById('grade').innerHTML="E";
        }
        else{
            document.getElementById('grade').innerHTML="F";
        }
        
    }
   
        
