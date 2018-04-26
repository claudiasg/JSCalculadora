/*
var Calculadora = {
init:function () {
document.getElementById('1').addEventListener('click',function () {
alert("PRESIONADO LA TECLA 1")
})
}
}
Calculadora.init()
*/
var display = document.getElementById('display'),   
    t1=document.getElementById('1'),
    t2=document.getElementById('2'),
    t3=document.getElementById('3'),
    t4=document.getElementById('4'),
    t5=document.getElementById('5'),
    t6=document.getElementById('6'),
    t7=document.getElementById('7'),
    t8=document.getElementById('8'),
    t9=document.getElementById('9'),
    t0=document.getElementById('0'),
    mas=document.getElementById('mas'),
    menos=document.getElementById('menos'),
    por=document.getElementById('por'),
    div=document.getElementById('dividido'),    
    igual=document.getElementById('igual'),
    punto=document.getElementById('punto'),
    signo=document.getElementById('sign'),
    on=document.getElementById('on'),
    x="0", 
    xi=1, 
    coma=0,
    ni=0, 
    op="no";
    
var Calculadora = {
  numero:function(n) {   
    var i=display.innerHTML.length
    if(i<=7)
    {
    if (x=="0" || xi==1  ) { 
      display.innerHTML=n; 
      x=n; 
      if (n==".") { 
         display.innerHTML="0."; 
         x=n; 
         coma=1; 
         }
     }
     else { 
         if (n=="." && coma==0) { 
             display.innerHTML+=n;
             x+=n;
             coma=1;  
         }
        else if (n=="." && coma==1) {}  
         else {
             display.innerHTML+=n;
             x+=n
         }
      }
      xi=0 
    }
  },
  igualar: function () {
    var self = this
    if (op=="no") { 
       display.innerHTML=x;	
       }
    else { 
       sl=ni+op+x; 
       alert(sl)
       sol=eval(sl) 
        display.innerHTML=sol.toPrecision(7)
        x=sol; 
        op="no"; 
        xi=1; 
      
       }
   },
  operar:function (s) {
    var self = this
    self.igualar();
    ni=x; 
    op=s; 
    xi=1; 
    },
  signoop:  function () { 
      nx=Number(x); 
      nx=-nx;
      x=String(nx); 
      display.innerHTML=x; 
      },
  borradorOn:function() {
    display.innerHTML=0; 
    x=0
    coma=0	
    ni=0 
    op="no"		
    },
  init: function () {
    var self = this
    igual.addEventListener("mousedown", function(){
      igual.setAttribute("style","transform:scale(0.95,0.95)")    
      self.igualar();
    })
    igual.addEventListener("mouseup",function(){
      igual.setAttribute("style","transform:scale(1,1)")
    })
    
    on.addEventListener("mousedown", function () {
      on.setAttribute("style","transform:scale(0.95,0.95)")
      self.borradorOn();    
      })
      on.addEventListener("mouseup",function(){
        on.setAttribute("style","transform:scale(1,1)")
      })
    
    signo.addEventListener("mousedown", function () {
    signo.setAttribute("style","transform:scale(0.95,0.95)")
      self.signoop()     
      })
      on.addEventListener("mouseup",function(){
        on.setAttribute("style","transform:scale(1,1)")
      })

    t1.addEventListener("mousedown", function () {
    t1.setAttribute("style","transform:scale(0.95,0.95)")
    self.numero(1)    
    })
    t1.addEventListener("mouseup",function(){
      t1.setAttribute("style","transform:scale(1,1)")
    })

    t2.addEventListener("mousedown", function () {
      t2.setAttribute("style","transform:scale(0.95,0.95)")  
      self.numero(2)
    })
    t2.addEventListener("mouseup",function(){
      t2.setAttribute("style","transform:scale(1,1)")
    })
    t3.addEventListener("mousedown", function () {
      t3.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 3
      self.numero(3)
    })
    t3.addEventListener("mouseup",function(){
      t3.setAttribute("style","transform:scale(1,1)")
    })
    t4.addEventListener("mousedown", function () {
      t4.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 4
      self.numero(4)
    })
    t4.addEventListener("mouseup",function(){
      t4.setAttribute("style","transform:scale(1,1)")
    })
    t5.addEventListener("mousedown", function () {
      t5.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 5
      self.numero(5)
    })
    t5.addEventListener("mouseup",function(){
      t5.setAttribute("style","transform:scale(1,1)")
    })
    t6.addEventListener("mousedown", function () {
      t6.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 6;
      self.numero(6);
    })
    t6.addEventListener("mouseup",function(){
      t6.setAttribute("style","transform:scale(1,1)")
    })
    t7.addEventListener("mousedown", function () {
      t7.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 7;
      self.numero(7);
    })
    t7.addEventListener("mouseup",function(){
      t7.setAttribute("style","transform:scale(1,1)")
    })
    t8.addEventListener("mousedown", function () {
      t8.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 8
      self.numero(8)
      })
    t8.addEventListener("mouseup",function(){
      t8.setAttribute("style","transform:scale(1,1)")
    })
    t9.addEventListener("mousedown", function () {
      t9.setAttribute("style","transform:scale(0.95,0.95)")
      //display.innerHTML += 9
      self.numero(9)
        })
    t9.addEventListener("mouseup",function(){
      t9.setAttribute("style","transform:scale(1,1)")
    })
    t0.addEventListener("mousedown", function () {
      t0.setAttribute("style","transform:scale(0.95,0.95)")      
      self.numero(0)
        })
    t0.addEventListener("mouseup",function(){
      t0.setAttribute("style","transform:scale(1,1)")
    })
    menos.addEventListener("mousedown", function () {
      menos.setAttribute("style","transform:scale(0.95,0.95)")
     
      self.operar('-')      
    })
    menos.addEventListener("mouseup",function(){
      menos.setAttribute("style","transform:scale(1,1)")
    })
    mas.addEventListener("mousedown", function () {
      mas.setAttribute("style","transform:scale(0.95,0.95)")
      
      self.operar('+')   
      })
    mas.addEventListener("mouseup",function(){
      mas.setAttribute("style","transform:scale(1,1)")
    })
    por.addEventListener("mousedown", function () {
      por.setAttribute("style","transform:scale(0.95,0.95)")   
     
      self.operar("*")     
        })
    por.addEventListener("mouseup",function(){
      por.setAttribute("style","transform:scale(1,1)")
    })
    div.addEventListener("mousedown", function () {
      div.setAttribute("style","transform:scale(0.95,0.95)")   
      
      self.operar('/')      
      })
    div.addEventListener("mouseup",function(){
      div.setAttribute("style","transform:scale(1,1)")
    })
    punto.addEventListener("mousedown", function () {
      punto.setAttribute("style","transform:scale(0.95,0.95)")    
      self.numero('.')
      })
    punto.addEventListener("mouseup",function(){
      punto.setAttribute("style","transform:scale(1,1)")

    })
  }
}
Calculadora.init()