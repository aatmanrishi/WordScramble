const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false ;
let newWords = "";
let randomWords = "";
let sWords = ['python','javaScript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];


const createNewWords = ()=>{
let ranNum = Math.floor(Math.random()*sWords.length);
console.log(ranNum);
let newTempSwords = sWords[ranNum];
return newTempSwords ;


}
const scrambleWords  = (arr)=>{
for(let i = arr.length-1 ; i>0 ; i--){
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
    // console.log(i);
    //console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
}
return arr ;
}

btn.addEventListener('click',function(){
    if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    
    newWords = createNewWords();
    randomWords = (scrambleWords(newWords.split(''))).join('');
    console.log(randomWords);
     msg.innerHTML =`Guess the word : ${randomWords}` ;
    } else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            // console.log("CORRECT")
            play = false;
            msg.innerHTML = `Awesome It's Correct . It is  ${newWords} `
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = '';
        }else{
            console.log('INCORRECT');
            play = false;
            msg.innerHTML = `Sorry Boss It's InCorrect . Plzz try again .`
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = '';
        }
    }

})