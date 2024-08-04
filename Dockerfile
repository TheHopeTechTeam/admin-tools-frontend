# Stage 1: 建立應用程式映像檔
FROM node:18.16.0-alpine AS builder

# 設定工作目錄為 /app
WORKDIR /app

# 複製所有檔案到容器的工作目錄
COPY [ "./", "./" ]

# 安裝 Node.js 依賴
RUN npm install

# 清除 NX 緩存，以確保構建不會使用過期的緩存
RUN npx nx reset

# 使用 NX 進行應用程式的生產模式建構
RUN npx nx run admin-tools:build --prod

# Stage 2: 設定 Nginx 伺服器
FROM nginx:alpine

# 刪除 Nginx 默認的靜態文件，以便用我們的檔案替換
RUN rm -rf /usr/share/nginx/html/*

# 從 builder 階段複製構建出來的靜態文件到 Nginx 的服務目錄
COPY --from=builder /app/dist/admin-tools/browser /usr/share/nginx/html

# 複製 Nginx 配置檔案到容器的配置目錄
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# 啟動 Nginx 伺服器，並使其在前景運行（避免容器停止）
CMD ["nginx", "-g", "daemon off;"]