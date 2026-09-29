// Basic Promise syntax and usage

// Create a Promise that resolves with fake user data
const fetchUserData = new Promise((resolve, reject) => {
	setTimeout(() => {
		// Simulated server response
		const userData = {
			id: 1,
			name: 'John Doe',
		};
        
		resolve(userData);
		// To test a failure path, comment out the line above and uncomment below
		// reject(new Error("Failed to fetch user"));
	}, 1000);
});

// Consume the Promise
fetchUserData
	.then((user) => { // when the Promise successfully resolve
		console.log('User data:', user);
	})
	.catch((error) => { // when the Promise rejected
		console.error('Error:', error);
	});






// Fetch a user, then fetch that user’s posts
fetch('/api/user/1')
    // Parse the first response
    .then(response => response.json())
    .then(user => {
        console.log("User:", user);
        // Fetch user posts next
        return fetch(`/api/posts/${user.id}`);
    })
    // Parse posts
    .then(response => response.json())
    .then(posts => console.log("User posts:", posts))
    // Catch any failure in the chain
    .catch(error => console.error("Error:", error));

	
// With async/await
async function getUserAndPosts() {
    // Wait for user fetch
    const userResponse = await fetch('/api/user/1');
    const user = await userResponse.json();
    console.log("User:", user);

    // Wait for posts fetch, using the user id
    const postsResponse = await fetch(`/api/posts/${user.id}`);
    const posts = await postsResponse.json();
    console.log("User posts:", posts);


    // Caller still receives a Promise
    return posts;
}



// ######################################################################################

// Basic Async/Await syntax:

// Define an async function that loads one user
async function fetchUserData() {
    // Wait until the HTTP request completes
    const response = await fetch('/api/user/1');
    // Wait until the response body is parsed
    const user = await response.json();
    return user;
}

// Call the async function and handle its result
fetchUserData()
    .then(user => console.log(user))
    .catch(error => console.error(error));