function oddEven(num){
    if(num%2==0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}

for(let i=0;i<10;i++){
    n=Math.floor(Math.random()*100)
    console.log(`${n} is ${oddEven(n)}`)
}