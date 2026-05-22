# Guía Básica de Git

Guía rápida para empezar a trabajar con Git en proyectos.

## Configuración inicial

Configura tu identidad una sola vez:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main
```

Verifica tu configuración:

```bash
git config --list
```

## Flujo básico diario

1. Crear o modificar archivos.
2. Ver cambios.
3. Agregar cambios al área de preparación.
4. Confirmar cambios con un commit.
5. Subir cambios al remoto.

Comandos:

```bash
git status
git add .
git commit -m "feat: agrega nueva sección"
git push origin main
```

## Crear repositorio

### Nuevo repositorio local

```bash
git init
git add .
git commit -m "chore: primer commit"
```

### Clonar repositorio existente

```bash
git clone <url-del-repo>
cd <nombre-del-repo>
```

## Cambiar el origen remoto (`origin`)

Esto se usa cuando el remoto quedó mal configurado o cambió la URL del repo.

### ¿Cuándo conviene hacerlo?

- Moviste el repo de proyecto o de grupo en GitHub/GitLab.
- Cambiaste de HTTPS a SSH (o al revés).
- Clonaste desde un fork y ahora quieres apuntar al repo principal.
- Aparece error de push/pull porque la URL remota no existe o no coincide.

### Ver remoto actual

```bash
git remote -v
```

### Cambiar URL de `origin`

```bash
git remote set-url origin <nueva-url>
git remote -v
```

### Si no existe `origin`

```bash
git remote add origin <url>
git remote -v
```

### Si hiciste `git init` y después creaste el repo remoto

Usa esta secuencia:

```bash
git status
git branch -M main
git remote add origin <url-del-repo>
git push -u origin main
```

Si `origin` ya existía y apunta mal:

```bash
git remote set-url origin <url-del-repo>
git push -u origin main
```

Si al crear el repo remoto agregaste `README.md` o `.gitignore` y ya tiene un commit inicial:

```bash
git pull --rebase origin maingit push -u origin main
```

### Si `origin` quedó muy roto (reinicio rápido)

```bash
git remote remove origin
git remote add origin <url>
git remote -v
```

### Primer push después de corregir `origin`

```bash
git push -u origin main
```

Si tu rama principal no se llama `main`, reemplázala por `master` o el nombre real de tu rama.

## Errores frecuentes y soluciones

Aquí hay una lista corta de errores comunes al trabajar con remotos y cómo solucionarlos rápidamente.

| Error | Causa probable | Solución rápida |
|------|----------------|-----------------|
| `remote: Repository not found` | URL incorrecta o permisos | `git remote -v` → corregir con `git remote set-url origin <url>` y volver a `git push` |
| `Permission denied (publickey)` | SSH no configurado / clave no añadida | Añadir clave SSH a tu cuenta o usar HTTPS; probar `ssh -T git@github.com` |
| `failed to push some refs` / `non-fast-forward` | El remoto tiene commits que no tienes | `git pull --rebase origin main` luego `git push` |
| `error: src refspec main does not match any` | No hay commit en la rama `main` local | `git branch -M main` y `git push -u origin main` |
| `fatal: refusing to merge unrelated histories` | El remoto tiene un commit inicial distinto | `git pull --rebase origin main` o `git pull origin main --allow-unrelated-histories` y resolver conflictos |

Si el error no es claro, copia el mensaje exacto y búscalo; muchas veces la solución es verificar `git remote -v`, comprobar permisos SSH/HTTPS y sincronizar ramas con `git pull --rebase`.

## Caso real: pull trae otra rama y checkout bloqueado por cambios locales

### Síntoma

Te puede pasar algo así:

```bash
git pull origin
# ...
Your configuration specifies to merge with the ref 'refs/heads/init'
from the remote, but no such ref was fetched.

git checkout master
error: Your local changes to the following files would be overwritten by checkout:
	.gitignore
	app/llm_openai.py
	app/main.py
Please commit your changes or stash them before you switch branches.
```

### Qué significa

- Tu rama local actual (`init`) está configurada para trackear `origin/init`, pero esa rama ya no existe en remoto.
- Además, tienes cambios locales sin commit. Git no te deja cambiar a otra rama si eso puede pisar archivos.

### Solución recomendada (segura, sin perder cambios)

1. Guardar cambios temporales en stash.
2. Cambiar a la rama correcta (`master` o `main`).
3. Traer cambios remotos.
4. Recuperar tus cambios del stash.

```bash
# 1) Guardar todo (incluye archivos nuevos)
git stash push -u -m "wip antes de cambiar de rama"

# 2) Ver ramas remotas disponibles
git fetch --all --prune
git branch -r

# 3) Cambiar a la rama objetivo existente
git checkout master
# o: git checkout main

# 4) Actualizarla
git pull origin master
# o: git pull origin main

# 5) Recuperar tus cambios
git stash pop
```

Si hay conflictos al hacer `git stash pop`, resolverlos, luego:

```bash
git add .
git commit -m "fix: re-aplica cambios locales tras sincronizar rama"
```

### Alternativa: commit rápido antes de cambiar de rama

Si prefieres no usar stash:

```bash
git add .
git commit -m "wip: cambios locales antes de cambiar de rama"
git checkout master
git pull origin master
```

### Corregir tracking de la rama local

Si quieres seguir trabajando en `init`, primero crea/publica esa rama en remoto o cambia su upstream:

```bash
# Opción A: publicar init en remoto
git push -u origin init

# Opción B: hacer que init trackee master
git branch --set-upstream-to=origin/master init
```

Usa `main` en lugar de `master` si tu repo usa `main` como rama principal.

## Trabajar con ramas

Crear y cambiar a una rama:

```bash
git checkout -b feature/nueva-funcion
```

Subir rama al remoto:

```bash
git push -u origin feature/nueva-funcion
```

Cambiar entre ramas:

```bash
git checkout main
git checkout feature/nueva-funcion
```

## Actualizar tu rama con cambios remotos

```bash
git pull origin main
```

## Ver historial

```bash
git log --oneline --graph --decorate -n 20
```

## Deshacer cambios comunes

Descartar cambios no preparados de un archivo:

```bash
git restore <archivo>
```

Quitar archivo del área de preparación:

```bash
git restore --staged <archivo>
```

Modificar el último commit (si aún no hiciste push):

```bash
git commit --amend
```

## Buenas prácticas

- Haz commits pequeños y frecuentes.
- Usa mensajes claros (por ejemplo: `feat:`, `fix:`, `docs:`).
- Actualiza tu rama antes de abrir un merge request/pull request.
- Evita trabajar directamente en `main` para cambios grandes.

## Checklist rápido

- [ ] Revisé cambios con `git status`
- [ ] Preparé cambios con `git add`
- [ ] Hice commit con mensaje claro
- [ ] Sincronicé con remoto (`git pull` / `git push`)
