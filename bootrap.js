function doimau1() {
    const x = document.getElementById("box1").value
    if (x<0) {
        col1.style.background='#99FFFF'
    }else if(x<27){
        col1.style.background='#33CCFF'
    }else if(x<30){
        col1.style.background='#FF9900'
    }else{
        col1.style.background='red'
        
    }
}
    function doimau2() {
        const x = document.getElementById("box2").value
        if (x<30) {
            col2.style.background='#00FF99'
        }else if(x<60){
            col2.style.background='#00FF66'
        }else{
            col2.style.background='#00FF00'
            
        }
    }
    function doimau3() {
            const x = document.getElementById("box3").value
            if (x<50) {
                col3.style.background='#CCCCFF'
            }else{
                col3.style.background='#CCCC00'
                
            }
    }

 function doimau5(){
     document.getElementById("nut1").style.background = 'green'
    
 }
 function doimau6(){
     document.getElementById("nut1").style.background ='gray'
 }
 
