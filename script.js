const additionalQuestions = []; 
// 電子商務及企業電子化概論 題庫內容
const questionDatabase = [
    {
      "id": "1-01",
      "type": "single",
      "question": "關於微網誌的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "微網誌是一種兼具交友及聊生活點滴或傳送相關訊息的網站，允許使用者及時更新簡短文字",
          "value": "A"
        },
        {
          "label": "推特（ Twitter ）被形容為「網際網路的簡訊服務」，網站的非註冊使用者可以閱讀公開的推文，而註冊使用者則可以通過 Twitter 網站、簡訊或者各種各樣的應用軟體來發布訊息",
          "value": "B"
        },
        {
          "label": "噗浪（ Plurk ）是個類似 Twitter 的「時間流」網站，每個發言不能超過 140 字，而所有的訊息都會展示在網站中間的那條「時間流」河道，這些河道上的訊息，相當開放，任何人都可以輕易看到其他噗友的留言",
          "value": "C"
        },
        {
          "label": "噗浪中有一種「 Karma 」值，會依照你發文的次數、上站次數與交友情形變大或變小，在 Plurk 網站中的各項進階功能都需要「 Karma 」數值到達一定程度才可開放修改，大家為了可以擁有更高「 Karma 」值，就可以將聊天當作在玩遊戲一樣有趣",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-02",
      "type": "single",
      "question": "關於雲端運算的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "雲端運算是一種技術，其基本元素包括「使用者與提供者」、「網際網路」、「隨選運算」、「IT 資訊、平台、應用系統提供」、以及「服務模式」",
          "value": "A"
        },
        {
          "label": "「基礎設施即服務」Infrastructure as a service（IaaS）指提供硬體資源給客戶，包括：運算、儲存、網路等資源，讓沒有能力採購與管理這些設備的使用者可以「用多付少」的方式來使用",
          "value": "B"
        },
        {
          "label": "由雲端服務提供商來負責開發與管理各種應用系統，再由使用者自己隨選公用計價的方式來租賃，例如 Google Mail 或 Salesforce.com 的 CRM，就是「軟體即服務」Software as a service（SaaS）",
          "value": "C"
        },
        {
          "label": "由 Yahoo、Amazon.com 等雲端供應商提供各種行銷、銷售與客服的功能，讓中小企業在其平台上任意組合功能自己「開店」，並收取佣金是「平台即服務」Platform as a service（PaaS）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-03",
      "type": "single",
      "question": "關於 TCP/IP 協定的組成，下列哪一項正確？",
      "options": [
        {
          "label": "TCP、IP、HUB、Repeater、Gateway、Router",
          "value": "A"
        },
        {
          "label": "TCP、IP、ASP、JSP、PHP、HTML、CSS",
          "value": "B"
        },
        {
          "label": "TCP、IP、FTP、SMTP、DNS、Telnet",
          "value": "C"
        },
        {
          "label": "TCP、IP、WWW、POP、UDP、Router",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-04",
      "type": "single",
      "question": "網路傳輸媒介包含下列哪些連結線路？",
      "options": [
        {
          "label": "雙絞線、光纖、同軸電纜、無線電波",
          "value": "A"
        },
        {
          "label": "電線、延長線",
          "value": "B"
        },
        {
          "label": "E-mail、RSS、P2P、Proxy",
          "value": "C"
        },
        {
          "label": "HUB、Repeater、Bridge、Gateway",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-05",
      "type": "single",
      "question": "因應 IP 位址不足，目前政府機關與企業都應該規劃轉換為下列哪 一種網際網路通訊協定（Internet Protocol version），以符合未來需求？",
      "options": [
        {
          "label": "IPv4",
          "value": "A"
        },
        {
          "label": "IPv5",
          "value": "B"
        },
        {
          "label": "IPv6",
          "value": "C"
        },
        {
          "label": "IPvA",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-06",
      "type": "single",
      "question": "下列哪一個不是常用的實體網路設備？",
      "options": [
        {
          "label": "瀏覽器（Browser）",
          "value": "A"
        },
        {
          "label": "集線器（Hub）",
          "value": "B"
        },
        {
          "label": "交換式集線器（Switch Hub）",
          "value": "C"
        },
        {
          "label": "閘道器（Gateway）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-07",
      "type": "multiple",
      "question": "DNS 網域名稱系統（Domain Name System）裡可以設定下列哪些紀 錄功能？(複選)",
      "options": [
        {
          "label": "A 紀錄",
          "value": "A"
        },
        {
          "label": "CNAME 紀錄",
          "value": "B"
        },
        {
          "label": "MX 紀錄",
          "value": "C"
        },
        {
          "label": "B 紀錄",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "1-08",
      "type": "single",
      "question": "在行動裝置上，經常利用到下列哪一種二維條碼進行掃描導引行銷？",
      "options": [
        {
          "label": "HTML Code",
          "value": "A"
        },
        {
          "label": "QR Code",
          "value": "B"
        },
        {
          "label": "CSS Code",
          "value": "C"
        },
        {
          "label": "JavaScript Code",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-09",
      "type": "multiple",
      "question": "電子郵件（E-mail）使用下列哪兩種收信的通訊協定？(複選)",
      "options": [
        {
          "label": "POP3",
          "value": "A"
        },
        {
          "label": "SMTP",
          "value": "B"
        },
        {
          "label": "Outlook",
          "value": "C"
        },
        {
          "label": "IMAP",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "1-10",
      "type": "single",
      "question": "網頁設計師製作好網頁之後，常使用下列哪種網路協定與服務，上傳資料到網站伺服器空間？",
      "options": [
        {
          "label": "BBS 電子佈告欄（Bulletin Board System）",
          "value": "A"
        },
        {
          "label": "IM 即時通訊（Instant Messaging）",
          "value": "B"
        },
        {
          "label": "VoIP 網路電話（Voice over Protocol）",
          "value": "C"
        },
        {
          "label": "FTP 檔案傳輸協定（File Transfer Protocol）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-11",
      "type": "single",
      "question": "若您進入一間新公司擔任資訊人員，想要知道公司網域名稱（Domain Name）的相關資訊，例如註冊者、域名到期日、註冊機構…等，可以使用域名機構提供的哪一種服務進行查詢？",
      "options": [
        {
          "label": "RSS",
          "value": "A"
        },
        {
          "label": "IPv4",
          "value": "B"
        },
        {
          "label": "IPv6",
          "value": "C"
        },
        {
          "label": "WHOIS",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-12",
      "type": "single",
      "question": "關於 Web 2.0 與 Web 3.0 世代的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "使用者可以積極參與內容的提供",
          "value": "A"
        },
        {
          "label": "網站內容由網站經營者提供，使用者只能下載、瀏覽與查詢",
          "value": "B"
        },
        {
          "label": "人工智慧技術的運用，自動分享整合各網頁資訊",
          "value": "C"
        },
        {
          "label": "部落格（Blog）、RSS（Really Simple Syndication）技術的運用",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-13",
      "type": "single",
      "question": "關於無線通訊技術的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "3G 時代開始有了智慧型手機的使用，無線通訊與網路多媒體等通訊結合，將圖像、音樂、網頁瀏覽等多項功能服務提升，可以收發多媒體簡訊",
          "value": "A"
        },
        {
          "label": "4G 可以看 FHD（Full High Definition）全高清影片，一般能達到解析度 1920 x 1080",
          "value": "B"
        },
        {
          "label": "5G 可以看 4K 影片，解析度達到 3840 x 2160",
          "value": "C"
        },
        {
          "label": "5G 的通訊理論速度可達每秒 10GB，比起 4G 通訊，5G 的速度能達到 4G 的 1000 倍",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-14",
      "type": "multiple",
      "question": "DoD 參考模型（Department of Defense Model）的四個分工層 次，下列哪些正確？(複選)",
      "options": [
        {
          "label": "實體層：主要工作是與硬體的溝通，例如將資料傳輸到實體 網路，或者將收到的資料往上層傳送",
          "value": "A"
        },
        {
          "label": "應用層：主要的功用是提供使用者應用程式介面，如  HTTP、FTP、SMTP 等通訊協定",
          "value": "B"
        },
        {
          "label": "網際層：又稱網際網路層，主要的功用是負責路徑選擇、主 機定址、位圵解析等工作，如 IP 位址的決定",
          "value": "C"
        },
        {
          "label": "傳輸層：主要的功能是負責資料連線時的流量控制、分段， 重組與偵測等工作，如 TCP、UDP  B",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "1-15",
      "type": "single",
      "question": "關於無線通訊 Wi-Fi、藍牙（Bluetooth）與 ZigBee 的比較，下列哪一項錯誤？",
      "options": [
        {
          "label": "發展順序為 Wi-Fi → 藍牙 → ZigBee",
          "value": "A"
        },
        {
          "label": "安全性為 Wi-Fi＞藍牙＞ZigBee",
          "value": "B"
        },
        {
          "label": "成本為 Wi-Fi＞藍牙＞ZigBee",
          "value": "C"
        },
        {
          "label": "Wi-Fi 作為一般無線網路的基礎，適合用於建構家庭無線網路、辦公室無線網路；藍牙則聚焦於電腦設備及週邊連接如私人穿戴、影音領域；ZigBee 的重點在於自動化設備、無線感應裝置、遠端搖控設備",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-16",
      "type": "single",
      "question": "關於網際網路的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "網路的價值或力量和網路上的用戶數成指數關係，被稱之為梅特卡夫法則，也就是網路用戶數愈多，網路的價值成長的速度就更快",
          "value": "A"
        },
        {
          "label": "吉爾德定律指出通訊網路系統的頻寛會以每 12 個月進步 3倍的速度成長，且消費者每 bit 的變動成本會逐漸趨向零",
          "value": "B"
        },
        {
          "label": "網際網路採用封包交換技術，只能將訊息分割成好幾個同樣大小的封包，每個封包皆有註記寄送端位址、接收端位址等相關資訊，可透過任何可用的通訊網路送達到同一個接收端，使得網路的運用變得非常有彈性",
          "value": "C"
        },
        {
          "label": "網際網路的世界其實就是由無以數計的伺服器和終端使用者的電腦設施所組成，形成一個龐大的主從式運算網路",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-17",
      "type": "single",
      "question": "關於 TCP/IP 通訊協定四層架構敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "由上而下為應用層 → 傳輸層 → 網路層 → 實體網路存取層",
          "value": "A"
        },
        {
          "label": "應用層負責應用程式間溝通的協定，如簡易電子郵件傳送（SMTP, Simple Mail Transfer Protocol）、檔案傳輸協定（FTP, File Transfer Protocol）、網路終端機模擬協定（TELNET）等",
          "value": "B"
        },
        {
          "label": "傳輸層提供應用層所需的通訊及封包服務，如傳輸控制協定 （TCP, Transmission Control Protocol）、使用者資料協 定（UDP, User Datagram Protocol）等，負責傳送資料， 並且確定資料已被送達並接收",
          "value": "C"
        },
        {
          "label": "實體網路存取層負責決定傳送位址及路線，讓每一塊資料封包，都能夠到達目的端主機（但不檢查是否被正確接收），如網際協定（IP, Internet Protocol）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-18",
      "type": "single",
      "question": "關於 5G 行動通訊技術標準，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "5G 的特色是高傳輸、低延遲、低耗源、高成本",
          "value": "A"
        },
        {
          "label": "5G 的頻段與頻率都較 4G 為高",
          "value": "B"
        },
        {
          "label": "5G 基地台有兩種架構，一種為大型天線基地台，一為低軌道非同步衛星",
          "value": "C"
        },
        {
          "label": "5G 是一種蜂巢行動通訊技術",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-19",
      "type": "single",
      "question": "關於 iBeacon 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "可以提供室內定位服務",
          "value": "A"
        },
        {
          "label": "傳輸距離較 NFC 為短",
          "value": "B"
        },
        {
          "label": "由 APPLE 公司所提出",
          "value": "C"
        },
        {
          "label": "以藍芽做為通訊協定",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-20",
      "type": "single",
      "question": "下列哪個是車上 e-tag 使用的感測技術？",
      "options": [
        {
          "label": "ZigBee",
          "value": "A"
        },
        {
          "label": "Bluetooth",
          "value": "B"
        },
        {
          "label": "被動式 RFID",
          "value": "C"
        },
        {
          "label": "主動式 RFID",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-21",
      "type": "single",
      "question": "可以根據使用者的位置提供附近商品建議的 APP，是屬於下列哪一種服務？",
      "options": [
        {
          "label": "適地性服務（Location-Based Service, LBS）",
          "value": "A"
        },
        {
          "label": "行動搜尋（Mobile Search）",
          "value": "B"
        },
        {
          "label": "行動商務（Mobile Commerce）",
          "value": "C"
        },
        {
          "label": "行動廣告（Mobile Advertising）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-22",
      "type": "single",
      "question": "HTML5 是 W3C 所制定的最新超文件標籤語言的標準，關於 HTML5的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "HTML5 包含 HTML、CSS 和 JavaScript 技術之組合",
          "value": "A"
        },
        {
          "label": "HTML5 目的為減少網頁瀏覽器使用外掛程式的網路應用服務的需求",
          "value": "B"
        },
        {
          "label": "HTML5 透過 Cookie 提供了不同的離線儲存功能",
          "value": "C"
        },
        {
          "label": "HTML5 新增＜video＞、＜audio＞、＜canvas＞標籤，以處理多媒體內容",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-23",
      "type": "multiple",
      "question": "關於於 Web Service 的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "Web Services 是一種軟體元件，透過 Web 通訊協定及資料格式的開放式標準來為其他的應用程式提供服務",
          "value": "A"
        },
        {
          "label": "WSDL 簡易物件存取協定，用以定義在 HTTP 協定上的存取遠端物件方法",
          "value": "B"
        },
        {
          "label": "UDDI 是統一描述搜尋與整合，是 Web Service 的註冊與搜尋機制",
          "value": "C"
        },
        {
          "label": "SOAP 是服務描述語言，描述 Web Service 所提供功能與定 義出介面、存取方式及位置",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "1-24",
      "type": "single",
      "question": "服務導向架構（SOA）已成為現今軟體發展的重要技術，關於 SOA的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "SOA 的組成元件是由許多分散在網路上的系統組合而來",
          "value": "A"
        },
        {
          "label": "SOA 以介面標準來組合系統，因此大幅降低系統變更的彈性度",
          "value": "B"
        },
        {
          "label": "SOA 著重標準與互動性，將可避免不同平台開發程式間相互整合的困擾",
          "value": "C"
        },
        {
          "label": "SOA 不受限於特定廠商的產品功能或是平台，能達到系統設計的開放性",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-25",
      "type": "multiple",
      "question": "常見物聯網的應用包含下列哪些？(複選)",
      "options": [
        {
          "label": "遠程監控",
          "value": "A"
        },
        {
          "label": "投資理財",
          "value": "B"
        },
        {
          "label": "智慧家電",
          "value": "C"
        },
        {
          "label": "穿戴裝置應用  B",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "1-26",
      "type": "single",
      "question": "下列 CSS 語法哪一項錯誤？",
      "options": [
        {
          "label": "h1 {color:blue}",
          "value": "A"
        },
        {
          "label": "$a {color:blue}",
          "value": "B"
        },
        {
          "label": ".temp {color:blue}",
          "value": "C"
        },
        {
          "label": "#button {color:blue}",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-27",
      "type": "single",
      "question": "下列哪一項不是合適的網域名稱？",
      "options": [
        {
          "label": ".org",
          "value": "A"
        },
        {
          "label": ".com",
          "value": "B"
        },
        {
          "label": ".gov",
          "value": "C"
        },
        {
          "label": ".corp",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-28",
      "type": "single",
      "question": "下列哪一項不是服務導向架構（SOA）的特性？",
      "options": [
        {
          "label": "無須設定",
          "value": "A"
        },
        {
          "label": "模組化元件",
          "value": "B"
        },
        {
          "label": "跨平台",
          "value": "C"
        },
        {
          "label": "系統整合容易",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-29",
      "type": "multiple",
      "question": "第五代行動通訊技術（5G）的基地台可使用下列哪幾種架構進行佈署？(複選)",
      "options": [
        {
          "label": "在人口稀少的郊區，適合佈署採用 GSM 通訊系統，進行無線電波傳送技術",
          "value": "A"
        },
        {
          "label": "在人口稠密的都市，可使用在建築物頂端架設大型天線，地面基地台之間以光纖串起網路的方式佈署",
          "value": "B"
        },
        {
          "label": "一律採用有線區域網路（LAN）的雙絞線方式進行部署",
          "value": "C"
        },
        {
          "label": "土地廣大但人口分散的地區，適合採用低軌道非同步衛星做基地台系統部署",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "D"
      ]
    },
    {
      "id": "1-30",
      "type": "single",
      "question": "關於物聯網技術的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "讓所有獨立的個體，像是汽車、家電等，人員只能在現場進 行近端控制",
          "value": "A"
        },
        {
          "label": "英語：Internet of Things，簡稱 IoT",
          "value": "B"
        },
        {
          "label": "使用者可以使用行動裝置或電腦設備遠端遙控或是接收數據進行分析",
          "value": "C"
        },
        {
          "label": "使用智慧型手機，在到家前先行開好冷氣、在外就能監視家中的攝影機、查詢公車所在位置與幾分鐘內到站，都是屬於物聯網技術的運用",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-31",
      "type": "single",
      "question": "關於網路拓樸（Topology）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "網路連線後的外觀",
          "value": "A"
        },
        {
          "label": "網路連線實體或邏輯排列形狀",
          "value": "B"
        },
        {
          "label": "常見的網路拓樸有三角形（Triangle）拓樸、正方形（Square）拓樸、球狀（Spherical）拓樸",
          "value": "C"
        },
        {
          "label": "網路的佈線方式",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-32",
      "type": "single",
      "question": "關於網路傳輸媒介的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "網路所使用的連線媒介可以分成「引導式媒介」與「非引導式媒介」兩種",
          "value": "A"
        },
        {
          "label": "雙絞線是最常見的網路傳輸線材",
          "value": "B"
        },
        {
          "label": "一般有線電視用來傳送訊號的線材是使用同軸電纜",
          "value": "C"
        },
        {
          "label": "「非引導式媒介」指的是使用實體線路就可傳送訊號或資料",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-33",
      "type": "single",
      "question": "關於 APP（行動應用程式）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "APP 就是 application 的縮寫",
          "value": "A"
        },
        {
          "label": "APP 通常是安裝在桌上型電腦或筆記型電腦裡的應用程式",
          "value": "B"
        },
        {
          "label": "iOS（iPhone）上安裝 APP，主要需由 App Store 進行安裝更新",
          "value": "C"
        },
        {
          "label": "Android 上安裝 APP，主要需由 Google Play 商店（舊稱 為 Android Market）進行安裝更新",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-34",
      "type": "single",
      "question": "關於 HTML（超文字標記語言）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "HTML5 是包含 HTML、JavaScript、CSS 在內的技術組合",
          "value": "A"
        },
        {
          "label": "HTML5 增加了 &lt;video&gt;、&lt;audio&gt;、&lt;canvas&gt;…等新標籤",
          "value": "B"
        },
        {
          "label": "HTML 是由 ITU（International Telecommunication Union）國際電信聯盟所制訂及更新的網頁編輯語言",
          "value": "C"
        },
        {
          "label": "在 &lt;body&gt; 和 &lt;/body&gt; 之間，輸入有關網頁畫面內容的語法文字",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-35",
      "type": "multiple",
      "question": "關於 CSS（Cascading Style Sheets）的敘述，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "中文常翻譯成階層式樣式表或串接樣式表",
          "value": "A"
        },
        {
          "label": "CSS 不能單獨使用，必須與 HTML 一起協同工作",
          "value": "B"
        },
        {
          "label": "CSS 不能用來美化網頁版面與控制網頁外觀格式",
          "value": "C"
        },
        {
          "label": "無法讓其他網頁套用相同的 CSS",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "1-36",
      "type": "multiple",
      "question": "如果依照通訊網路的架設規模與傳輸距離的遠近，可以區分為下列哪些網路型態？(複選)",
      "options": [
        {
          "label": "無線網路",
          "value": "A"
        },
        {
          "label": "區域網路",
          "value": "B"
        },
        {
          "label": "都會網路",
          "value": "C"
        },
        {
          "label": "廣域網路",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "1-37",
      "type": "single",
      "question": "下列哪一項網路拓樸的優點是，如果有一台電腦出現問題時，只會影響到該電腦，不致於癱瘓整個網路。由於此種網路是屬於中樞控制架構，在擴充及管理時都頗為方便？",
      "options": [
        {
          "label": "環狀",
          "value": "A"
        },
        {
          "label": "星狀",
          "value": "B"
        },
        {
          "label": "網狀",
          "value": "C"
        },
        {
          "label": "匯流排",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-38",
      "type": "multiple",
      "question": "交換式連線傳輸方式是利用硬體或軟體技術來建立連線，這類的連線必須與其他人共享頻寬，但是架設成本上較為便宜。所以交換式連線又可以分為下列哪幾種？(複選)",
      "options": [
        {
          "label": "線路交換",
          "value": "A"
        },
        {
          "label": "頻寬交換",
          "value": "B"
        },
        {
          "label": "訊息交換",
          "value": "C"
        },
        {
          "label": "分封交換",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "1-39",
      "type": "multiple",
      "question": "關於常用的網路設備，下列敘述哪些錯誤？(複選)",
      "options": [
        {
          "label": "橋接器（Bridge）通常使用於星狀網路，並具備多個插孔，可用來將網路上的裝置加以連接，增加網路節點的規模，但是所有的埠只能共享一個頻寬",
          "value": "A"
        },
        {
          "label": "路由器（Router）又稱為「路徑選擇器」，是屬於 OSI 模型網路層中運作的裝置",
          "value": "B"
        },
        {
          "label": "集線器（Hub）是在 OSI 模型的實體層與資料連接層運作，除了具備中繼器或集線器的功能外，也還有「訊框」（Frame）過濾的功能，也就是有過濾資料封包的能力",
          "value": "C"
        },
        {
          "label": "閘道器（Gateway）可連接使用不同通訊協定間的網路，讓彼此能互相傳送與接收",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "1-40",
      "type": "single",
      "question": "OSI 參考模型的七層架構中，關於功能說明的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "網路層的主要工作是 IP 定址與路徑選擇、途徑尋找、網路管理、資料的分割重組等",
          "value": "A"
        },
        {
          "label": "傳輸層用來定義資料傳輸的方法，提供流量控制、錯誤處理以及解決封包的傳送和接收",
          "value": "B"
        },
        {
          "label": "應用層的主要工作是協調網路資料交換格式、字元轉換碼、資料的壓縮與加密，例如電傳視訊的應用",
          "value": "C"
        },
        {
          "label": "會議層的主要工作是在資料傳輸前訂定連線建立的模式（全雙工或半雙工）、資料請求與回應方式、傳輸參數的設定等",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-41",
      "type": "single",
      "question": "下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "選擇網際網路服務提供者（ISP）要考慮的因素有：撥接費用、業者連線撥號線路的多寡、連線情況是否夠穩定、資料傳輸速率是否夠快、ISP 是否提供更多額外附加的服務項目 等",
          "value": "A"
        },
        {
          "label": "由於採用傳統撥接回公司的專線方式，不僅費用高，而且使用網際網路傳輸資料，也無法確保通訊安全。為了避免以上問題，在網際網路上利用 IP 技術，建立一個私有的安全網路連接方式，稱為「虛擬私有網路」（Virtual Private  Network, VPN）",
          "value": "B"
        },
        {
          "label": "網際網路服務提供者（Internet Service Provider, ISP）所提供的就是協助用戶連上網際網路的服務",
          "value": "C"
        },
        {
          "label": "Intranet 則是為企業上、下游各相關策略聯盟企業間整合所構成的網路，需要使用防火牆管理。目前多應用於電子型錄與電子資料交換",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-42",
      "type": "single",
      "question": "下列哪一項不是電子郵件常見的收信通訊協定？",
      "options": [
        {
          "label": "HTTP",
          "value": "A"
        },
        {
          "label": "IMAP",
          "value": "B"
        },
        {
          "label": "MAPI",
          "value": "C"
        },
        {
          "label": "SMTP",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-43",
      "type": "single",
      "question": "下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "網域名稱伺服器（Domain Name Server, DNS）是以一組英文縮寫來代表以數字為主的 IP 位址",
          "value": "A"
        },
        {
          "label": "網域名稱伺服器（Domain Name Server, DNS）是負責 IP 位址與網域名稱轉換工作的電腦",
          "value": "B"
        },
        {
          "label": "網域名稱伺服器（Domain Name Server, DNS）的組成是屬於階層式的樹狀結構",
          "value": "C"
        },
        {
          "label": "網域名稱伺服器（Domain Name Server, DNS）包含四個部分：主機名稱、機構名稱、機構類別、地區名稱",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-44",
      "type": "single",
      "question": "下列哪一項不是雲端運算服務的類型？",
      "options": [
        {
          "label": "SaaS",
          "value": "A"
        },
        {
          "label": "CaaS",
          "value": "B"
        },
        {
          "label": "IaaS",
          "value": "C"
        },
        {
          "label": "PaaS",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-45",
      "type": "single",
      "question": "隨著網路服務（Web Service）技術逐漸成熟，預期未來電子服務運作模式將會因為網際服務將大幅改變，讓每個企業組織與商業夥伴公司內的應用系統加以整合，達到真正共享及交換資訊的便利。下列哪一個標準不包括在網路服務（Web Service）的基礎中？",
      "options": [
        {
          "label": "W3C",
          "value": "A"
        },
        {
          "label": "WSDL",
          "value": "B"
        },
        {
          "label": "UDDI",
          "value": "C"
        },
        {
          "label": "SOAP",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-46",
      "type": "single",
      "question": "下列哪一項不是常見的網路拓樸型態？",
      "options": [
        {
          "label": "匯流排拓樸",
          "value": "A"
        },
        {
          "label": "環狀拓樸",
          "value": "B"
        },
        {
          "label": "星狀拓樸",
          "value": "C"
        },
        {
          "label": "三角拓樸",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-47",
      "type": "single",
      "question": "下列哪一項不是分封式交換（Packet Switching）傳輸的特色？",
      "options": [
        {
          "label": "當傳輸兩端建立連線後，便維持專用狀態，無法讓其他節點使用",
          "value": "A"
        },
        {
          "label": "結合電路交換與訊息交換的一種交換方式",
          "value": "B"
        },
        {
          "label": "利用「電腦儲存」與「前導傳送」（Store and Forward）的功能來傳送資料",
          "value": "C"
        },
        {
          "label": "資料以若干「封包」傳送，且每一封包具有標頭與標尾資訊",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-48",
      "type": "single",
      "question": "關於 802.11 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "802.11a 最大傳輸速率可達 54 Mbps，傳輸距離約 50 公尺",
          "value": "A"
        },
        {
          "label": "802.11b 最大傳輸速率達 11 Mbps，傳輸距離約 100 公尺",
          "value": "B"
        },
        {
          "label": "802.11g 最大傳輸速率達 54 Mbps，傳輸距離約 100 公尺",
          "value": "C"
        },
        {
          "label": "802.11n 為新一代的無線網路技術，傳輸速率達 54 Mbps",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-49",
      "type": "single",
      "question": "關於 P2P 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "一種將個人電腦模擬為伺服器的技術",
          "value": "A"
        },
        {
          "label": "Point to Point 或 Peer to Peer 的簡稱",
          "value": "B"
        },
        {
          "label": "Napster 與即時通訊軟體是 P2P 技術的應用",
          "value": "C"
        },
        {
          "label": "Blog 與 Wiki 是 P2P 應用",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-50",
      "type": "single",
      "question": "關於 Web2.0 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "Web2.0 與 web1.0 不同之處在於互動性",
          "value": "A"
        },
        {
          "label": "部落格、Wikipedia、Podcast 都是 Web2.0 應用",
          "value": "B"
        },
        {
          "label": "雲端運算服務是 Web2.0 的呈現",
          "value": "C"
        },
        {
          "label": "RSS 與 AJAX 是 web2.0 的核心技術",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-51",
      "type": "multiple",
      "question": "關於雲端技術的說明下列哪些正確？(複選)",
      "options": [
        {
          "label": "透過虛擬化、標準化與自動化方式，雲端架構有系統的整合軟硬體資源，透過網路提供服務",
          "value": "A"
        },
        {
          "label": "Amazon EC2 為 IaaS 的例子",
          "value": "B"
        },
        {
          "label": "Google App Engine 即是 PaaS 服務",
          "value": "C"
        },
        {
          "label": "伺服器租賃為 SaaS 所提供的服務",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "1-52",
      "type": "single",
      "question": "關於 SaaS 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "可減少軟體開發成本",
          "value": "A"
        },
        {
          "label": "Salesforce.com 為 SaaS 的應用",
          "value": "B"
        },
        {
          "label": "可依租賃者需求提供客製化軟體服務",
          "value": "C"
        },
        {
          "label": "程式開發、測式、部署、執行與維護在同一整合環境中進行",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "1-53",
      "type": "single",
      "question": "關於區域網路架構，下列哪一項錯誤？",
      "options": [
        {
          "label": "匯流排拓樸會透過個別纜線連接到一條主幹線上，一次只能有一台電腦傳送簡訊，而且只有目的電腦才會接收此訊息，優點是如果要在網路中加入或移除電腦裝置都很方便，比任何網路拓樸都使用比較少的纜線；缺點是維護不易，如果某段線路有問題，整個網路就無法使用",
          "value": "A"
        },
        {
          "label": "環狀拓樸在網路流量大時會有較好的表現，因為不管有多少裝置想要傳送資料，同樣都必須先獲得符記（Token）才可以進行資料傳送，所以也就不至於發生「塞車」的情況，優點是網路上的每台電腦都處於平等的地位，當網路上的任一台電腦或線路故障，其他電腦不會受到影響",
          "value": "B"
        },
        {
          "label": "星狀拓樸是每台電腦裝置都使用各自的線路連接至中央裝置，所以即使某個線路出了問題，也不至於影響到其他的線路，但成本很高，中心節點集線器故障時，則有可能癱瘓整個網路",
          "value": "C"
        },
        {
          "label": "網狀拓樸是所有主機間都有直接專屬的連接線相連，可靠度很高，但成本太高在區域網路上不可行",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-54",
      "type": "multiple",
      "question": "關於網路連線傳輸方式的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "「線路交換」（Circuit Switching）一旦建立兩端間的連線後，將維持專用的狀態，不會有資料壅塞的問題。費用也較貴，連線時間也較緩慢",
          "value": "A"
        },
        {
          "label": "「訊息交換」（Message Switching），利用訊息帶有目的端點的位址，過程中可以選擇不同傳輸路徑，因此線路使用率較高",
          "value": "B"
        },
        {
          "label": "「訊息交換」（Message Switching）缺點是當資料傳送到每一節點時，不會進行錯誤檢查，傳輸錯誤率較高，傳送速度也慢，即時性較低，重新傳送機率高，較不適用於大型網路",
          "value": "C"
        },
        {
          "label": "「分封交換」（Packet Switching）是一種結合電路交換與訊息交換優點的交換方式，可確保網路可靠性，偵測網路資訊流量，適時進行流量控制優點是節省傳送時間，可增加線路的使用率，缺點是由於封包傳送順序不一，需要花費封包重組的成本",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "1-55",
      "type": "single",
      "question": "關於常用網路設備的主要功能及對應到 OSI 模型方式之敘述，下列哪一項正確？",
      "options": [
        {
          "label": "橋接器（Bridge）主要的功能繼受用來將資料訊號再生的傳輸裝置，OSI 模型實體層中運作的裝置",
          "value": "A"
        },
        {
          "label": "路由器（Router）又稱「路徑選擇器」，是 OSI 模型網路層中運作的裝置。過濾網路上的資料封包，除了具備中繼器、集線器、橋接器功能外，最只要還具有「尋徑」（Routing）的功能",
          "value": "B"
        },
        {
          "label": "閘道器（Gateway）是在 OSI 模型的實體層與資料連結層運作，「訊框」（Frame）過濾的功能，也就是有過濾資料封包的能力",
          "value": "C"
        },
        {
          "label": "中繼器（Repeater）可連接使用不同通訊協定間的網路，讓彼此能互相傳送與接收。由於可以運作於 OSI 模型的七個階層，可以處理不同格式的資料封包，並進行通訊協定轉換、錯誤偵測、網路路徑控制與位址轉換等",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-56",
      "type": "single",
      "question": "無線滑鼠與筆記型電腦間的傳輸，都採用紅外線的方式。紅外線傳輸的特點，下列哪一項錯誤？",
      "options": [
        {
          "label": "傳輸速率每秒基本為 115KB",
          "value": "A"
        },
        {
          "label": "最大傳輸角度為 30 度",
          "value": "B"
        },
        {
          "label": "屬於點對點全雙工傳輸",
          "value": "C"
        },
        {
          "label": "最大傳輸距離為 1 公尺",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "1-57",
      "type": "single",
      "question": "關於通訊協定的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "TCP「傳輸控制協定」的資料傳送是以「位元組流」來進行傳送，資料的傳送是「單向性」，位於 OSI 模型的傳輸層，DoD 網路模型的「網路層」",
          "value": "A"
        },
        {
          "label": "TCP 在傳送資料前會先確定接收者是否存在，若存在才會開始進行資料傳送，當傳送過程中如果發生錯誤，會要求重新進行傳送。TCP 協定可經由控制資料流量、檢測，確保資料能夠準確傳送到目的地",
          "value": "B"
        },
        {
          "label": "IP「網際網路協定」是 TCP/IP 協定中的運作核心，存在 DoD 網路模型的「網路層」（Network Layer），也是構成網際網路的基礎，主要負責主機間網路封包的定址與路由，並將封包從來源處安全送到目的地",
          "value": "C"
        },
        {
          "label": "UDP「使用者資料協定」（User Datagram Protocol）是一種較簡單的通訊協定，是一種非連接型的傳輸協定，有一對多資料傳送的優點，適用於廣播式的通訊，但不會檢查資料是否正確無誤的送達到目的地",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "1-58",
      "type": "single",
      "question": "關於電子郵件的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "POP3 Mail 是傳統的電子郵件信箱，必須使用專用的郵件收發軟體，才可以收發郵件，收信時會將伺服器上的郵件下載至在使用者的電腦",
          "value": "A"
        },
        {
          "label": "Web Mail 採用 POP3 通訊協定，收信時下載郵件寄件人和標題，使用者打開信件時會把完整的郵件內容傳送進來",
          "value": "B"
        },
        {
          "label": "一般電子郵件寄信時採用 SMTP（Simple Mail Transfer Protocol）通訊協定來處理郵件",
          "value": "C"
        },
        {
          "label": "Web-Based 電子郵件信箱，郵件擺在遠端點電腦主機上集中管理，要閱讀信件一定要先上網，信件容量大小會有所限制，使用者必須定期手動方式刪除郵件、轉寄郵件來加以備份",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "1-59",
      "type": "multiple",
      "question": "關於資訊科技界的定律，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "「摩爾定律」是指每隔 18 個月，晶片的密度（也就等同運算能力），在價格不變的情況下，會呈現加倍的情況。也就是 IT 產品在極快的速度下變得「更快、更小、更便宜」，造成「電腦的普及運用」",
          "value": "A"
        },
        {
          "label": "「梅特卡夫定律」是一個關於網絡的價值和網絡技術的發展的定律，網路的效用性會與使用者數目（n）的平方成正比，也就是 IT 只有在使用者人數眾多的情況下才有價值",
          "value": "B"
        },
        {
          "label": "「吉爾德定律」是指每 10 年，資訊科技平台都會有一個典範轉移的大突破，且新一代的電腦平台所使用的科技，亦將有突破性、更好的效能，因此其儲存設備、網路、介面都不一樣，其效能、價格都勝過上一代 10 倍以上",
          "value": "C"
        },
        {
          "label": "「貝爾定律」是網路通訊系統的頻寬會以每 12 個月進步 3 倍的速度成長，而消費者每個 bit 的變動通訊成本會逐漸趨向零",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "1-60",
      "type": "multiple",
      "question": "針對 Web1.0 與 Web2.0 的特色比較，下列哪些正確？(複選)",
      "options": [
        {
          "label": "Web 1.0 主要是 B2B 與 B2C 的交易支援網路，網站經營模式與目的以營利為目的",
          "value": "A"
        },
        {
          "label": "Web2.0 是 P2P 分散式的管理架構，不論是部落格（Blog）、維基（Wiki）、社群網站（Social Network Site）都是由使用者主導來創造、協同合作、分享各種資訊與內容的一個分散式的網路現象，公司只提供一個平台",
          "value": "B"
        },
        {
          "label": "利用搜尋引擎找資料或上網看網路新聞都是屬於 Web 1.0 的應用",
          "value": "C"
        },
        {
          "label": "長尾理論是因為 Web2.0 的崛起，使得那些品項數量極大的冷門產品或利基產品，個別銷售量極小，但總量巨大，累積起來的總收益對企業產生很大的貢獻，在企業的營收統計分配圖上，構成一條又細又長的 L 型曲線",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "2-01",
      "type": "multiple",
      "question": "電子商務包含四個主要流（商流、物流、金流、資訊流），還有哪些次要流？(複選)",
      "options": [
        {
          "label": "設計流",
          "value": "A"
        },
        {
          "label": "創新流",
          "value": "B"
        },
        {
          "label": "服務流",
          "value": "C"
        },
        {
          "label": "人才流",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "2-02",
      "type": "single",
      "question": "電子商務之定義有不同的觀察角度，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "從通訊的角度，電子商務是利用電話線、電腦網路或其他媒介來進行資訊、產品、服務或付款的傳送",
          "value": "A"
        },
        {
          "label": "從電子技術的角度，電子商務是透過電子數位中間媒介，將數位的輸入轉換成輸出的處理過程",
          "value": "B"
        },
        {
          "label": "從上網者的角度，電子商務提供了網際網路上使用者線上服務、購買、銷售產品與資訊傳輸的能力，讓消費者有更多選擇",
          "value": "C"
        },
        {
          "label": "從企業流程的角度，電子商務是企業管理階層想要降低營運服務成本，及想要提高產品品質價值，且加速服務傳遞效率的工具",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-03",
      "type": "single",
      "question": "在電子商務的七流中，下列哪一項是指買賣雙方順利溝通以利交易完成，商品的所有權完成轉移，包括了銷售、商情蒐集、商業服務…等活動？",
      "options": [
        {
          "label": "商流",
          "value": "A"
        },
        {
          "label": "物流",
          "value": "B"
        },
        {
          "label": "資訊流",
          "value": "C"
        },
        {
          "label": "服務流",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-04",
      "type": "single",
      "question": "在網際網路的環境中，當參與網路的成員增加時，網路的價值會呈指數形態成長，此一概念被稱為下列哪一項？",
      "options": [
        {
          "label": "摩爾定律",
          "value": "A"
        },
        {
          "label": "80/20 法則",
          "value": "B"
        },
        {
          "label": "梅特卡夫定律",
          "value": "C"
        },
        {
          "label": "殺手級應用",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-05",
      "type": "single",
      "question": "在公司價值鏈中，企業基礎建設、人力資源管理、技術發展、採購是屬於下列哪一項活動？",
      "options": [
        {
          "label": "主要活動",
          "value": "A"
        },
        {
          "label": "支援活動",
          "value": "B"
        },
        {
          "label": "次要活動",
          "value": "C"
        },
        {
          "label": "售後活動",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-06",
      "type": "single",
      "question": "波特的五力分析中，要考量的因素有：規模經濟效果、產品差異化程度、進入產業所需資本密集程度、顧客移轉成本，是屬於下列哪一項分析？",
      "options": [
        {
          "label": "新廠商的威脅力量",
          "value": "A"
        },
        {
          "label": "替代品的威脅力量",
          "value": "B"
        },
        {
          "label": "現有廠商間競爭程度",
          "value": "C"
        },
        {
          "label": "買方議價力量",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-07",
      "type": "single",
      "question": "關於電子商務收益模式，下列哪一項是企業蒐集了關於消費者及其消費行為的寶貴資訊，並將此資訊販賣給那些需要得知顧客情報的企業，以使這些企業可以藉此進一步挖掘，顧客行為模式及其它有用的訊息來提供更好的商品與服務給顧客？",
      "options": [
        {
          "label": "合作收益模式",
          "value": "A"
        },
        {
          "label": "商情媒介模式",
          "value": "B"
        },
        {
          "label": "社群模式",
          "value": "C"
        },
        {
          "label": "訂閱收益模式",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-08",
      "type": "single",
      "question": "傳統商務（第一代電子商務 1990 年以前）與第二代電子商務（1990 年到現在）的比較，下列哪一項正確？",
      "options": [
        {
          "label": "第一代電子商務重視商務導向、著重市場、不完全市場、純虛擬平台策略、先佔優勢",
          "value": "A"
        },
        {
          "label": "第一代電子商務重視技術導向、著重獲利、完全市場、純虛擬平台策略、先佔優勢",
          "value": "B"
        },
        {
          "label": "第二代電子商務重視商務導向、著重市場、完全市場，存在品牌與網路效應、虛實合一策略、先佔優勢",
          "value": "C"
        },
        {
          "label": "第二代電子商務重視商務導向、著重獲利、不完全市場，存在品牌與網路效應、虛實合一策略、政策隨著環境變動         EBC-20  2023/6/2  D",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-09",
      "type": "single",
      "question": "B2B 電子商務的四個發展階段，下列順序哪一項正確？",
      "options": [
        {
          "label": "基礎的電子商務、電子資料交換、協同商務、電子交易市集",
          "value": "A"
        },
        {
          "label": "基礎的電子商務、電子交易市集、電子資料交換、協同商務",
          "value": "B"
        },
        {
          "label": "電子資料交換、電子交易市集、基礎的電子商務、協同商務",
          "value": "C"
        },
        {
          "label": "電子資料交換、基礎的電子商務、電子交易市集、協同商務",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-10",
      "type": "single",
      "question": "電子商務經營模式以交易對象分類為：B2C、B2B、C2C、C2B 四種。試問包含：入口網站、電子零售商、內容提供者、交易仲介商，是下列哪一個商業模式？",
      "options": [
        {
          "label": "B2B",
          "value": "A"
        },
        {
          "label": "B2C",
          "value": "B"
        },
        {
          "label": "C2B",
          "value": "C"
        },
        {
          "label": "C2C",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-11",
      "type": "multiple",
      "question": "行動商務的屬性，除了普及性之外，還有下列哪些？(複選)",
      "options": [
        {
          "label": "便利性",
          "value": "A"
        },
        {
          "label": "互動性",
          "value": "B"
        },
        {
          "label": "大眾化",
          "value": "C"
        },
        {
          "label": "區域化",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "2-12",
      "type": "multiple",
      "question": "智慧型代理人很適合擔任中間商代理人的角色。Resnick（1998）認為智慧代理人中介的電子商務，有益於減少搜尋成本及下列哪些問題？(複選)",
      "options": [
        {
          "label": "隱私權",
          "value": "A"
        },
        {
          "label": "完全的資訊",
          "value": "B"
        },
        {
          "label": "合約的風險",
          "value": "C"
        },
        {
          "label": "定價的有效率",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "2-13",
      "type": "single",
      "question": "關於網站效果評估的準則，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "接近度：指購物者或參訪者每次參訪之間相隔的平均天數",
          "value": "A"
        },
        {
          "label": "造訪人次：指整個市場上會到該網站消費的消費人數百分比",
          "value": "B"
        },
        {
          "label": "黏著性：係指參訪者平均停留在該網站的時間長度",
          "value": "C"
        },
        {
          "label": "網站忠誠度：指該網站一年內回來的參訪者百分比",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-14",
      "type": "single",
      "question": "關於透過行動商務網站的參訪者進而轉變為該企業消費者（顧客）的效果評估，下列敘述哪一項正確？",
      "options": [
        {
          "label": "放棄率：指購買一次後，一年內沒有再回來的比率",
          "value": "A"
        },
        {
          "label": "折損率：指將東西放入購物車，但沒有實際結帳的百分比",
          "value": "B"
        },
        {
          "label": "保持率：指持續購買東西的現有顧客百分比",
          "value": "C"
        },
        {
          "label": "轉型率：註冊成為會員的比率",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-15",
      "type": "single",
      "question": "網路行銷對企業帶來的效益分析，下列哪一項錯誤？",
      "options": [
        {
          "label": "市場得以擴展",
          "value": "A"
        },
        {
          "label": "不需透過中間商",
          "value": "B"
        },
        {
          "label": "能迅速反應市場需求",
          "value": "C"
        },
        {
          "label": "不受銷售人員影響",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-16",
      "type": "single",
      "question": "關於安索夫（Ansoff）的產品線策略以產品和市場作為兩大面向， 區別出四種產品／市場組合和對應的行銷策略，他提出產品市場成長矩陣，下列哪一項錯誤？",
      "options": [
        {
          "label": "市場滲透策略：在既存市場內，利用現有產品，藉由促銷或是提升服務品質等方式來說服既有顧客購買更多的企業產品",
          "value": "A"
        },
        {
          "label": "市場擴張策略：提供現有產品開拓新市場，在新市場上行銷，以達企業成長的目標",
          "value": "B"
        },
        {
          "label": "產品開發策略：在新市場上，推出新產品給新顧客，以達企業成長目標的決策。產品開發策略的焦點在於推出新一代或是相關的產品給新顧客，提高企業產品在消費者荷包中的占有率",
          "value": "C"
        },
        {
          "label": "多角化策略：提供新產品給新市場，將產品及市場擴張至新的產品與新的市場",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-17",
      "type": "single",
      "question": "消費決策過程主要包括五階段：(1) 資訊收集、(2) 需求認知、(3) 購買、(4) 購後評估、(5) 評估協商選擇。下列順序哪一項正確？",
      "options": [
        {
          "label": "(1)(2)(3)(4)(5)",
          "value": "A"
        },
        {
          "label": "(2)(1)(5)(3)(4)",
          "value": "B"
        },
        {
          "label": "(5)(4)(1)(2)(3)",
          "value": "C"
        },
        {
          "label": "(2)(5)(1)(3)(4)",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-18",
      "type": "single",
      "question": "關於行銷溝通組合任務目標及 AIDA 及購買準備階段，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "AIDA 模式：渴望 → 注意 → 興趣 → 行動",
          "value": "A"
        },
        {
          "label": "設定任務目標（企業角度）：告知 → 說服 → 提醒 → 試探",
          "value": "B"
        },
        {
          "label": "目標視聽眾所處的六個購買準備階段：知曉 → 了解 → 喜歡 → 偏好 → 堅信 → 購買",
          "value": "C"
        },
        {
          "label": "目標視聽眾溝通組合的反應：注意 → 興趣 → 渴望 → 行動",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-19",
      "type": "single",
      "question": "在網際網路中的廣告方法，與一般傳媒的方式並不相同，因為網路廣告較可以給予廣告主精準針對廣告客戶群與消費者量身訂作不同的廣告，所以常見的網路廣告的播放策略，下列哪一項錯誤？",
      "options": [
        {
          "label": "無目標式",
          "value": "A"
        },
        {
          "label": "編輯式",
          "value": "B"
        },
        {
          "label": "目標式",
          "value": "C"
        },
        {
          "label": "大眾化",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-20",
      "type": "single",
      "question": "如附圖所示，關於網路行銷的效果評估，下列哪一項正確？",
      "media": {
            "type": "table",
            "data": [
                ["A 選項.每千次曝光成本（CPM）：遞送一千次廣告曝光所需要的成本。例如某廣告主付出 80 萬元之成本，向某知名網站購買網路廣告，該網站之訪客率為 800 萬人次，則該網站廣告提供的 CPM 為 1000 元。"],
                ["B 選項.CPM = 廣告購買成本 ÷ 含有廣告頁的訪問次數"],
                ["C 選項.每次點選成本（CPC）收費模式，廣告商是依照廣告被點選的次數來計價。"],
                ["D 選項.一般來說，CPM 的費用比 CPC 的費用高得多，但是廣告主往往更傾向 CPM 這種付費方式，因為這種付款方式反應了消費者確實看到了廣告，並且進入廣告主的網站。"],
            ]
        },
      "options": [
        {
          "label": "選項 A",
          "value": "A"
        },
        {
          "label": "選項 B",
          "value": "B"
        },
        {
          "label": "選項 C",
          "value": "C"
        },
        {
          "label": "選項 D",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-21",
      "type": "single",
      "question": "關於電子商務架站的方式，下列哪一項是使用 ISP 公司的機房放置企業的網路設備，也使用 ISP 公司的網路系統來架設網站？",
      "options": [
        {
          "label": "自行架設",
          "value": "A"
        },
        {
          "label": "主機代管",
          "value": "B"
        },
        {
          "label": "虛擬主機",
          "value": "C"
        },
        {
          "label": "實體主機",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-22",
      "type": "single",
      "question": "關於電子付款的安全機制，下列哪一項不是SSL（安全通訊階層協定）應具備的安全功能？",
      "options": [
        {
          "label": "私密性",
          "value": "A"
        },
        {
          "label": "身分驗證",
          "value": "B"
        },
        {
          "label": "完整性",
          "value": "C"
        },
        {
          "label": "不可否認性",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-23",
      "type": "single",
      "question": "關於 C2C 電子商務模式，下列敘述哪一項正確？",
      "options": [
        {
          "label": "天貓國際為 C2C 交易平台",
          "value": "A"
        },
        {
          "label": "Paypal 為 C2C 中最普遍使用的付款方式",
          "value": "B"
        },
        {
          "label": "C2C 為所有交易模式中交易額最大的",
          "value": "C"
        },
        {
          "label": "C2C 中的逆拍賣式價格指的是出價最高者即贏得交易",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-24",
      "type": "single",
      "question": "請問電子商務的發展順序，下列哪一項正確？",
      "data": [
        ["A.電子資金轉換", "B.全球資訊網", "C.線上服務與知識分享", "D.電子資料交換與電子郵件", "E.工作流程與群組軟體"]
      ],
      "options": [
        {
          "label": "ABCDE",
          "value": "A"
        },
        {
          "label": "BECAD",
          "value": "B"
        },
        {
          "label": "ADCEB",
          "value": "C"
        },
        {
          "label": "CAEBD",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-25",
      "type": "single",
      "question": "近年募資網站快速興起，請問 flyingV、嘖嘖 zeczec 等募資網站是屬哪一種收益模式？",
      "options": [
        {
          "label": "廣告收益模式",
          "value": "A"
        },
        {
          "label": "手續費收益模式",
          "value": "B"
        },
        {
          "label": "合作收益模式",
          "value": "C"
        },
        {
          "label": "經紀模式",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-26",
      "type": "single",
      "question": "在 AIDA 模式中，各英文字母代表意義哪一項錯誤？",
      "options": [
        {
          "label": "第一個 A 指的是 Attention",
          "value": "A"
        },
        {
          "label": "第二個 I 指的是 Interest",
          "value": "B"
        },
        {
          "label": "第三個 D 指的是 Demand",
          "value": "C"
        },
        {
          "label": "第四個 A 指的是 Action",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-27",
      "type": "single",
      "question": "下列哪一項不是行動商務在 B2C 方面的應用？",
      "options": [
        {
          "label": "行動購物",
          "value": "A"
        },
        {
          "label": "行動目標廣告",
          "value": "B"
        },
        {
          "label": "行動銀行",
          "value": "C"
        },
        {
          "label": "行動應用軟體租賃服務業",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-28",
      "type": "single",
      "question": "某一廣告主支付 60 萬向某知名網站購買廣告，結果該網站之訪客到達人次達 200 萬，請問該網路廣告的 CPM 為多少？",
      "options": [
        {
          "label": "100",
          "value": "A"
        },
        {
          "label": "200",
          "value": "B"
        },
        {
          "label": "300",
          "value": "C"
        },
        {
          "label": "400",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-29",
      "type": "single",
      "question": "關於長尾理論的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "長尾效應是由安德森（Chris Anderson）在 2004 年所觀察到的現象",
          "value": "A"
        },
        {
          "label": "長尾理論重視 20% 熱門品的銷售額",
          "value": "B"
        },
        {
          "label": "長尾理論主要教導企業要重視小眾市場的利基產品",
          "value": "C"
        },
        {
          "label": "Apple store 販售各式各樣的 APP 軟體，即是長尾理論的應用",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-30",
      "type": "single",
      "question": "下列哪一項不是促成長尾效應（The Long Tail）的主要力量？",
      "options": [
        {
          "label": "生產工具大眾化",
          "value": "A"
        },
        {
          "label": "配銷工具大眾化",
          "value": "B"
        },
        {
          "label": "供給與需求有效連結",
          "value": "C"
        },
        {
          "label": "網際網路速度的成長",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-31",
      "type": "single",
      "question": "關於 SET 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "由 Visa 與 MasterCard 兩大信用卡公司與 IBM、 Microsoft、HP 等公司所提出",
          "value": "A"
        },
        {
          "label": "運用 RSA 公開金鑰來進行加密",
          "value": "B"
        },
        {
          "label": "運作架構包含付款銀行、收款銀行、持卡人、商家、認證中心",
          "value": "C"
        },
        {
          "label": "SET 安全機制在交易過程中，廠商可以解開消費者信用卡資訊",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-32",
      "type": "single",
      "question": "關於 SSL 加密技術的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "消費者與商家皆需安裝電子軟體",
          "value": "A"
        },
        {
          "label": "相較於 SET 而言，SSL 為較方便但較不安全之加密方式",
          "value": "B"
        },
        {
          "label": "若駭客沒有正確的金鑰，無法解釋傳輸資料的內容",
          "value": "C"
        },
        {
          "label": "SSL 是數位信封的應用典型",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-33",
      "type": "multiple",
      "question": "關於電子現金的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "電子現金可分為智慧卡型電子現金與網際網路型電子現金",
          "value": "A"
        },
        {
          "label": "電子現金具備匿名性特色",
          "value": "B"
        },
        {
          "label": "電子現金在使用時必須與銀行帳戶進行直接關聯",
          "value": "C"
        },
        {
          "label": "大部分電子現金具備離線驗證的功能  A",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "2-34",
      "type": "single",
      "question": "網路 ISP 業者將一台伺服器分割成很多台的虛擬主機，提供各客戶共同使用，此方式稱為下列哪一項？",
      "options": [
        {
          "label": "虛擬主機",
          "value": "A"
        },
        {
          "label": "主機代管",
          "value": "B"
        },
        {
          "label": "自行架設",
          "value": "C"
        },
        {
          "label": "委外",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-35",
      "type": "single",
      "question": "關於 XML 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "中文為延伸標記語言（eXtensible  Markup Language）",
          "value": "A"
        },
        {
          "label": "XML 只能定義文件的呈現方式而無法定義文件的資料結構",
          "value": "B"
        },
        {
          "label": "XML 由字元資料（Character Data）和標示（Markup）組合而成",
          "value": "C"
        },
        {
          "label": "XML 是一個樹狀結構的文件實體",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-36",
      "type": "single",
      "question": "Rayport&Kaorski（2003）提出顧客介面 7C 架構，下列哪一項不是 7C 架構之一？",
      "options": [
        {
          "label": "情境（Context）",
          "value": "A"
        },
        {
          "label": "社群（Community）",
          "value": "B"
        },
        {
          "label": "連結（Connection）",
          "value": "C"
        },
        {
          "label": "顧客（Customer）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-37",
      "type": "multiple",
      "question": "下列哪些是網路上主要的攻擊方式？(複選)",
      "options": [
        {
          "label": "病毒",
          "value": "A"
        },
        {
          "label": "阻斷服務",
          "value": "B"
        },
        {
          "label": "偽裝",
          "value": "C"
        },
        {
          "label": "否認",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-38",
      "type": "single",
      "question": "關於資訊安全的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "社交工程指的是駭客利用人類的天性來吸引使用者登入惡意網站",
          "value": "A"
        },
        {
          "label": "PKI 的設計與公開金鑰的使用相關",
          "value": "B"
        },
        {
          "label": "不可否認性指的是防止資料洩露",
          "value": "C"
        },
        {
          "label": "對稱式加密即是傳送端與接收端都使用相對的金鑰",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-39",
      "type": "single",
      "question": "關於防火牆的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "屏障式路由器為代理者型的防火牆",
          "value": "A"
        },
        {
          "label": "防火牆能調整網路流量",
          "value": "B"
        },
        {
          "label": "防火牆能過濾系統安全政策所禁止的服務",
          "value": "C"
        },
        {
          "label": "代理者型防火牆為一種應用閘道",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-40",
      "type": "multiple",
      "question": "關於數位簽章的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "以 PKI 機制為加密基礎",
          "value": "A"
        },
        {
          "label": "用於做為傳送者的身份認證",
          "value": "B"
        },
        {
          "label": "應用對稱式加密技術",
          "value": "C"
        },
        {
          "label": "主要用來保護資料傳遞的隱密性與不可否認性",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "2-41",
      "type": "multiple",
      "question": "下列哪些為資訊安全所要達到的目標？(複選)",
      "options": [
        {
          "label": "隱密性",
          "value": "A"
        },
        {
          "label": "完整性",
          "value": "B"
        },
        {
          "label": "不可否認性",
          "value": "C"
        },
        {
          "label": "確認性",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "2-42",
      "type": "single",
      "question": "利用一群在網路上受到控制的電腦轉送垃圾郵件與病毒方式，來攻擊網路上其他電腦，此種攻擊方式稱為下列哪一項？",
      "options": [
        {
          "label": "阻斷服務",
          "value": "A"
        },
        {
          "label": "殭屍網路",
          "value": "B"
        },
        {
          "label": "資料竄改",
          "value": "C"
        },
        {
          "label": "偽裝",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-43",
      "type": "single",
      "question": "關於 Mason（1986）提出的 PAPA 倫理議題，不包含下列哪一項？",
      "options": [
        {
          "label": "隱私權（Privacy）",
          "value": "A"
        },
        {
          "label": "正確權（Accuracy）",
          "value": "B"
        },
        {
          "label": "財產權（Property）",
          "value": "C"
        },
        {
          "label": "適切權（Appropriate）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-44",
      "type": "single",
      "question": "下列哪一項不是專利權的種類？",
      "options": [
        {
          "label": "發明",
          "value": "A"
        },
        {
          "label": "新型",
          "value": "B"
        },
        {
          "label": "新式樣",
          "value": "C"
        },
        {
          "label": "新創造",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-45",
      "type": "single",
      "question": "在網路上進行人肉搜索、寄廣告給未續約的過去會員、或是將信用卡資料賣給廣告公司，上述行為都違反下列哪一項法律？",
      "options": [
        {
          "label": "著作權",
          "value": "A"
        },
        {
          "label": "個人資料保護法",
          "value": "B"
        },
        {
          "label": "智慧財產權",
          "value": "C"
        },
        {
          "label": "營業秘密",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-46",
      "type": "single",
      "question": "電子商務網站使用告知後同意來讓消費者選擇個人資料是否被搜集，此種機制是用來保護消費者的哪一項權利？",
      "options": [
        {
          "label": "隱私權",
          "value": "A"
        },
        {
          "label": "正確權",
          "value": "B"
        },
        {
          "label": "財產權",
          "value": "C"
        },
        {
          "label": "使用權",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-47",
      "type": "multiple",
      "question": "關於著作權的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "著作財產權包括公開發表權、姓名表示權及禁止他人以變更著成方式傷害著作人名譽",
          "value": "A"
        },
        {
          "label": "著作人格權包括重製權、公開口述權、公開播送權、公開上映權等權利",
          "value": "B"
        },
        {
          "label": "演算法、數學方法、技術等都不在著作權的保護範圍",
          "value": "C"
        },
        {
          "label": "著作權的保護期為作者有生之年及死亡後 50 年",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "2-48",
      "type": "single",
      "question": "倫理是一個社會規範，用來判斷個人行為的合宜性。在倫理法則中，指人應具有同理心，己所不欲勿施於人，是屬於下列哪一項準則？",
      "options": [
        {
          "label": "黃金法則",
          "value": "A"
        },
        {
          "label": "Kant 普遍性理論",
          "value": "B"
        },
        {
          "label": "Descartes 改變原則",
          "value": "C"
        },
        {
          "label": "功利主義原則",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-49",
      "type": "single",
      "question": "下列哪一個不是數位化網路經濟體系下的新經濟法則？",
      "options": [
        {
          "label": "正回饋法則",
          "value": "A"
        },
        {
          "label": "邊際生產成本趨近於零",
          "value": "B"
        },
        {
          "label": "免費經濟學",
          "value": "C"
        },
        {
          "label": "報酬率遞減法則",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-50",
      "type": "multiple",
      "question": "在電子商務的出現後，實際上中間商被大量取代的去中間化並沒有 出現，除了少數的中間商消失之外，傳統中間商仍然大都屹立不 搖，其主要原因為下列哪些？(複選)",
      "options": [
        {
          "label": "消費者偏好在一個地點上，能同時有許多品牌來選擇與比 較，同時也希望能達到「一站購足」所有相關產品的方便",
          "value": "A"
        },
        {
          "label": "中間商可替顧客先篩選品質、聲譽好的產品、負責賠償損 失，保障消費者權益，降低消費者的風險，提供實體的運送 安裝、維修的方便服務",
          "value": "B"
        },
        {
          "label": "製造商有原來合作成功愉快的通路夥伴，如果採取直銷，必 定會傷害到原來穩定獲利的通路模式與夥伴",
          "value": "C"
        },
        {
          "label": "企業在產業價值鏈有其定位，不見得想增胖自己的組織規 模，而甘冒「凡事想做，凡事做不好」的風險",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-51",
      "type": "single",
      "question": "關於網路外部性的效果，下列哪一項錯誤？",
      "options": [
        {
          "label": "Yahoo 奇摩拍賣網站上的買方及賣方人數愈多，選擇的機會愈多",
          "value": "A"
        },
        {
          "label": "iPhone 上的 App Store 上的應用程式愈多，使用 iPhone 的價值也會增加",
          "value": "B"
        },
        {
          "label": "搜尋引擎是上網、利用率及使用人口排名次高的網路使用主要工具，所以愈來愈多業者採用搜尋引擎行銷",
          "value": "C"
        },
        {
          "label": "當多人都使用 3G 上網後，導致 3G 上網速度變慢",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-52",
      "type": "single",
      "question": "TVBS 的網路新聞直播是屬於下列哪一項角色？",
      "options": [
        {
          "label": "線上仲介商（Online Broker）",
          "value": "A"
        },
        {
          "label": "線上零售商者（Online Retailer）",
          "value": "B"
        },
        {
          "label": "線上社群提供者（Online Community Provider）",
          "value": "C"
        },
        {
          "label": "線上內容提供者（Internet Content Provider）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-53",
      "type": "single",
      "question": "阿華剛從學校畢業，要開始找工作，他到網路上的 104 人力銀行看到自己想從事工作的職缺，請問 104 人力銀行為哪種電子商務的類型？",
      "options": [
        {
          "label": "線上仲介商（Online Broker）",
          "value": "A"
        },
        {
          "label": "線上零售商（Online Retailer）",
          "value": "B"
        },
        {
          "label": "線上社群提供者（Online Community Provider）",
          "value": "C"
        },
        {
          "label": "線上內容提供者（Internet Content Provider）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-54",
      "type": "single",
      "question": "小明到博客來網路書店買書，博客來網路書店是屬於電子商務的哪一種經營模式？",
      "options": [
        {
          "label": "線上仲介商（Online Broker）",
          "value": "A"
        },
        {
          "label": "線上零售商（Online Retailer）",
          "value": "B"
        },
        {
          "label": "線上社群提供者（Online Community Provider）",
          "value": "C"
        },
        {
          "label": "線上內容提供者（Internet Content Provider）",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-55",
      "type": "single",
      "question": "廣告商在網頁上提供有價值的內容或小遊戲軟體，讓消費者有動機給親友，並提供方便傳送給親友的自動化按鈕，讓消費者方便傳遞，這樣的行銷方式稱為下列哪一項？",
      "options": [
        {
          "label": "病毒式行銷",
          "value": "A"
        },
        {
          "label": "聯盟式行銷",
          "value": "B"
        },
        {
          "label": "搜尋引擎行銷",
          "value": "C"
        },
        {
          "label": "社群行銷",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-56",
      "type": "single",
      "question": "依波特五力分析來看，電子商務面臨的五大競爭力，下列哪一項錯誤？",
      "options": [
        {
          "label": "電子商務的潛在進入者無所不在",
          "value": "A"
        },
        {
          "label": "以買方主導的 B2B 市集，賣方的議價能力提升",
          "value": "B"
        },
        {
          "label": "Internet 讓買方降低搜尋成本、比價成本，因此買方的議價能力提升",
          "value": "C"
        },
        {
          "label": "產業內的競爭更激烈，競爭同時合作",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-57",
      "type": "single",
      "question": "消費者利用手持設備在線上搜尋，下載行動網頁的交易資訊、折扣券、QR Code 等，並即時在實體商店採購，付款或掃描 QR Code，是屬於下列哪一項商務模式？",
      "options": [
        {
          "label": "B2B",
          "value": "A"
        },
        {
          "label": "C2C",
          "value": "B"
        },
        {
          "label": "O2O",
          "value": "C"
        },
        {
          "label": "C2B",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-58",
      "type": "single",
      "question": "線上口碑行銷是利用消費者貢獻的 4R 通過社群網路滾雪球般的傳播，下列哪一個不是 4R 的內容？",
      "options": [
        {
          "label": "產品評論（Review）",
          "value": "A"
        },
        {
          "label": "推薦（Recommend）",
          "value": "B"
        },
        {
          "label": "回應（React）",
          "value": "C"
        },
        {
          "label": "轉介（Referral）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-59",
      "type": "single",
      "question": "關於社群網路服務行銷的 5C ，下列哪一項正確？",
      "options": [
        {
          "label": "Contents、Convenient、Communication、Connection、Commerce",
          "value": "A"
        },
        {
          "label": "Contents、Community、Communication、Connection、Customization",
          "value": "B"
        },
        {
          "label": "Contents、Community、Communication、Confidentiality、Commerce",
          "value": "C"
        },
        {
          "label": "Contents、Community、Communication、Connection、Commerce",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-60",
      "type": "multiple",
      "question": "關於 SEO 搜尋引擎最佳化（Search Engine Optimization）的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "透過 Google AdWords 系統購買",
          "value": "A"
        },
        {
          "label": "排在搜尋引擎搜尋結果前三頁較為有效",
          "value": "B"
        },
        {
          "label": "中文與英文皆可成為搜尋關鍵字",
          "value": "C"
        },
        {
          "label": "是一種提升網站在搜尋引擎自然排名的行銷技巧",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-61",
      "type": "single",
      "question": "美國航空公司與西南航空公司會詢問消費者，當某些機會有降價折扣時，是否願意被通知，這種讓消費自行決定是否接受 E-Mail 廣告的行銷方式，是屬於哪一項行銷手法？",
      "options": [
        {
          "label": "一對一行銷",
          "value": "A"
        },
        {
          "label": "故事行銷",
          "value": "B"
        },
        {
          "label": "病毒式行銷",
          "value": "C"
        },
        {
          "label": "許可行銷",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-62",
      "type": "single",
      "question": "關於數位簽章與數位信封的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "數位簽章利用非對稱式加密法的機制來保護資料傳遞的隱密性與不可否認性的一種通訊安全機制",
          "value": "A"
        },
        {
          "label": "數位簽章是指傳送者將文件經特別碎映函式運算後產生一個訊息摘要，再利用傳送方的 Private Key 對此摘要加密",
          "value": "B"
        },
        {
          "label": "數位信封利用速度較快，較不安全的對稱式加密法的秘密金鑰來對大量的文章加密，之後利用較安全的非對稱式加密法來對秘密金鑰加密",
          "value": "C"
        },
        {
          "label": "SET 為數位信封的典型應用",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-63",
      "type": "single",
      "question": "關於無線加密的加密方式，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "WEP 使用相同的 key 來進行加解密，也沒有提供密鑰定期更換或動態變更的功能，很容易被駭客所破解",
          "value": "A"
        },
        {
          "label": "WPA 不使用單一的金鑰，而是利用「臨時金鑰完整性協定」（TKIP）來動態地改變 key，駭客較難破解",
          "value": "B"
        },
        {
          "label": "WPA 個人版利用驗證伺服器連線時製造與傳送不同的公鑰 / 私鑰給每個用戶，如此可以提升每個用戶認證的安全",
          "value": "C"
        },
        {
          "label": "WPA2 與 WPA 主要差別是採用更安全的加密機制，為目前最難破解、最安全的無線加密技術  A",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-64",
      "type": "single",
      "question": "關於 O2O（Online To Offline）商務模式敘述，下列哪一項正確？",
      "options": [
        {
          "label": "利用網路線上行銷宣傳帶動線下實體店面消費",
          "value": "A"
        },
        {
          "label": "跟行動支付與網路行銷沒有任何關係",
          "value": "B"
        },
        {
          "label": "是一種消費者對消費者的商業交易模式",
          "value": "C"
        },
        {
          "label": "是一種企業對企業的商業交易模式",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-65",
      "type": "single",
      "question": "病毒式行銷首先必須創造出具有感染力的內容，此有感染力的內容會被稱為下列哪一項？",
      "options": [
        {
          "label": "病原體",
          "value": "A"
        },
        {
          "label": "活體",
          "value": "B"
        },
        {
          "label": "載體",
          "value": "C"
        },
        {
          "label": "運輸體",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-66",
      "type": "single",
      "question": "目前一般電子商務網站上都在本身的隱私權政策上宣示與執行「公平資訊慣例」（FIP）的原則，FIP 原則包含下列哪些？1.告知原則 2.選擇原則 3.存取原則 4.安全原則 5.強化原則",
      "options": [
        {
          "label": "1234",
          "value": "A"
        },
        {
          "label": "2345",
          "value": "B"
        },
        {
          "label": "1245",
          "value": "C"
        },
        {
          "label": "12345",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-67",
      "type": "single",
      "question": "企業內部社群網路可能產生下列哪些倫理與安全風險？1.安全上的風險、2.保密上的風險、3.法律上的風險、4.攻擊語言的風險、5.資訊控管上的風險、6.顛覆傳統組織指揮體系的風險、7.MIS 抗拒的風險",
      "options": [
        {
          "label": "123457",
          "value": "A"
        },
        {
          "label": "23567",
          "value": "B"
        },
        {
          "label": "234567",
          "value": "C"
        },
        {
          "label": "1234567",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-68",
      "type": "single",
      "question": "SWOT 分析指的是下列哪四個要點？",
      "options": [
        {
          "label": "優勢（Strengths）、劣勢（Weaknesses）、機會（Opportunities）、威脅（Threats）",
          "value": "A"
        },
        {
          "label": "學生（Student）、贏家（Winner）、選項（Options）、教師（Teacher）",
          "value": "B"
        },
        {
          "label": "制止（Stop）、視窗（Windows）、過度（Over）、台灣（Taiwan）",
          "value": "C"
        },
        {
          "label": "系統（System）、網站（Website）、組織（Organization）、趨勢（Trend）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-69",
      "type": "multiple",
      "question": "SEM 搜尋引擎行銷（Search Engine Marketing）裡又可分成下列哪兩種行銷方式？(複選)",
      "options": [
        {
          "label": "VM 病毒式行銷（Viral Marketing）",
          "value": "A"
        },
        {
          "label": "SEO 搜尋引擎最佳化（Search Engine Optimization）",
          "value": "B"
        },
        {
          "label": "PPC 關鍵字搜尋點擊廣告（Pay Per Click）",
          "value": "C"
        },
        {
          "label": "SNM 社群行銷（Social Network Marketing）",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C"
      ]
    },
    {
      "id": "2-70",
      "type": "single",
      "question": "我們在使用瀏覽器（Browser）觀看一般網頁時，網址列是顯示 HTTP 超文字傳輸協定（HyperText Transfer Protocol），但當我們在進入到購物車網頁或是會員系統網頁時，瀏覽器網址列會顯示 HTTPS 超文字傳輸安全協定（Hypertext Transfer Protocol Secure）以保護傳輸資料的安全，請問這樣的安全機制，是因為有在用戶端與伺服器端進行了哪一種加解密的程序機制呢？",
      "options": [
        {
          "label": "電子現金",
          "value": "A"
        },
        {
          "label": "SET 安全電子交易協定（Secure Electronic Transaction Protoco）",
          "value": "B"
        },
        {
          "label": "SSL 安全通訊階層協定（Secure Sockets Layer Protocol）",
          "value": "C"
        },
        {
          "label": "電子錢包",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-71",
      "type": "multiple",
      "question": "下列哪些是雲端運算（Cloud Computing）的服務模式？(複選)",
      "options": [
        {
          "label": "提供應用系統 SaaS（Software as a Service）",
          "value": "A"
        },
        {
          "label": "提供電子數據 EaaS（Electronic as a Service）",
          "value": "B"
        },
        {
          "label": "提供開發平台 PaaS（Platform as a Service）",
          "value": "C"
        },
        {
          "label": "提供基礎設施 IaaS（Infrastructure as a Service）",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "2-72",
      "type": "multiple",
      "question": "關於電子商務的特性，下列敘述哪些正確？(複選)",
      "options": [
        {
          "label": "無所不在性",
          "value": "A"
        },
        {
          "label": "創新性的商業機會與價值",
          "value": "B"
        },
        {
          "label": "全球性",
          "value": "C"
        },
        {
          "label": "絕對安全性",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "2-73",
      "type": "single",
      "question": "企業與其上下游協力廠商之間的資訊整合作業屬電子商務的哪一項模式？",
      "options": [
        {
          "label": "C2C（Customer to Customer）",
          "value": "A"
        },
        {
          "label": "B2C（Business to Customer）",
          "value": "B"
        },
        {
          "label": "B2B（Business to Business）",
          "value": "C"
        },
        {
          "label": "C2B（Customer to Business）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-74",
      "type": "single",
      "question": "「網站藉由銷售商品、資訊或服務給消費者而從中賺取價差」此為下列哪一項收益模式？",
      "options": [
        {
          "label": "訂閱收益模式",
          "value": "A"
        },
        {
          "label": "手續費收益模式",
          "value": "B"
        },
        {
          "label": "廣告收益模式",
          "value": "C"
        },
        {
          "label": "銷售收益模式",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-75",
      "type": "single",
      "question": "行銷 4P 策略，意指下列哪四種敘述？",
      "options": [
        {
          "label": "產品（Product）、價格（Price）、通路（Place）、促銷（Promotion）",
          "value": "A"
        },
        {
          "label": "產品（Product）、銷售時點情報系統（Point of sale）、市場定位（Positioning）、可攜式文件（Portable  Document）",
          "value": "B"
        },
        {
          "label": "價格（Price）、通路（Place）、促銷（Promotion）、市場定位（Position）",
          "value": "C"
        },
        {
          "label": "價格（Price）、通路（Place）、促銷（Promotion）、可攜式文件（Portable Document）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-76",
      "type": "single",
      "question": "行銷 4P 相對應的 4C 理論，指的是下列哪一項 4C？",
      "options": [
        {
          "label": "客戶價值（Customer Value）、客戶服務（Customer  Service）、用戶端（Client)、現金（Cash）",
          "value": "A"
        },
        {
          "label": "成本（Cost）、現金（Cash）、客制（Customization）、便利（Convenience）",
          "value": "B"
        },
        {
          "label": "顧客（Customer）、成本（Cost）、便利（Convenience）、溝通（Communication）",
          "value": "C"
        },
        {
          "label": "溝通（Communication）、客戶服務（Customer  Service）、便利（Convenience）、課程（Course）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-77",
      "type": "single",
      "question": "Kalakota 認為電子商務發展過程可分為五個階段，下列哪一項是正確的排序？",
      "options": [
        {
          "label": "電子資料交換與郵件服務 → 線上服務與知識分享 → 工作流程系統與群組軟體 → 電子資金交換 → 網際網路與全球資訊網",
          "value": "A"
        },
        {
          "label": "電子資料交換與郵件服務 → 電子資金交換 → 線上服務與知識分享 → 工作流程系統與群組軟體 → 網際網路與全球資訊網",
          "value": "B"
        },
        {
          "label": "電子資金交換 → 電子資料交換與郵件服務 → 線上服務與知識分享 → 工作流程系統與群組軟體 → 網際網路與全球資訊網",
          "value": "C"
        },
        {
          "label": "電子資金交換 → 電子資料交換與郵件服務 → 網際網路與全球資訊網 → 工作流程系統與群組軟體 → 線上服務與知識分享",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-78",
      "type": "single",
      "question": "關於網路廣告特性的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "時效較低",
          "value": "A"
        },
        {
          "label": "高互動性",
          "value": "B"
        },
        {
          "label": "費用較低",
          "value": "C"
        },
        {
          "label": "成本效益佳",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-79",
      "type": "single",
      "question": "關於網路廣告類型的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "點選超連結後彈出插播式（Interstitial）廣告",
          "value": "A"
        },
        {
          "label": "放置在網頁裡的橫福（Banner）廣告",
          "value": "B"
        },
        {
          "label": "傳送 E-mail 給消費者的直接 E-mail 行銷（Direct E- mail Marketing）",
          "value": "C"
        },
        {
          "label": "列印紙本到街頭發送文宣（Propaganda）廣告",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-80",
      "type": "single",
      "question": "電子折扣卷、電子報的發送，若能改為取得客戶同意再進行傳送，這樣的模式，是屬於下列哪一種行銷方式？",
      "options": [
        {
          "label": "病毒式行銷（Viral Marketing）",
          "value": "A"
        },
        {
          "label": "置入性行銷（Placement Marketing）",
          "value": "B"
        },
        {
          "label": "搜尋引擎行銷（Search Engine Marketing）",
          "value": "C"
        },
        {
          "label": "許可行銷（Permission Marketing）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-81",
      "type": "single",
      "question": "大雄決定要買一台 PS4 給兒子小叮噹，為了可用較優惠的價格買到，於是至知名拍賣網與其他消費者競標，其唯一最低出價者得標，請問此概念類似下列哪一種拍賣模式？",
      "options": [
        {
          "label": "義式拍賣",
          "value": "A"
        },
        {
          "label": "英國式拍賣",
          "value": "B"
        },
        {
          "label": "美式拍賣",
          "value": "C"
        },
        {
          "label": "荷蘭式拍賣",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-82",
      "type": "single",
      "question": "行銷裡的 STP 概念，指的是下列哪一項內容？",
      "options": [
        {
          "label": "市場區隔（Segmentation）、目標市場選擇（Targeting）、促銷策略（Promotion）",
          "value": "A"
        },
        {
          "label": "客戶服務（Service）、教育（Teach）、促銷策略（Promotion）",
          "value": "B"
        },
        {
          "label": "研究（Study）、訓練（Training）、銷售時點情報系統（Point of sale）",
          "value": "C"
        },
        {
          "label": "市場區隔（Segmentation）、目標市場選擇（Targeting）、市場定位（Positioning）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-83",
      "type": "single",
      "question": "消費者決策過程包括五個階段，其中第二個階段是下列哪一項？",
      "options": [
        {
          "label": "方案評估",
          "value": "A"
        },
        {
          "label": "需求認知",
          "value": "B"
        },
        {
          "label": "購買決策",
          "value": "C"
        },
        {
          "label": "資訊收集",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-84",
      "type": "single",
      "question": "若某廣告主付出 80 萬元之成本，向某知名網站購買網路廣告，該網站之訪客率為 100 萬人次，該網站廣告提供的千人印象成本，下列哪一項正確？",
      "options": [
        {
          "label": "800 元",
          "value": "A"
        },
        {
          "label": "200 元",
          "value": "B"
        },
        {
          "label": "100 元",
          "value": "C"
        },
        {
          "label": "400 元",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-85",
      "type": "single",
      "question": "開發電子商務網站時，若撰寫的程式語法需要跟伺服器與資料庫溝通存取，需要用哪些動態網頁程式語言撰寫為宜？",
      "options": [
        {
          "label": "ASP（Active Server Pages）、ASP.NET（Active Server Pages .NET）、JSP（Java Server Pages）、PHP（Personal Home Pages）",
          "value": "A"
        },
        {
          "label": "HTML（HyperText Markup Language）、DHTML（Dynamic  HTML）",
          "value": "B"
        },
        {
          "label": "VBScript、JavaScript",
          "value": "C"
        },
        {
          "label": "XML（eXtensible Markup Language）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-86",
      "type": "single",
      "question": "在網頁上的固定位置，提供廣告主利用文字、圖形或動畫來進行宣傳，其缺點是過於被動，上述屬於哪一類網路廣告？",
      "options": [
        {
          "label": "按鈕式廣告",
          "value": "A"
        },
        {
          "label": "贊助式廣告",
          "value": "B"
        },
        {
          "label": "分類式廣告",
          "value": "C"
        },
        {
          "label": "橫幅廣告",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-87",
      "type": "single",
      "question": "關於電子商務營運模式的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "B2C 電子商務模式有入口網站、電子零售商、內容提供者及交易仲介商",
          "value": "A"
        },
        {
          "label": "蝦皮購物、淘寶網是 C2C 的經典代表",
          "value": "B"
        },
        {
          "label": "阿里巴巴及台灣經貿網就是典型的 B2B 批發貿易平台",
          "value": "C"
        },
        {
          "label": "ihergo 愛合購或 GOMAJI 團購網是屬於 C2B 經營模式",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-88",
      "type": "multiple",
      "question": "Kalakota & Whinston（1997 年）提出電子商務產業發展的架構，下列哪些是兩大支柱？(複選)",
      "options": [
        {
          "label": "供應鏈管理",
          "value": "A"
        },
        {
          "label": "公共政策",
          "value": "B"
        },
        {
          "label": "技術標準",
          "value": "C"
        },
        {
          "label": "網路基礎架構",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C"
      ]
    },
    {
      "id": "2-89",
      "type": "multiple",
      "question": "Kalakota & Whinston（1997 年）認為，哪些屬電子商務架構中的基礎建設？(複選)",
      "options": [
        {
          "label": "使用介面技術",
          "value": "A"
        },
        {
          "label": "訊息及資訊傳送技術",
          "value": "B"
        },
        {
          "label": "多媒體內容及網路出版基礎架構",
          "value": "C"
        },
        {
          "label": "一般商業服務基礎架構     EBC-38  2023/6/2  D",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-90",
      "type": "single",
      "question": "當很多人都使用 3G 上網後，導致 3G 上網速度變慢，使用者所能獲得的效用反而減少，此情形為下列哪一項效果？",
      "options": [
        {
          "label": "正向網路外部性",
          "value": "A"
        },
        {
          "label": "間接網路外部性",
          "value": "B"
        },
        {
          "label": "直接網路外部性",
          "value": "C"
        },
        {
          "label": "負向網路外部性",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-91",
      "type": "single",
      "question": "如附圖所示，關於 SoLoMo 模式的敘述及應用，下列哪一項正確？",
      "media": {
        "type": "table",
        "data": [
          ["（1）是2011 年由 KPCB 合夥人 John Doerr 提出的概念，強調「在地化的行動社群活動」"],
          ["（2）Social，在行動社群網站上互相分享內容已經是家常便飯，很容易可以仰賴社群中其他人對產品的分享、討論與推薦"],
          ["（3）Location，透過即時定位找到最新最熱門的消費場所與店家的訊息，並向店家購買服務或產品"],
          ["（4）Mobile，民眾透過手機、平板電腦等裝置隨時隨地查詢產品或直接下單"],
          ["（5）對手機說「我想看電影」，手機能自動找出距離使用者最近的電影院，並提供該電影院的訂票服務。"],
          ["（6）消費者可以透過智慧型手機，上臉書尋找朋友推薦的餐館，或是經由餐廳推出「打卡」送禮的活動進而消費。"]
        ]
      },
      "options": [
        {
          "label": "123456",
          "value": "A"
        },
        {
          "label": "12345",
          "value": "B"
        },
        {
          "label": "12456",
          "value": "C"
        },
        {
          "label": "1245",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-92",
      "type": "single",
      "question": "關於電子付款方式的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "第三方支付及電子支付的主管機關為金管會",
          "value": "A"
        },
        {
          "label": "電子支付使用者會有個人帳戶，消費者不僅可以透過電子支付完成線上交易，更能將錢存進帳戶中及轉帳給他人，如街口支付",
          "value": "B"
        },
        {
          "label": "第三方支付是指有第三方業者於買賣家之間進行收付款作業的交易方式，台灣電商市場常見的第三方金流服務商包含藍新、綠界及紅陽……等",
          "value": "C"
        },
        {
          "label": "行動支付是消費者透過行動裝置（智慧型手機、平板電腦）支付產品或服務。常見的行動支付服務代表為 Apple Pay、Android Pay 及 Google Pay    EBC-39  B",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-93",
      "type": "single",
      "question": "「網站以提供內容或服務給使用者，並以此收取費用」是屬於下列哪一種收益模式？",
      "options": [
        {
          "label": "商情媒介收益模式",
          "value": "A"
        },
        {
          "label": "訂閱收益模式",
          "value": "B"
        },
        {
          "label": "合作收益模式",
          "value": "C"
        },
        {
          "label": "廣告收益模式",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-94",
      "type": "multiple",
      "question": "如附圖所示，創用 CC 的 4 大授權要素哪些正確？(複選)",
      "media": {
        "type": "table",
        "data": [
            ["A 選項.姓名標示：必須按照著作人或授權人所指定的方式，表彰其姓名"],
            ["B 選項.非商業性：不得因獲取商業利益或私人金錢報酬為主要目的來利用作"],
            ["C 選項.禁止改作：僅可重製作品不得變更、變形或修改"],
            ["D 選項.相同方式分享：若變更、變形或修改本著作，則僅能依同樣的授權條款來散布該衍生作品"],
        ]
      },
      "options": [
        {
          "label": "選項 A",    
          "value": "A"
        },
        {
          "label": "選項 B",
          "value": "B"
        },
        {
          "label": "選項 C",
          "value": "C"
        },
        {
          "label": "選項 D",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B"
      ]
    },
    {
      "id": "2-95",
      "type": "multiple",
      "question": "Kalakota & Whinston（1997 年）認為電子商務架構中，下列哪些屬於「多媒體內容及網路出版基礎架構」？(複選)",
      "options": [
        {
          "label": "E-Mail",
          "value": "A"
        },
        {
          "label": "Java",
          "value": "B"
        },
        {
          "label": "WWW",
          "value": "C"
        },
        {
          "label": "EDI  C",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C"
      ]
    },
    {
      "id": "2-96",
      "type": "single",
      "question": "下列哪一項不屬於網路行銷工具與方式？",
      "options": [
        {
          "label": "PPC 關鍵字搜尋點擊廣告（Pay Per Click）",
          "value": "A"
        },
        {
          "label": "部落格（Blog）與微網誌（Microblog）",
          "value": "B"
        },
        {
          "label": "電視廣告（TV Advertising）",
          "value": "C"
        },
        {
          "label": "SEO 搜尋引擎最佳化（Search Engine Optimization）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-97",
      "type": "single",
      "question": "「網站藉由促成或執行交易而向會員或廠商收取手續費用」特性是屬於哪一種收益模式？",
      "options": [
        {
          "label": "手續費收益模式",
          "value": "A"
        },
        {
          "label": "訂閱收益模式",
          "value": "B"
        },
        {
          "label": "廣告收益模式",
          "value": "C"
        },
        {
          "label": "銷售收益模式",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-98",
      "type": "single",
      "question": "「企業扮演市場製造者的角色，將買賣雙方聚集起來，並由每筆交易中抽取費用」，此為哪一項收益模式？",
      "options": [
        {
          "label": "銷售收益模式",
          "value": "A"
        },
        {
          "label": "訂閱收益模式",
          "value": "B"
        },
        {
          "label": "經紀模式",
          "value": "C"
        },
        {
          "label": "廣告收益模式",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-99",
      "type": "single",
      "question": "在電子商務的交易模式中，若由賣方彼此競價，出價最低者就贏得與買方的商務交易，這是屬於下列哪一項？",
      "options": [
        {
          "label": "逆拍賣式價格",
          "value": "A"
        },
        {
          "label": "目錄式價格",
          "value": "B"
        },
        {
          "label": "拍賣式價格",
          "value": "C"
        },
        {
          "label": "需求整合式價格",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-100",
      "type": "single",
      "question": "關於 CPM（Cost Per Mille）的敘述，下列哪一項正確？",     
      "options": [
        {
          "label": "遞送一千次廣告曝光所需要的成本",
          "value": "A"
        },
        {
          "label": "遞送一萬次廣告曝光所需要的成本",
          "value": "B"
        },
        {
          "label": "遞送一百次廣告曝光所需要的成本",
          "value": "C"
        },
        {
          "label": "遞送一百萬次廣告曝光所需要的成本",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-101",
      "type": "single",
      "question": "關於電子商務架站方式優缺點的比較，下列哪一項錯誤？",
      "options": [
        {
          "label": "虛擬主機可以省去架設及管理主機的麻煩，請網路業者代管網站，但有些會有網路流量及頻寛限制",
          "value": "A"
        },
        {
          "label": "主機代管乃是企業需自己購置網路主機，但使用 ISP 公司的機房放置企業的網路設備及使用 ISP 公司的網路系統來架設網站",
          "value": "B"
        },
        {
          "label": "自行架設需配置專業人員自行架設與管理網站，必須有軟硬體設備及固定 IP ，但建置成本低於虛擬主機及主機代管",
          "value": "C"
        },
        {
          "label": "虛擬主機及主機代管均有專業化電腦管理，電腦設備環境較好，虛擬主機成本較主機代管低",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-102",
      "type": "multiple",
      "question": "關於區塊鏈的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "區塊鏈具有去中心化、開放性、安全性、不可篡改性、成本低、即時性、可追踨性及可信任性等好處",
          "value": "A"
        },
        {
          "label": "區塊鏈的參與者共同一個時間軸，而在發生資訊變動時，會以「時間戳記」記錄資訊的變動。若有一個交易發生了，第二個使用同一批數位貨幣的交易就不會進行",
          "value": "B"
        },
        {
          "label": "舉凡牽涉到中間交易的行為，以信任為基礎、仲介模式的產業都會受到區塊鏈的衝擊，最主要兩種經營模式為傳統仲介商及共享經濟平台",
          "value": "C"
        },
        {
          "label": "區塊鏈是集中式公開帳本，是將數位交易記錄依時間順序記載在公開的集中式數據庫（帳本），並透過參與者同意的規則或是獲得一定數量的贊成票後，被記錄並加密保存在帳本上",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "2-103",
      "type": "single",
      "question": "根據 IBM 看法物聯網融合區塊鏈技術帶來許多的好處也同時面臨諸多挑戰，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "使用區塊鏈技術，在物聯網裝置之間建立信任關係，並降低謀合篡改的風險",
          "value": "A"
        },
        {
          "label": "使用區塊鏈技術，透過區塊鏈去中間化特性，消除與中間人和仲介機構相關的開銷來降低成本",
          "value": "B"
        },
        {
          "label": "使用區塊鏈技術，可以解決物聯網的安全性問題，如裝置啟動運作和安全金鑰管理",
          "value": "C"
        },
        {
          "label": "區塊鏈並未具備良好的擴展性，這可能會導致回歸集中化，從而無法實現分散式帳本的理想",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-104",
      "type": "multiple",
      "question": "關於共享經濟的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "Uber 與 Airbnb 是一種共享經濟商業平台",
          "value": "A"
        },
        {
          "label": "共享經濟將生產方式轉為中心化的大眾模式",
          "value": "B"
        },
        {
          "label": "共享經濟是利用 C2C 方式，結合分散群體來分享閒置資源",
          "value": "C"
        },
        {
          "label": "共享經濟又稱為協同經濟，消費者透過合作方式與他人共享產品",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "2-105",
      "type": "single",
      "question": "關於響應式網頁設計（RWD Responsive Web Design ）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "RWD 可使網站在不同裝置瀏覽下皆有適合的呈現",
          "value": "A"
        },
        {
          "label": "RWD 是網頁設計開發技術的趨勢",
          "value": "B"
        },
        {
          "label": "RWD 透過 CSS，以百分比的方式以及彈性的畫面設計，在不同解析度下改變網頁頁面的排版方式",
          "value": "C"
        },
        {
          "label": "RWD 主要提供桌機最佳的視覺體驗",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-106",
      "type": "single",
      "question": "關於 SET 與 SSL 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "網頁瀏覽器的網址列出現 https 時，代表網站採用 SSL 的加密保護",
          "value": "A"
        },
        {
          "label": "SET 是由信用卡公司與某些網路軟硬體廠商所共同制訂的加密方式",
          "value": "B"
        },
        {
          "label": "SET 用來保護網路上付款交易的安全",
          "value": "C"
        },
        {
          "label": "SET 是瀏覽器和網站之間的傳輸資料加密",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-107",
      "type": "single",
      "question": "小明在某電商平台註冊為會員，然而在註冊流程中，該平台詢問小明是否同意接受該平台寄送廣告信件給他，請問這是屬於電子商務交易流程中，下列哪一項隱私權的保障機制？",
      "options": [
        {
          "label": "Opt out",
          "value": "A"
        },
        {
          "label": "Opt in",
          "value": "B"
        },
        {
          "label": "Opt get",
          "value": "C"
        },
        {
          "label": "Opt yes",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-108",
      "type": "single",
      "question": "關於長尾關鍵字的敘述，下列哪一項正確？",
      "options": [
        {
          "label": "長尾關鍵字較熱門關鍵字具備高度搜尋量",
          "value": "A"
        },
        {
          "label": "長尾關鍵字較熱門關鍵字具備高度的競爭性",
          "value": "B"
        },
        {
          "label": "長尾關鍵字較熱門關鍵字具備精準度",
          "value": "C"
        },
        {
          "label": "熱門關鍵字成本較長尾關鍵字為低",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-109",
      "type": "single",
      "question": "下列哪一項不是應用物聯網技術於智慧商務的服務？",
      "options": [
        {
          "label": "透過 QR Code 確認商品的品質和瑕疵",
          "value": "A"
        },
        {
          "label": "透過 RFID 進行商品的盤點",
          "value": "B"
        },
        {
          "label": "透過 QR Code 提供商品履歷以及品牌故事等資訊",
          "value": "C"
        },
        {
          "label": "透過 QR Code 提供商品履歷以及品牌故事等資訊",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "2-110",
      "type": "multiple",
      "question": "跨境電商所需面對的問題包含下列哪些？(複選)",
      "options": [
        {
          "label": "法律與政策差異",
          "value": "A"
        },
        {
          "label": "文化差異",
          "value": "B"
        },
        {
          "label": "需求差異",
          "value": "C"
        },
        {
          "label": "商業模式差異",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-111",
      "type": "multiple",
      "question": "關於防火牆的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "防火牆可以用來管理電腦資源的分配",
          "value": "A"
        },
        {
          "label": "防火牆能防止各種病毒的入侵",
          "value": "B"
        },
        {
          "label": "防火牆可以利用規則來進行封包管理、過濾",
          "value": "C"
        },
        {
          "label": "防火牆可抵擋外部的惡意攻擊",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "2-112",
      "type": "multiple",
      "question": "人工智慧牽涉到下列哪些技術？(複選)",
      "options": [
        {
          "label": "類神經網路",
          "value": "A"
        },
        {
          "label": "深度學習",
          "value": "B"
        },
        {
          "label": "分散式資料庫",
          "value": "C"
        },
        {
          "label": "機器學習",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "2-113",
      "type": "multiple",
      "question": "區塊鏈應用包含下列哪些技術與概念？(複選)",
      "options": [
        {
          "label": "密碼學",
          "value": "A"
        },
        {
          "label": "數位貨幣",
          "value": "B"
        },
        {
          "label": "不可竄改性",
          "value": "C"
        },
        {
          "label": "去中心化",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "2-114",
      "type": "single",
      "question": "共享經濟的商業模式，從參與者的角度，可以簡要概括分成四種，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "個人對個人（C2C 或 P2P）",
          "value": "A"
        },
        {
          "label": "企業對企業（B2B 或 P2P）",
          "value": "B"
        },
        {
          "label": "個人對企業（C2B）",
          "value": "C"
        },
        {
          "label": "企業對個人（B2C）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-115",
      "type": "single",
      "question": "關於跨境電商（跨境電子商務）的定義敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "分屬不同國境的交易主體，通過電子商務的手段，將傳統進出口貿易中的展示、洽談和成交環節電子化",
          "value": "A"
        },
        {
          "label": "通過跨境物流送達商品",
          "value": "B"
        },
        {
          "label": "透過（O2O Online To Offline)進行在地化銷售",
          "value": "C"
        },
        {
          "label": "涉及國際貨物的電子貿易、線上數據傳遞、電子資金劃撥、電子貨運單據等方面的活動",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "2-116",
      "type": "multiple",
      "question": "使用SEM Search Engine Marketing ）搜尋引擎行銷時，主要包含下列哪幾個方法？(複選)",
      "options": [
        {
          "label": "PPC 關鍵字點擊廣告（Pay Per Click）",
          "value": "A"
        },
        {
          "label": "Banner 橫幅式廣告（Web Banner 、 Banner ad）",
          "value": "B"
        },
        {
          "label": "彈出式廣告（Pop up ad）",
          "value": "C"
        },
        {
          "label": "SEO 搜尋引擎最佳化（Search Engine Optimization）",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "2-117",
      "type": "multiple",
      "question": "如果要購買PPC Pay Per Click ）關鍵字點擊廣告，針對自己行業別需要的關鍵字進行設定來購買廣告，可以選擇以哪幾種方式進行？(複選)",
      "options": [
        {
          "label": "雅虎關鍵字廣告（原名雅虎搜尋行銷",
          "value": "A"
        },
        {
          "label": "Facebook 廣告",
          "value": "B"
        },
        {
          "label": "Google Ads （原名 Google AdWords）",
          "value": "C"
        },
        {
          "label": "LINE Ads 廣告",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "2-118",
      "type": "single",
      "question": "下列哪一個敘述不符合病毒式行銷的定義與敘述？",
      "options": [
        {
          "label": "挖掘意見領袖，將病原體傳播給目標視聽眾，成為最初感染者和傳播者",
          "value": "A"
        },
        {
          "label": "將病原體使用電腦病毒入侵電腦，達成感染宣傳的目的",
          "value": "B"
        },
        {
          "label": "創造消費者的感染途徑",
          "value": "C"
        },
        {
          "label": "將病原體傳遞出去，透過與網友的交流和討論，不斷的傳播渲染成為爆炸性傳播話題",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "2-119",
      "type": "single",
      "question": "網路交易面臨的資訊安全威脅，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "網路攻擊分為非技術性攻擊（Nontechnical Attack ）與技術性攻擊（Technical Attack）兩種",
          "value": "A"
        },
        {
          "label": "阻斷服務、僵屍病毒與電腦病毒",
          "value": "B"
        },
        {
          "label": "惡意程式碼：病毒、蠕蟲與特洛伊木馬程式",
          "value": "C"
        },
        {
          "label": "SEO 搜尋引擎最佳化（Search Engine Optimization）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "2-120",
      "type": "single",
      "question": "關於於大數據（Big data）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "大數據分析的一個重要特點是多維度，可以對一個事物進行多方位的敘述，從而更準確",
          "value": "A"
        },
        {
          "label": "大數據分析的挑戰和機運有三個方向：質（Quality ，質量品質）、系統（System ，環境的穩定度）、分析Analysis資料的多元性）",
          "value": "B"
        },
        {
          "label": "又稱為巨量資料，一般是指傳統資料處理軟體不足以處理的大或複雜的資料集",
          "value": "C"
        },
        {
          "label": "大數據分析的核心就是預測，通常被視為是人工智慧的一部分，也被視為是一種機器學習",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-01",
      "type": "single",
      "question": "鼎新電腦認為企業在導入 ERP 系統時有三種不同的導入模式，下列敘述哪一項正確？",
      "options": [
        {
          "label": "快速導入：即導入企業將現有的系統全面淘汰，直接改用全新的 ERP 系統來連接全部的事業部門或相關部門，待其系統運作順暢後，再進行全面性的導入，如此將可以降低失敗的風險",
          "value": "A"
        },
        {
          "label": "全面性導入：採用由一個事業單位或是功能部門，將所需要的功能模組作一次性的導入。導入的眼光只侷限在單一模組，未來如果需要整合其他模組，就會面臨到重新規劃的風險成本",
          "value": "B"
        },
        {
          "label": "漸進式導入：企業依據當前的管理或作業需求，先導入 ERP系統的部分模組，將來有需要時再進行其他功能模組的導入，也可以分散成本與風險",
          "value": "C"
        },
        {
          "label": "快速導入模式存在缺乏整體規劃的風險，因為單一模組的導入缺乏與其他部門作整體的協調，導入的眼光只侷限在單一模組，未來如果需要整合其他模組，就會面臨到重新規劃的風險成本",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-02",
      "type": "multiple",
      "question": "導致長鞭效應現象之因素主要包括需求預測及下列哪些？(複選)",
      "options": [
        {
          "label": "前置時間",
          "value": "A"
        },
        {
          "label": "批次訂購",
          "value": "B"
        },
        {
          "label": "價格波動",
          "value": "C"
        },
        {
          "label": "需求短缺之預期心理",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-03",
      "type": "single",
      "question": "關於供應鏈策略分成三大類型：推式供應鏈、拉式供應鏈、混合式供應鏈－推拉式供應鏈，下列敘述哪一項正確？",
      "options": [
        {
          "label": "拉式供應鏈容易發生長鞭效應的現象，需要大量安全存貨而導致超額的存貨現象，常常需要比較大量而且變化的生產需求，服務水準會降低，常發生過時的產品還存在庫存中",
          "value": "A"
        },
        {
          "label": "推式供應鏈的優點在於有計畫的為所預測的需求量提供最低成本，最有效率的產出，而且可以用已生產的產品即時提供給市場來創造利潤",
          "value": "B"
        },
        {
          "label": "推拉式供應鏈的缺點則是當市場需求不如預期時，生產及庫存的產品愈多，存貨損失的風險就愈大",
          "value": "C"
        },
        {
          "label": "推式供應鏈的優點在於為顧客提供量身訂製的產品與服務，缺點則是客製化的成本較高",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-04",
      "type": "multiple",
      "question": "供應鏈策略的比較，下列敘述哪些錯誤？(複選)",
      "options": [
        {
          "label": "推式供應鏈易產生長鞭效應，而拉式及推推式供應鏈則不易產生長鞭效應",
          "value": "A"
        },
        {
          "label": "拉式供應鏈是以預測做為生產和配送決策之驅動，而推式供應鏈則以需求做為生產和配送決策之驅動",
          "value": "B"
        },
        {
          "label": "以適合之市場特性而言，推式供應鏈適合需求變動小的市場，拉式供應鏈則是適合需求變動大的市場",
          "value": "C"
        },
        {
          "label": "拉式供應鏈的庫存量多、生產效率高，推式供應鏈的庫存量少、生產效率低",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "D"
      ]
    },
    {
      "id": "3-05",
      "type": "single",
      "question": "關於供應鏈的配送策略，下列哪一項錯誤？",
      "options": [
        {
          "label": "供應鏈的配送策略為：直接配送、倉儲、越庫作業、轉運",
          "value": "A"
        },
        {
          "label": "直接配送及轉運不需要物流中心（倉儲）的需求",
          "value": "B"
        },
        {
          "label": "越庫作業適用大型零售產業的商品配銷，倉儲適用於無法長期儲存的商品，如生鮮產品",
          "value": "C"
        },
        {
          "label": "直接配送的缺貨風險高，倉儲及越庫作業的缺貨風險低",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-06",
      "type": "single",
      "question": "供應鏈管理（SCM）與企業資源規劃（ERP）之比較，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "以支援範圍做比較，SCM 是跨組織的供應鏈流程，ERP 是組織內部的價值鏈流程",
          "value": "A"
        },
        {
          "label": "以運作焦點做比較，ERP 著重內部價值提升，SCM 著重跨組織價值提升",
          "value": "B"
        },
        {
          "label": "以實施期程做比較，SCM 的時間較長（18-48 個月），ERP 則時間較短（12-16 個月）",
          "value": "C"
        },
        {
          "label": "以實施層級做比較，ERP 著重作業面，SCM 著重營運規劃面",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-07",
      "type": "single",
      "question": "MATA Group 將協同商務分為四大功能，下列敘述哪一項正確？",
      "options": [
        {
          "label": "規劃 / 預測協同：利用網際網路讓製造商與客戶間分享設計圖或共同進行設計，其合作關係可以只是簡單的樣本傳送，也可以是透過協同工具來追蹤、管理整個協同工作之流程",
          "value": "A"
        },
        {
          "label": "設計協同商務：指批發商、配銷商等通路夥伴之間利用網際網路進行彼此之間的資訊分享，甚至是訂單、價格、品牌管理等流程的共用",
          "value": "B"
        },
        {
          "label": "採購協同商務：指利用網際網路讓多個買主結合起來，形成較大的數量來採購產品或服務，以增加共同的議價能力及降低採購成本",
          "value": "C"
        },
        {
          "label": "商務行銷 / 銷售協同商務：指供應商到零售商之間利用網際網路進行規劃、預測階段的合作，透過資訊分享與共同合作來減少產品供需不協調所造成長鞭效應現象，以增加供應鏈整體的利益",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-08",
      "type": "single",
      "question": "關於知識轉換模式及知識轉換循環地運作，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "透過四種知識轉換循環地運作即稱為：知識螺旋",
          "value": "A"
        },
        {
          "label": "內化：外顯 → 內隱；外化：內隱 → 外顯",
          "value": "B"
        },
        {
          "label": "組合化：外顯 → 外顯；社會化：內隱 → 內隱",
          "value": "C"
        },
        {
          "label": "共同化：外顯 → 外顯；組合化：內隱 → 內隱",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-09",
      "type": "single",
      "question": "知識移轉的過程分為五階段的模式：1.應用、2.溝通、3.同化、4.取得、5.接受，下列哪一項為正確的五個階段順序？",
      "options": [
        {
          "label": "1 → 2 → 3 → 4 → 5",
          "value": "A"
        },
        {
          "label": "4 → 2 → 1 → 5 → 3",
          "value": "B"
        },
        {
          "label": "1 → 4 → 5 → 2 → 3",
          "value": "C"
        },
        {
          "label": "4 → 1 → 2 → 3 → 5",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-10",
      "type": "single",
      "question": "關於線上分析處理的分析方式，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "切片（Slicing）：是將幾個維度設定成一個區間來進行分析",
          "value": "A"
        },
        {
          "label": "轉軸（Pivoting）：是將維度的資料旋轉，讓使用者以不同的角度來分析資料",
          "value": "B"
        },
        {
          "label": "上捲（Roll-Up）：是指加總較低維度的資料並隱藏這個維度，以檢視整體資料",
          "value": "C"
        },
        {
          "label": "下探（Drill-Down）：是將高維度的整體資料再細分成較低維度的資料，以檢視詳細的資料內容",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-11",
      "type": "multiple",
      "question": "下列敘述哪些正確？(複選)",
      "options": [
        {
          "label": "依據顧客關係管理系統的應用範圍，可以分為溝通型 CRM、 操作型 CRM、分析型 CRM",
          "value": "A"
        },
        {
          "label": "支援與顧客接觸連繫的 CRM 稱為溝通型 CRM。透過溝通型 CRM 系統與顧客互動，企業可以收集到顧客的現況及對企業產品或服務的滿意程度",
          "value": "B"
        },
        {
          "label": "支援銷售人員與顧客接觸的 CRM 稱為操作型 CRM，也稱為前台型 CRM",
          "value": "C"
        },
        {
          "label": "被使用來分析企業所蒐集的顧客及交易資料的 CRM 稱為分析型 CRM，也稱為前台型 CRM。分析型 CRM 必須提供三個主要功能：業務自動化、顧客服務、行銷",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-12",
      "type": "single",
      "question": "下列哪一項是行動運算加物聯網加人工智慧的一種發明，其指的是一種以電腦所產生出來的多媒體資訊（文字、聲音、圖型、視訊 等）來提升、擴增使用者對目前在實際世界上所看到的一個實體物件（產品、建築物、書籍等）的資訊？",
      "options": [
        {
          "label": "巨量分析運算",
          "value": "A"
        },
        {
          "label": "社群運算",
          "value": "B"
        },
        {
          "label": "雲端運算",
          "value": "C"
        },
        {
          "label": "擴增實境",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-13",
      "type": "single",
      "question": "下列哪一項不是數位化網路經濟體系的三大促動力量？",
      "options": [
        {
          "label": "普及化",
          "value": "A"
        },
        {
          "label": "交易化",
          "value": "B"
        },
        {
          "label": "數位化",
          "value": "C"
        },
        {
          "label": "網路化",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-14",
      "type": "single",
      "question": "關於 RFID 與傳統條碼的比較，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "以成本做比較，RFID 的成本高，條碼的成本非常低",
          "value": "A"
        },
        {
          "label": "以非法複製容易度做比較，RFID 容易，條碼非常困難",
          "value": "B"
        },
        {
          "label": "以對環境變化及耐污性的忍受度做比較，RFID高，條碼非常低",
          "value": "C"
        },
        {
          "label": "以間接讀取性做比較，RFID 可間接讀取，條碼無法間接讀取",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-15",
      "type": "single",
      "question": "下列哪一項是一種結合分散式運算、行動運算、感測網路、人工智 慧與人機界面的科技平台，其主要結構有三個Level：感測器層、網路層、分析層？",
      "options": [
        {
          "label": "AR",
          "value": "A"
        },
        {
          "label": "RFID",
          "value": "B"
        },
        {
          "label": "IOT",
          "value": "C"
        },
        {
          "label": "ERP",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-16",
      "type": "multiple",
      "question": "關於企業電子化的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "企業電子化使用數位化技術強化組織的領導能力",
          "value": "A"
        },
        {
          "label": "企業電子化為利用 Internet、Intranet 和 Extranet 等系統將企業內部價值鏈與外部策略伙伴進行結合",
          "value": "B"
        },
        {
          "label": "企業電子化主要將組織的前台網站與後台系統做一整合",
          "value": "C"
        },
        {
          "label": "企業電子化牽涉到整個組織價值鏈與經營模式的再造",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "3-17",
      "type": "multiple",
      "question": "關於電子商務（EC）與企業電子化（EB）的比較，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "EC 為 EB 的一部分",
          "value": "A"
        },
        {
          "label": "EC 主要支援企業與顧客之間的商務活動，EB 則支援企業內部價值鏈活動與外部跨組織活動",
          "value": "B"
        },
        {
          "label": "EC 強調虛擬 .Com 的組織結構，而 EB 強調虛實合一的組織結構",
          "value": "C"
        },
        {
          "label": "EC 對於組織經營模式的轉型程度較大，而 EB 對於組織經營模式的轉型程度較小",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "3-18",
      "type": "single",
      "question": "關於 EB 與傳統資訊系統的比較，下列哪一項錯誤？",
      "options": [
        {
          "label": "EB 對於內部資料的儲存以資料倉儲與資料超市為主，而傳統資訊系統以資料庫為主",
          "value": "A"
        },
        {
          "label": "EB 以 web-based 介面為主，而傳統資訊系統的每個 IS 介面不同",
          "value": "B"
        },
        {
          "label": "EB 與客戶之間的互動以 CRM 為主，而傳統資訊系統則以人工或電話來加以處理",
          "value": "C"
        },
        {
          "label": "EB 以專屬的 LAN 來進行內部連結，而傳統資訊系統則以 Intranet 來進行內部整合",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-19",
      "type": "multiple",
      "question": "下列哪些為 ERP 包含的模組？(複選)",
      "options": [
        {
          "label": "物料與庫存管理",
          "value": "A"
        },
        {
          "label": "財務會計管理",
          "value": "B"
        },
        {
          "label": "人力資源管理",
          "value": "C"
        },
        {
          "label": "企業行政管理",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "3-20",
      "type": "single",
      "question": "下列哪一項不是長鞭效應產生的原因？",
      "options": [
        {
          "label": "價格變動過大",
          "value": "A"
        },
        {
          "label": "訂單誇大",
          "value": "B"
        },
        {
          "label": "前置時間過短",
          "value": "C"
        },
        {
          "label": "大量批次訂購",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-21",
      "type": "multiple",
      "question": "關於於 CRM 的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "顧客關係管理主要依據消費者對產品的慾望與需求，區分不同的顧客群",
          "value": "A"
        },
        {
          "label": "顧客關係管理提升老顧客的荷包貢獻率，以交叉銷售方式（cross sell）向顧客促銷更新、更好、更貴的商品",
          "value": "B"
        },
        {
          "label": "利用資訊科技支援顧客服務及個人化，以微型區隔為核心",
          "value": "C"
        },
        {
          "label": "顧客關係管理的目地在於提高公司管理效能",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "3-22",
      "type": "single",
      "question": "Pepper & Rogers 提出的一對一量身訂作 CRM 流程有四個主要步驟，分別為 a.互動、b.區隔、c.辨識、d.客製化，請問其執行的正確順序，下列哪一項正確？",
      "options": [
        {
          "label": "abcd",
          "value": "A"
        },
        {
          "label": "cabd",
          "value": "B"
        },
        {
          "label": "cbad",
          "value": "C"
        },
        {
          "label": "cdba",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-23",
      "type": "single",
      "question": "關於 ERP 與 SCM 的比較，下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "ERP 主要支援的範圍為企業內部價值鏈流程，SCM 則主要支援跨組織的供應鏈流程",
          "value": "A"
        },
        {
          "label": "ERP 提升組織作業面的效率，SCM 則提升組織策略面的最佳化",
          "value": "B"
        },
        {
          "label": "ERP 主要系統為支援交易的 OLTP 系統，而 SCM 則主要為支援決策導向的 DSS、BI、以及跨組織資訊系統",
          "value": "C"
        },
        {
          "label": "ERP 的訓練較為複雜，而 SCM 訓練較為簡單",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-24",
      "type": "single",
      "question": "關於供應鏈管理系統（SCM）產生的效益，下列哪一項錯誤？",
      "options": [
        {
          "label": "提升 SC 的回應速度與彈性",
          "value": "A"
        },
        {
          "label": "降低 SC 的不確定性",
          "value": "B"
        },
        {
          "label": "降低 SC 的交易成本",
          "value": "C"
        },
        {
          "label": "降低 SC 的資產利用率",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-25",
      "type": "single",
      "question": "下列哪一項不是顧客關係管理中提及的 4C？",
      "options": [
        {
          "label": "Cost",
          "value": "A"
        },
        {
          "label": "Convenience",
          "value": "B"
        },
        {
          "label": "Communication",
          "value": "C"
        },
        {
          "label": "Commitment",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-26",
      "type": "single",
      "question": "下列哪一項不是 ERP 應用上的特色？",
      "options": [
        {
          "label": "ERP 是一個內部管理導向系統",
          "value": "A"
        },
        {
          "label": "ERP 是一個模組化整合系統",
          "value": "B"
        },
        {
          "label": "ERP 使用分權式的分散控管架構",
          "value": "C"
        },
        {
          "label": "ERP 內建最佳實務範本",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-27",
      "type": "single",
      "question": "拉式供應鏈不具備下列哪一項特色？",
      "options": [
        {
          "label": "生產是依據需求預測而產生",
          "value": "A"
        },
        {
          "label": "反應能力強",
          "value": "B"
        },
        {
          "label": "能為顧客提供量身訂製的產品和服務",
          "value": "C"
        },
        {
          "label": "客製化成本高",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-28",
      "type": "single",
      "question": "MATA Group 將協同商務分為四大功能，下列哪一項錯誤？",
      "options": [
        {
          "label": "設計協同",
          "value": "A"
        },
        {
          "label": "行銷協同",
          "value": "B"
        },
        {
          "label": "採購協同",
          "value": "C"
        },
        {
          "label": "製造協同",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-29",
      "type": "single",
      "question": "關於 RFID 的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "無線射頻辨識技術，為一種非接觸式的自動辨識系統",
          "value": "A"
        },
        {
          "label": "安全性較 QR Code 為差，然而成本較 QR Code 為低",
          "value": "B"
        },
        {
          "label": "包含詢答器（Transponder）與讀取器（Reader）兩種裝置",
          "value": "C"
        },
        {
          "label": "根據標籤電源有無分為主動式與被動式兩種",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-30",
      "type": "single",
      "question": "關於 OLTP（Online Transaction Procession）與 OLAP（Online Analytical Processing）的比較，下列哪一項錯誤？",
      "options": [
        {
          "label": "OLTP 支援交易處理活動，OLAP 支援決策分析",
          "value": "A"
        },
        {
          "label": "OLTP 注意交易明細，OLAP 注意彙總性資料",
          "value": "B"
        },
        {
          "label": "OLTP 使用人員為業務處理人員，OLAP 使用人員為高階決策人員",
          "value": "C"
        },
        {
          "label": "OLTP 整合異質的資料庫，OLAP 則不強調資料庫的整合",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-31",
      "type": "single",
      "question": "資深醫師對於新進醫師，透過會議進行案例的討論、分享以及辯論 傳達醫學知識，此種程序屬於 Nonaka&Takuichi（1995）提出的 SECI 模式中的哪一個？",
      "options": [
        {
          "label": "社會化",
          "value": "A"
        },
        {
          "label": "組合化",
          "value": "B"
        },
        {
          "label": "外化",
          "value": "C"
        },
        {
          "label": "內化",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-32",
      "type": "single",
      "question": "關於全面品質管理（TQM）及企業流程再造（BPR）的特色與其間的差異，下列哪一項錯誤？",
      "options": [
        {
          "label": "TQM 的重點在事前預防錯誤而非事後檢驗",
          "value": "A"
        },
        {
          "label": "TQM 強調漸進地對工作流程進行持續不斷的品質改善",
          "value": "B"
        },
        {
          "label": "BPR 強調如果經營模式有誤，則應進行流程重新設計便可提升企業效率",
          "value": "C"
        },
        {
          "label": "BPR 強調劇烈的、必須從根本上淘汰工業革命留下來的舊流程，引進資訊革命後，有效率的新流程",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-33",
      "type": "single",
      "question": "電子商務與企業電子化特色差異，下列哪一項錯誤？",
      "options": [
        {
          "label": "電子商務以買賣交易的商務為主，行銷導向",
          "value": "A"
        },
        {
          "label": "電子商務主要提供的支援服務有線上交易處理、決策支援、企業資源規劃、供應鏈及協同商務",
          "value": "B"
        },
        {
          "label": "企業電子化主要系統範圍有前台網站及後台應用系統",
          "value": "C"
        },
        {
          "label": "企業電子化主要組織結構為虛實合一的組織結構",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-34",
      "type": "single",
      "question": "企業的 IT 架構從傳統的交易處理系統 TPS → 電子商務 EC → 企業電子化 EB 的演進階段，下列哪一項正確？1.只提供資訊的 Web、2.提供互動溝通的 Web、3.提供交易執行的 Web、4.跨組織整合的 EB 系統、5.前後台整合的 EB 系統",
      "options": [
        {
          "label": "12345",
          "value": "A"
        },
        {
          "label": "13254",
          "value": "B"
        },
        {
          "label": "13245",
          "value": "C"
        },
        {
          "label": "12354",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-35",
      "type": "single",
      "question": "企業電子化的策略規劃程序，下列哪一項正確？",
      "data": [
        ["1.建立企業願景", "2.確定目標與市場定位", "3.擬訂企業電子化策略", "4.電子化導入評估要點", "5.委外建置或自行開發", "6.成果評估與回饋"]
      ],
      "options": [
        {
          "label": "123456",
          "value": "A"
        },
        {
          "label": "132456",
          "value": "B"
        },
        {
          "label": "142356",
          "value": "C"
        },
        {
          "label": "134256",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-36",
      "type": "single",
      "question": "Wal-Mart 要求大部份的日用品雜貨供應商利用 Wal-Mart 的 POS 資訊，依據雙方認同的存貨水準範圍內，規劃及保持適當的存貨水準，由供應商管理存貨，Wal-Mart 只有在經過櫃檯掃描時才短暫擁有這些貨品，Wal-Mart 供應商策略是採用下列哪一項策略？",
      "options": [
        {
          "label": "QR（Quick Response）策略",
          "value": "A"
        },
        {
          "label": "CR（Continuous Replenishment）策略",
          "value": "B"
        },
        {
          "label": "VMI（Vender Managed Inventory）策略",
          "value": "C"
        },
        {
          "label": "RFQ（Request For Quotation）策略",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-37",
      "type": "single",
      "question": "K-Mart 提供供應商 3 年的歷史資料與每日的 POS 資料給上游的三明治公司，而供應商必須保證隨時維持 K-Mart 適當的存貨水準，K-Mart 供應商策略是採用下列哪一項方式？",
      "options": [
        {
          "label": "QR（Quick Response）策略",
          "value": "A"
        },
        {
          "label": "CR（Continuous Replenishment）策略",
          "value": "B"
        },
        {
          "label": "VMI（Vender Managed Inventory）策略",
          "value": "C"
        },
        {
          "label": "RFQ（Request For Quotation）策略",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-38",
      "type": "single",
      "question": "小明是個公車族，每天搭公車前都會使用手機的公車 APP，查看公車何時到，這是屬於行動應用的下列哪一種服務？",
      "options": [
        {
          "label": "適地性服務（Location-Based Service, LBS）",
          "value": "A"
        },
        {
          "label": "行動社群網路（Mobile Social Networking Service, MSNS）",
          "value": "B"
        },
        {
          "label": "行動搜尋（Mobile Search）",
          "value": "C"
        },
        {
          "label": "行動商務（Mobile Commerce）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-39",
      "type": "multiple",
      "question": "ETL 是資料倉儲或商業智慧建置的關建程序，會影響商業智慧的效率與效能，關於 ETL 敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "Extract 資料萃取：依照進行資料分析所需的資料來源，將資料從企業內外部各個資訊系統或資料庫中讀取出來",
          "value": "A"
        },
        {
          "label": "Transform 資料轉換：將萃取出來的資料清除不需要的內容，再轉換成規劃的資料結構，讓所有的資料有一致的格式",
          "value": "B"
        },
        {
          "label": "Link 資料連結：完成萃取及轉換後的資料，依照原先之規劃將各資料連接並編碼，作為將來進一步的資料分析之用",
          "value": "C"
        },
        {
          "label": "Load 資料載入：完成萃取及轉換後的資料，依照原先之規劃儲存到資料倉儲中",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "3-40",
      "type": "single",
      "question": "我們到某個地點或某家商店後，可以「打卡」通知臉書上的朋友，這是屬於行動應用的下列哪一種服務？",
      "options": [
        {
          "label": "適地性服務（Location-Based Service, LBS）",
          "value": "A"
        },
        {
          "label": "行動社群網路（Mobile Social Networking Service, MSNS）",
          "value": "B"
        },
        {
          "label": "行動搜尋（Mobile Search）",
          "value": "C"
        },
        {
          "label": "行動商務（Mobile Commerce）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-41",
      "type": "single",
      "question": "利用手機登入「行動銀行 APP」，可以進行線上繳費、存款轉帳、繳費、餘額查詢、利率匯率查詢、歷史明細查詢、信用卡消費紀錄 查詢，這是屬於行動應用的下列哪一種服務？",
      "options": [
        {
          "label": "適地性服務（Location-Based Service, LBS）",
          "value": "A"
        },
        {
          "label": "行動社群網路（Mobile Social Networking Service, MSNS）",
          "value": "B"
        },
        {
          "label": "行動搜尋（Mobile Search）",
          "value": "C"
        },
        {
          "label": "行動商務（Mobile Commerce）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-42",
      "type": "multiple",
      "question": "在手機上直接下載 QR Code 的高鐵車票，進行付款，這是屬於行動應用的下列哪些服務？(複選)",
      "options": [
        {
          "label": "適地性服務（Location-Based Service, LBS）",
          "value": "A"
        },
        {
          "label": "行動社群網路（Mobile Social Networking Service, MSNS）",
          "value": "B"
        },
        {
          "label": "行動搜尋（Mobile Search）",
          "value": "C"
        },
        {
          "label": "行動商務（Mobile Commerce）",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "3-43",
      "type": "single",
      "question": "消費者利用手持設備在線上搜尋，下載行動網頁的交易資訊、折扣 券、QR Code 等，並即時在實體商店採購，付款或掃描 QR Code， 是屬於哪一項商務模式？",
      "options": [
        {
          "label": "B2B",
          "value": "A"
        },
        {
          "label": "B2C",
          "value": "B"
        },
        {
          "label": "O2O",
          "value": "C"
        },
        {
          "label": "P2P",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-44",
      "type": "multiple",
      "question": "關於顧客關係管理的 10C 模式敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "顧客贏取率（Customer Acquisition）：企業提供比競爭對手更高價值的產品與服務，來吸引新顧客的青睞與採購",
          "value": "A"
        },
        {
          "label": "顧客獲利率（Customer Profitability）：顧客期望從產品或服務所能獲得利益的集合，包括產品價值、服務價值、員工友誼價值、品牌價值等",
          "value": "B"
        },
        {
          "label": "顧客保留率（Customer Retention）：如何留住有價值的現有顧客，不讓其流失，透過更貼心或是專屬的服務，來提升現有顧客的滿意度，以降低其流失率",
          "value": "C"
        },
        {
          "label": "顧客價值（Customer Value）：又稱為顧客的終身價值，指顧客終身對企業所有可能貢獻的利潤",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "3-45",
      "type": "multiple",
      "question": "企業資源規劃（ERP）跟傳統系統的主要區別有下列哪些？(複選)",
      "options": [
        {
          "label": "企業資源規劃大都為集式資料管理",
          "value": "A"
        },
        {
          "label": "傳統系統大多數是獨立運作",
          "value": "B"
        },
        {
          "label": "ERP 的導入如不配合企業流程再造（BPR）則不可能成功",
          "value": "C"
        },
        {
          "label": "傳統系統採用模組化的設計架構，可以新增功能來擴展系統 功能，系統容易擴展演化",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-46",
      "type": "multiple",
      "question": "關於 ERP 與 SCM 的比較，下列哪些正確？(複選)",
      "options": [
        {
          "label": "ERP 著重在整合企業內部流程，SCM 著重協調上下游產業",
          "value": "A"
        },
        {
          "label": "ERP 主要為規劃決策導向的決策支援系統（Decision  Support Systems, DSS），SCM 主要為交易導向的線上即時分析（Online Analytical Processing, OLTP）",
          "value": "B"
        },
        {
          "label": "ERP 著重在作業面，SCM 著重營運規劃面",
          "value": "C"
        },
        {
          "label": "ERP 著重在內部價值的提升，SCM 著重跨組織價值的提升",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "3-47",
      "type": "multiple",
      "question": "關於供應鏈策略的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "在推式供應鏈中，生產和配送決策乃是依據長期的預測來進行的，也就是計畫生產模式",
          "value": "A"
        },
        {
          "label": "在拉式供應鏈中，生產是依據實際顧客的需求來做決策，也就是接單後生產模式",
          "value": "B"
        },
        {
          "label": "在推拉式供應鏈中是指在供應鏈的某些階段採用推式策略，一般都會在供應鏈起始階段採用推式策略，而在其他階段採用拉式策略",
          "value": "C"
        },
        {
          "label": "在拉式供應鏈中容易產生長鞭效應  D",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-48",
      "type": "single",
      "question": "員工利用專家系統來訓練或透過資訊的分析與詮釋，使得員工改善其技能與知識等的知識轉移，是屬 Nonaka & Takuichi（1995）組織知識創造 SECI 模式哪一種？",
      "options": [
        {
          "label": "社會化（Socialization）",
          "value": "A"
        },
        {
          "label": "外化（Externalization）",
          "value": "B"
        },
        {
          "label": "組合化（Combination）",
          "value": "C"
        },
        {
          "label": "內化（Internalization）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-49",
      "type": "single",
      "question": "銀行將信用卡持卡人分為高消費族、保守族、新貴族、貴婦族等，是利用資料探勘（Data Mining）的哪一種技術？",
      "options": [
        {
          "label": "關聯分析（Association）",
          "value": "A"
        },
        {
          "label": "分類（Classification）",
          "value": "B"
        },
        {
          "label": "分群（Clustering）",
          "value": "C"
        },
        {
          "label": "順序（Sequence）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-50",
      "type": "multiple",
      "question": "下列哪些是巨量資料產生的三大動能 3V？(複選)",
      "options": [
        {
          "label": "資料的價值（Value）",
          "value": "A"
        },
        {
          "label": "資料流動速度（Velocity）",
          "value": "B"
        },
        {
          "label": "資料的不同來源（Variety）",
          "value": "C"
        },
        {
          "label": "資料量（Volume）",
          "value": "D"
        }
      ],
      "answer": [
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "3-51",
      "type": "single",
      "question": "關於企業 e 化的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "企業 e 化就是企業電子化或 e 化企業（e-Business）",
          "value": "A"
        },
        {
          "label": "企業利用 Internet、Intranet、Extranet 及各種整合的資訊系統",
          "value": "B"
        },
        {
          "label": "將企業內部價值鍊與外部顧客、供應商、策略伙伴間的各種交易相關的活動，進行連結、整合與再造",
          "value": "C"
        },
        {
          "label": "企業 e 化由於系統較多，會導致企業經營效率降低",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-52",
      "type": "multiple",
      "question": "企業 e 化的主要 IT 工具包含下列哪些？(複選)",
      "options": [
        {
          "label": "KM 知識管理（Knowledge Management）",
          "value": "A"
        },
        {
          "label": "CRM 客戶關係管理（Customer relationship management）",
          "value": "B"
        },
        {
          "label": "GS 遊戲系統（Game System）",
          "value": "C"
        },
        {
          "label": "ERP 企業資源規劃（Enterprise Resource Planning）  A",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "3-53",
      "type": "single",
      "question": "供應鏈策略可分成下列哪三大類型？",
      "options": [
        {
          "label": "推式供應鏈（Push-Based Supply Chain）、拉式供應鏈（Pull-Based Supply Chain）、混合式供應鏈（Push- Pull Based Supply Chain）",
          "value": "A"
        },
        {
          "label": "上方供應鏈（Above Supply Chain）、下方供應鏈（Underneath Supply Chain）、上下方供應鏈（Above- Underneath Based Supply Chain）",
          "value": "B"
        },
        {
          "label": "前台供應鏈（Reception Supply Chain）、後台供應鏈（Backstage Supply Chain）、混合式供應鏈（Push- Pull Based Supply Chain）",
          "value": "C"
        },
        {
          "label": "第一供應鏈（First Supply Chain）、第二供應鏈（Second  Supply Chain）、混合式供應鏈（Push- Pull Based Supply Chain）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-54",
      "type": "single",
      "question": "目前建置企業 BI 商業智慧（Business Intelligence）工具不包含下列哪一項？",
      "options": [
        {
          "label": "資料探查（Data Mining）",
          "value": "A"
        },
        {
          "label": "資料倉儲（Data Warehouse）",
          "value": "B"
        },
        {
          "label": "線上分析處理（On-Line Analytical Processing）",
          "value": "C"
        },
        {
          "label": "SSL 安全通訊階層協定（Secure Sockets Layer Protocol）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-55",
      "type": "multiple",
      "question": "ERP 企業資源規劃（Enterprise Resource Planning）主要六大核心模組為下列哪三項？(複選)",
      "options": [
        {
          "label": "生產與製造管理、人力資源管理",
          "value": "A"
        },
        {
          "label": "物料與庫存管理、財務會計管理",
          "value": "B"
        },
        {
          "label": "銷售與訂單管理、企業行政管理",
          "value": "C"
        },
        {
          "label": "資安與監控管理、企業行銷管理",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-56",
      "type": "single",
      "question": "下列哪一項不是行動行銷（Mobile Marketing）的主要行銷管道？",
      "options": [
        {
          "label": "簡訊傳遞（SMS/MMS）",
          "value": "A"
        },
        {
          "label": "行動網站（Mobile Web Site）",
          "value": "B"
        },
        {
          "label": "紙本文宣（Paper Propaganda）",
          "value": "C"
        },
        {
          "label": "智慧營手機下載行動應用程式（Mobile Application）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-57",
      "type": "multiple",
      "question": "ERP 企業資源規劃（Enterprise Resource Planning）進行系統導入時，有較高的失敗率，可能的失敗原因為下列哪些？(複選)",
      "options": [
        {
          "label": "ERP 造成組織強大的衝擊與抗拒",
          "value": "A"
        },
        {
          "label": "ERP 過高的擁有成本",
          "value": "B"
        },
        {
          "label": "有清楚的 ERP 策略目標與範圍",
          "value": "C"
        },
        {
          "label": "ERP 妨害組織的策略優勢",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "D"
      ]
    },
    {
      "id": "3-58",
      "type": "single",
      "question": "下列哪一項不是供應鏈（supply chain）常見的互抵效應（Trade- Off Effect）？",
      "options": [
        {
          "label": "行銷方式 vs 價格策略",
          "value": "A"
        },
        {
          "label": "生產批量 vs 少樣多量",
          "value": "B"
        },
        {
          "label": "服務水準 vs 庫存成本",
          "value": "C"
        },
        {
          "label": "運輸費用 vs 庫存成本",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-59",
      "type": "single",
      "question": "關於長鞭效應（Bullwhip Effect）的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "產品需求的資訊隨著在供應鏈（supply chain）成員間循序傳遞時，所產生的扭曲現象",
          "value": "A"
        },
        {
          "label": "是一種虛增效應（Demand Amplification）",
          "value": "B"
        },
        {
          "label": "供給短缺之預期心理",
          "value": "C"
        },
        {
          "label": "會造成供應商庫存變少與成本降低",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-60",
      "type": "single",
      "question": "ERP 企業資源規劃（Enterprise Resource Planning）與 SCM 供 應鏈管理（Supply Chain Management）都是企業電子化不可或缺的系統，關於兩者的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "ERP 著重跨組織價值提升",
          "value": "A"
        },
        {
          "label": "SCM 著重營運規劃面",
          "value": "B"
        },
        {
          "label": "ERP 支援範圍為組織內部的價值鏈流程",
          "value": "C"
        },
        {
          "label": "SCM 支援範圍為跨組織的供應鏈流程",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-61",
      "type": "single",
      "question": "關於行動商務的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "透過手持設備、行動應用程式與無線網路來支援企業與客戶之間的行銷",
          "value": "A"
        },
        {
          "label": "包括行動行銷、行動票卷、行動採購、行動商務",
          "value": "B"
        },
        {
          "label": "包含桌上型電腦與筆記型電腦上使用有線網路的行銷與採購",
          "value": "C"
        },
        {
          "label": "包括行動銀行、行動仲介、行動應用採購（In-APP Purchase）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-62",
      "type": "single",
      "question": "關於 EIP 企業入口網站的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "英文全稱為：Enterprise Information Portal",
          "value": "A"
        },
        {
          "label": "整合了企業內外部各種結構與非結構、靜態與動態的資訊與知識",
          "value": "B"
        },
        {
          "label": "利用應用程式介面，強調以非個人化的需求來呈現",
          "value": "C"
        },
        {
          "label": "也被稱為 EKP 企業知識入口網站 Enterprise Knowledge Portal",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-63",
      "type": "multiple",
      "question": "企業內部的知識，可以概分為下列哪三類？(複選)",
      "options": [
        {
          "label": "結構化知識",
          "value": "A"
        },
        {
          "label": "半結構化知識",
          "value": "B"
        },
        {
          "label": "內隱知識",
          "value": "C"
        },
        {
          "label": "通俗知識",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-64",
      "type": "single",
      "question": "不具意義或目的之文字或數據，我們在知識的階層架構裡，會將其歸類到下列哪一個階層？",
      "options": [
        {
          "label": "資訊（Information）",
          "value": "A"
        },
        {
          "label": "資料（Data）",
          "value": "B"
        },
        {
          "label": "智慧（Wisdom）",
          "value": "C"
        },
        {
          "label": "知識（Knowledge）",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-65",
      "type": "single",
      "question": "下列哪一項是由美國著名管理諮詢公司於 1990 年提出的一個概念，其基本想法為建構一個整合企業內部營運資訊的系統平台，以做為企業內部管理及決策資訊來源的管理平台？",
      "options": [
        {
          "label": "知識管理（Knowledge Management）",
          "value": "A"
        },
        {
          "label": "供應鏈管理（Supply Chain Management）",
          "value": "B"
        },
        {
          "label": "物料需求規劃（Material Requirement Planning）",
          "value": "C"
        },
        {
          "label": "企業資源規劃（Enterprise Resource Planning）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-66",
      "type": "single",
      "question": "基於資訊回饋困難與前置時間的延遲，在傳統供應鏈中容易造成重複訂購或臨時取消訂單的決策，而產生需求放大（或縮小）的效果。此現象稱為下列哪一項？",
      "options": [
        {
          "label": "成本加成理論",
          "value": "A"
        },
        {
          "label": "長尾理論",
          "value": "B"
        },
        {
          "label": "長鞭效應",
          "value": "C"
        },
        {
          "label": "浮動訂單理論",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-67",
      "type": "multiple",
      "question": "關於供應鏈策略的敘述，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "變動性較低、需求固定的市場，可採用拉式供應鏈",
          "value": "A"
        },
        {
          "label": "推式供應鏈中，生產和配送決策是預測市場的需求",
          "value": "B"
        },
        {
          "label": "接單後生產模式為拉式供應鏈",
          "value": "C"
        },
        {
          "label": "目前可先準備半成品，等顧客下單後再進行生產為推拉式供應鏈",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "D"
      ]
    },
    {
      "id": "3-68",
      "type": "single",
      "question": "振隆紙業在協助客戶研發設計時，同時以網路設計溝通工具，加強設計深度及縮短整體設計時間，並適時提供包裝物流分析，降低客戶物流成本，這是屬於供應鏈管理的下列哪一項特色？",
      "options": [
        {
          "label": "洞察消費需求",
          "value": "A"
        },
        {
          "label": "減少長鞭效應",
          "value": "B"
        },
        {
          "label": "非核心業務外包",
          "value": "C"
        },
        {
          "label": "協同整合",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-69",
      "type": "single",
      "question": "透過供應鏈成員的充分合作，將整體供應鏈整合成單一虛擬企業， 共同制定供應鏈生產的策略、數量與其他的內容，以解決長鞭效應所造成需求變動的問題。這是屬於解決長鞭效應的下列哪一種面 ？",
      "options": [
        {
          "label": "資訊分享面",
          "value": "A"
        },
        {
          "label": "顧客需求面",
          "value": "B"
        },
        {
          "label": "企業溝通面",
          "value": "C"
        },
        {
          "label": "供應鏈整合面",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-70",
      "type": "single",
      "question": "Nonaka & Takeuchi（1995 年）認為有四種不同的知識創造模式，其中「由內隱知識到內隱知識，藉由分享經驗而達到創造內隱知識的過程」指的是下列哪一項模式？",
      "options": [
        {
          "label": "外化（Externalization）",
          "value": "A"
        },
        {
          "label": "組合化（Combination）",
          "value": "B"
        },
        {
          "label": "內化（Internalization）",
          "value": "C"
        },
        {
          "label": "社會化（Socialization）",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-71",
      "type": "single",
      "question": "Nonaka & Takeuchi（1995 年）認為有四種不同的知識創造模式，其中「以語言、故事傳達知識，或將其製作文件手冊，將外顯知識轉換成內隱知識」指的是下列哪一項模式？",
      "options": [
        {
          "label": "組合化",
          "value": "A"
        },
        {
          "label": "外化",
          "value": "B"
        },
        {
          "label": "內化",
          "value": "C"
        },
        {
          "label": "社會化",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-72",
      "type": "single",
      "question": "如附圖所示，關於於 Arthur Anderson 所提出的組織知識分享的公式，下列哪一項錯誤？",
      "media": {
        "type": "table",
        "data": [
            ["組織知識分享公式：K = (P + I) ^ S"],
        ]
      },
      "options": [
        {
          "label": "K 代表組織知識（Organizational Knowledge）",
          "value": "A"
        },
        {
          "label": "S 代表技能（Skill）",
          "value": "B"
        },
        {
          "label": "I 代表資訊（Information）",
          "value": "C"
        },
        {
          "label": "P 代表人員（People）",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-73",
      "type": "single",
      "question": "比較線上交易處理（OLTP）與線上分析處理（OLAP），下列敘述哪一項錯誤？",
      "options": [
        {
          "label": "OLTP 設計方式為交易導向；OLAP 設計方式為主題導向",
          "value": "A"
        },
        {
          "label": "OLTP 資料可能會被刪除或覆蓋；OLAP 資料會被永久保存，以利進行比較分析",
          "value": "B"
        },
        {
          "label": "OLTP 主要使用者為業務處理人員；OLAP 主要使用者為高階決策分析人員",
          "value": "C"
        },
        {
          "label": "OLTP 主要支援決策分析；OLAP 主要支援交易處理活動",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-74",
      "type": "single",
      "question": "關於 ERP 系統發展的演進歷程，下列哪一項正確？",
      "options": [
        {
          "label": "1960 Material Requirement Planning → 1970 Manufacturing Resource Planning → 1980Enterprise Resource Planning → 1990 Extended ERP",
          "value": "A"
        },
        {
          "label": "1960 Manufacturing Resource Planning → 1970 Material Requirement Planning → 1980Enterprise Resource Planning → 1990 Extended ERP",
          "value": "B"
        },
        {
          "label": "1970 Material Requirement Planning → 1980 Manufacturing Resource Planning → 1990 Enterprise Resource Planning → 2000 Extended ERP",
          "value": "C"
        },
        {
          "label": "1970 Manufacturing Resource Planning → 1980 Material Requirement Planning → 1990 Enterprise Resource Planning → 2000 Extended ERP",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-75",
      "type": "single",
      "question": "下列哪一個不是 ERP 引進的關鍵成功因素？",
      "options": [
        {
          "label": "強而有力的領導者與充足的預算",
          "value": "A"
        },
        {
          "label": "選出市場中最好的 ERP 系統",
          "value": "B"
        },
        {
          "label": "高階主管的強力支時",
          "value": "C"
        },
        {
          "label": "提供完善的訓練與變革管理",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-76",
      "type": "single",
      "question": "學者 Reinartz and Kumar 提出顧客關係分群來建立顧客關係，下列敘述四種關係族群所對應的關係管理方式哪一項正確？",
      "options": [
        {
          "label": "花蝴蝶：設法提高他們的獲利性，在交易時設法索取較高的費用，必要時應該放棄",
          "value": "A"
        },
        {
          "label": "忠實朋友：多多向此類的顧客促銷其他相關產品，盡可能地從顧客身上獲取利潤",
          "value": "B"
        },
        {
          "label": "陌生人：停止對他們作投資，且盡量在交易中獲取利潤",
          "value": "C"
        },
        {
          "label": "戀棧的人：在不造成顧客反感的情況下維繫他們的關係",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-77",
      "type": "single",
      "question": "若花費 300 元投放廣告能吸引一個客戶進到店裡消費，而在 10 年裡，他平均每年購買 1 件上衣，每件上衣的利潤是 250 元，請問淨顧客終身價值多少？",
      "options": [
        {
          "label": "2,000 元",
          "value": "A"
        },
        {
          "label": "2,200 元",
          "value": "B"
        },
        {
          "label": "2,500 元",
          "value": "C"
        },
        {
          "label": "2,800 元",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-78",
      "type": "single",
      "question": "在全球化動態競爭的環境下，供應鏈充滿了許多不確定性，造成了許多的問題，下列哪一項錯誤？",
      "options": [
        {
          "label": "存貨成本太高",
          "value": "A"
        },
        {
          "label": "長鞭效應",
          "value": "B"
        },
        {
          "label": "反應速度太慢",
          "value": "C"
        },
        {
          "label": "訂單履行的週期時間太短",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-79",
      "type": "single",
      "question": "長鞭效應發生的原因主要不包括下列哪一個？",
      "options": [
        {
          "label": "訂貨前置時間太短",
          "value": "A"
        },
        {
          "label": "價格波動",
          "value": "B"
        },
        {
          "label": "批次訂購",
          "value": "C"
        },
        {
          "label": "供給短缺的預期心理",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-80",
      "type": "single",
      "question": "關於供應鏈策略比較，下列哪一項錯誤？",
      "options": [
        {
          "label": "推式供應鏈適合需求變動小，拉式供應鏈適合需求變動大",
          "value": "A"
        },
        {
          "label": "推式供應鏈易產生長鞭效應",
          "value": "B"
        },
        {
          "label": "推式供應鏈生產配送決策之驅動是靠需求，而拉式供應鏈則是靠預測",
          "value": "C"
        },
        {
          "label": "推式供應鏈生產效率高，拉式供應鏈生產效率小",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-81",
      "type": "multiple",
      "question": "零售商與供應商策略聯盟關係（Retailer Supplier Partnership, RSP），依照合作緊密度可分為下列哪些類型？(複選)",
      "options": [
        {
          "label": "快速回應策略",
          "value": "A"
        },
        {
          "label": "持續補貨策略",
          "value": "B"
        },
        {
          "label": "供應商管理存貨策略",
          "value": "C"
        },
        {
          "label": "零售商訂貨策略",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-82",
      "type": "single",
      "question": "下列哪一個不是 META Group 提出協同商務營運模式？",
      "options": [
        {
          "label": "生產協同商務",
          "value": "A"
        },
        {
          "label": "行銷與銷售協同商務",
          "value": "B"
        },
        {
          "label": "採購協同商務",
          "value": "C"
        },
        {
          "label": "規劃與預測協同商務",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-83",
      "type": "single",
      "question": "關於行動商務的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "行動商務是指透過行動載具來執行各種不同的經濟交易活動，將買、賣商品和服務導入「隨時」與「隨地」的模式",
          "value": "A"
        },
        {
          "label": "行動商務的應用包括行動廣告、簡訊、行動搜尋引擎與行動版網站、應用程式與遊戲、QR Code 掃描、行動支付及行動銀行等",
          "value": "B"
        },
        {
          "label": "促成行動商務快速成長的主要原因是行動裝置的普及與對行動商務的接受度高",
          "value": "C"
        },
        {
          "label": "安全性是行動商務業者贏得顧客信任的基本原則，必須在使用個人資料時，兼顧隱私保護，還好目前台灣已有專法管理行動行銷與商務了",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-84",
      "type": "multiple",
      "question": "商業智慧（Business Intelligence, BI）是一個透過資料分析來實現商業價值的過程，含蓋範圍有下列哪些？(複選)",
      "options": [
        {
          "label": "資料倉儲技術",
          "value": "A"
        },
        {
          "label": "線上分析處理技術",
          "value": "B"
        },
        {
          "label": "資料探勘",
          "value": "C"
        },
        {
          "label": "知識管理",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-85",
      "type": "single",
      "question": "下面哪一項不是 Mckinsey （2018）報告指出，國際市場對商業智慧之大數據資料分析應用提出的重點領域？",
      "options": [
        {
          "label": "顧客體驗",
          "value": "A"
        },
        {
          "label": "行銷管理",
          "value": "B"
        },
        {
          "label": "財務管理",
          "value": "C"
        },
        {
          "label": "營運管理",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-86",
      "type": "single",
      "question": "商業智慧的概念是知識與商業緊密的結合，並且根據需要進行相關數據的處理和知識呈現的過程，哪一個不是常見的分析？",
      "options": [
        {
          "label": "點擊流分析",
          "value": "A"
        },
        {
          "label": "內部分析",
          "value": "B"
        },
        {
          "label": "客戶分析",
          "value": "C"
        },
        {
          "label": "供應鏈管理",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-87",
      "type": "single",
      "question": "Gilbert & Gordey-Hayes（1996）認為知識移轉的過程五個階段，下列哪一項正確？",
      "data": [
        ["(1) 取得", "(2) 接受", "(3) 溝通", "(4) 應用", "(5) 同化"]
      ],
      "options": [
        {
          "label": "13254",
          "value": "A"
        },
        {
          "label": "13245",
          "value": "B"
        },
        {
          "label": "13425",
          "value": "C"
        },
        {
          "label": "13452",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-88",
      "type": "single",
      "question": "下列哪一項不是企業在導入「企業資源規劃」（Enterprise resource planning，ERP）時，會面臨到的挑戰？",
      "options": [
        {
          "label": "ERP 導入成本過高",
          "value": "A"
        },
        {
          "label": "ERP 會造成顧客強大的反抗",
          "value": "B"
        },
        {
          "label": "ERP 會妨害組織的策略優勢",
          "value": "C"
        },
        {
          "label": "ERP 系統與原先組織內系統的融合",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-89",
      "type": "single",
      "question": "某公司根據預測資料來準備零組件，再根據顧客需求來進行裝配工作，此公司使用下列哪一種供應鏈方式？",
      "options": [
        {
          "label": "協同供應鏈",
          "value": "A"
        },
        {
          "label": "推式供應鏈",
          "value": "B"
        },
        {
          "label": "拉式供應鏈",
          "value": "C"
        },
        {
          "label": "推拉式供應鏈",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-90",
      "type": "single",
      "question": "關於資料倉儲（data warehouse）的特性，下列哪一項錯誤？",
      "options": [
        {
          "label": "資料倉儲內容是由企業內部資料庫以及外部資料庫經由 ETL（Extract, Transform, Load）程序而來",
          "value": "A"
        },
        {
          "label": "為了支援多維度分析，資料倉儲的資料模式包含事實資料表（ Fact Table），以及維度資料表（Dimension Table）",
          "value": "B"
        },
        {
          "label": "資料倉儲的事實資料表（ Fact Table）主要是用來記載維度屬性與衡量屬性，而維度資料表（Dimension Table）是用來記載更詳細的維度屬性",
          "value": "C"
        },
        {
          "label": "資料倉儲依據不同部門需求建置數個較小型且分散的資料倉儲，稱之為資料市集",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-91",
      "type": "single",
      "question": "商店可以根據消費者的人口統計變數以及消費行為，將消費者分為高消費群、低消費群、流失顧客群等類別，上述說法是使用下列資料探勘的哪一種技術？",
      "options": [
        {
          "label": "關聯（Association）分析",
          "value": "A"
        },
        {
          "label": "分類（classification）分析",
          "value": "B"
        },
        {
          "label": "順序（Sequence）分析",
          "value": "C"
        },
        {
          "label": "分群（clustering）分析",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-92",
      "type": "single",
      "question": "關於長鞭效應（Bullwhip effect）敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "長鞭效應指產品資訊隨著供應鏈成員間的循序傳遞而產生的扭曲現象",
          "value": "A"
        },
        {
          "label": "長鞭效應形成的原因在需求預測、訂貨的前置時間過短、批次訂貨、價格波動，以及供給短缺的預期心理",
          "value": "B"
        },
        {
          "label": "長鞭效應指中上游製造廠商所面對的訂單變異遠高於實際需求的變異性",
          "value": "C"
        },
        {
          "label": "供應鏈管理系統能降低長鞭效應的影響",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-93",
      "type": "multiple",
      "question": "關於資料倉儲（data warehouse）的敘述，下列哪些正確？(複選)",
      "options": [
        {
          "label": "資料倉儲中事實資料表和維度資料表之間所形成的關係，稱之為資料庫綱要",
          "value": "A"
        },
        {
          "label": "多維度資料模型的綱要主要分為兩種型式：星狀綱要、雪花綱要",
          "value": "B"
        },
        {
          "label": "星狀綱要是以維度資料表為中心呈現放射狀之型式",
          "value": "C"
        },
        {
          "label": "雪花綱要具備比較低的正規化形式，可以減少資料的重複及不一致性，但是在執行時其效率比較高，因此在實務上採用雪花綱要比較普遍  CD",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B"
      ]
    },
    {
      "id": "3-94",
      "type": "multiple",
      "question": "關於供應鏈（supply chain）的敘述，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "SCOR 模式（Supply Chain Operation Reference）是供應鏈運作參考模式，主要流程為分析供應鏈情況，將公司績效 進行量化再與其他同業標竿公司進行比較，最後確立改進方 法",
          "value": "A"
        },
        {
          "label": "供應商接收零售商的銷售資料來同步化生產與庫存活動，稱之為快速回應策略（Quick Response Strategy, QR）",
          "value": "B"
        },
        {
          "label": "供應商接收零售商的銷售資料，並依據事先約定的存貨水準來出貨給零售商，稱之為供應商管理存貨略（Vender- Managed Inventory Strategy, VMI）",
          "value": "C"
        },
        {
          "label": "供應商接收零售商的銷售資料，並依據事先約定的服務水準來決定商品的存貨水準與存貨政策，稱之為持續補貨策略（Continuous Replenishment  Strategy, CR）",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "3-95",
      "type": "multiple",
      "question": "關於專家系統（Expert System）的敘述，下列哪些錯誤？(複選)",
      "options": [
        {
          "label": "專家系統的知識庫儲存專家的內隱知識與經驗",
          "value": "A"
        },
        {
          "label": "專家系統包含擷取知識工具、知識庫、推理引擎三大元件",
          "value": "B"
        },
        {
          "label": "專家系統推理引擎可分為向前推理（Forward Chaining）與 向後推理（Backward Chaining）兩種方法，前者指藉由目 標尋求支持的事實，後者指由輸入事實啟動法則再得到結論",
          "value": "C"
        },
        {
          "label": "專家系統可提供全方位跨領域的知識來解決問題",
          "value": "D"
        }
      ],
      "answer": [
        "C",
        "D"
      ]
    },
    {
      "id": "3-96",
      "type": "single",
      "question": "導入 ERP 系統若遭遇員工抗拒，屬於哪一項管理問題？",
      "options": [
        {
          "label": "策略管理",
          "value": "A"
        },
        {
          "label": "專案規劃管理",
          "value": "B"
        },
        {
          "label": "變革管理",
          "value": "C"
        },
        {
          "label": "品質管理",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-97",
      "type": "single",
      "question": "NIKE 廠商在開發球鞋時，本身不參與產品設計與生產，屬於哪一種模式？",
      "options": [
        {
          "label": "OCM",
          "value": "A"
        },
        {
          "label": "ODM",
          "value": "B"
        },
        {
          "label": "OBM",
          "value": "C"
        },
        {
          "label": "OEM",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-98",
      "type": "multiple",
      "question": "下列哪些是 ERP 軟體供應商？(複選)",
      "options": [
        {
          "label": "SAP",
          "value": "A"
        },
        {
          "label": "ORACLE",
          "value": "B"
        },
        {
          "label": "鼎新",
          "value": "C"
        },
        {
          "label": "PeopleSoft",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    {
      "id": "3-99",
      "type": "single",
      "question": "關於 ERP 系統的特性，下列哪些正確？(複選)",
      "options": [
        {
          "label": "模組化",
          "value": "A"
        },
        {
          "label": "企業最佳典範",
          "value": "B"
        },
        {
          "label": "系統整合",
          "value": "C"
        },
        {
          "label": "成本低廉",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-100",
      "type": "single",
      "question": "生產線根據顧客需求，接單後再生產稱之為下列哪一項？",
      "options": [
        {
          "label": "ATO",
          "value": "A"
        },
        {
          "label": "BTO",
          "value": "B"
        },
        {
          "label": "CTO",
          "value": "C"
        },
        {
          "label": "GTO",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-101",
      "type": "single",
      "question": "鴻海過去專注於消費性電子產品的代工，其經營模式稱為下列哪一項？",
      "options": [
        {
          "label": "OCM",
          "value": "A"
        },
        {
          "label": "ODM",
          "value": "B"
        },
        {
          "label": "OBM",
          "value": "C"
        },
        {
          "label": "OEM",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-102",
      "type": "multiple",
      "question": "下列哪些為外顯知識（explicit knowledge）？(複選)",
      "options": [
        {
          "label": "課堂講義",
          "value": "A"
        },
        {
          "label": "技工的修車經驗",
          "value": "B"
        },
        {
          "label": "採購流程手冊",
          "value": "C"
        },
        {
          "label": "廣告創意",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C"
      ]
    },
    {
      "id": "3-103",
      "type": "single",
      "question": "下列哪一項不是顧客輪廓的範圍？",
      "options": [
        {
          "label": "年齡",
          "value": "A"
        },
        {
          "label": "顧客偏好",
          "value": "B"
        },
        {
          "label": "交易紀錄",
          "value": "C"
        },
        {
          "label": "信用卡帳號",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-104",
      "type": "single",
      "question": "累計從服務顧客所獲得利潤，扣除其服務成本，稱之為下列哪一項？",
      "options": [
        {
          "label": "顧客終身價值（customer lifetime value）",
          "value": "A"
        },
        {
          "label": "顧客發展（customer development）",
          "value": "B"
        },
        {
          "label": "顧客贏取率（customer acquisition）",
          "value": "C"
        },
        {
          "label": "顧客保留率（customer retention）",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-105",
      "type": "multiple",
      "question": "線上學習的優點包含下列哪些？(複選)",
      "options": [
        {
          "label": "克服地理限制",
          "value": "A"
        },
        {
          "label": "若有疫情影響，可避免人際接觸",
          "value": "B"
        },
        {
          "label": "可重複觀看與複習",
          "value": "C"
        },
        {
          "label": "參與度高",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-106",
      "type": "single",
      "question": "行動商務中，手機定位消費者位置並回饋合適的服務稱為下列哪一項？",
      "options": [
        {
          "label": "GPS Global Positioning System）",
          "value": "A"
        },
        {
          "label": "體感科技（motion sensitive technology）",
          "value": "B"
        },
        {
          "label": "適地性服務（location based service）",
          "value": "C"
        },
        {
          "label": "GSM （Global System for Mobile Communications）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-107",
      "type": "single",
      "question": "透過攝影機的辨識與程式結合，讓設定好的圖片立體呈現於攝影鏡頭前，這樣的技術稱為下列哪一項？",
      "options": [
        {
          "label": "線上 App",
          "value": "A"
        },
        {
          "label": "擴增實境（augmented reality）",
          "value": "B"
        },
        {
          "label": "虛擬實境（virtual reality）",
          "value": "C"
        },
        {
          "label": "模擬運算",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-108",
      "type": "single",
      "question": "下列哪一項不是行動商務能提供業務協助的對象？",
      "options": [
        {
          "label": "倉儲管理人員",
          "value": "A"
        },
        {
          "label": "物流配送人員",
          "value": "B"
        },
        {
          "label": "保險業務人員",
          "value": "C"
        },
        {
          "label": "遊戲體驗人員",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-109",
      "type": "single",
      "question": "企業資源規劃系統ERP Enterprise Resource Planning System ）會支援企業內部四個重要流程，下列哪一項不是在這四個重要流程裡？",
      "options": [
        {
          "label": "安全與效率流程",
          "value": "A"
        },
        {
          "label": "銷售與行銷流程",
          "value": "B"
        },
        {
          "label": "製造與生產流程",
          "value": "C"
        },
        {
          "label": "財務與會計流程",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-110",
      "type": "single",
      "question": "鼎新電腦認為企業在導入企業資源規劃系統 ERP（Enterprise Resource Planning System）時，有三種不同的導入模式，下列哪一種模式的敘述錯誤？",
      "options": [
        {
          "label": "快速導入：企業依據當前的管理或作業需求，先導入 ERP系統的部分模組，將來如果有需要時再進行其他功能模組的導入，也可以分散成本與風險",
          "value": "A"
        },
        {
          "label": "傳統式導入：企業所有的事業單位或部門，採用傳統應用系統，各系統各自獨立管理，依各部門主管自行決定導入時間與功能",
          "value": "B"
        },
        {
          "label": "全面性導入：企業將現有的系統全面淘汰，直接改用全新的ERP 系統來連結全部的事業部門或相關部門",
          "value": "C"
        },
        {
          "label": "漸進式導入：由一個事業單位或功能部門，將所需要的功能模組做一次性的導入，待其系統運作順暢後，再進行全面性的導入",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-111",
      "type": "multiple",
      "question": "企業在導入企業資源規劃系統 ERP Enterprise Resource Planning System ）時，往往會造成組織強大的衝擊與抗拒，下列敘述哪些正確？(複選)",
      "options": [
        {
          "label": "ERP 常常與組織原有的流程不同，企業必須配合最佳實務流程來修改現有的作業流程，可能帶來組織流程面的衝擊",
          "value": "A"
        },
        {
          "label": "ERP 由於僅支援各獨立的功能，無法與其他系統整合，容易引起基層操作人員難以適應",
          "value": "B"
        },
        {
          "label": "ERP 是強調中央集權控管的系統，如果企業原本是分權式組織結構與文化，可能帶來組織結構面的衝擊",
          "value": "C"
        },
        {
          "label": "ERP 引進後員工的工作方式、責任、角色都會因此而改變，可能帶來員工的抗拒",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "C",
        "D"
      ]
    },
    {
      "id": "3-112",
      "type": "single",
      "question": "關於供應鏈管理SCM Supply Chain Management System）的定義敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "讓商品的生產可以控制在最多的數量，在最快的時間配送到最遠的地點，以提高整體供應鏈系統的運行效能",
          "value": "A"
        },
        {
          "label": "一個跨組織的大型、模組化、整合的資訊系統",
          "value": "B"
        },
        {
          "label": "用來支援企業供應鏈相關活動的規劃、管理與執行，並支援供應鏈上下游成員的資訊分享與協同作業",
          "value": "C"
        },
        {
          "label": "利用一套方法來有效率地整合供應商、製造商、倉儲及零售商店",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-113",
      "type": "single",
      "question": "完整顧客關係管理系統CRM Customer Relationship Management System ）的技術，應包含下列哪幾大部分？(複選)",
      "options": [
        {
          "label": "資料探勘（Data Mining）",
          "value": "A"
        },
        {
          "label": "客服中心（Call Center）",
          "value": "B"
        },
        {
          "label": "資料倉儲（Data Warehouse）",
          "value": "C"
        },
        {
          "label": "資料驗算（Data Check）",
          "value": "D"
        }
      ],
      "answer": [
        "A",
        "B",
        "C"
      ]
    },
    {
      "id": "3-114",
      "type": "single",
      "question": "下列哪一項不是屬於商業智慧BI（Business Intelligence ）的定義敘述？",
      "options": [
        {
          "label": "是一個透過資料分析實現商業價值的過程，以幫助企業決策為目的技術及其應用",
          "value": "A"
        },
        {
          "label": "涵蓋了資料倉儲（Data Warehouse）技術、線上分析處理（OLAP Online Analytical Processing ）技術、資料探勘（Data Mining）和知識呈現（Enterprise Reporting）技術",
          "value": "B"
        },
        {
          "label": "將企業現有的資料轉化為知識，幫助企業做出經營管理決策的工具",
          "value": "C"
        },
        {
          "label": "分屬不同國境的交易主體，通過電子商務的手段，將傳統進出口貿易中的展示、洽談和成交環節電子化",
          "value": "D"
        }
      ],
      "answer": ["D"]
    },
    {
      "id": "3-115",
      "type": "single",
      "question": "關於於知識工作系統的敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "利用資訊科技的技術來協助知識工作者更有效的創造新知識",
          "value": "A"
        },
        {
          "label": "提供 SSL（Secure Sockets Layer Protocol）安全通訊階層協定，來提升知識工作者的系統安全",
          "value": "B"
        },
        {
          "label": "提供文件管理能力、溝通與搜尋功能，來降低知識工作者的心力負擔",
          "value": "C"
        },
        {
          "label": "提供強大的圖表功能、分析工具、運算能力，來降低知識工作者的心力負擔",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-116",
      "type": "single",
      "question": "知識工作者可以使用知識工作系統，更有效率地創造新知識，下列哪一個系統不屬於知識工作系統的定義範疇？",
      "options": [
        {
          "label": "電腦輔助設計系統",
          "value": "A"
        },
        {
          "label": "防毒軟體系統",
          "value": "B"
        },
        {
          "label": "虛擬實境系統",
          "value": "C"
        },
        {
          "label": "支援理財專員的投資組合模擬系統",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-117",
      "type": "single",
      "question": "知識的架構階層分成四種重要的元素，底下選項由左而右分別代表由底層到最上層的順序，下列哪一項的順序正確？",
      "options": [
        {
          "label": "資訊 → 資料 → 知識 → 智慧",
          "value": "A"
        },
        {
          "label": "資料 → 資訊 → 知識 → 智慧",
          "value": "B"
        },
        {
          "label": "智慧 → 知識 → 資訊 → 資料",
          "value": "C"
        },
        {
          "label": "資料 → 資訊 → 智慧 → 知識",
          "value": "D"
        }
      ],
      "answer": ["B"]
    },
    {
      "id": "3-118",
      "type": "single",
      "question": "知識轉移的五階段順序，下列哪一項敘述正確？",
      "options": [
        {
          "label": "第一階段：取得（Acquisition）、第二階段：溝通（Communication）、第三階段：應用（Application）、第四階段：同化（Assimilation）、第五階段：接受（Acceptanc）",
          "value": "A"
        },
        {
          "label": "第一階段：溝通（Communication）、第二階段：取得（Acquisition）、第三階段：接受（Acceptanc）、第四階段：應用（Application）、第五階段：同化（Assimilation）",
          "value": "B"
        },
        {
          "label": "第一階段：取得（Acquisition）、第二階段：溝通（Communication）、第三階段：應用（Application）、第四階段：接受（Acceptanc）、第五階段：同化（Assimilation）",
          "value": "C"
        },
        {
          "label": "第一階段：取得（Acquisition）、第二階段：應用（Application）、第三階段：溝通（Communication）、第四階段：同化（Assimilation）、第五階段：接受（Acceptanc）",
          "value": "D"
        }
      ],
      "answer": ["C"]
    },
    {
      "id": "3-119",
      "type": "single",
      "question": "關於協同商務（Collaborative Commerce）的定義敘述，下列哪一項錯誤？",
      "options": [
        {
          "label": "協同商務的推動有助於體系下游之局部協同作業對象，用間接影響的方式，針對商品出貨階段的效能進行提升",
          "value": "A"
        },
        {
          "label": "指企業透過新的科技例如網際網路以與其他企業，包括供應商、合作夥伴企業等實行合作，達成在業務作業及決策過程中的共享，以共同開發產品、市場、服務等，以提高企業的競爭力",
          "value": "B"
        },
        {
          "label": "是一個新的商業策略模式，可使供應鏈上的各種不同成員進行協同產品設計、行銷、物流、服務等",
          "value": "C"
        },
        {
          "label": "提高了供應鏈整體上的透明度，改善商業進行的速度，也可說是產品從頭至尾的整個流程",
          "value": "D"
        }
      ],
      "answer": ["A"]
    },
    {
      "id": "3-120",
      "type": "single",
      "question": "協同商務是一個新的商業策略模式，可分為四大領域，下列哪一個領域的敘述錯誤？",
      "options": [
        {
          "label": "採購協同商務：數家廠商或數個部門結合起來大量的購買某些產品或服務，希望能降低採購成本",
          "value": "A"
        },
        {
          "label": "設計協同商務：涵蓋一切與非連續性製造產品（Discrete Manufacture Product）及組態生產（Configured to CTO）產品",
          "value": "B"
        },
        {
          "label": "行銷／銷售協同商務：轉銷商、配銷商等通路夥伴間的協同商務，著重彼此的資訊共有用以及訂單／價格／品牌管理...等流程的共用，並提供可供承諾的資訊",
          "value": "C"
        },
        {
          "label": "消費協同商務：針對消費者端提出的個別需求，進行預判如何解決與回覆",
          "value": "D"
        }
      ],
      "answer": ["D"]
    }
  ];

// 初始化變量
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval; // 用於儲存 setInterval 的 ID
let startTime;     // 儲存測驗開始時間
let totalSeconds;  // 改為只宣告，不初始化
let markedQuestions = new Set(); // 用 Set 儲存標記問題的索引 (0-based)

// DOM元素
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const reviewContainer = document.getElementById('review-container');
const questionType = document.getElementById('question-type');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');
const reviewList = document.getElementById('review-list');
const scoreDisplay = document.getElementById('score-display');
const timeTaken = document.getElementById('time-taken');
const resultsSummary = document.getElementById('results-summary');
const mediaContainer = document.getElementById('media-container'); // Add a container for media
const historyBtn = document.getElementById('historyBtn'); 
const historyContainer = document.getElementById('history-container'); 
const closeHistoryBtn = document.createElement('button');  // 關閉按鈕
const homeBtn = document.getElementById('homeBtn'); // "回到首頁" 按鈕的 DOM 元素
const homeBtnFromResults = document.getElementById('homeBtnFromResults'); // "回到首頁" 按鈕 (results 頁面)
const jumpToSelect = document.getElementById('jumpToSelect');
const jumpBtn = document.getElementById('jumpBtn');
const jumpControls = document.querySelector('.jump-controls');
const jumpToInput = document.getElementById('jumpToInput'); // 輸入框參照
const jumpErrorMsg = document.getElementById('jumpErrorMsg'); // 錯誤訊息參照
const markBtn = document.getElementById('markBtn'); // 標記按鈕
const markedQuestionsContainer = document.getElementById('marked-questions-container'); // 標記容器
const markedQuestionsList = document.getElementById('marked-questions-list'); // 標記列表
const jumpMarkControls = document.querySelector('.jump-mark-controls'); // 包裹跳題和標記的容器


// 事件回傳器
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', restartQuiz);
backToResultsBtn.addEventListener('click', backToResults);
closeHistoryBtn.textContent = '關閉';
closeHistoryBtn.id = 'closeHistoryBtn';  // 設定 ID，方便 CSS 設定樣式
closeHistoryBtn.addEventListener('click', closeHistory);
historyBtn.addEventListener('click', loadHistory); 
homeBtn.addEventListener('click', goHome); 
homeBtnFromResults.addEventListener('click', goHome); // 事件監聽器 (results 頁面)
markBtn.addEventListener('click', toggleMarkQuestion); // 標記按鈕的事件監聽

// 從題庫中隨機抽取50題，如果題目數量不足50，則返回所有題目
function getRandomQuestions(count) {
    // 合併之前定義的題目數據和的題目
    const allQuestions = [...questionDatabase, ...additionalQuestions];

    // 如果題目数量不足count，直接返回所有題目
    if (allQuestions.length <= count) {
        return [...allQuestions];
    }

    // 否則隨機抽取count個題目
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 填充跳題下拉選單 (顯示數字 1-50)
function populateJumpDropdown() {
    if (!jumpToSelect) return; // 安全檢查
    jumpToSelect.innerHTML = ''; // 清空舊選項
    quizQuestions.forEach((_, index) => { // 只需索引
        const option = document.createElement('option');
        option.value = index; // 儲存 0-based 索引
        option.textContent = index + 1; // 顯示 1-based 題號
        jumpToSelect.appendChild(option);
    });
}

// 處理跳題邏輯 (輸入框優先，非阻塞錯誤)
function handleJump() {
    // 在開始處理前清除上一次的錯誤訊息
    if (jumpErrorMsg) {
        jumpErrorMsg.textContent = ''; // 清空文字
        jumpErrorMsg.style.display = 'none'; // 隱藏元素
    }

    let targetIndex = -1;

    // 1. 優先處理輸入框
    const inputValue = jumpToInput ? jumpToInput.value.trim() : '';
    if (inputValue !== '') {
        const inputNumber = parseInt(inputValue, 10);
        if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= quizQuestions.length) {
            targetIndex = inputNumber - 1;
        } else {
            // --- 使用頁面元素顯示錯誤 ---
            if (jumpErrorMsg) {
                jumpErrorMsg.textContent = `請輸入 1 到 ${quizQuestions.length} 之間的有效題號！`;
                jumpErrorMsg.style.display = 'inline'; // 或 'block'
            }
            // --- 結束錯誤顯示 ---
            if (jumpToInput) {
                jumpToInput.focus();
                jumpToInput.select();
            }
            return; // 停止後續處理
        }
    } else if (jumpToSelect) {
        // 2. 如果輸入框為空，則使用下拉選單的選擇
        const selectedDropdownIndex = parseInt(jumpToSelect.value, 10);
         if (!isNaN(selectedDropdownIndex) && selectedDropdownIndex >= 0 && selectedDropdownIndex < quizQuestions.length) {
             targetIndex = selectedDropdownIndex;
        }
    }

    // 如果找到了有效的目標索引
    if (targetIndex !== -1) {
        currentQuestionIndex = targetIndex;
        showQuestion(currentQuestionIndex);
        if (jumpToInput) jumpToInput.value = ''; // 成功跳轉後清空輸入框
         // 如果是透過下拉選單成功跳轉，也要清除可能存在的錯誤訊息
        if (jumpErrorMsg && inputValue === '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    } else if (inputValue === '' && targetIndex === -1) {
        // 處理輸入框為空且下拉選單也無效的情況
        if (jumpErrorMsg) {
            jumpErrorMsg.textContent = "請選擇或輸入要跳轉的題號。";
            jumpErrorMsg.style.display = 'inline'; // 或 'block'
        }
    }
}

// 測驗開始
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden'); // 隱藏歷史記錄

    startBtn.classList.add('hidden');   // 隱藏「開始測驗」
    homeBtn.classList.remove('hidden'); // 顯示「回到首頁」
    // if (jumpControls) jumpControls.classList.remove('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.remove('hidden'); // 顯示跳題和標記的父容器

    // 隨機抽取50題，或所有可用題目（如果少於50題）
    quizQuestions = getRandomQuestions(50);
    populateJumpDropdown(); // <-- 填充跳題下拉選單
    currentQuestionIndex = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    markedQuestions.clear(); // 清除上一輪的標記
    updateMarkedQuestionsDisplay(); // 初始化標記列表顯示 (應為隱藏)

    // 更新進度顯示
    progressEl.textContent = `0 / ${quizQuestions.length}`;

    // 開始計時(在問題顯示後才開始計時, 並設定初始值)
    startTime = new Date();
    totalSeconds = 60 * 60; // 設定為 60 分鐘
    startTimer();   // 確保在設定完 totalSeconds 後才呼叫 startTimer

    startBtn.innerHTML = "<b>重新測驗</b>"; // 將 "測驗開始" 按鈕文字改成 "重新測驗"
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示

    // 顯示第一題
    showQuestion(currentQuestionIndex);
    updateProgress();
}

// 遞迴函數來處理嵌套的 media.data
function renderMedia(container, data) { 
    const table = document.createElement('table');
    data.forEach(item => {
        if (Array.isArray(item)) {
            if (Array.isArray(item[0])) { // 檢查是否為嵌套陣列
                item.forEach(rowData => {
                    const row = document.createElement('tr');
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.innerHTML = cellData;  // 使用 innerHTML
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
            } else { // 處理非嵌套陣列 (例如: ["資料表emp如下:"])
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.innerHTML = item[0]; // 使用 innerHTML
              row.appendChild(cell);
              table.appendChild(row);
            }

        } else {
            const textDiv = document.createElement('div');
            textDiv.textContent = item;
            container.appendChild(textDiv);
        }
    });
    container.appendChild(table);
}

// 在 showQuestion 中
function showQuestion(index) {
    const question = quizQuestions[index];  // 取得當前題目
    questionNumber.textContent = `題目 ${index + 1} / ${quizQuestions.length}`;
    questionText.textContent = question.question;

    // 更新跳題下拉選單的當前選項
    if (jumpToSelect) {
        jumpToSelect.value = index; // 同步下拉選單的值
    }

    // 設置題目類型標籤
    if (question.type === 'single') {
        questionType.textContent = '單選題';
        questionType.className = 'question-tag single-choice';
    } else {
        questionType.textContent = '複選題';
        questionType.className = 'question-tag multiple-choice';
    }

    // Clear previous media content
    if (mediaContainer) {
        mediaContainer.innerHTML = '';
    }
  
  // Display media if present
  if (question.media) { // 先檢查 media 物件是否存在
      if (question.media.type === 'table') {
          // 處理表格
          renderMedia(mediaContainer, question.media.data);
      } else if (question.media.type === 'image') {
          // 新增：處理圖片
          const img = document.createElement('img');
          img.src = question.media.src;
          img.alt = question.media.alt;
          mediaContainer.appendChild(img);
      }
  }
    
    // 清空選項內容
    optionsContainer.innerHTML = '';

    // 添加選項
    question.options.forEach((option, optIndex) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';

        const inputType = question.type === 'single' ? 'radio' : 'checkbox';

        // 檢查使用者是否已選擇該選項
        const isSelected = userAnswers[index] && userAnswers[index].includes(option.value);
        if (isSelected) {
            optionEl.classList.add('selected');
        }

        optionEl.innerHTML = `
            <input type="${inputType}" name="question${index}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-text">${option.value}. ${option.label}</span>
        `;

        // 添加點擊事件
        optionEl.addEventListener('click', function() {
            const input = this.querySelector('input');

            if (question.type === 'single') {
                // 對於單選題，取消所有其他選項的選中狀態
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // 選中當前選項
                this.classList.add('selected');
                userAnswers[index] = [input.value];
                input.checked = true;
            } else {
                // 對於多選題，切換當前選項的選中狀態
                this.classList.toggle('selected');
                input.checked = !input.checked;

                // 更新使用者答案
                if (!userAnswers[index]) {
                    userAnswers[index] = [];
                }

                if (input.checked) {
                    userAnswers[index].push(input.value);
                } else {
                    userAnswers[index] = userAnswers[index].filter(val => val !== input.value);
                }
            }

            // 更新進度（可能有新回答的題目）
            updateProgress();
        });

        optionsContainer.appendChild(optionEl);
    });

    // 更新按鈕狀態
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizQuestions.length - 1; // <-- 在最後一題禁用下一題

    // 始終顯示 submitBtn
    submitBtn.classList.remove('hidden');

    // 更新標記按鈕狀態
    updateMarkButtonState();
    // 更新標記題目列表顯示
    updateMarkedQuestionsDisplay();

    console.log(currentQuestionIndex);  // 偵錯訊息
}

// 切換標記問題
function toggleMarkQuestion() {
    const index = currentQuestionIndex;
    if (markedQuestions.has(index)) {
        markedQuestions.delete(index);
    } else {
        markedQuestions.add(index);
    }
    updateMarkButtonState(); // 更新按鈕文字/樣式
    updateMarkedQuestionsDisplay(); // 更新列表顯示
}

// 更新標記按鈕的文字和樣式
function updateMarkButtonState() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.innerHTML = '<b>取消標記</b>';
        markBtn.classList.add('marked'); // 添加樣式 class
    } else {
        markBtn.innerHTML = '<b>標記此題</b>';
        markBtn.classList.remove('marked'); // 移除樣式 class
    }
}

// 更新已標記題目的顯示列表
function updateMarkedQuestionsDisplay() {
    markedQuestionsList.innerHTML = ''; // 清空現有列表

    if (markedQuestions.size === 0) {
        markedQuestionsContainer.classList.add('hidden'); // 如果沒有標記，隱藏容器
        return;
    }

    markedQuestionsContainer.classList.remove('hidden'); // 如果有標記，顯示容器

    // 將 Set 轉換為陣列並排序，以便按順序顯示
    const sortedMarkedIndices = Array.from(markedQuestions).sort((a, b) => a - b);

    sortedMarkedIndices.forEach(index => {
        const button = document.createElement('button');
        button.textContent = index + 1; // 顯示 1-based 題號
        button.className = 'marked-question-button';
        button.dataset.index = index; // 儲存 0-based 索引

        button.addEventListener('click', function() {
            const targetIndex = parseInt(this.dataset.index, 10);
            if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < quizQuestions.length) {
                currentQuestionIndex = targetIndex;
                showQuestion(currentQuestionIndex);
                 // 清除跳題輸入框和錯誤訊息 (如果有的話)
                 if (jumpToInput) jumpToInput.value = '';
                 if (jumpErrorMsg) {
                    jumpErrorMsg.textContent = '';
                    jumpErrorMsg.style.display = 'none';
                }
            }
        });

        markedQuestionsList.appendChild(button);
    });
}

// 將您原本的 showReview 函數完整刪除，貼上這個版本
function showReview() {
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');

    // 清空原有内容
    reviewList.innerHTML = '';

    // 生成詳細答題情況
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = Array.isArray(question.answer) ? question.answer : [question.answer];

        const isCorrect = userAnswer.length === correctAnswer.length &&
                         userAnswer.every(ans => correctAnswer.includes(ans));

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const typeText = question.type === 'single' ? '單選題' : '複選題';
        const userAnswerText = userAnswer.length > 0 ? userAnswer.join(', ') : '未作答';
        const correctAnswerText = correctAnswer.join(', ');

        let optionsHTML = '<div class="review-options">';
        question.options.forEach(opt => {
            optionsHTML += `<div class="review-option-item">`;
            const inputType = question.type === 'single' ? 'radio' : 'checkbox';
            const isUserAnswer = userAnswer.includes(opt.value);
            optionsHTML += `<input type="${inputType}" class="review-checkbox" disabled ${isUserAnswer ? 'checked' : ''}>`;
            optionsHTML += `<span class="option-prefix">${opt.value}.</span>`;
            optionsHTML += `<span class="option-label-content">${opt.label}</span>`;
            optionsHTML += `</div>`;
        });
        optionsHTML += '</div>';

        // ========================[ 核心修正點 ]========================
        // 這一段是新的，用來處理圖片和表格
        let mediaContent = '';
        if (question.media) { // 檢查 media 物件是否存在
            if (question.media.type === 'table' && question.media.data) {
                // 原有的表格渲染邏輯
                mediaContent += '<div class="media-container review-media-container">'; // 給一個容器
                const table = document.createElement('table');
                renderMedia(table, question.media.data); // 注意：這裡我們假設 renderMedia 可以接受一個 table 元素作為參數
                mediaContent += table.outerHTML;
                mediaContent += '</div>';
            } else if (question.media.type === 'image' && question.media.src) {
                // 新增的圖片渲染邏輯
                mediaContent = `
                    <div class="media-container review-media-container">
                        <img src="${question.media.src}" alt="${question.media.alt || '題目附圖'}">
                    </div>
                `;
            }
        }
        // =============================================================

        // 組合 HTML，將 mediaContent 插入
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. [${typeText}] ${question.question}</div>
            ${mediaContent} 
            <div class="review-answers">
                <div>選項：</div>
                ${optionsHTML}
                <div>你的答案：<span class="user-answer">${userAnswerText}</span></div>
                <div>正確答案：<span class="correct-answer">${correctAnswerText}</span></div>
            </div>
            <div>${isCorrect ? '✓ 正確' : '✗ 錯誤'}</div>
        `;

        reviewList.appendChild(reviewItem);
    });

    // 重新綁定 backToResultsBtn 的事件監聽器，如果需要的話
    // ...
}

// 另外，為了讓上述程式碼順利運作，請稍微修改 renderMedia 函數
// 找到 renderMedia 函數，修改第一行，讓它接收一個容器元素
function renderMedia(container, data) { // 原本是 (container, data)，現在確保第一個參數是元素
    // 如果傳入的不是 table 元素，就創建一個
    if (container.tagName.toLowerCase() !== 'table') {
        const table = document.createElement('table');
        container.appendChild(table);
        container = table; // 把 table 作為新的容器
    }
    
    // ... 函數的其餘部分保持不變 ...
    data.forEach(item => {
        if (Array.isArray(item)) {
            if (Array.isArray(item[0])) { 
                item.forEach(rowData => {
                    const row = document.createElement('tr');
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.innerHTML = cellData;
                        row.appendChild(cell);
                    });
                    container.appendChild(row);
                });
            } else { 
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.innerHTML = item[0];
              row.appendChild(cell);
              container.appendChild(row);
            }

        } else {
            const textDiv = document.createElement('div');
            textDiv.textContent = item;
            container.parentElement.insertBefore(textDiv, container); // 將文字 div 插入到表格之前
        }
    });
}

// 更新進度顯示
function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== null && answer.length > 0).length;
    progressEl.textContent = `Questions: ${answeredCount}/${quizQuestions.length}`;
}

// 下一題
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 上一題
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}


// 計時器
function startTimer() {
    if (timerInterval) {  // 如果已經有計時器在運行，先清除它
        clearInterval(timerInterval);
    }
    let totalSeconds = 60 * 60; // 每次開始計時都重置為 60 分鐘
    timerInterval = setInterval(function() {
        totalSeconds--;  // 每秒減1
        //計算 "分" 和 "秒"
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `Time limit: ${minutes}:${seconds}`;

        if (totalSeconds <= 0) {
            // 時間到，停止計時器並提交答案
            stopTimer();
            submitQuiz();
        }
    }, 1000);
}

// 停止計時器
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // 清除 timerInterval，表示沒有計時器在運行
}

// 提交測試
function submitQuiz() {
    stopTimer();

    // 計算得分
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;
        if (userAnswer.length === correctAnswer.length && userAnswer.every(ans => correctAnswer.includes(ans))) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / quizQuestions.length) * 100);

    // 計算用時
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - startTime) / 1000); // 秒
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;

    // 顯示结果
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    scoreDisplay.textContent = `得分: ${score}% (${correctCount}/${quizQuestions.length})`;
    timeTaken.textContent = `用時: ${minutes}分${seconds}秒`;

    // 生成總分訊息
    let summaryText = '';
    if (score >= 90) {
        summaryText = '這波簡直太神了啦！';
    } else if (score >= 70) {
        summaryText = '通過邊緣繼續保持！';
    } else if (score >= 60) {
        summaryText = '就差那麼一點點啊！';
    } else {
        summaryText = '你真他喵的爛透了!';
    }

    resultsSummary.textContent = summaryText;

    // 儲存測驗結果到 localStorage (保留自動刪除最舊記錄的邏輯)
    const quizResult = {
        score: score,
        time: `${minutes}分${seconds}秒`,
        questions: quizQuestions,  // 儲存問題
        userAnswers: userAnswers, // 儲存使用者答案
        date: new Date().toLocaleString() // 儲存測驗日期和時間
    };

    let history = JSON.parse(localStorage.getItem('quizHistory_EBC') || '[]'); // 讀取歷史記錄
    history.push(quizResult); // 加入新的結果

    // 限制歷史記錄數量 (最多 20 筆)
    if (history.length > 20) {
        history.shift(); // 移除最舊的記錄
    }

    localStorage.setItem('quizHistory_EBC', JSON.stringify(history)); // 儲存回 localStorage
}

// 返回结果頁面
function backToResults() {
    reviewContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// 重新開始測試
function restartQuiz() {
    resultsContainer.classList.add('hidden');
    quizQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    startQuiz();  // 重新開始測驗
}

// 載入並顯示歷史記錄
function loadHistory() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');    // 顯示歷史記錄容器
    historyContainer.innerHTML = '<h2><span style="color:rgb(31, 47, 220);">歷史記錄</span></h2>';   // 清空並添加標題

    const history = JSON.parse(localStorage.getItem('quizHistory_EBC') || '[]');

    if (history.length === 0) {
        historyContainer.innerHTML += '<hr><p>目前沒有任何測驗記錄</p>';
        historyContainer.appendChild(closeHistoryBtn);  // 加入關閉按鈕
        return;
    }
    // 正序迴圈
    for (let i = 0; i < history.length; i++) { // 改為正序遍歷
        const result = history[i];
        const resultDiv = document.createElement('div');
        resultDiv.className = 'history-item';

        // 將原本的 innerHTML 放入一個新的 div 內，並給予 class name
        const innerContentDiv = document.createElement('div');
        resultDiv.className = 'history-item';
        resultDiv.innerHTML = `
            <p><strong>測驗時間：</strong>${result.date}</p>
            <p><strong>得分：</strong>${result.score}%</p>
            <p><strong>用時：</strong>${result.time}</p>
            <button class="review-history-btn" data-index="${i}">查看詳情</button>
            <button class="delete-history-btn" data-index="${i}">刪除</button> 
        `;
        // 將新的 div 插入到 resultDiv
        resultDiv.appendChild(innerContentDiv);
        historyContainer.appendChild(resultDiv);
    }
    // 加入關閉按鈕
    historyContainer.appendChild(closeHistoryBtn);

    // 添加事件監聽器到 "查看詳情" 按鈕
    document.querySelectorAll('.review-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            showReviewFromHistory(index);
        });
    });

    // 刪除按鈕的事件監聽器
    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10); // 取得按鈕上的 data-index (正序)
            deleteHistoryItem(index); // 傳遞正序的 index
        });
    });
}

// 關閉歷史記錄
function closeHistory() {
    historyContainer.classList.add('hidden');
    welcomeScreen.classList.remove('hidden'); // 回到歡迎畫面
    
    // 停止計時器並重置顯示
    stopTimer();    
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示

    // 檢查是否在測驗中
    if (quizContainer.classList.contains('hidden')) {
        // 不在測驗中，將按鈕文字設為 "測驗開始"
        startBtn.innerHTML = "<b>測驗開始</b>";
    }else{
        startBtn.innerHTML = "<b>重新測驗</b>";
    }
}

// 從歷史記錄中顯示答題詳情
function showReviewFromHistory(historyIndex) {
    const history = JSON.parse(localStorage.getItem('quizHistory_EBC') || '[]');
    const result = history[historyIndex];

    // 將歷史資料設定到全域變數，讓 showReview 函數可以使用
    quizQuestions = result.questions;
    userAnswers = result.userAnswers;
    currentQuestionIndex = 0; // 重置題目索引

    // 切換到答題詳情頁面
    historyContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');
    showReview(); // 呼叫原本的 showReview 函數
}

// 刪除歷史記錄的函數
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('quizHistory_EBC') || '[]');
    history.splice(index, 1); // 直接使用 splice 刪除指定索引的元素 (正序索引)
    // history.splice(history.length - 1 - index, 1); // 從陣列中移除指定索引的元素 (倒序索引要轉成正序)
    localStorage.setItem('quizHistory_EBC', JSON.stringify(history));
    loadHistory(); // 重新載入歷史記錄
}

// 回到首頁
function goHome() {
    // 隱藏所有非首頁的區塊
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden');
    // 顯示首頁
    welcomeScreen.classList.remove('hidden');
    // 顯示開始按鈕, 隱藏回首頁按鈕
    startBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    // if (jumpControls) jumpControls.classList.add('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.add('hidden'); // 隱藏跳題和標記的父容器


    // 重置計時器和相關變數
    stopTimer(); // 停止計時器
    //totalSeconds = 0;  //不需要設定為0 
    timerEl.textContent = 'Time limit: 60:00'; // 重置顯示
    currentQuestionIndex = 0;
    userAnswers = [];
    markedQuestions.clear(); // 清除標記
    updateMarkedQuestionsDisplay(); // 更新標記列表顯示 (應為隱藏)
    //quizQuestions = [];  //不需要了， 因為每次都會重新開始
    updateProgress(); //更新進度
    startBtn.innerHTML = "<b>測驗開始</b>"; // 回到首頁後, 將 "重新測驗" 按鈕文字改回 "測驗開始"
    // 新增: 重置標記按鈕狀態
    markBtn.innerHTML = '<b>標記此題</b>';
    markBtn.classList.remove('marked');
}

// ===== 跳轉按鈕事件 =====
if (jumpBtn) { // 檢查按鈕是否存在
    jumpBtn.addEventListener('click', handleJump);
}
// ============================
// ===== 輸入框 Enter 和 input 事件 =====
if (jumpToInput) { // 檢查輸入框是否存在
    jumpToInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleJump();
        }
    });
    // 當使用者在輸入框輸入時清除錯誤訊息 (可選)
    jumpToInput.addEventListener('input', () => {
        if (jumpErrorMsg && jumpErrorMsg.textContent !== '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    });
}
// ============================

// 綁定歷史記錄
historyBtn.addEventListener('click', loadHistory);