# TikTok Text-to-Speech with Vercel Web Analytics

A web application that converts text to speech using TikTok's TTS API, now with Vercel Web Analytics integration.

## Features

- Convert text to speech using various TikTok voices
- Support for multiple languages and accents
- Real-time character count
- Audio playback and download
- **Vercel Web Analytics** for tracking visitors and page views

## Vercel Web Analytics Setup

This project now includes Vercel Web Analytics integration. To enable analytics:

1. **Deploy to Vercel**:
   ```bash
   vercel deploy
   ```

2. **Enable Analytics in Dashboard**:
   - Visit your [Vercel Dashboard](https://vercel.com/dashboard)
   - Select this project
   - Click the **Analytics** tab
   - Click **Enable** to activate Web Analytics

3. **Verify Installation**:
   - Open your deployed site
   - Open browser DevTools → Network tab
   - Look for a request to `/_vercel/insights/view`
   - If you see this request, analytics is working! 🎉

4. **View Analytics Data**:
   - Go to your Vercel Dashboard
   - Select your project
   - Click the **Analytics** tab
   - View visitor data, page views, and other metrics

## Analytics Implementation

This project uses the **HTML-based** Vercel Web Analytics implementation:

```html
<!-- Vercel Web Analytics -->
<script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

### Benefits:
- ✅ No npm package installation required
- ✅ Automatic visitor and page view tracking
- ✅ Privacy-friendly analytics
- ✅ Fast and lightweight

### Limitations:
- ⚠️ No route tracking (HTML implementation limitation)
- ⚠️ Custom events require the `@vercel/analytics` package

## Project Structure

```
.
├── index.html          # Main HTML file with analytics integration
├── script.js           # TikTok TTS functionality
├── package.json        # Project metadata
├── vercel.json         # Vercel deployment configuration
└── wrangler.toml.txt   # Cloudflare Workers config (optional)
```

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have http-server)
npx http-server
```

## Deployment

Deploy to Vercel:

```bash
vercel deploy --prod
```

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [TikTok TTS API](https://github.com/Weilbyte/tiktok-tts)

## License

MIT
