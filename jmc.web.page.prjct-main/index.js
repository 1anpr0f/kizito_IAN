const body = document.getElementsByTagName('body')[0]
setInterval(() => {
    body.style.background=`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}, 500);

 const submit = document.getElementsByTagName("textarea")[0]
 const button = document.getElementsByTagName('button')[0]
function remove_vowels(str){
    return str.replace(/[aeiouAEIOI]/g,'');}
function bofya() {
    submit.value=remove_vowels(submit.value);
    console.log("i love coding");
    }
submit.innerHTML=remove_vowels(submit.innerHTML);
button.onclick = bofya;
const input = document.getElementsByTagName("input");
function Cups(e){
    return e.target.value= e.target.value.toUpperCase();
}
for (let i=0 ;i < input.length;i++) {input[i].oninput= Cups};
 
/*let x = "101";
function turn_int(){
    return parseInt(x,2);
}
 console.log(turn_int());*/

