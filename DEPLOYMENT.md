# 🚀 Deploying to Vercel

Since this is a **Next.js** project, deploying to [Vercel](https://vercel.com) (the creators of Next.js) is the best and easiest option. It allows for automatic deployments whenever you push to GitHub.

## Step 1: Create a Vercel Account
1. Go to [vercel.com](https://vercel.com/signup).
2. Sign up using **Continue with GitHub**. This will automatically connect your GitHub account.

## Step 2: Import Your Repository
1. Once logged in, click **"Add New..."** -> **"Project"** on your dashboard.
2. You should see a list of your GitHub repositories.
3. Find **`Portfolio`** (or `Srujanmirji/Portfolio`) and click **Import**.

## Step 3: Configure Project
Vercel will automatically detect that this is a Next.js project. You typically **do not** need to change the build settings.

- **Framework Preset**: `Next.js`
- **Root Directory**: `./` (default)
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

> **Note:** If you added any environment variables (like API keys) in a `.env` file locally, you would add them under the **Environment Variables** section here. For this static portfolio, you likely don't need any yet.

## Step 4: Deploy
1. Click the **Deploy** button.
2. Vercel will clone your repo, install dependencies, and build the project.
3. Wait about 1-2 minutes.
4. Once finished, you'll see a screenshot of your site and a "Congratulations!" message.

## Step 5: Your Live URL
Vercel assigns a domain automatically (e.g., `portfolio-srujanmirji.vercel.app`).
- You can visit this URL to share your site with the world.
- You can essentially use this URL as your main portfolio link.

## 🔄 Automatic Updates
Now that your project is connected:
- Every time you run `git push origin main` from your terminal, Vercel will **automatically** detect the change and re-deploy your site.
- You don't need to do anything else!
