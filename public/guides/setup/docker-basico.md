# Docker — Básico y cómo ejecutar "compose down" desde otra carpeta

Descripción breve
-----------------

Docker permite empaquetar aplicaciones en contenedores ligeros basados en imágenes. Esto facilita ejecutar la misma app en cualquier entorno.

Comandos esenciales
-------------------

- **Descargar imagen:** `docker pull imagen:tag`
- **Listar contenedores:** `docker ps` (añadir `-a` para ver todos)
- **Correr contenedor:** `docker run -d -p 8080:80 --name miapp imagen:tag`
- **Parar/Eliminar:** `docker stop CONTAINER && docker rm CONTAINER`
- **Ver logs:** `docker logs -f CONTAINER`
- **Ejecutar dentro:** `docker exec -it CONTAINER /bin/sh`
- **Construir imagen:** `docker build -t miimagen:tag .`

Dockerfile mínimo
-----------------

```
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["node","index.js"]
```

Docker Compose (básico)
-----------------------

Archivo `docker-compose.yml` simple:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
```

Arrancar y detener:

```
docker compose up -d
docker compose down
```

Ejecutar `docker compose down` desde otra carpeta
-----------------------------------------------

Si no estás en la carpeta donde está `docker-compose.yml`, podés indicar la ruta del archivo con `-f` o usar la opción de directorio de proyecto:

- Usando `-f` (funciona con `docker compose` y `docker-compose`):

```bash
docker compose -f /ruta/al/proyecto/docker-compose.yml down
# o (CLI legacy)
docker-compose -f /ruta/al/proyecto/docker-compose.yml down
```

- Usando `--project-directory` (resuelve rutas relativas dentro del compose):

```bash
docker compose --project-directory /ruta/al/proyecto down
```

- Si usás varios archivos compose:

```bash
docker compose -f /ruta/al/proyecto/docker-compose.yml -f /ruta/al/proyecto/override.yml down
```

Consejos rápidos
----------------

- Si `chown` o comandos de Docker necesitan permisos, anteponé `sudo` cuando corresponda.
- Si tu proyecto está en `/mnt/c/...` y tenés problemas con permisos o `chown`, considerá moverlo al filesystem de WSL (por ejemplo `/home/tu_usuario/`) o habilitar `metadata` en `/etc/wsl.conf`.
- Para scripts automatizados, pasá rutas absolutas al `-f` o usá `--project-directory` para evitar `cd`.

Archivos relacionados
--------------------

- Permisos WSL: `permiso-sudo-wsl.md` (ver en la misma carpeta de guías)
