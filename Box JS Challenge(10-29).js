const x = 1; 
var line = 1
if(x<=0)
{
    process.stdout.write("[[]]")  
}
else if(x==1)
{
    process.stdout.write("#")  
}
else if(x>1){
    for(var i = 0; i<x; i++){
        process.stdout.write("#")
    }

    process.stdout.write("\n")

    while(line<x-1){
        process.stdout.write("#")
            for(var j = 1; j<=x-2; j++){
            process.stdout.write(",")
        }

    process.stdout.write("#")
    process.stdout.write("\n")
    line++

    }

    for(var k = 0; k<x; k++){
        process.stdout.write("#")
    
    }
}
else
{
    process.stdout.write("-1")
}

