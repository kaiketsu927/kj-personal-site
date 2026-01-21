export interface SkillFriend{
    id : string,
    logo_path : string, // image path
    name : string,  
    familiar : string, // 模擬fb聊天室是否上線, 把他比喻成技能是否還熟悉的概念, online代表熟悉 半年可能代表半年前有碰過, offline代表曾經接觸但現在生疏
    category : 'Framework' | 'DB' | 'Language' | 'Tool',
    statusMessage : string[],
}

// post interface

export interface Post{
  id: number,
  category : string, // 用來分類貼文要放在哪個子頁
  name : string,
  description: string,
  imageOrLink? : PreviewLink | string , // 若為一般圖片就只存路徑
  likes : number,
  isPinned : boolean,
  date : string , // 格式如 "2024-05-20"
}

export interface PreviewLink{
  id : number,
  // title?: string, //未來擴充可能用到
  imagePath: string, // 預覽圖路徑
  url : string //點擊會跳轉的連結
  
}
// 以下interface皆為暫定
export interface NotificationItem {
  id: number;
  avatar: string;      // 通知來源的圖示 (emoji 或圖片路徑)
  text: string;        // 通知內容
  time: string;        // 時間字串
  isUnread: boolean;   // 是否未讀 (true 會顯示藍底+紅點)
}

// 2. 定義個人檔案的資料型別
export interface ProfileItem {
  name: string;
  role: string;
  avatar: string;
}
export const mySkills: SkillFriend[] = [
  {
    id: 'redis',
    logo_path: '/skills/redis.png', // 圖片路徑 //public對astro來說是隱形資料夾 路徑要跳過
    name: 'Redis',
    familiar: 'offline', // 曾經接觸但現在生疏
    category: 'DB',
    statusMessage: [
      "這是我在三年前接觸過的技能！",
      "當時使用到的項目主要是透過 Redis 實現高效率的快取以及去重複。"
    ]
  },
  {
    id: 'nuxt',
    logo_path: '/skills/nuxt.png',
    name: 'Nuxt.js',
    category: 'Framework',
    familiar: 'online',
    statusMessage: [
      "因為2025年底React發生重大漏洞而接觸學習",
      "後來用於實作課程期末專案- Youbike補車系統的前後端串接框架",
    ]
  },
  {
    id: 'gcp',
    logo_path: '/skills/google-cloud-platform.png',
    name: 'Google Cloud',
    category: 'Tool',
    familiar: 'online',
    statusMessage: [
      "基於 BigQuery 的資料管線，專門處理站點時序資料的清洗與預測結果",
      "另外成功與GCP生態系中的Pub/Sub、BigQuery ML完成資料流串接 "
    ]
  },
  {
    id: 'prisma',
    logo_path: '/skills/prisma.png',
    name: 'Prisma ORM',
    category: 'Tool',
    familiar: 'online',
    statusMessage: [
      "自從用了它，我再也不想手寫 SQL 來管理 Schema 了哈哈。",
      "用來防止某些透過SQL實現的資安攻擊手法! 如injection",
      "運用 Transaction 機制確保系統中「任務指派」與「員工狀態更新」兩項任務具備原子性。"
    ]
  },
  {
    id: 'postgresql',
    logo_path: '/skills/postgresql.png',
    name: 'PostgreSQL',
    category: 'DB',
    familiar: 'online',
    statusMessage: [
      "雖然 NoSQL 很紅，但我依然信任這個老牌資料庫來存核心資料。",
      "與分析用的 BigQuery 區隔，專注於交易的一致性與寫入安全。",
      "常常選擇使用Supabase，更方便使用PostgreSql。",
    ]
  },
  {
    id: 'ts',
    logo_path: '/skills/typescript.png',
    name: 'TypeScript',
    category: 'Language',
    familiar: 'online',
    statusMessage: [
      "現在基本上不選擇寫JS，TS的型別檢查真的讓我開發起來心裡踏實多了!",
      "還記得為了參與 Zod 開源專案貢獻，看了差不多三天的TS=="
    ]
  },

  // --- Strong Background (Data Science Roots) ---
  {
    id: 'python',
    logo_path: '/skills/python.png',
    name: 'Python',
    category: 'Language',
    familiar: 'online',
    statusMessage: [
      "主要在學校資料科學/AI相關應用或研究會寫",
      "大學時期也曾於產學合作中用Python做網頁爬蟲 以及 整合 LLM API 生成報告。",
      "雖目前重心轉移，但仍是處理複雜數據分析的首選語言。"
    ]
  },

  // --- Utility & Tools ---
  {
    id: 'docker',
    logo_path: '/skills/docker.png',
    name: 'Docker',
    category: 'Tool',
    familiar: '一年前',
    statusMessage: [
      "有了它，我就不用擔心同個應用在不同系統上環境不同而無法運作的問題了。",
      "解決了跨環境依賴管理的問題，加速專案的建置流程。"
    ]
  },
  
  {
    id: 'react',
    logo_path: '/skills/react.png',
    name: 'React',
    category: 'Framework',
    familiar: '兩年前',
    statusMessage: [
      "曾經用React開發簡單系統，能理解 Component 生命週期與 Hooks 運作。",
      "主要用於協助後端 API 的串接測試與簡單的後台介面搭建。",
    ]
  },
  {
    id: 'mysql',
    logo_path: '/skills/mysql.png',
    name: 'MySQL',
    category: 'DB',
    familiar: 'offline',
    statusMessage: [
      "這算是我剛踏入資料庫領域時的啟蒙DB吧！",
      "熟悉標準 SQL 語法與正規化設計流程，是接觸關聯式資料庫的入門磚。",
      "目前專案多轉向 PostgreSQL，但對 ACID 特性與索引優化的理解是共通的。"
    ]
  },
  {
    id: 'java',
    logo_path: '/skills/java.png',
    name: 'Java',
    category: 'Language',
    familiar: 'online',
    statusMessage: [
      "這是我大學時期物件導向以及資料結構觀念的開端",
      "大學課堂專案中主要使用 Java 進行系統開發與演算法實作。",
      "但較少實作系統的經驗，偶爾拿來寫Leetcode訓練邏輯思維"
    ]
  }
];

