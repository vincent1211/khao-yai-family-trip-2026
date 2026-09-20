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

目前首頁使用 `assets/images/hero-khao-yai.webp`。若要換成家庭照片，請放到 `assets/images/hero-family.jpg`，再修改 `index.html` 的首頁圖片路徑。建議橫式 1600×1000 以上、人物在畫面中央偏右，檔案控制在 500KB 內；保留有意義的 `alt` 文字。

### ATTA 飯店照片

目前已使用 ATTA 官方實景照片。若要替換成自行拍攝的照片，請放進 `assets/images/`，再替換 `index.html` 對應的 `src`。建議主圖 1200×700、房間圖 900×630，使用 WebP 或壓縮 JPG。

### Open Graph 分享圖

LINE 分享使用 `assets/images/og-cover.png`（1200×630）。更新圖片後，也要確認 `index.html` 的 `og:image` 是部署後的完整 HTTPS 網址。LINE 可能快取舊圖，更新後需等待或使用 LINE 的快取更新工具。

## 部署 GitHub Pages

1. 將專案推送至公開儲存庫 `khao-yai-family-trip-2026` 的 `main` 分支。
2. GitHub 儲存庫進入 **Settings → Pages**。
3. **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選 `main`、資料夾選 `/ (root)`，按 **Save**。
5. 將 `index.html` 中兩個 `YOUR-GITHUB-USERNAME` 換成 GitHub 帳號，重新提交。
6. 等待 GitHub 顯示部署完成，再開啟公開網址檢查。

GitHub Pages 公開網址：`https://vincent1211.github.io/khao-yai-family-trip-2026/`

## 圖片授權與來源

首頁家庭插畫、圖示與 Open Graph 圖均為本專案原創。實景照片來源如下：

- `hero-khao-yai.webp`：Supanut Arunoprayote，Wikimedia Commons，CC BY-SA 3.0；由原始照片縮放並轉為 WebP。來源：https://commons.wikimedia.org/wiki/File:Green_field_and_mountain,_Kaoyai.jpg
- `atta-lakeside.webp`：Kirimaya Group 官方 ATTA 頁面，原始檔 `atta-banner-1500x859.jpg`。
- `atta-penthouse-living.webp`：Kirimaya Group 官方 ATTA 頁面，原始檔 `penthouse-resort-thumbnail-1500x585.jpg`。
- `atta-garden.webp`：Kirimaya Group 官方 ATTA 頁面，原始檔 `atta-gallery-1-1050x742.jpg`。
- `atta-architecture.webp`：Kirimaya Group 官方 ATTA 頁面，原始檔 `atta-gallery-2-1050x742.jpg`。
- `atta-tani-restaurant.webp`：Kirimaya Group 官方 TANI Restaurant 頁面，原始檔 `TANI-banner.jpg`。此圖呈現 ATTA 度假村的 TANI 用餐空間；官方將早餐稱為 `atta Breakfast`，早餐實際地點請入住時確認。
- ATTA 官方來源：https://www.kirimaya.com/resorts/atta/ 。照片版權歸 Kirimaya Group 所有，本站僅供家庭旅程規劃與住宿辨識；如需其他公開用途，建議先向飯店取得書面許可。

Penthouse 官方列有冰箱、微波爐與熱水壺，但沒有列出爐台、烤箱、鍋具或完整餐具，因此網站將房內飲食定位為「加熱與準備簡餐」，而非可開火烹煮。設備來源：https://www.kirimaya.com/accommodation/atta-penthouse/ 。早餐供應時間與名稱來源：https://www.kirimaya.com/hotel-directory/ 。
- `khao-yai-landscape.webp`：Mammalwatcher，Wikimedia Commons，CC0 1.0 公眾領域貢獻。來源：https://commons.wikimedia.org/wiki/File:Khao_Yai_National_Park_Landscape.JPG

## 未來可更新項目

- 曼谷最後一晚飯店與地址
- 星宇航空實際航班編號
- 考艾包車公司、司機聯絡方式與接送費用
- Day 3 半日行程的確切地點
- 家庭攝影師與拍攝時間
- ATTA 官方或自行拍攝的合法照片
- 出發前一週的天氣與穿著建議
