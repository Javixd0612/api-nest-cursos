<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
</p>

<h1 align="center"> Sistema de Gestión Académica - API RESTful</h1>

<p align="center">
  API construida con <a href="https://nestjs.com" target="_blank">NestJS</a> y <a href="https://typeorm.io/" target="_blank">TypeORM</a> para gestionar estudiantes, profesores, cursos e inscripciones.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

##  Descripción

Esta API permite la creación, consulta, edición y eliminación de:

- 👨‍🎓 Estudiantes
- 👨‍🏫 Profesores
- 📚 Cursos
- 📝 Inscripciones

Incluye relaciones entre entidades, validaciones, manejo de errores y está estructurada siguiendo buenas prácticas.

---

## 📁 Arquitectura del Proyecto

Este proyecto utiliza la **arquitectura modular de NestJS**:
src/
├── modules/
│ ├── estudiante/ # CRUD completo
│ ├── profesor/ # CRUD completo
│ ├── curso/ # CRUD completo
│ └── inscripcion/ # CRUD completo
├── common/ # Filtros o middlewares compartidos
├── app.module.ts # Módulo raíz
└── main.ts # Entrada principal

Cada módulo incluye:

- `controller.ts`
- `service.ts`
- `dto/*.dto.ts`
- `entity.ts`
- `module.ts`

---

## ⚙ Requisitos

- Node.js v18 o superior
- MySQL (o MariaDB / XAMPP / WAMP)
- Git
- Postman o Insomnia

---

##  Variables de Entorno

Crear un archivo `.env` con el siguiente contenido (ajustar según tu entorno):
.env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=123456
DB_NAME=api_gestion_academica

Instalación y Uso
# 1. Clona el repositorio
git clone (https://github.com/Javixd0612/api-nest-cursos)

# 2. Entra al proyecto
cd api-gestion-cursos

# 3. Instala las dependencias
npm install

# 4. Crea el archivo .env como se explicó arriba

# 5. Corre la aplicación en modo desarrollo
npm run start:dev
