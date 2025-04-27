# DeepWiki GitHub Redirector Chrome Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) A simple Chrome extension that adds a 'DeepWiki' button to GitHub repository pages, allowing one-click navigation to the corresponding page on DeepWiki.com.

## Description

This browser extension streamlines the workflow for users who frequently navigate between code repositories on GitHub and related content on DeepWiki. It detects when you are viewing a repository page on GitHub (`github.com/username/repository`) and adds a floating "DeepWiki" button. Clicking this button instantly opens the corresponding DeepWiki page (`deepwiki.com/username/repository`) in a new browser tab.

## Features

* Adds a convenient floating 'DeepWiki' button to GitHub repository pages.
* Automatically detects the `username` and `repository` name from the GitHub URL.
* Opens the corresponding DeepWiki page in a new tab.
* Simple, lightweight, and requires no configuration.
* Privacy-focused: Does not collect any user data.

## Installation

There are two ways to install this extension:

**1. From the Chrome Web Store (Recommended)**

* You can install the extension directly from the official Chrome Web Store for automatic updates:
* **[Link to Chrome Web Store Listing]** (Link will be added once published)

**2. Manual Installation (for Development or Testing)**

* Clone or download this repository to your local machine.
    ```bash
    git clone git@github.com:jinjunliu/deepwiki-redirector.git
    ```
* Open Google Chrome and navigate to `chrome://extensions`.
* Enable "Developer mode" using the toggle switch in the top-right corner.
* Click the "Load unpacked" button that appears.
* Select the directory