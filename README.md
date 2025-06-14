# 📚 Frases Motivacionales API

¡Bienvenido a **Frases Motivacionales API**! 🚀✨

Esta es una simple API REST construida con **Node.js + Express**, que devuelve frases motivacionales aleatorias para inspirarte todos los días. Ideal como práctica para aprender **Node.js**, **PM2** y despliegue automatizado con Bash.

---

## 📌 Características

✅ Construida con **Node.js**  
✅ Usa **Express** para manejar rutas  
✅ Devuelve una frase motivacional aleatoria en formato JSON  
✅ Compatible con **PM2** para gestión de procesos y reinicio automático  
✅ Despliegue fácil usando Bash scripting

---

## 🚀 **Rutas disponibles**

| Método | Ruta | Descripción |
|--------|------|--------------|
| `GET` | `/` | Mensaje de bienvenida |
| `GET` | `/frase` | Devuelve una frase motivacional aleatoria |

---

## ⚙️ **Requisitos**

- Node.js (v18 recomendado)
- npm
- PM2

---

## 🗂️ **Instalación local**

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/frases-app.git

# Entra al directorio
cd frases-app

# Instala dependencias
npm install

# Ejecuta localmente
node index.js

