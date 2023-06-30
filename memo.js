document.querySelector('.screen span').onclick=function(){
    let yourname=prompt('what is your name?');
    if(yourname == null || yourname == ''){
        document.querySelector('.name span').innerHTML='unknown'
    }else{
        document.querySelector('.name span').innerHTML= yourname  
    }
    document.querySelector('.screen').remove()
    document.getElementById('mo')
}
let duration=1000;

let mygameblock=document.querySelector('.game-co');

let myblock=Array.from(mygameblock.children);

let myorderrange=[...Array(myblock.length).keys()];
shuffle(myorderrange)
myblock.forEach((block,index)=>{
    block.style.order=myorderrange[index];
    block.addEventListener('click',function(){
        addflib(block)
    })
})

 
function shuffle(array){
    let current=array.length,
    temp,rondom;
    while(current>0){
        current--;
        rondom=Math.floor(Math.random()*current);
        console.log(rondom)
        temp=array[current];
        array[current]=array[rondom];
        array[rondom]=array[temp];
       
    }
    return array;
}
function addflib(addclass){
addclass.classList.add('flib')
let allflib=myblock.filter((allflibd)=>{
    return allflibd.classList.contains('flib') });
    
 if(allflib.length == 2){
      stopclik()
      chekmatch(allflib[0],allflib[1])
 }
}


function stopclik(){
    mygameblock.classList.add('no-click');
    setTimeout(()=>{
        mygameblock.classList.remove('no-click'); 
    },duration)
}

function chekmatch(frist,sec){
    let mytry=document.querySelector('.try span');
    
    if(frist.dataset.tec === sec.dataset.tec){
        frist.classList.remove('flib')
        sec.classList.remove('flib')
        frist.classList.add('matched')
        sec.classList.add('matched')
    }else{
        mytry.innerHTML=parseInt(mytry.innerHTML)+1
        
        setTimeout(()=>{
            frist.classList.remove('flib')
            sec.classList.remove('flib') 
        },duration)
    }
}