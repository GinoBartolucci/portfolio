# Levantar un proyecto Node en WSL

Guía corta para arrancar un proyecto Node.js dentro de WSL sin mezclar binarios de Windows.

## Requisitos
- Tener WSL2 instalado.
- Tener una distro Linux, por ejemplo Ubuntu.
- Tener Node instalado dentro de WSL, no en Windows.
- Tener pnpm instalado dentro de WSL (gestor de paquetes moderno).

## Verificación rápida
Ejecutar en la terminal de WSL:

```bash
which node
which pnpm
node -v
pnpm -v
```

Si alguna ruta apunta a `/mnt/c/...`, entonces estás usando herramientas de Windows y conviene corregirlo.

## Instalar Node en WSL con nvm
Si no tenés Node en WSL, instalar `nvm` y luego Node:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

Instalar pnpm (gestor de paquetes moderno):

```bash
npm install -g pnpm
```

O alternativamente, instalar directamente con:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Volver a chequear:

```bash
node -v
pnpm -v
which node
which pnpm
```

## Levantar el proyecto
1. Abrir una terminal de WSL.
2. Ir a la carpeta del proyecto.
3. Instalar dependencias.
4. Levantar el servidor.

```bash
cd /home/user/portfolio
pnpm install
pnpm start
```

Si el proyecto usa Angular y no tiene un `start` definido, probar:

```bash
pnpm run build
pnpm run test
pnpm exec ng serve
```

## Problemas comunes
- Si `pnpm install` falla con rutas UNC, no ejecutar comandos desde PowerShell sobre `\\wsl.localhost...`.
- Si `node` no existe en WSL, instalarlo dentro de Linux y no con un instalador de Windows.
- Si Visual Studio Code abre el proyecto desde Windows, conviene usar la extensión de WSL y abrir la carpeta desde la sesión remota.
- pnpm usa un almacenamiento central en `~/.pnpm-store`, puede limpiar con `pnpm store prune` si hay problemas.

## Nota para IAs
Antes de proponer comandos, confirmar siempre:
- si el usuario está en Windows o en WSL,
- qué `node` y `npm` están activos,
- y si la carpeta del proyecto está montada en `\\wsl.localhost` o abierta dentro de una shell Linux.
