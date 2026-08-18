// Lesson 01 - Question 4: Adding reloading records
// ============================================
/*
Network Request Analysis
Total requests: 22
Three requests by name: 
1. index.html
2. styles.css
3. script.js
*/

// Lesson 01 - Question 6: Adding a sixth artist
// ============================================
/*
Files that changed:
- artists.json (added a new artist object for Taylor Swift)

Files that did NOT change:
- index.html (no changes needed)
- style.css (no changes needed)
- script.js (no changes needed)

Why this separation is the point:
Separating data (JSON) from presentation (HTML/CSS) and logic (JavaScript) means we can update the content
without touching the code. This makes the system more maintainable, reduces the risk of breaking something,
and allows non-developers to update data without knowing how the code works.
*/

// Lesson 01 - Question 7: Reading the error in the console
// ============================================
/*
Failed to load resource: the server responded with a status of 404 (Not Found)
*/

// Lesson 01 - Question 8: JSON Round Trip
// ============================================

// Step 1: Build an artist object
const testArtist = {
  name: "Asake",
  genre: "Afrobeats",
  total: "99:99",
};

console.log("=== JSON Round Trip Test ===");

// Step 2: Convert to JSON string
const jsonString = JSON.stringify(testArtist);
console.log("Step 1 - JSON string:", jsonString);
// output: {"name":"Asake","genre":"Afrobeats","total":"99:99"}

// Step 3: Parse back to object
const parsedArtist = JSON.parse(jsonString);
console.log("Step 2 - Parsed object:", parsedArtist);

// Step 4: Log one property to prove it worked
console.log("Step 3 - Proving round trip: name =", parsedArtist.name);
// output: Asake

console.log("✅ Round trip successful! Object → JSON → Object");

// Lesson 01 - Question 9: System Description (Optional)
// ============================================

/*
System Description:

Client: The browser (Chrome) running the HTML page via Live Server.
Server: The Live Server (development server) serving static files from the local filesystem.

Request: The client sends a GET request for "artists.json".
Response: The server responds with the JSON file containing all artist data.

The client then parses the JSON, creates HTML elements for each artist,
and displays them as cards on the page.
*/
