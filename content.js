console.log("DeepWiki Redirector script loaded."); // For debugging

function addDeepWikiButton() {
    // Check if the button already exists (important for single-page navigation on GitHub)
    if (document.getElementById('deepwiki-redirect-button')) {
        console.log("DeepWiki button already exists.");
        return;
    }

    // 1. Get current URL path
    const pathParts = window.location.pathname.split('/').filter(part => part.length > 0);

    // 2. Check if it looks like a repository page (at least username/repo)
    if (pathParts.length >= 2) {
        const username = pathParts[0];
        const repoName = pathParts[1];

        // Make sure it's not a non-repo path like /features or /topics
        // A simple check: avoid adding button if username seems like a generic GitHub path
        const genericPaths = ['features', 'topics', 'collections', 'trends', 'events', 'sponsors', 'marketplace', 'explore', 'settings', 'notifications', 'new', 'organizations', 'codespaces', 'issues', 'pulls', 'logout', 'login', 'about', 'contact', 'pricing', 'apps', 'customer-stories', 'security', 'blog'];
        if (genericPaths.includes(username.toLowerCase())) {
             console.log(`Skipping button: Path starts with generic term '${username}'.`);
             return; // Don't add button on these top-level pages
        }

        console.log(`Detected GitHub repo: ${username}/${repoName}`);

        // 3. Construct DeepWiki URL (Ensure backticks ` ` are used correctly)
        const deepWikiUrl = `https://deepwiki.com/${username}/${repoName}`;

        // 4. Create the button
        const button = document.createElement('button');
        button.textContent = 'DeepWiki';
        button.id = 'deepwiki-redirect-button'; // Assign an ID for styling and checking

        // 5. Add click event listener for redirection
        button.addEventListener('click', () => {
            console.log(`Opening in new tab: ${deepWikiUrl}`);
            window.open(deepWikiUrl, '_blank'); // <<< CHANGE HERE: Open in a new tab
        });

        // 6. Append the button to the page body
        document.body.appendChild(button);
        console.log("DeepWiki button added.");

    } else {
        console.log("Not a repository page (path too short or structure mismatch).");
    }
}

// --- Run the function ---

// Run once on initial load
addDeepWikiButton();

// --- Handle GitHub's dynamic navigation (Single Page Application behavior) ---
// GitHub often changes content without full page reloads. We need to observe changes.
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    console.log("URL changed, re-evaluating DeepWiki button...");
    // Attempt to remove existing button before adding a new one
     const existingButton = document.getElementById('deepwiki-redirect-button');
     if(existingButton) {
        existingButton.remove();
        console.log("Removed old DeepWiki button.");
     }
    // Try adding the button again for the new URL
    addDeepWikiButton();
  }
}).observe(document.body, {subtree: true, childList: true});

// Also, listen for GitHub's 'turbo:load' or similar SPA navigation events
// Note: GitHub might use different events, 'turbo:load' is common in Rails apps using Turbo
document.addEventListener('turbo:load', () => {
    console.log("Turbo:load event detected, re-evaluating DeepWiki button...");
     const existingButton = document.getElementById('deepwiki-redirect-button');
     if(existingButton) {
        existingButton.remove();
        console.log("Removed old DeepWiki button (turbo:load).");
     }
    addDeepWikiButton();
});

// Sometimes simple history state changes are used
window.addEventListener('popstate', () => {
    console.log("Popstate event detected, re-evaluating DeepWiki button...");
    const existingButton = document.getElementById('deepwiki-redirect-button');
    if(existingButton) {
       existingButton.remove();
       console.log("Removed old DeepWiki button (popstate).");
    }
   addDeepWikiButton();
});
