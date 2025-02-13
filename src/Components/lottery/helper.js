function getNewTicket(n){
    let newTicket = new Array(n)
    for(let i=0; i<n; i++){
        newTicket[i]= Math.floor(Math.random()*10)
    }
    return newTicket
}

function sum(arr){
    return arr.reduce((sum,curr)=>sum+curr,0)
}

export {getNewTicket, sum}