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
                col4.style.background='#CCCCFF'
            }else{
                
                
            }
    }
    

 function doimau5(){
   
     var a = confirm('bật') 
    if(a==true){
     document.getElementById("nut1").style.background = 'green'
    }
}
    
 

 function doimau6(){
    var a = confirm('tắt') 
    if(a==true){
     document.getElementById("nut1").style.background ='gray'
    }
}
Highcharts.chart('container', {

    title: {
      text: 'U.S Solar Employment Growth by Job Category, 2010-2020'
    },
  
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
  
    yAxis: {
      title: {
        text: ''
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 1 to 12'
      }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 1
      }
    },
  
    series: [{
      name: 'Nhiệt độ',
      data: [0, 1, 2 ]
    }, {
      name: 'Manufacturing',
      data: [24916, 37941, 29742, 29851, 32490, 30282,
        38121, 36885, 33726, 34243, 31050]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 30000, 16005, 19771, 20185, 24377,
        32147, 30912, 29243, 29213, 25663]
    }, {
      name: 'Operations & Maintenance',
      data: [null, null, null, null, null, null, null,
        null, 11164, 11218, 10077]
    }, {
      name: 'Other',
      data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
        17300, 13053, 11906, 10073]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
