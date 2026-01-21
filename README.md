# 👋 Welcome to KJ's Social Portfolio

> **不是無聊的 PDF 履歷，而是一個活生生的社群動態牆！** 🚀

歡迎來到我的個人網站專案！這是一個模仿社群媒體 (Social Media) 介面的個人作品集。比起條列式的文字，我更喜歡用動態貼文的方式來展示我的專案經歷、技術堆疊與生活點滴。


---

## ✨ 特色亮點 (Features)

這個網站不只是長得像 Facebook，裡面還藏了很多有趣的細節：

### 📱 沉浸式動態牆 (Social Feed)

* **📌 置頂功能 (Pinned Post)**：重要的經歷（或是帥氣的照片）會被釘在最上面，還有專屬的藍色圖釘與光暈效果。
* **⏱️ 時間顯示**：
* 剛發布 -> `今天`
* 昨天發布 -> `昨天`
* 稍微久一點 -> `XX 天前`
* 很久以前 -> `XX 年前`
* *Hover 上去還會顯示詳細日期喔！*


* **❤️ 按讚互動**：雖然目前是純前端自嗨（刷新會消失），但那個點擊的回饋感很重要

### 🛠️ 技能與過濾器 (Interactive Sidebar)

* **🔍 技能篩選**：右側欄位列出了我的 Tech Stack，點擊上方的 Filter 可以快速篩選（例如只看 Backend 或 Frontend）。
* **💬 模擬聊天室**：點擊任何一個技能（例如 React 或 Go），右下角會彈出一個模擬聊天視窗，告訴你我對這項技術的熟悉程度。

---

## 🚀 本地執行 (Getting Started)

如果你想在你的電腦上跑跑看這個專案：

1. **Clone 專案**
```bash
git clone https://github.com/你的帳號/你的專案名稱.git
cd 你的專案名稱

```


2. **安裝依賴**
```bash
npm install

```


3. **啟動開發伺服器**
```bash
npm run dev

```


打開瀏覽器輸入 `http://localhost:4321` 就可以看到囉！
4. **型別檢查 (確保程式碼品質)**
```bash
npm run check

```
確保沒有 TypeScript 或 ESLint 錯誤 (從來沒有修好過haha)*

---

##  專案結構 (Project Structure)

核心邏輯都在 `src` 資料夾裡，這裡稍微導覽一下：

```text
src/
├── components/
│   ├── myComponents/     # 核心組件 (Post, Sidebar, ChatWindow...)
│   └── social/           # 社群相關的小元件
├── data/
│   └── myData.ts         # 🗄️ 資料中心！所有的貼文、個人資料、技能都在這設定
├── pages/
│   └── index.astro       # 首頁入口
└── layouts/              # 網站佈局設定

```


Developed with ❤️ by **KJ**

---
