let angka = 15;

for (let i = 1; i <= angka; i++){
    if (i % 3 == 0 && i != 15){
        console.log("fizz");
    }else if(i % 5 == 0 && i != 15){
        console.log("buzz");
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }else{
        console.log(i);
    }
}