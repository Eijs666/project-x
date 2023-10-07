console.log("Hello project-x")

let PCSpecs = ["Ryzen 5pro", "GTx 1660 TI"];

function addSpec(spec){
    PCSpecs.push(spec);
    console.log(`${spec} Added!!`)
}

function deleteSpec(spec){
    const index = PCSpecs.indexOf(spec);
    if (index > -1) {
        PCSpecs.splice(index, 1);
        console.log(`${spec} Deleted!`);
    } else {
        console.log(`${spec} not found!`);
    }
}

function showSpecs(){
    console.log("You pc specs: ");
    PCSpecs.forEach((spec, index) => {
        console.log(`${index + 1}. ${spec}`);
    });
}

addSpec("16GB RAM");
showSpecs();
addSpec("512GB SSD");
deleteSpec("16GB RAM");

showSpecs();