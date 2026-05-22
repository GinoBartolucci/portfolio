# Liberar espacio en WSL, Docker y entornos Python

Guía para limpiar y recuperar espacio en disco en WSL2, Docker, y entornos virtuales de Python.

## WSL2 - Liberar espacio general

### Ver uso de espacio
```bash
# Tamaño total de WSL
du -sh ~

# Folders más grandes
du -sh ~/* | sort -hr | head -10

# Ver espacio libre en el filesystem
df -h
```

### Limpiar cache de APT (Ubuntu)
```bash
# Limpiar cache de paquetes descargados
sudo apt clean

# Limpiar paquetes huérfanos
sudo apt autoremove

# Ver espacio liberado
sudo apt autoclean
```

### Compactar la máquina virtual WSL
Windows:
```powershell
# Parar WSL
wsl --shutdown

# Compactar disco virtual (puede tardar varios minutos)
diskpart
select vdisk file="C:\Users\<usuario>\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\ext4.vhdx"
compact vdisk
exit
```

## Docker - Liberar espacio

### Limpiar containers parados
```bash
# Ver containers parados
docker ps -a

# Eliminar containers parados
docker container prune -f

# Eliminar todos los containers (cuidado)
docker rm $(docker ps -a -q)
```

### Limpiar imágenes no usadas
```bash
# Ver imágenes
docker images

# Eliminar imágenes no etiquetadas
docker image prune -f

# Eliminar imágenes huérfanas
docker image prune -a -f
```

### Limpiar volúmenes no usados
```bash
# Ver volúmenes
docker volume ls

# Eliminar volúmenes no usados
docker volume prune -f
```

### Limpiar sistema completo (nuclear)
```bash
# Borra todo: containers, imágenes, volúmenes, redes no usadas
docker system prune -a -f --volumes

# Ver cuánto espacio se liberó
docker system df
```

### Limitar tamaño de Docker Desktop
En Docker Desktop → Settings → Resources → Disk image size:
- Reduce el tamaño máximo de la VM
- Reinicia Docker después

## Node.js - Liberar espacio

### Limpiar cache de pnpm
```bash
# Ver tamaño del store
du -sh ~/.pnpm-store

# Limpiar archivos huérfanos
pnpm store prune

# Limpiar completamente (reconstruye al instalar)
rm -rf ~/.pnpm-store
```

### Limpiar cache de npm
```bash
# Ver cache
npm cache verify

# Limpiar
npm cache clean --force
```

### Limpiar node_modules (la pesadilla)
```bash
# En cada proyecto
rm -rf node_modules
rm pnpm-lock.yaml  # O package-lock.json

# Reinstalar después
pnpm install
```

### Encontrar carpetas node_modules gigantes
```bash
find ~ -name "node_modules" -type d -exec du -sh {} + | sort -rh | head -10
```

## Python - Liberar espacio

### Limpiar cache de pip
```bash
# Ver cache
du -sh ~/.cache/pip

# Limpiar
pip cache purge
```

### Limpiar entornos virtuales
```bash
# Listar entornos
ls -la ~/venv/ ~/env/ ~/.venv/

# Eliminar uno específico (cuidado, revisar antes)
rm -rf ~/venv/

# Reinstalar después
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Limpiar archivos .pyc
```bash
# Eliminar compilados de Python
find ~ -name "__pycache__" -type d -exec rm -r {} + 2>/dev/null
find ~ -name "*.pyc" -delete 2>/dev/null
```

## Archivos .env y configuración

### Limpiar .env innecesarios
```bash
# Buscar archivos .env
find ~ -name ".env*" -type f

# Revisar antes de borrar
# Si son duplicados o de proyectos viejos, eliminar
rm ~/proyecto-viejo/.env
```

### Archivos de configuración temporales
```bash
# Limpiar .vscode settings locales (si está sincronizado)
find ~ -name ".vscode" -type d

# Limpiar .git/objects si están corrompidos
git gc --aggressive
git prune
```

## Logs y archivos temporales

### Limpiar logs de WSL
```bash
# Logs del sistema
sudo journalctl --vacuum=2w

# Logs temporales
sudo rm -rf /tmp/*
sudo rm -rf /var/tmp/*
```

### Limpiar historial de bash
```bash
# Ver tamaño
du -sh ~/.bash_history

# Limpiar
cat /dev/null > ~/.bash_history
```

## Automatización: Script para limpiar regularmente

```bash
#!/bin/bash
# guardar como ~/cleanup.sh
# chmod +x ~/cleanup.sh

echo "=== Limpiando WSL ==="

# APT
sudo apt clean
sudo apt autoremove -y

# Docker (si está instalado)
if command -v docker &> /dev/null; then
  docker system prune -a -f --volumes
  echo "Docker limpiado"
fi

# Node
if command -v pnpm &> /dev/null; then
  pnpm store prune
  echo "pnpm store limpiado"
fi

# Python
if command -v pip &> /dev/null; then
  pip cache purge
  echo "pip cache limpiado"
fi

# Archivos temporales
rm -rf /tmp/*
sudo rm -rf /var/tmp/*

# Logs antiguos
sudo journalctl --vacuum=2w

echo "=== Limpieza completada ==="
df -h
```

Ejecutar regularmente:
```bash
~/cleanup.sh
```

## Monitoreo de espacio

### Ver uso en tiempo real
```bash
# Instalación si no está
sudo apt install ncdu

# Uso interactivo (muy útil)
ncdu ~

# O más simple
watch -n 1 'df -h'
```

## Checklist rápido
- [ ] `docker system prune -a -f --volumes` (Docker)
- [ ] `pnpm store prune` (pnpm)
- [ ] `pip cache purge` (pip)
- [ ] `sudo apt clean && sudo apt autoremove` (APT)
- [ ] `rm -rf /tmp/* && sudo rm -rf /var/tmp/*` (temp)
- [ ] `wsl --shutdown` + `diskpart compact vdisk` (WSL VM)

## Notas importantes
- **Siempre revisar antes de borrar** archivos .env o configuraciones importantes
- Los `node_modules` vuelven a crearse, pero son lentos de descargar
- Docker y WSL pueden ocupar mucho si no se limpian regularmente
- Ejecutar limpieza de Docker con todos los servicios parados
