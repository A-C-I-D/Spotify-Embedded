# 🎵 Spotify Embedded – Live Now Playing Widget

**Spotify Embedded** is a fun, lightweight project that displays your **currently playing Spotify track** in a clean embeddable widget. It fetches real-time playback info using the **Spotify Web API** and offers multiple views that you can embed anywhere, like **Notion dashboards, personal websites, or streaming overlays.**

---

## ✨ Features

✅ **Real-time Now Playing** – auto-refreshes every 15 seconds  
✅ **Two UI Styles** –  
   - **View 1:** **Landscape**, wide horizontal card style  
   - **View 2:** **Portrait**, compact centered style  
✅ **Spotify Album Art & Track Info** – title, artist, and play status  
✅ **Embeddable Anywhere** – works in Notion, OBS overlays, personal pages  
✅ **Easy Hosting on Vercel** – 1-click deployment  

---

## 🚀 Demo

- **Landing Page:** `https://spotify-widget-orcin.vercel.app/`  
- **Landscape Widget (View 1):** `https://spotify-widget-orcin.vercel.app/view1.html`  
- **Portrait Widget (View 2):** `https://spotify-widget-orcin.vercel.app/view2.html`  

---

## 🛠️ Tech Stack

- **HTML + CSS + JavaScript** (no heavy frameworks)  
- **Spotify Web API** for fetching currently playing track  
- **Vercel** for free hosting + deployment  

---

## 📸 Preview

**View 1 (Landscape)**  
> Horizontal card style with album art on the left & track details on the right.
> ![Landscape](https://cdn.discordapp.com/attachments/959107867036774420/1395047676285812736/image.png?ex=687906e4&is=6877b564&hm=a0fca1fce8495d9ba9b611f707cd974ce27e531950e71667510b421f34f2a869&)

**View 2 (Portrait)**  
> Compact centered style, great for minimal embeds.
> ![Portrait](https://cdn.discordapp.com/attachments/959107867036774420/1395047676285812736/image.png?ex=687906e4&is=6877b564&hm=a0fca1fce8495d9ba9b611f707cd974ce27e531950e71667510b421f34f2a869&)

---

## ⚙️ How It Works

1. Authenticate with Spotify & generate a **Refresh Token**  
2. Widget uses the Refresh Token + Client Secret to get a temporary **Access Token**  
3. Calls `GET /v1/me/player/currently-playing` every 15s  
4. Updates the UI with album art, track name, artist, and play status  

---

## 🔑 Setup Instructions

### 1️⃣ Get Spotify API Credentials

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)  
2. Create a new app  
3. Add redirect URI:  
   ```
   http://127.0.0.1:8888/callback
   ```
4. Save **Client ID** and **Client Secret**  

---

### 2️⃣ Generate a Refresh Token

1. Clone the `spotify-auth` folder  
2. Run the local auth server (`node auth.js`)  
3. Visit `http://127.0.0.1:8888/login` → log in to Spotify  
4. Copy the **Refresh Token** displayed  

---

### 3️⃣ Configure Widget

In both `view1.html` & `view2.html`, replace:  

```js
const CLIENT_ID = "your_client_id";
const CLIENT_SECRET = "your_client_secret";
const REFRESH_TOKEN = "your_refresh_token";
```

---

### 4️⃣ Test Locally

Just open `view1.html` or `view2.html` in your browser.

---

### 5️⃣ Deploy on Vercel

1. Install [Vercel CLI](https://vercel.com/docs/cli):  
   ```bash
   npm install -g vercel
   vercel login
   ```  
2. From project folder:  
   ```bash
   vercel --prod --force
   ```  
3. Done! Your widget is live at:  
   ```
   https://your-project-name.vercel.app
   ```

---

## 📌 Embedding in Notion

1. Copy your **Vercel view URL** (e.g. `.../view1.html` for Landscape)  
2. In Notion → type `/embed` → paste URL  
3. Resize the embed block → it will auto-refresh your current track  

---

## 🤝 Credits

- Powered by [Spotify Web API](https://developer.spotify.com/documentation/web-api/)  
- Hosted with ❤️ on [Vercel](https://vercel.com)  

---

## 📜 License

MIT License – Free to use & modify.
