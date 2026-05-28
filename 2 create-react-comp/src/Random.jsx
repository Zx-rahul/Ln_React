function Random (){
    let random= Math.floor(Math.random()*100)
    return(
        <h1 style={{color : 'blue'}}>Random Number is: {random}</h1>
    )
}

export default Random;