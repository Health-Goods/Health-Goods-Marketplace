I am making this readme to put notes about things i learn as I do work, as well as additional notes about work i add.

# Routing
Nextjs now uses an Approuter instead of the old pages router

For this we have a src directory, and an app directory within that

Import Link from 'next/link' and use that with href prop to navigate

# Layout.tsx
Our layout.tsx file wraps the entire app and everything is passed as the children prop.

# Page.tsx
The page.tsx in the top level of this component is the "Home" page.

# Creating pages
To create a page, create a new directory within the app directory and name it after the page you want to create, then create a page.tsx file within that directory. Routing to it is as simple as creating a Link component with href="/(path to that directory from the root of the src/app directory)"

# React hooks
It looks like we need to add "use client" at the top of our code if we want to use useState