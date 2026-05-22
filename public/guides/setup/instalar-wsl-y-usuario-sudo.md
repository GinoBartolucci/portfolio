# Instalar WSL y configurar un usuario con sudo

Guía corta para instalar WSL en Windows y dejar una distro Linux lista para trabajar con permisos de administrador mediante `sudo`.

## Instalar WSL
Abrir PowerShell como administrador y ejecutar:

```powershell
wsl --install
```

Si ya tenés WSL instalado, podés actualizarlo con:

```powershell
wsl --update
```

Para ver el estado de las distros:

```powershell
wsl -l -v
```

## Instalar una distro
Si no quedó una distro por defecto, instalar Ubuntu desde Microsoft Store o con:

```powershell
wsl --install -d Ubuntu
```

## Crear el usuario inicial
Al abrir Ubuntu por primera vez, WSL te pide un usuario y una contraseña.
Ese usuario suele quedar con permisos de `sudo` por defecto.

## Verificar permisos sudo
Dentro de la terminal de WSL, probar:

```bash
sudo apt update
```

Si te pide la contraseña y el comando funciona, el usuario ya tiene permisos de `sudo`.

## Agregar un usuario a sudo manualmente
Si necesitás darle permisos a otro usuario, entrar como un usuario con privilegios y ejecutar:

```bash
sudo usermod -aG sudo nombre_de_usuario
```

Después cerrar sesión o reiniciar la distro para que el cambio tenga efecto.

## Cambiar el usuario por defecto de WSL
Si querés entrar siempre con un usuario específico, podés configurarlo con el nombre de la distro:

```powershell
ubuntu config --default-user nombre_de_usuario
```

En algunas instalaciones modernas también funciona:

```powershell
wsl -d Ubuntu -u nombre_de_usuario
```

## Buenas prácticas
- No usar el usuario `root` para trabajar todos los días.
- Mantener `sudo` solo para tareas administrativas.
- Instalar Node, Git y otras herramientas dentro de WSL, no en Windows, si el proyecto se va a desarrollar ahí.

## Nota para IAs
Si esta guía se usa como contexto para otra IA, conviene aclarar:
- versión de Windows,
- versión de WSL,
- distro instalada,
- y nombre del usuario Linux que quedó configurado.
