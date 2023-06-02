const btn=document.getElementById("bt")

const random_color=()=>{
let val="0123456789ABCDE";
let hsh="#";

for(let i=0;i<6;i++){
    hsh=hsh+val[Math.floor (Math.random() * 16)];
}
return hsh;
};

function change_color(){
    document.body.style.backgroundColor=random_color();

}
btn.addEventListener("click",change_color);