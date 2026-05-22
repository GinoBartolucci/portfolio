# Subesquema de Navegación

Guía para documentar y diseñar la estructura de navegación y flujo de información del sistema desde la perspectiva del usuario.

## ¿Qué es el Subesquema de Navegación?

Un subesquema de navegación es un **documento que describe cómo navegaré el usuario a través del sistema**, qué pantallas / vistas existen y cómo están conectadas.

**Objetivo**: Mostrar la **arquitectura de la interfaz de usuario** desde el punto de vista de la navegación.

**Sinónimos**: Navigation Schema, Flujo de Pantallas, Mapa de Pantallas, Arquitectura de Información.

---

## Componentes Básicos

### Pantalla (View / Screen)

Una pantalla es una **unidad de presentación** donde el usuario puede realizar acciones.

**Notación**: Rectángulo

```
┌──────────────────┐
│ Pantalla Inicio  │
└──────────────────┘
```

### Enlaces de Navegación

Conectan pantallas indicando cómo el usuario se desplaza.

**Notación**: Flecha etiquetada

```
┌──────────────┐      clic en Productos    ┌────────────────┐
│ Pantalla     │─────────────────────────→ │ Pantalla       │
│ Principal    │                           │ Productos      │
└──────────────┘                           └────────────────┘
```

### Acciones

Operaciones que el usuario puede realizar en una pantalla.

**Notación**: Se escriben como etiquetas en el enlace

```
┌─────────────────────────┐
│ Pantalla de Detalle:    │
│ [Ver] [Editar] [Borrar] │  ← Acciones
└──────────┬──────────────┘
           │ [Editar]
           ↓
┌─────────────────┐
│ Pantalla de     │
│ Edición         │
└─────────────────┘
```

---

## 3 Formatos de Representación

### Diagrama de Flujo (Graph)

Mostrar todas las pantallas y conexiones visualmente.

**Ventajas**:

- Fácil de visualizar
- Permite ver todo el sistema
- Identifica puntos de entrada/salida

**Desventajas**:

- Puede ser complejo si hay muchas pantallas
- Difícil de mantener si cambia frecuentemente

**Ejemplo**:

```
                  ┌─────────────────────────────────────┐
                  │ APLICACIÓN DE VENTA                 │
                  └──────────────────┬──────────────────┘
                                     │
                  ┌──────────────────┴──────────────────┐
                  │                                     │
              ┌───┴───────┐                      ┌──────┴────┐
              │ Menú      │                      │ Login     │
              │ Principal │                      │           │
              └───┬───────┘                      └───────────┘
                  │                                     │
        ┌─────────┼──────────┬──────────┐              │
        │         │          │          │              │
    ┌───┴───┐ ┌──┴──┐  ┌────┴───┐  ┌──┴──┐            │
    │Clientes│ │Venta│  │Reportes│  │ S.I.│            │
    │        │ │     │  │        │  │Conf.│            │
    └────────┘ └─────┘  └────────┘  └─────┘            │
        │       │            │        │                │
    [Crear]  [Nueva]     [Ventas]  [Usuarios]         [OK]
        │       │            │        │                │
    ┌───┴────┐ ┌──┴────┐  ┌──┴───┐  ┌──┴──────┐       │
    │ Editar │ │Detalle│  │Gráfico│  │Crear    │       │
    │ Cliente│ │Venta  │  │       │  │Usuario  │◄──────┘
    └────────┘ └───────┘  └───────┘  └─────────┘
```

---

### Tabla de Navegación

Documentar todas las pantallas y sus conexiones en una tabla.

**Ventajas**:

- Fácil de mantener
- Completo y detallado
- Cabe en documentos

**Desventajas**:

- Menos visual
- Difícil ver el "flujo general"

**Plantilla**:

| Pantalla | Descripción | Acciones | Navega a | Actor |
| -------- | ------------ | -------- | -------- | ----- |
|          |              |          |          |       |

**Ejemplo completo**:

