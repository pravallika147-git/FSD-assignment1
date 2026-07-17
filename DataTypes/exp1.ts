 let Name: string="Pravallika";
 let age: number=19;
 let cgpa: number=93;
 let section: string="AIDS-B";
 let success: boolean=true;
 console.log("Name: ",Name);
 console.log("Age: ",age);
 console.log("CGPA: ",cgpa)
 console.log("Section: ",section);
 console.log("Pass: ",success);
 function details(name: string,score: number,result: boolean): void {
    console.log("Student Name:",name);
    console.log("Marks:",score);
    if(result){
        console.log("Result: Pass");
    }else{
        console.log("Result: Fail");
    }
}

details(Name, cgpa, success);
