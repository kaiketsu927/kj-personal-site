export interface SkillFriend{
    id : string,
    logo_path : string, // image path
    name : string,  
    familiar : string, // 模擬fb聊天室是否上線, 把他比喻成技能是否還熟悉的概念, online代表熟悉 半年可能代表半年前有碰過, offline代表曾經接觸但現在生疏
    category : 'Framework' | 'DB' | 'Language' | 'Tool',
    statusMessage : string[],
}

export const mySkills: SkillFriend[] = [
  {
    id: 'redis',
    logo_path: '🔴', // 之後換圖片路徑
    name: 'Redis',
    familiar: 'offline', // 曾經接觸但現在生疏
    category: 'DB',
    statusMessage: [
      "這是我在三年前接觸過的技能！",
      "當時使用到的項目主要是透過 Redis 實現高效率的快取以及去重複。"
    ]
  },
  {
    id: 'ts',
    logo_path: '📘',
    name: 'TypeScript',
    familiar: 'online', // 熟悉
    category: 'Language',
    statusMessage: [
      "我現在每天都在用 TypeScript！",
      "型別系統真的救了我很多次 bug。"
    ]
  },
];