| Pantalla        | Descripción                  | Acciones                           | Navega a                                       | Actor    |
| --------------- | ----------------------------- | ---------------------------------- | ---------------------------------------------- | -------- |
| Login           | Autenticación de usuario     | Ingresar credenciales, Registrarse | Menú principal (si OK), Registro              | Público |
| Menú Principal | Selector de módulos          | Clientes, Ventas, Reportes         | Pantalla seleccionada                          | Usuario  |
| Lista Clientes  | Listado de todos los clientes | Ver, Editar, Crear, Buscar         | Detalle Cliente, Editar Cliente, Nuevo Cliente | Vendedor |
| Detalle Cliente | Información del cliente      | Volver, Editar                     | Lista Clientes, Editar Cliente                 | Vendedor |
| Editar Cliente  | Formulario de edición        | Guardar, Cancelar                  | Detalle Cliente                                | Vendedor |
| Nueva Venta     | Crear pedido nuevo            | Agregar línea, Cobrar, Cancelar   | Detalle Venta, Menú                           | Vendedor |
| Detalle Venta   | Ver pedido guardado           | Imprimir, Editar, Borrar           | Detalle Venta, Lista Ventas                    | Vendedor |

---

### Diagrama de Transición de Estados

Mostrar cómo cambia el estado de la aplicación (no el estado de los datos).

**Ventajas**:

- Muy claro el flujo
- Identifica estados excluidos
- Fácil para validar completitud

**Desventajas**:

- Menos detalle sobre qué hace cada pantalla

**Notación**: Estados (círculos), Transiciones (flechas etiquetadas)

**Ejemplo**:

```
        ┌─────────┐
        │ INICIO  │
        └────┬────┘
             │ [Cargar]
             ↓
        ┌──────────┐
        │ AUTENTICACIÓN
        │(login)   │
        └────┬─────┘
             │[OK] [Cancelar]
        ┌────┴──────────────┐
        │                   │
        ↓                   ↓
    ┌─────────────┐    ┌──────────┐
    │ MENÚ        │    │ SALIDA   │
    │ PRINCIPAL   │    └──────────┘
    └─────┬───────┘
          │[Seleccionar módulo]
          ↓
    ┌────────────────────────┐
    │ MÓDULO SELECCIONADO    │
    │ (Clientes/Ventas/etc)  │
    └──┬──────────────────┬──┘
       │[Volver]          │[Suboperaciones]
       │                  │
       └──────┬───────────┘
              │
    ┌─────────┴────────┐
    │ MENÚ PRINCIPAL   │
    └──────────────────┘
```

---

## Plantilla Integrada

Aquí combinas los tres formatos en un solo documento:

```markdown
## Subesquema de Navegación: [Nombre del Sistema]

### Diagrama General
[Insertaré el diagrama de flujo]

### Tabla de Pantallas

| Pantalla | Descripción | Acciones | Navega a | Actor |
|----------|-------------|----------|----------|-------|
| Login | Autenticación | Ingresar | Menú | Público |
| ... | ... | ... | ... | ... |

### Diagrama de Transición de Estados
[Insertaré el diagrama de estados]

### Flujos de Caso de Uso

#### Caso de Uso 1: Registrar Cliente
1. Usuario en "Menú Principal"
2. Clic en "Clientes"
3. Pantalla "Lista Clientes"
4. Clic en "Crear"
5. Pantalla "Nuevo Cliente" (formulario)
6. Completa datos y guarda
7. Regresa a "Lista Clientes"
8. Nuevo cliente visible en lista
```

---

## Errores Comunes

❌ **Incorrecto**:

- Pantallas sin acciones claras
- Enlaces sin etiqueta (no se entiende por qué)
- Estados que no comunican el estado real
- Falta de menú de navegación global

✅ **Correcto**:

- Cada acción está etiquetada claramente
- Transiciones son lógicas y naturales
- Estados muestran dónde está el usuario
- Existe camino claro para volver atrás

---

## Principios de Buena Navegación

1. **Consistencia**: Las acciones similares hacen lo mismo en todas partes
2. **Predictibilidad**: El usuario anticipa a dónde lleva cada enlace
3. **Acceso Global**: Menú principal siempre accesible
4. **Salida Fácil**: Camino claro para volver o salir
5. **Minimizar Clicks**: No más de 3-4 clics para llegar a información importante

---

## Checklist para tu Subesquema

- [ ] Identifica todas las pantallas del sistema
- [ ] Cada pantalla tiene descripción clara
- [ ] Las acciones están etiquetadas
- [ ] Todas las transiciones tienen destino definido
- [ ] Existe menú principal o navegación global
- [ ] Los actores tienen acceso solo a pantallas apropiadas
- [ ] Se validó con usuarios reales
- [ ] Se usa al menos uno de los 3 formatos
