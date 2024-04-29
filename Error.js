let a = 56;
console.log();



try {
    let a = 6;
    let b= 7;

    let  c =  a + b;

    if( c != a + b ){
        throw new error ("your value must be 12)")
    }

} catch (error){
    console.log(error)
}
finally {
    console.log("hello")
}