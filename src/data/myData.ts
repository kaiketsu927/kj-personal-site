import type { SiteConfig } from "vendor/integration/utils/configBuilder";

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
  name : string,
  description: string,
  imageOrLink : PreviewLink | string , // 若為一般圖片就只存路徑
  likes : number
}

export interface PreviewLink{
  id : number,
  title: string,
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
      "在 YouBike 專案裡，它是我用來串接前後端的超強膠水！",
      "實作 Server-Sent Events (SSE) 機制，達成任務通知的低延遲即時推播。",
      "負責處理站點 30 分鐘預測數據的動態呈現與狀態切換。"
    ]
  },
  {
    id: 'gcp',
    logo_path: '/skills/google-cloud-platform.png',
    name: 'Google Cloud',
    category: 'Tool',
    familiar: 'online',
    statusMessage: [
      "這是我用來部署專案跟處理大數據的雲端秘密基地。",
      "建構基於 BigQuery 的資料管線，專門處理站點時序資料的清洗與預測分析。",
      "利用 Cloud Pub/Sub 作為事件中介，解耦任務指派邏輯與通知服務。"
    ]
  },
  {
    id: 'prisma',
    logo_path: '/skills/prisma.png',
    name: 'Prisma ORM',
    category: 'Tool',
    familiar: 'online',
    statusMessage: [
      "自從用了它，我再也不想手寫 SQL 來管理 Schema 了（笑）。",
      "作為系統的一致性保護層，透過 Schema 定義嚴格的資料關聯與型別驗證。",
      "運用 Transaction 機制確保「任務指派」與「員工狀態更新」具備原子性。"
    ]
  },
  {
    id: 'postgresql',
    logo_path: '/skills/postgresql.png',
    name: 'PostgreSQL',
    category: 'DB',
    familiar: 'online',
    statusMessage: [
      "雖然 NoSQL 很紅，但我還是最信任這個老牌資料庫來存核心資料。",
      "作為業務邏輯的唯一真相來源 (Source of Truth)，儲存任務、員工與站點主檔等長期狀態。",
      "與分析用的 BigQuery 區隔，專注於交易的一致性與寫入安全。"
    ]
  },
  {
    id: 'ts',
    logo_path: '/skills/typescript.png',
    name: 'TypeScript',
    category: 'Language',
    familiar: 'online',
    statusMessage: [
      "現在沒了它的型別檢查，我寫 code 還真的會有點怕怕的！",
      "目前的主力開發語言，致力於構建型別安全的後端架構與工具鏈。",
      "近期參與 Zod 開源專案貢獻，修復型別推導的邊界案例，提升 Schema 驗證的穩定性。"
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
      "雖然現在轉戰後端，但它可是我資料科學之路的啟蒙導師！",
      "熟悉使用 Pandas 進行資料清洗，並曾於產學合作中整合 LLM API 生成報告。",
      "雖目前重心轉移，但仍是處理複雜數據分析與爬蟲腳本的首選工具。"
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
      "有了它，我就不用擔心「在我電腦上可以跑」的問題了。",
      "熟悉撰寫 Dockerfile 進行容器化，並使用 Docker Compose 進行本地多服務編排。",
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
      "雖然我心在後端，但偶爾還是得靠它來撐起門面啦。",
      "具備基礎的前端開發能力，能理解 Component 生命週期與 Hooks 運作。",
      "主要用於協助後端 API 的串接測試與簡單的後台介面搭建。"
    ]
  },
  {
    id: 'mysql',
    logo_path: '/skills/mysql.png',
    name: 'MySQL',
    category: 'DB',
    familiar: 'offline',
    statusMessage: [
      "這算是我剛踏入資料庫領域時的啟蒙老師吧！",
      "熟悉標準 SQL 語法與正規化設計流程，是接觸關聯式資料庫的入門磚。",
      "雖目前專案多轉向 PostgreSQL，但對 ACID 特性與索引優化的理解是共通的。"
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

// 之後擴充
// 3. 模擬的通知資料 (Mock Data)
export const myNotifications: NotificationItem[] = [
  {
    id: 1,
    avatar: "🚀", 
    text: "你的專案 'Social Resume' 已成功部署到 Production 環境。",
    time: "剛剛",
    isUnread: true, // 這則是未讀 -> 會讓鈴鐺顯示紅字 1
  },
  {
    id: 2,
    avatar: "👨‍💻",
    text: "GitHub Bot: 你今年已經累積了 500+ 次 Commits！",
    time: "2 小時前",
    isUnread: false, // 這則是已讀
  },
  {
    id: 3,
    avatar: "🎯",
    text: "React 技能熟練度已提升至 'Senior' 等級。",
    time: "1 天前",
    isUnread: false,
  }
];

// 4. 模擬的個人檔案資料
export const myProfile: ProfileItem = {
  name: "凱傑 楊",      //可刪          
  role: "Backend Engineer", //可刪       
  avatar: "myPhoto.png" // 暫時先用一張現有的圖片當頭像，之後再換成你自己的照片
};

// 3. 模擬資料
export const myPosts: Post[] = [
  {
    id: 1,
    name: "凱傑 楊",
    description: "這是一個使用 Union Type 設計的貼文系統。\n如果是連結，會顯示下方的卡片樣式；如果是字串，則直接顯示圖片。",
    likes: 42,
    imageOrLink: {
      id: 101,
      imagePath: "/images/hero-image.png", // 請確保 public 資料夾有圖
      url: "https://github.com/KJ-Wang",
      title: "KJ-Yang/social-resume-demo",

    }
  },
  {
    id: 2,
    name: "凱傑 楊",
    description: "Redis 是一個高效能的 Key-Value 資料庫，這是我整理的學習筆記。",
    likes: 108,
    // Case B: 這只是一個 string (純圖片路徑)
    imageOrLink: "/images/skills/redis.png" 
  }
];