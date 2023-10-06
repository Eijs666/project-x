console.log("Hello project-x")

let PCSpecs = ["Ryzen 5pro", "GTx 1660 TI"];

function addSpec(spec){
    PCSpecs.push(spec);
    console.log(`${spec} tilføjet!`)
}

function showSpecs(){
    console.log("You pc specs: ");
    PCSpecs.forEach((spec, index) => {
        console.log(`${index + 1}. ${spec}`);
    });
}

addSpec("16GB RAM");
addSpec("512GB SSD");

showSpecs();