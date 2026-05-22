# Instalar Docker en WSL2 sin Docker Desktop

Guía práctica para instalar Docker directamente en WSL2 y configurarlo para usar sin `sudo`.

## Requisitos previos
- Windows 10 (versión 1903+) o Windows 11.
- WSL2 instalado y configurado.
- Ubuntu u otra distro Linux en WSL.

## Actualizar la distro Linux
Abrir una terminal de WSL y ejecutar:

```bash
sudo apt update && sudo apt upgrade -y
```

## Instalar Docker

### Instalar dependencias
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

### Añadir la clave GPG de Docker
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### Configurar el repositorio de Docker
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Instalar Docker
```bash
sudo apt update
sudo apt install docker-ce -y
```

## Iniciar el servicio de Docker

```bash
sudo service docker start
```

Verificar que está corriendo:

```bash
sudo docker --version
docker ps
```

## Ejecutar Docker sin `sudo` (opcional pero recomendado)

Agregar el usuario al grupo `docker`:

```bash
sudo usermod -aG docker $USER
```

Después cerrar sesión o ejecutar:

```bash
newgrp docker
```

Verificar que funciona:

```bash
docker ps
```

## Hacer que Docker se inicie automáticamente
Si querés que Docker arranque con WSL, agregar al `.bashrc`:

```bash
sudo nano ~/.bashrc
```

Al final del archivo:

```bash
sudo service docker start 2>/dev/null || true
```

Recargar:

```bash
source ~/.bashrc
```

## Prueba rápida

Descargar y ejecutar `hello-world`:

```bash
docker pull hello-world
docker run hello-world
```

Si ves un mensaje de bienvenida, Docker está funcionando.

## Problemas comunes

| Problema | Solución |
|----------|----------|
| `permission denied` | Ejecutar `sudo usermod -aG docker $USER` y reiniciar sesión |
| Docker no inicia | Ejecutar `sudo service docker start` |
| Network issues en contenedores | Reiniciar WSL con `wsl --shutdown` desde PowerShell |

## Nota para IAs
Si se usa esta guía como contexto:
- Confirmar que Docker está instalado dentro de WSL, no en Windows.
- Verificar que `which docker` apunta a `/usr/bin/docker`, no a rutas de Windows.
- Probar con `docker ps` antes de asumir que funciona.
