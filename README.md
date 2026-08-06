# 沖泰菲堂之二度泰國

這是「2026 考艾・曼谷家庭旅行」的長輩友善家庭旅遊網站。全站使用純 HTML、CSS 與 JavaScript，無需建置工具、資料庫、API Key 或付費服務，可直接部署到 GitHub Pages。

## 本機預覽

在專案資料夾啟動任一靜態伺服器，例如 Python：

```bash
python3 -m http.server 8000
```

然後開啟 `http://localhost:8000/`。直接雙擊 `index.html` 也能閱讀，但分享與剪貼簿功能在靜態伺服器上較完整。

## 修改旅行內容

主要設定集中在 `script.js` 頂部的 `tripData`。

- 旅行日期：修改 `departure`，請保留台灣時區 `+08:00`。
- 航班：修改 `tripData.flights.outbound` 與 `tripData.flights.inbound`；畫面文字也請同步更新 `index.html` 的航班卡。
- 每日行程：搜尋 `class="day"`，修改該日的日期、主題、內容與放心提醒。

### 選擇曼谷最後一晚飯店

在 `script.js` 將：

```js
bangkokHotelStatus: "pending"
```

改成 `"lumphini"` 或 `"avani"`。選定後，網站只會顯示該飯店；改回 `"pending"` 則顯示兩張候選卡。

## 更換圖片

### 首頁家庭照片

將照片放到 `assets/images/hero-family.jpg`，再把 `index.html` 的首頁圖片路徑由 `assets/images/hero-family.svg` 改成 `.jpg`。建議橫式 1600×1000 以上、人物在畫面中央偏右，檔案控制在 500KB 內；保留有意義的 `alt` 文字。

### ATTA 飯店照片

目前的 `atta-lake.svg`、`room-living.svg`、`room-bedroom.svg`、`room-pool.svg` 是原創示意佔位圖。把合法取得的照片放進 `assets/images/`，再替換 `index.html` 對應的 `src`。建議主圖 900×700、房間圖 600×420，使用 WebP 或壓縮 JPG。

### Open Graph 分享圖

LINE 分享使用 `assets/images/og-cover.png`（1200×630）。更新圖片後，也要確認 `index.html` 的 `og:image` 是部署後的完整 HTTPS 網址。LINE 可能快取舊圖，更新後需等待或使用 LINE 的快取更新工具。

## 部署 GitHub Pages

1. 將專案推送至公開儲存庫 `khao-yai-family-trip-2026` 的 `main` 分支。
2. GitHub 儲存庫進入 **Settings → Pages**。
3. **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選 `main`、資料夾選 `/ (root)`，按 **Save**。
5. 將 `index.html` 中兩個 `YOUR-GITHUB-USERNAME` 換成 GitHub 帳號，重新提交。
6. 等待 GitHub 顯示部署完成，再開啟公開網址檢查。

GitHub Pages 公開網址（部署後更新）：`https://YOUR-GITHUB-USERNAME.github.io/khao-yai-family-trip-2026/`

## 圖片授權與來源

目前所有 SVG 圖片均為本專案原創幾何插畫與佔位圖，不含外部照片或第三方素材。未來若換成飯店或家庭照片，請確認為自行拍攝、飯店官方授權，或具有可再利用授權，並在此記錄來源與授權。

## 未來可更新項目

- 曼谷最後一晚飯店與地址
- 星宇航空實際航班編號
- 考艾包車公司、司機聯絡方式與接送費用
- Day 3 半日行程的確切地點
- 家庭攝影師與拍攝時間
- ATTA 官方或自行拍攝的合法照片
- 出發前一週的天氣與穿著建議
