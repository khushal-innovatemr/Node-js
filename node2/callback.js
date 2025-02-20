function processUserData(data, callback) {
    console.log("Processing user data", data);
    callback();
}

function fetchUserDataWithCallback(callback) {
    // Simulating an API 
    const userData = { id: 1, name: "John Doe" };
    callback(userData);
}

fetchUserDataWithCallback((data) => {
    processUserData(data, () => {
        console.log("User data processed successfully.");
    });
});