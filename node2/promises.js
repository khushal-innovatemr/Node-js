function fetchUserDataWithPromise() {
    const userData = { id: 1, name: "John Doe"};

    return new Promise((resolve) => {
            resolve(userData);
    });
}

fetchUserDataWithPromise()
    .then((data) => {
        console.log("Processing user data:", data);
        console.log("User data processed successfully.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });