function result(){
    let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);
document.getElementById('p1d').setAttribute("src","images/d"+x+".png");
document.getElementById('p2d').setAttribute("src","images/d"+y+".png");
if(x>y){
    document.getElementById('head').innerHTML='<img src="images/flag.gif" style="width:10%;">Player 1 Win!';
}else if(x<y){
    document.getElementById('head').innerHTML='Player 2 Win!<img src="images/flag.gif" style="width:10%;">';
}
else{
    document.getElementById('head').innerHTML="Draw!";
}
}
