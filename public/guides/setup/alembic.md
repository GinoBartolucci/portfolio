# Alembic y migraciones (Docker)

Este archivo describe cómo generar y ejecutar migraciones de Alembic usando el contenedor `db_init` definido en tu Compose.

**Requisitos**

- Tener Docker y Docker Compose instalados.
- Construir la imagen `db_init` desde la carpeta `migrations`.
- Tener configurado `migrations/.env` con la conexión a la base de datos si aplica.

**Servicio `db_init` (ejemplo en docker-compose)**

El servicio que usas es similar a:

```yaml
db_init:
  build: migrations
  env_file: migrations/.env
```

Asegúrate de que en `migrations/Dockerfile` el entrypoint o la imagen permita ejecutar `alembic`.

**Comandos útiles para crear revisiones**

- Crear una revisión que añada `task_id` a `entries`:

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic revision -m 'add task_id to entries'"
```

- Crear una revisión para crear la tabla `tasks` montando la carpeta de migraciones:

```bash
docker compose run --rm -v "$PWD/migrations/alembic:/alembic" --entrypoint sh db_init -c "alembic revision -m 'create tasks table'"
```

Notas:
- El primer comando ejecuta `alembic revision` desde el contenedor usando la configuración que esté dentro de la imagen o en el contenedor.
- El segundo comando monta la carpeta `migrations/alembic` del host en `/alembic` dentro del contenedor para que Alembic use las mismas migraciones locales.

**Flujo típico de uso**

1. Construir la imagen `db_init`:

```bash
docker compose build db_init
```

2. Levantar la base de datos (si está en otro servicio `db`):

```bash
docker compose up -d db
```

3. Ejecutar el contenedor `db_init` para entrar y correr alembic (o ejecutar los comandos específicos):

```bash
docker compose run --rm db_init
```

O bien, ejecutar los comandos de revisión mostrados arriba según necesites.

**Consejos y verificación**

- Si Alembic no encuentra la configuración, revisa que `alembic.ini` y el paquete de migraciones estén presentes dentro de la imagen o en la ruta montada.
- Revisa `migrations/.env` para confirmar la URL de conexión (`SQLALCHEMY_DATABASE_URI` o similar).
- Para aplicar migraciones usa `alembic upgrade head` dentro del mismo contexto de container/montaje.
---

**Ver los headers de revisiones**

Para inspeccionar las cabeceras (metadata) y el estado de las revisiones con Alembic usa los siguientes comandos (ejecutados desde el contenedor `db_init`):

- Mostrar la revisión actual aplicada en la base de datos:

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic current"
```

- Listar el historial de revisiones (con detalles):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic history --verbose"
```

- Ver el contenido y encabezado de una revisión concreta (ej. `head` o id de revisión):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic show <revision>"
# ejemplo:
docker compose run --rm --entrypoint sh db_init -c "alembic show head"
```

- Mostrar las cabezas (heads) actuales:

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic heads"
```

Si necesitas que Alembic use las migraciones locales monta la carpeta como en el ejemplo anterior usando `-v "$PWD/migrations/alembic:/alembic"` antes de `--entrypoint sh` para que `alembic show` pueda leer los archivos locales.
 
**Volver a versiones anteriores (rollback / downgrade)**

Para retroceder la base de datos a una revisión anterior usa `alembic downgrade`. Ejemplos ejecutados desde el contenedor `db_init`:

- Retroceder una revisión (undo último cambio):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic downgrade -1"
```

- Retroceder a una revisión concreta por id:

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic downgrade <revision_id>"
# ejemplo:
docker compose run --rm --entrypoint sh db_init -c "alembic downgrade ae1027a6bf8b"
```

- Retroceder hasta el inicio (base):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic downgrade base"
```

- Avanzar o retroceder hacia una etiqueta (por ejemplo `head` o `+2`):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic upgrade head"
docker compose run --rm --entrypoint sh db_init -c "alembic downgrade +2"
```

- Si sólo quieres marcar la base de datos a una revisión sin ejecutar los scripts, usa `stamp` (útil para sincronizar manualmente el estado):

```bash
docker compose run --rm --entrypoint sh db_init -c "alembic stamp <revision_id>"
```

Consejos:

- Para ver las IDs de revisión disponibles usa `alembic history --verbose` o inspecciona los archivos en `migrations/alembic/versions`.
- Si tus scripts de downgrade son complejos, prueba primero en una copia de la base de datos o en un entorno de staging.
- Si las migraciones locales no están en la imagen, monta la carpeta con `-v "$PWD/migrations/alembic:/alembic"` para que los comandos lean los archivos locales.


Si quieres, puedo también:

- Añadir un ejemplo de `Dockerfile` mínimo en `migrations/` para que `db_init` tenga `alembic` instalado.
- Ejecutar los comandos de build/compose en tu entorno (necesito confirmación).
