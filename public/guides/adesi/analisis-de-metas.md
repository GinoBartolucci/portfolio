# Análisis de Metas

Guía para descubrir, organizar y documentar las metas (objetivos) que los actores quieren lograr y sus relaciones.

## ¿Qué es el Análisis de Metas?

Es el proceso de **descubrir, organizar y documentar** las metas y las **relaciones entre ellas**. Las metas se analizan como punto de partida para desarrollar y explicitar requerimientos.

**Objetivos del análisis**:
- Entender qué quiere lograr cada actor
- Identificar cómo se relacionan las metas
- Fijar límites de procesos de negocio
- Descubrir nuevos requerimientos no obvios

---

## Conceptos Clave

### Meta
Es el **fin / objetivo final**. Es la declaración de lo que alguien desea alcanzar o evitar.

**Ejemplos**:
- Vender un producto
- Registrar un cliente
- Recibir un envío a tiempo

### Sub-meta / Meta Subordinada
Es una meta que al ser alcanzada **contribuye al logro parcial de otra meta**.

**Ejemplo**:
- Meta principal: "Vender un producto"
- Sub-meta: "Cobrar con tarjeta" (ayuda a lograr la venta)
- Sub-meta: "Empacar el producto" (ayuda a lograr la venta)

### Meta Obstáculo o Fracaso
Es una meta que al ser alcanzada **impide o bloquea** el logro de otra meta.

**Ejemplo**:
- Meta: Vender un producto
- Meta obstáculo: "Sistema rechaza la tarjeta por falta de fondos"

---

## Tipos de Metas según Actores

### Metas Intra-actor
Son metas de **un mismo actor**. Siempre que hablemos de metas intra-actor debemos referenciar al actor.

**Ejemplo (Cajero)**:
- Meta 1: "Abrir la caja registradora"
- Meta 2: "Registrar la venta"
- Meta 3: "Contar el dinero"

Todas son metas del mismo actor: Cajero.

### Metas Inter-actor
Refieren a metas que para ser realizadas **involucran a metas de más de un actor**.

**Ejemplo (Cliente + Cajero)**:
- Meta del Cliente: "Comprar un cuaderno"
- Meta del Cajero: "Cobrar la mercadería"

Estas dos metas se entrelazan para lograr una "Venta".

### Metas Independientes
Dos metas son independientes cuando **no existe una relación de subordinación** entre ellas (ninguna es sub-meta de la otra).

**Ejemplo**:
- "Vender un producto" 
- "Capacitar a un empleado"

No se relacionan directamente.

---

## Metas Principales vs Complementarias

### Metas Principales
Metas independientes que al ser logradas **explican o fundamentan la razón de existencia del negocio**.

**Ejemplos**:
- "Vender productos"
- "Prestar servicios"
- "Gestionar logística"

### Metas Complementarias
Metas independientes que al ser logradas **no explican la razón de existencia**, pero **ayudan a las metas principales**.

**Ejemplos**:
- "Capacitar personal"
- "Mantener la infraestructura"
- "Cumplir regulaciones"

---

## Tabla de Identificación de Metas

### Plantilla

| Actor | Actividad | Meta del Actor | Funcionalidad del Sistema | ID Meta |
|-------|-----------|---|---|---|
| | | | | |

### Elementos

- **Actor**: quién tiene la meta
- **Actividad**: qué hace
- **Meta del Actor**: qué quiere lograr (desde el punto de vista del actor)
- **Funcionalidad del Sistema**: cómo el sistema contribuye (desde el punto de vista organizacional)
- **ID Meta**: identificador opcional para referenciar (ej: M01, M02)

### Ejemplo

| Actor | Actividad | Meta del Actor | Funcionalidad del Sistema | ID Meta |
|-------|-----------|---|---|---|
| Cliente | Busca producto | Encontrar productos de mi interés | Listar productos por categoría | M01 |
| Cliente | Compra | Adquirir un producto | Procesar compra y pago | M02 |
| Vendedor | Registra | Registrar la venta en el sistema | Guardar orden de venta | M03 |
| Gerente | Analiza | Conocer tendencias de venta | Generar reportes de ventas | M04 |

---

## Gráfico de Subordinación de Metas

Es un **digraf que muestra gráficamente** las asociaciones de subordinación entre metas.

**Notación**:
- Metas en óvalos o rectángulos
- Flechas con "SUB" para indicar subordinación
- Flechas con "BLOQUEA" para metas obstáculo

**Ejemplo visual**:

```
           M01: Vender producto
                    ↓ SUB
        ┌───────────┼───────────┐
        ↓           ↓           ↓
    M02: Cobrar   M03: Empacar M04: Entregar
        ↓ SUB
        M04a: Validar pago
```

---

## Tabla de Metas Intra-actor

Este artefacto toma las metas de un actor y **analiza cuáles subordinan a cuáles**.

### Plantilla

| Actor | Meta | Meta Intra-actor | Relación |
|-------|------|---|---|
| | | | |

### Ejemplo

| Actor | Meta | Meta Intra-actor | Relación |
|-------|------|---|---|
| Vendedor | Registrar venta | Vender producto | Subordinada |
| Vendedor | Registrar venta | Cobrar mercadería | Subordinada |
| Vendedor | Contar dinero | Registrar venta | Independiente |
| Vendedor | Abrir caja | Registrar venta | Subordinada |

---

## Tabla de Metas Inter-actor

Este artefacto toma las metas intra-actor de **múltiples actores** y analiza cómo se entrelazan.

### Plantilla

| Actor 1 | Meta 1 | Actor 2 | Meta 2 | Meta Inter-actor |
|---------|--------|---------|--------|---|
| | | | | |

### Ejemplo

| Actor 1 | Meta 1 | Actor 2 | Meta 2 | Meta Inter-actor |
|---------|--------|---------|--------|---|
| Cliente | Comprar producto | Vendedor | Cobrar mercadería | Realizar venta |
| Cliente | Recibir producto | Logístico | Entregar a domicilio | Completar pedido |

---

## Tabla Resumen

Se realiza una tabla resumen **por cada meta independiente** encontrada.

### Plantilla

| Campo | Contenido |
|-------|-----------|
| **Actor Primario** | Nombre del actor principal |
| **Nombre del Caso de Uso** | Verbo + objeto |
| **Otros Actores** | Actores secundarios |
| **Meta** | Descripción de la meta |
| **Descripción** | Flujo de trabajo (desde X hasta Y pasando por Z) |

### Ejemplo

| Campo | Contenido |
|-------|-----------|
| **Actor Primario** | Cliente |
| **Nombre del Caso de Uso** | Realizar Compra |
| **Otros Actores** | Vendedor, Pasarela de Pago, Logístico |
| **Meta** | Que el cliente adquiera un producto con éxito |
| **Descripción** | Desde que el cliente selecciona un producto, hasta que recibe la confirmación de compra pasando por búsqueda, selección, pago y confirmación |

---

## Checklist para Análisis de Metas

- [ ] Se identificaron todas las metas de cada actor
- [ ] Se distingue entre metas intra-actor e inter-actor
- [ ] Se documentaron las relaciones de subordinación
- [ ] Se identificaron metas obstáculo o fracaso
- [ ] Se diferencia entre metas principales y complementarias
- [ ] Se asignó ID a cada meta para facilitar referencia
- [ ] Se validó con los stakeholders reales
- [ ] El análisis es útil para definir Casos de Uso
