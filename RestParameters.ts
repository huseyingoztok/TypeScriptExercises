

function RestFunction(name : string , ... otherNames : string[]){
    return name + " " + otherNames.join(" "); 
}

console.log(RestFunction("Ahmet","Ali","Veli","Deli"));