// 作為當下的特殊事項提點
// 通知資料 (Mock Data)
export const myNotifications: NotificationItem[] = [
  {
    id: 1,
    avatar: "🚀", 
    text: "專案 'KJ's Personal Site' 已成功部署到Vercel上站啦。",
    time: "剛剛",
    isUnread: true, // 這則是未讀 -> 會讓鈴鐺顯示紅字 1
  },
  {
    id: 2,
    avatar: "👨‍💻",
    text: "GitHub Bot: 這個月你已經累積了 30+ 次 Commits！",
    time: "2 小時前",
    isUnread: false, // 這則是已讀
  }
];

// 4. 模擬的個人檔案資料
export const myProfile: ProfileItem = {
  name: "凱傑 楊",      //可刪          
  role: "Backend Engineer", //可刪       
  avatar: "myPhoto.png" // 暫時用一張現有的圖片當頭像
};

// Post資料
export const allPosts: Post[] = [
  {
    id: 1,
    name: "凱傑 楊",
    category: "community",
    description: "終於在 Zod 這個神級專案留下足跡了！🎉\n這是我第一次貢獻開源專案，修復了 zod 在特定情況下的型別推導錯誤 (PR #5511)。為了這個 fix，我花了不少時間鑽研它的 Source Code，對於 TypeScript 的型別系統與泛型推導 (Inference) 又有了更深的理解，也熟悉使用Zod這個TS界幾乎無人不曉的工具",
    likes: 88,
    imageOrLink: {
      id: 101,
      imagePath: "./zod.png", 
      url: "https://github.com/colinhacks/zod/pull/5511"
    },
    isPinned: true,
    date : "2025-12-08"
  },

  //  Calendar-CLI (Work) - 用 Link 預覽圖形式
  {
    id: 2,
    name: "凱傑 楊",
    category: "work",
    description: "受夠了每次都要打開網頁看行事曆，不如自己寫一個 CLI 工具吧！\n 可以打開筆電就直接看本周的日常/特別行程讓我覺得很酷，這是開發這個專案的原動力~ \n \nCalendar-CLI 是我近期練習 TypeScript 與 Node.js 的小專案。除了實作基本的 CRUD，也練習了如何使用 Commander.js 處理 CLI 的互動介面，並結合 date-fns 處理複雜的日期運算邏輯。",
    likes: 45,
    imageOrLink: {
      id: 102,
      imagePath: "./calendar-cli.png",
      url: "https://github.com/kaiketsu927/calendar_cli"
    },
    isPinned: true,
    date : "2025-12-24",
  },

  // Personal-Site (Work) - 純圖片展示
  {
    id: 3,
    name: "凱傑 楊",
    category: "work",
    description: "你們現在看到的個人網站，就是我的第二個 Side Project！🚀\n雖然我目前主攻後端，但為了讓作品有個家，選擇使用 Astro 搭配 Tailwind CSS 快速建置。這裡就像我的實驗室與個人小天地，未來會持續將我的作品或一些技術的/生活的事蹟更新進來~!",
    likes: 10,
    // imageOrLink: "./personal-site.png",
    isPinned: false,
    date : "2026-01-21",
  },

  // Jeff Dean's Guide (Activities) - 用 Link 預覽圖形式
  {
    id: 4,
    name: "凱傑 楊",
    category: "activities",
    description: "週末讀物：Google 大神 Jeff Dean 的系統優化指南。📚\n這篇關於 Latency Numbers 的文章真的是經典中的經典。在設計後端系統時，提醒自己不要只看功能實現，更要對 CPU、Memory 和 Network 的存取成本有數量級的概念，這對效能優化至關重要。",
    likes: 67,
    imageOrLink: {
      id: 103,
      // 建議去找一張有關 "Latency Numbers Every Programmer Should Know" 的圖表當封面
      imagePath: "./jeff-dean.jpg", 
      url: "https://abseil.io/fast/hints.html"
    },
    isPinned: false,
    date : "2025-12-08",
  },

  // Heho Health (Home) - 純圖片展示 (回憶/經歷)
  {
    id: 5,
    name: "凱傑 楊",
    category: "home",
    description: "回顧在 Heho 健康的一年產學合作經歷。👨‍⚕️\n我負責開發癌症資訊 Chatbot 的核心功能。主要技術點在於處理 User Input 的字串清洗 (使用 Regex 與 Jieba 分詞) 以及 FAQ 熱門問題檢索。這也是我第一次將 ChatGPT API 落地到實際的商業場景中，解決了許多非結構化問答的難題。",
    likes: 56,
    imageOrLink: "./heho.png",
    isPinned: false,
    date : "2023-05-30",
  },

  // Mean Well (Home) - 純圖片展示
  {
    id: 6,
    name: "凱傑 楊",
    category: "home",
    description: "用 AI 幫企業寫報告，真的可行嗎？🤔\n在明緯企業的產學計畫中，我設計了一套流程引導 LLM 生成年度永續報告書 (SDGs)。這不僅是 Prompt Engineering 的實戰，更涉及後續將 Code Base 模組化，並負責技術指導將專案順利交接給下一屆學弟妹。",
    likes: 18,
    imageOrLink: "./mean-well-sdg.png",
    isPinned: false,
    date : "2023-09-30",
  },

  // NCCU (Home) - 純圖片展示 (生活近況)
  {
    id: 7,
    name: "凱傑 楊",
    category: "home",
    description: "新的旅程即將開始！🎓\n很榮幸在 2025 年錄取國立政治大學資管所(科技組)。大學時期的跌跌撞撞都是養分，接下來希望能將重心放在後端架構的研究上。政大見！",
    likes: 200,
    imageOrLink: "./nccu.png",
    isPinned: true,
    date : "2025-08-29",
  },

//  日常生活貼文
  {
    id: 8,
    name: "凱傑 楊",
    category: "life",
    description: "趁著寒假時出遊看看海外的世界，一方面沉澱自己，另一方面也震撼於上海的社經發展。希望自己好好努力未來也能順應時代浪潮對世界做出小小的貢獻~(外灘真的讓我瞠目結舌)",
    likes: 17,
    imageOrLink: "./shanghai.png",
    isPinned: false,
    date : "2026-01-21",
  },
  {
    id: 9,
    name: "凱傑 楊",
    category: "activities",
    description: "很榮幸能代表輔仁大學參與2023年的Innoserv競賽，最終也順利在眾多隊伍與投稿作品中被肯定闖入決賽。\n \
    也趁著擺攤的閒餘時刻去其他攤位與其他開發者技術交流，真的是獲益良多，也感謝這一年來陪我一起奮鬥的好夥伴們!",
    likes: 168,
    imageOrLink: "./innoserv2023.png",
    isPinned: true,
    date : "2023-11-18",
  },
];