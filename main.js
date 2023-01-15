function BackGround(x){
    this.x = x;
    this.image = new Image();
    this.image.src = './images/bg.png';
    this.draw = function(ctx){
        ctx.drawImage(this.image, this.x, 0, window.innerWidth, window.innerHeight);
    }
}
function zombieAnimator(imgcount,x,y,width,height,src,flip){
    this.imgCount = imgcount;
    this.src=src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.flip=flip;
    this.height = height;
    this.i=0;
    this.imagesStack = [];
    for(var i=0;i<this.imgCount;i++){
        var img = new Image();
        img.src = this.src+'0'+i+'.png';
        if(i>9){
            img.src = this.src+i+'.png';
        }
        this.imagesStack.push(img);
    }
}
zombieAnimator.prototype.draw=function(elapsed,ctx){
    this.i +=10*(elapsed/300);
    if(this.i >(this.imgCount-1)){
        this.i=0;  
        
    }
    ctx.save();
    if(this.flip){
        ctx.translate(this.x,this.y);
        ctx.scale(-1,1);
        ctx.drawImage(this.imagesStack[Math.floor(this.i)], 0, 0, this.width, this.height);
        ctx.setTransform(1,0,0,1,0,0);
    }else{
        ctx.drawImage(this.imagesStack[Math.floor(this.i)], this.x, this.y, this.width, this.height);
    }
    ctx.restore();
}
function kingAnimator(imgc,m,n,wid,hei,sr){
    this.imgc = imgc;
    this.sr=sr;
    this.m = m;
    this.n = n;
    this.wid = wid;
    this.j=1;
    this.hei = hei;
   
    this.imageStck = [];
    for(var i=1;i<=this.imgc;i++){
        var img = new Image();
        img.src = this.sr+'('+i+').png';
        
        this.imageStck.push(img);
    }
}
kingAnimator.prototype.draw=function(elapsed,ctx){
    this.j +=10*(elapsed/300);
    if(this.j >(this.imgc-1)){
        this.j=1;  
        
    }
   
   ctx.drawImage(this.imageStck[Math.floor(this.j)], this.m, this.n, this.wid, this.hei);
    
    
}