# Configurar Git y GitLab con SSH

Guía práctica para generar claves SSH y configurar Git y GitLab para clonar y hacer push sin escribir contraseña cada vez.

## Verificar si ya existen claves SSH

Antes de generar nuevas claves, revisar si ya hay alguna:

```bash
ls -la ~/.ssh/
```

Si aparece algo como:
- `id_ed25519` y `id_ed25519.pub` (ed25519, moderno)
- `id_rsa` y `id_rsa.pub` (RSA, más antiguo)
- `id_dsa` y `id_dsa.pub` (DSA, deprecado)

Ya tenés claves. En ese caso, saltar al paso [3. Añadir la clave a GitLab](#3-añadir-la-clave-a-gitlab).

Si el directorio `~/.ssh/` no existe o está vacío, proceder a generar nuevas claves.

## Generar una clave SSH

Abrir terminal en WSL o Linux y ejecutar:

```bash
ssh-keygen -t ed25519 -C "tu_email@example.com"
```

Si tu sistema no soporta ed25519, usar RSA:

```bash
ssh-keygen -t rsa -b 4096 -C "tu_email@example.com"
```

Preguntas que hace `ssh-keygen`:
- **File location**: Presionar Enter para usar la ruta por defecto (`~/.ssh/id_ed25519`)
- **Passphrase**: Opcionalmente escribir una frase de contraseña para proteger la clave. Si no querés escribir contraseña cada vez, dejar en blanco y presionar Enter.

Resultado: se generan dos archivos:
- `~/.ssh/id_ed25519` (clave privada, nunca compartir)
- `~/.ssh/id_ed25519.pub` (clave pública, se comparte)

## Verificar que se generó correctamente

```bash
ls -la ~/.ssh/
cat ~/.ssh/id_ed25519.pub
```

Copiar toda la salida de la clave pública (comienza con `ssh-ed25519`).

## Añadir la clave a GitLab

1. Ir a **GitLab** → **Settings** (esquina superior derecha) → **SSH Keys**
2. Pegar la clave pública en el campo de texto.
3. Opcional: agregar un título descriptivo (ej: "Laptop WSL").
4. Presionar **Add key**.

## Configurar Git localmente

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@example.com"
```

Verificar:

```bash
git config --global --list
```

## Probar la conexión SSH

```bash
ssh -T git@gitlab.com
```

Si todo está bien, verás algo como:

```
Welcome to GitLab, @tu_usuario!
```

Si aparece un error de permisos, revisar [9. Problemas comunes](#9-problemas-comunes).

## Clonar un repositorio con SSH

En lugar de HTTPS:

```bash
git clone git@gitlab.com:tu_usuario/tu_repositorio.git
```

## Cambiar un repositorio existente de HTTPS a SSH

Si ya clonaste con HTTPS:

```bash
git remote set-url origin git@gitlab.com:tu_usuario/tu_repositorio.git
```

Verificar:

```bash
git remote -v
```

Debe mostrar:

```
origin  git@gitlab.com:tu_usuario/tu_repositorio.git (fetch)
origin  git@gitlab.com:tu_usuario/tu_repositorio.git (push)
```

## Problemas comunes

| Problema | Solución |
|----------|----------|
| `Permission denied (publickey)` | Verificar que la clave pública está agregada a GitLab. Ejecutar `ssh -T git@gitlab.com` con verbosidad: `ssh -vvv -T git@gitlab.com` |
| `Could not open a connection to your authentication agent` | Iniciar ssh-agent: `eval $(ssh-agent -s)` luego `ssh-add ~/.ssh/id_ed25519` |
| Error de permisos en `~/.ssh` | Ejecutar `chmod 700 ~/.ssh && chmod 600 ~/.ssh/id_*` |
| La clave SSH no aparece en GitLab | Asegurarse de copiar toda la clave pública, incluyendo `ssh-ed25519` al inicio |

## Automatizar ssh-agent al abrir terminal (opcional)

Agregar al `~/.bashrc`:

```bash
eval $(ssh-agent -s) > /dev/null 2>&1
ssh-add ~/.ssh/id_ed25519 2>/dev/null
```

Después recargar:

```bash
source ~/.bashrc
```

## Usar múltiples claves SSH

Si tenés varias cuentas o proyectos, crear un archivo de configuración:

```bash
nano ~/.ssh/config
```

Ejemplo con dos cuentas:

```
Host gitlab-personal
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_ed25519

Host gitlab-trabajo
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_ed25519_trabajo
```

Clonar especificando el host:

```bash
git clone git@gitlab-personal:tu_usuario/tu_repositorio.git
git clone git@gitlab-trabajo:trabajo_usuario/proyecto.git
```

## Nota para IAs

Si esta guía se usa como contexto:
- Confirmar que el usuario tiene una clave SSH generada.
- Pedir el ID de la clave SSH pública para verificar qué algoritmo usa (ed25519 o RSA).
- Probar siempre con `ssh -T git@gitlab.com` antes de intentar clonar.
- No asumir que `git config --global` está configurado; pedirle que lo ejecute primero.
