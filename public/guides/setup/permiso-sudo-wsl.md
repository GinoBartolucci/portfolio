# Problema: permisos en VSCode/WSL y solución rápida

Descripción
-----------

A veces VSCode no permite borrar o modificar archivos dentro de un proyecto porque los archivos pertenecen a otro usuario (p. ej. `root`), o porque el proyecto está en una unidad montada con opciones que impiden cambiar ownership desde WSL.

Causa probable
---------------

- Archivos creados como `root` o por otro usuario dentro de WSL.
- Proyecto en un disco Windows (`/mnt/c/...`) montado sin `metadata`, lo que limita `chown`.

Solución (línea única)
----------------------

Ejecutá desde WSL (en la distro correspondiente) este comando para cambiar recursivamente el propietario y grupo al usuario actual:

```bash
sudo chown -R $(id -un):$(id -gn) /ruta/a/la/carpeta
```

Alternativa (usuario explícito):

```bash
sudo chown -R tu_usuario:tu_grupo /ruta/a/la/carpeta
```

Ejemplos
--------

# Dry-run simple (ver lista de archivos afectados):
find /ruta/a/la/carpeta -maxdepth 2 -print | sed 's/^/  /'

# Ejecutar y luego abrir VSCode (Remote - WSL) en esa carpeta:
sudo chown -R $(id -un):$(id -gn) /ruta/a/la/carpeta && code /ruta/a/la/carpeta

Notas y recomendaciones
-----------------------

- Si el proyecto está en `/mnt/c/...` y `chown` no cambia ownership, mové el proyecto al filesystem de WSL (p. ej. `/home/<tu_usuario>/proyecto`) o montá la unidad con `metadata` en `/etc/wsl.conf`.
- No trabajes siempre como `root` desde VSCode; es mejor que los archivos sean propiedad del usuario que usa el editor.
- Reiniciá la distro o cerrá y volvé a abrir VSCode si los permisos no se reflejan de inmediato.

Si querés, puedo crear un pequeño script de una sola línea ejecutable en `scripts/` que automatice esto.
