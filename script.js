var systemGuess = Math.floor(Math.random()*100)+1
var  guess = 0
function guessNumber()
{
    var num = document.getElementById('in').value
    if(num === '' || num>100 || num<1)
    {
        console.log('inputis not valid');
}
    else
{
    guess++
    var num = parseInt(document.getElementById('in').value)
    if(num === systemGuess)
    {
        console.log('Got the answer correctly' + guess);
        document.getElementById('cut').innerHTML = '<i>Got the answer correctly </i> ' +guess
    }
    else if(num > systemGuess)
    {
        console.log('Guess a smaller number');
        document.getElementById('cut').innerText = 'Guess a smaller number'
    } 
    else if(num  > systemGuess)
{
    console.log('Guess a greater number');
    document.getElementById('cut').innerText = 'Guess a greater number'
     }
 }
}