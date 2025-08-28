課程名稱 : 電子商務 <BR>
證照名稱 : 企業電子化助理規劃師 <BR>
授課教師 : 黃錦祥 <BR>
重要程度 : 5顆星 <BR>
類別歸類 : 管理類 <br>
點數計算 : 0.7 點 ( 證書 + 證照 )

# 如何開啟本地網站 (How to open the webside?)

---

## 方法一：使用 VS Code 的 Live Server 擴充功能

如果使用 Visual Studio Code 編輯器，這是最快的方法。

1.  在 VS Code 中，點擊左側的擴充功能圖示 (四個方塊)。
2.  搜尋 "Live Server" 並安裝它。
3.  安裝完成後，在 VS Code 中打開對應的專案資料夾。
4.  在 `index.html` 檔案上按一下右鍵，選擇 "Open with Live Server"。
5.  它會自動打開預設瀏覽器，網址看起來會像 `http://127.0.0.1:5500/` 或類似。

這樣就成功了！`127.0.0.1` 和 `localhost` 是指同一件事，就是指向**本機電腦**。

---

## 方法二：使用 Node.js

如果電腦上有安裝 Node.js，這是一個非常快速的方法。

1.  **打開命令提示字元 (CMD) 或 PowerShell (Windows) / 終端機 (macOS)。**

2.  **安裝一個簡單的 http 伺服器套件 *(只需要做一次)*：**
    ```bash
    npm install -g http-server
    ```

3.  **使用命令列 `cd` 指令，切換到您存放專案檔案的資料夾。例如 (請將路徑替換成自己的)：**
    ```bash
    cd C:\Users\YourName\Desktop\your-project-folder
    ```

4.  **在該資料夾下，執行以下指令：**
    ```bash
    http-server
    ```

5.  **命令列會顯示伺服器正在運行的網址，通常是 `http://127.0.0.1:8080`。將這個網址複製到瀏覽器中打開即可。**

---

## 方法三：使用 Python 內建的伺服器

如果電腦有安裝 Python 3，這也是一個零安裝的方法。

1.  **打開命令提示字元或終端機。**
2.  **使用 `cd` 指令切換到專案資料夾。**
3.  **執行以下指令：**
    ```bash
    python -m http.server
    ```
4.  **命令列會告訴你伺服器正在 `http://0.0.0.0:8000/` 上運行。在瀏覽器中打開 `http://localhost:8000` 即可。**
