# ใช้ Node.js 14 ในการสร้างแอปพลิเคชัน
FROM node:16

# กำหนดไดเร็กทอรีที่แอปพลิเคชันจะถูกสร้างใน Docker container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง Docker container
COPY package*.json ./

# ติดตั้งล้านแพ็คเกจของโปรเจ็ค
RUN npm install

# คัดลอกไฟล์โค้ดของโปรเจ็คทั้งหมดไปยัง Docker container
COPY . .

# สร้างแอปพลิเคชัน Nuxt.js
RUN npm run build

# กำหนดพอร์ตที่แอปพลิเคชันจะใช้ (ตามที่กำหนดใน Nuxt.js config)
EXPOSE 5000

# รันแอปพลิเคชัน Nuxt.js
CMD ["npm", "start"]