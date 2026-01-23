# TikTok TTS with Vercel Web Analytics

This is a TikTok Text-to-Speech application built with Express.js and integrated with Vercel Web Analytics.

## Features

- Convert text to speech using TikTok's TTS API
- Multiple voice options
- Real-time character count
- **Vercel Web Analytics integration** for tracking visitors and page views

## Vercel Web Analytics Setup

This project includes Vercel Web Analytics integration. The analytics script has been added to the HTML page following the official Vercel documentation.

### What's Included

The following analytics script has been added to `public/index.html`:

```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

### How to Enable Analytics

1. **Deploy to Vercel**: Deploy this project to Vercel using the command:
   ```bash
   vercel deploy
   ```

2. **Enable Analytics in Vercel Dashboard**:
   - Go to your [Vercel dashboard](https://vercel.com/dashboard)
   - Select your project
   - Click the **Analytics** tab
   - Click **Enable** to activate Web Analytics

3. **View Your Data**:
   - Once enabled and deployed, the analytics will automatically start tracking visitors
   - After deployment, you should see a Fetch/XHR request to `/_vercel/insights/view` in your browser's Network tab
   - View analytics data in your Vercel dashboard under the Analytics tab

### Privacy & Compliance

Vercel Web Analytics is privacy-friendly and doesn't use cookies. Learn more about [Vercel's privacy and data compliance standards](https://vercel.com/docs/analytics/privacy-policy).

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel deploy
   ```

3. Follow the prompts to complete deployment

## Project Structure

```
.
├── public/
│   ├── index.html      # Main HTML file with Vercel Analytics
│   └── script.js       # TikTok TTS client-side logic
├── server.js           # Express server
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Express.js Documentation](https://expressjs.com/)
- [Vercel Deployment Documentation](https://vercel.com/docs)
