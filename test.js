function a()
{
    let a=10;
    return function b()
    {
        console.log(a);
    }
}
let x=a();
function c(value)
{
   value(); 
}
c(x);