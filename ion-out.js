function ionOut(str){
    const regEx = /(\w*)(?=tion)/g
    const resReg = str.match(regEx)
    let res = []
    if(resReg === null){
        return res
    }
    for(let i=0;i<resReg.length;i++){
        if(i%2 === 0){
            resReg[i] = resReg[i] + 't'
            res.push(resReg[i])
        }
    }
    return res
}

/*Create a function named ionOut, that receives a string and returns an array with 
every word containing 'ion' following a 't'. The words should be returned without 
the 'ion' part.*/