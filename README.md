# BazarDor – Daily Market Price Tracker

BazarDor is a web application that helps users explore daily market prices of essential products in Bangladesh. Users can browse product categories, compare price changes, and view product details after authentication.

## Live Demo

- **Live Website:https://bajar-dor-assighnment-7-2wsr.vercel.app/
- **GitHub Repository:https://github.com/ivyakterlotamoni/Bajar-dor-assighnment-7

## Features

- **Homepage:** Displays market price information, featured products, and daily price changes.
- **Product Categories:** Browse products by category.
- **Product Listing:** Explore available products with sorting options.
- **Price Comparison:** View current prices and compare market information.
- **Authentication:** Sign up and sign in to access protected product details.
- **User Profile:** View and update profile information.
- **Protected Routes:** Restricts access to product details for unauthenticated users.
- **Responsive Design:** Designed to work across desktop, tablet, and mobile screens.
- **Custom 404 Page:** Provides a custom page for routes that do not exist.
- **Loading States:** Displays loading feedback while data is being fetched.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB
- Better Auth
- Vercel

## Getting Started

### Prerequisites

Make sure you have Node.js, npm, and a MongoDB database connection configured.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd bajar-dor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and configure the required environment variables.

   ```env
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   ```

   Add any additional environment variables required by your authentication providers.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB database connection |
| `BETTER_AUTH_SECRET` | Secret used by Better Auth |
| `BETTER_AUTH_URL` | Base URL used by the authentication configuration |

Use the actual variable names required by your code. Keep `.env.local` private and never commit database credentials or secret keys.

## Deployment

The application is intended to be deployed on Vercel.

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables in Project Settings.
3. Deploy the project.
4. Verify the homepage, authentication, product details, profile, and custom 404 page.

## Project Purpose

BazarDor aims to make everyday market price information easier to explore and compare through a user-friendly web interface.
