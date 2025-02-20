// async function fetchUserDataWithAsyncAwait() {
//     // Simulating an API request
//     const userData = { id: 1, name: "John Doe" };

//     return new Promise((resolve) => {
//         resolve(userData);
//     });
// }

// // Function to process user data using Async/Await
// async function processUserDataWithAsyncAwait() {
//     try {
//         const data = await fetchUserDataWithAsyncAwait();
//         console.log("Processing user data:", data);
//         console.log("User data processed successfully.");
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Using Async/Await
// processUserDataWithAsyncAwait();


// function getjob(){
//     let job = "nahi milegi"
//     return job;
// }

// async function salary(){
//     try{
//         const intern = await getjb();
//         console.log("job toh",intern)
//     }
//     catch(error){
//         console.log("There is Some Error")
//     }
// }
// salary();
// import fetch from "fetch";
async function fetch2(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.log(error)
        }       
    }
fetch2()