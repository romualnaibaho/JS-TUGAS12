function myArray(array){
    console.log("Sebelum Pop san Shift: ")
    console.log(array);

    array.pop();
    array.shift();

    console.log("\nSetelah Pop san Shift: ")
    return array;
}

var array = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];

console.log(myArray(array));