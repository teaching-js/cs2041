(function() {
   'use strict';
   const player = {
     dom: document.getElementById("player"),
     fb: document.getElementById("fb"),
     fbp: -1,
     x: 0,
     y: 0,
     speed: 10,
     paint: function() {
       this.dom.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`;
       if(this.fbp === -1)
        this.fb.style.transform = `translateX(${this.x+64}px) translateY(${this.y}px)`;
     },
     shoot: function() {
       console.log(this.fbp);
       if(this.fbp !== -1) return;
       this.fb.style.display = "block";
       this.fbp = this.x+64;
       let i = setInterval(function(){
         this.fb.style.transform = `translateX(${this.fbp}px) translateY(${this.y}px)`;
         this.fbp+=5;
       }.bind(this), 5);
       setTimeout(function(){
         clearInterval(i);
         this.fbp = -1;
         this.fb.style.display = "none";
       }.bind(this),1000);
     }
   }
   window.addEventListener('keydown',(e)=>{
     if(e.key === 'ArrowLeft') player.x-=player.speed;
     if(e.key === 'ArrowRight') player.x+=player.speed;
     if(e.key === 'z') player.speed = player.speed === 20 ? 10 : 20;
     if(e.key === 'x') player.shoot();
     player.paint();
   })


}());
