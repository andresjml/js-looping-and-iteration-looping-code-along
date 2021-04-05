// Code your solutions in this file
function writeCards(names, eventName){
    const newName = []
    for (let i=0;i<names.length;i++){
        newName.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return newName;
}
function countDown(number){
    while(number>=0) {
        console.log(number);
        number--;
    }
}