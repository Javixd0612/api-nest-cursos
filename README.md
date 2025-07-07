# 🎓 Sistema de Gestión Académica - API RESTful con NestJS y TypeORM

Esta API RESTful gestiona estudiantes, profesores, cursos e inscripciones. Fue construida con NestJS, TypeORM y buenas prácticas de desarrollo backend.

## 📁 Estructura del Proyecto

Este proyecto sigue una **arquitectura modular**, donde cada carpeta representa un módulo con sus respectivos archivos:

src/
├── modules/
│ ├── estudiante/ # CRUD de estudiantes
│ ├── profesor/ # CRUD de profesores
│ ├── curso/ # CRUD de cursos
│ └── inscripcion/ # CRUD de inscripciones
├── common/ # (opcional) para filtros, interceptores
├── app.module.ts # Módulo principal que importa los demás
└── main.ts # Punto de entrada de la aplicación

markdown
Copiar
Editar

Cada módulo tiene su propio:

- Controlador (`*.controller.ts`)
- Servicio (`*.service.ts`)
- DTOs (`dto/*.dto.ts`)
- Entidad (`*.entity.ts`)
- Módulo (`*.module.ts`)

## 📌 Funcionalidades

- CRUD completo para:
  - Estudiante
  - Profesor
  - Curso
  - Inscripción
- Relaciones entre entidades:
  - Estudiante ➡️ Inscripción (OneToMany)
  - Profesor ➡️ Curso (OneToMany)
  - Curso ➡️ Inscripción (OneToMany)
- Validaciones de datos con `class-validator`
- Manejo de errores con `HttpException` y `HttpStatus`
- Pruebas realizadas con **Insomnia**
- Código subido y documentado en GitHub

---

## ⚙️ Requisitos

- Node.js 18+
- MySQL o XAMPP/MAMP/WAMP
- Git
- Postman o Insomnia (para probar)

---

## 🧪 Variables de Entorno

Antes de correr el proyecto, crea un archivo `.env` con lo siguiente:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=TU_USUARIO
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=api_gestion_academica
🚀 Instalación y uso
bash
Copiar
Editar
# 1. Clonar el repositorio
git clone https://github.com/tu_usuario/api-gestion-cursos.git

# 2. Ingresar al proyecto
cd api-gestion-cursos

# 3. Instalar dependencias
npm install

# 4. Crear archivo .env como se muestra arriba

# 5. Iniciar en modo desarrollo
npm run start:dev