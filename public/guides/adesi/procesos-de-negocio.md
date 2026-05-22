# Procesos de Negocio

Guía para identificar, clasificar y documentar los procesos de una organización.

## ¿Qué es un Proceso de Negocio?

Un proceso es un **conjunto de recursos y actividades interrelacionadas** que transforman **Entradas (Inputs)** en **Salidas (Outputs)** con valor agregado. En ellos participan actores (internos o externos).

**Diferencia importante**:
- **Proceso**: QUÉ se hace (descripción del flujo)
- **Procedimiento**: CÓMO se hace (instrucciones paso a paso, el manual)

## Clasificación de Procesos

### Procesos Estratégicos (Dirección)

Procesos que definen la estrategia y dirección del negocio.

**Características**:
- Largo plazo
- Decisiones de alto nivel
- Definen políticas y objetivos

**Ejemplos**:
- Definir estrategia de expansión
- Planificar presupuesto anual
- Establecer políticas de calidad
- Diseñar nuevo producto

---

### Procesos Operativos (Valor)

Procesos que generan valor directo al cliente. Son los procesos "core" del negocio.

**Características**:
- Impacto directo en cliente
- Recurrentes
- Generan ingresos

**Ejemplos**:
- Venta de productos
- Atención al cliente
- Manufactura
- Distribución

---

### Procesos de Apoyo (Soporte)

Procesos que apoyan y habilitan los procesos operativos.

**Características**:
- No generan valor directo
- Necesarios para que funcione el negocio
- Internos

**Ejemplos**:
- Gestión de recursos humanos
- Compras y proveedores
- Mantenimiento de sistemas
- Administración financiera

---

## Proceso Elemental de Negocio (PEN o EBP)

Definición de Larman: es una tarea realizada por **una persona**, en **un lugar**, en **un instante**, como respuesta a **un evento de negocio**, que agrega valor cuantificable y deja los datos en un **estado consistente**.

**Características del PEN**:
- Se completa en una sesión de trabajo (0-20 minutos)
- Genera un resultado tangible
- Deja el sistema en estado estable
- Responde a un evento específico

**Ejemplos de PEN**:
- Registrar un nuevo cliente
- Procesar un pedido
- Cobrar una factura
- Validar un documento

---

## Lista de Procesos de Negocio

### Plantilla

| ID | Nombre | Descripción | Tipo | Actor Principal |
|----|--------|-------------|------|-----------------|
| P1 | [Nombre verbo + objeto] | [Qué se logra] | [Estratégico/Operativo/Apoyo] | [Rol] |
| P2 | | | | |

### Ejemplo completo

| ID | Nombre | Descripción | Tipo | Actor Principal |
|----|--------|-------------|------|-----------------|
| P1 | Vender producto | Atender al cliente, procesar pago y entregar producto | Operativo | Vendedor |
| P2 | Gestionar inventario | Registrar entrada/salida de stock y alertar sobre bajos niveles | Operativo | Almacenero |
| P3 | Reclutar personal | Publicar vacante, entrevistar candidatos y contratar | Apoyo | RH |
| P4 | Elaborar presupuesto anual | Definir metas financieras y asignar recursos | Estratégico | Gerente |

---

## Relación entre Procesos y Casos de Uso

Un **proceso de negocio** puede estar compuesto por uno o más **Procesos Elementales de Negocio (PEN)**.

Cada **PEN puede convertirse en un Caso de Uso** si el sistema tiene responsabilidad en su ejecución.

**Ejemplo**:
- **Proceso**: Venta completa (desde cliente decide comprar hasta recibe producto)
- **PEN1**: Registrar cliente → **CUU01: Crear Cliente**
- **PEN2**: Crear pedido → **CUU02: Registrar Pedido**
- **PEN3**: Procesar pago → **CUU03: Procesar Pago**
- **PEN4**: Emitir factura → **CUU04: Emitir Factura**

---

## Diagrama de Procesos (Mapa de Procesos)

Una forma visual de ver cómo se relacionan los procesos:

```
PROCESOS ESTRATÉGICOS
    ↓
    Planificación Estratégica
        ↓
PROCESOS OPERATIVOS
    ├─ Venta
    ├─ Producción
    ├─ Distribución
    └─ Soporte al cliente
        ↓
        ↑
PROCESOS DE APOYO
    ├─ Gestión de RH
    ├─ Finanzas
    ├─ TI
    └─ Proveedores
```

---

## Plantilla para Documentar un Proceso

```markdown
## Proceso: [Nombre]
**ID**: P[número]
**Tipo**: [Estratégico/Operativo/Apoyo]
**Objetivo**: [Qué se logra con este proceso]

### Entrada
- [Evento, solicitud o información que dispara el proceso]

### Actividades principales
1. [Primera actividad]
2. [Segunda actividad]
3. [Tercera actividad]

### Salida
- [Resultado, producto o servicio generado]

### Actores involucrados
- [Rol 1]
- [Rol 2]

### Requisitos o restricciones
- [Restricción 1]
- [Restricción 2]

### Métricas de éxito
- [KPI 1]: [objetivo]
- [KPI 2]: [objetivo]

### Procesos relacionados
- [P2]: [Qué conexión tiene]
```

---

## Checklist para validar tus Procesos

- [ ] Cada proceso tiene un objetivo claro
- [ ] Está clasificado en la categoría correcta
- [ ] Tiene entrada y salida definidas
- [ ] Identifica claramente quién participa
- [ ] Se puede medir o validar su éxito
- [ ] No se confunde con procedimientos
- [ ] Se relaciona apropiadamente con otros procesos
- [ ] Los nombres usan verbo + objeto
