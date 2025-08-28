課程名稱 : 電子商務 <BR>
證照名稱 : 企業電子化助理規劃師 <BR>
授課教師 : 黃錦祥 <BR>
重要程度 : 5顆星 <BR>
類別歸類 : 管理類 <br>
點數計算 : 0.7 點 ( 證書 + 證照 )

<div class="container">
        <h1>How to open the webside?</h1>

        <article>
            <h2>方法一：使用 VS Code 的 Live Server 擴充功能</h2>
            <p>如果您使用 Visual Studio Code 編輯器，這是最快的方法。</p>
            <ol>
                <li>在 VS Code 中，點擊左側的擴充功能圖示 (四個方塊)。</li>
                <li>搜尋 "Live Server" 並安裝它。</li>
                <li>安裝完成後，在 VS Code 中打開您的專案資料夾。</li>
                <li>在 <code>index.html</code> 檔案上按一下右鍵，選擇 "Open with Live Server"。</li>
                <li>它會自動打開您的預設瀏覽器，網址看起來會像 <em class="placeholder">http://127.0.0.1:5500/</em> 或類似。</li>
            </ol>
            <p>這就成功了！<code>127.0.0.1</code> 和 <code>localhost</code> 是指同一件事，就是指向<strong>本機電腦</strong>。</p>
        </article>
        
        <article>
            <h2>方法二：使用 Node.js</h2>
            <p>如果電腦上有安裝 Node.js，這是一個非常快速的方法。</p>
            <p><strong>1. 打開命令提示字元 (CMD) 或 PowerShell (Windows) / 終端機 (macOS)。</strong></p>
            <p><strong>2. 安裝一個簡單的 http 伺服器套件 <em>(只需要做一次)</em>：</strong></p>
            <pre><code>npm install -g http-server</code></pre>
            <p><strong>3. 使用命令列 <code>cd</code> 指令，切換到您存放專案檔案的資料夾。例如：</strong></p>
            <pre><code>cd <span class="placeholder">C:\Users\YourName\Desktop\your-project-folder</span></code></pre>
            <p><strong>4. 在該資料夾下，執行以下指令：</strong></p>
            <pre><code>http-server</code></pre>
            <p><strong>5. 命令列會顯示伺服器正在運行的網址，通常是 <code>http://127.0.0.1:8080</code>。將這個網址複製到瀏覽器中打開即可。</strong></p>
        </article>

        <article>
            <h2>方法三：使用 Python 內建的伺服器</h2>
            <p>如果電腦有安裝 Python 3，這也是一個零安裝的方法。</p>
            <p><strong>1. 打開命令提示字元或終端機。</strong></p>
            <p><strong>2. 使用 <code>cd</code> 指令切換到專案資料夾。</strong></p>
            <p><strong>3. 執行以下指令：</strong></p>
            <pre><code>python -m http.server</code></pre>
            <p><strong>4. 命令列會告訴你伺服器正在 <em class="placeholder">http://0.0.0.0:8000/</em> 上運行。在瀏覽器中打開 <em class="placeholder">http://localhost:8000</em> 即可。</strong></p>
        </article>
    </div>
