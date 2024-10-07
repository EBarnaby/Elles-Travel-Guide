fetch("travel.json")
    .then(res => {
        if(res.ok) return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error"))
/*gets json file, 
if file is not there, error!*/

function typing() {
console.log(typing)
}

function search(){
    console.log(search)
}

function cancel(){
    console.log(cancel)
    /*resetssssss*/
}

/*create child for searchbar so you can make the beach suggestions
difficult is the divs
youre a div
beach BEACH beaches Beach
cause my job is beach
toLowerCase()
same for temples and countries
only when button is pressed
*/