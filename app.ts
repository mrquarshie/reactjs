let firstName: string= "dylan";
let lastName = "Dylan";
//type: unknown
let w: unknown=1;
w= "string";
w= {
    runANonExistentMethod: () => {
        console.log("i think therefore i am")
    }
}
