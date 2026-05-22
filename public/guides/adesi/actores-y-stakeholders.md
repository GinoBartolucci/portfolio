# Identificar Actores y Stakeholders

Guía para identificar y documentar todas las personas y entidades que interactúan con o son afectadas por el sistema.

## ¿Cuál es la diferencia?

### Stakeholders
**Todas las personas u organizaciones** que tienen algún interés, influencia o responsabilidad sobre el comportamiento del sistema, **aunque no lo usen directamente**.

**Ejemplos**: cliente, gerente, auditor, regulador.

### Actores
Un **stakeholder que además tiene interacción** en los procesos de un sistema. Encargados de cumplir objetivos o metas. Se definen mediante el **rol que cumplen** dentro del proceso.

**Importante**: No confundir actores con dispositivos. Los dispositivos (tablets, teléfonos) son mecanismos que los actores usan, pero no son actores en sí.

---

## Tipos de Actores

### Actor Primario (de Interés)

Es la persona o sistema **cuyo objetivo se satisface al completar el proceso con éxito**.

**Preguntas clave**:
- ¿Para quién estamos construyendo este servicio?
- ¿Quién gana valor?

**Ejemplos**:
- En "Vender un producto": el Cliente
- En "Procesar nómina": el Empleado
- En "Gestionar inventario": el Almacenero

---

### Actor Iniciador (Disparador)

Es quien **envía la primera señal o dato** que saca al sistema de su estado de reposo.

**Preguntas clave**:
- ¿Quién aprieta el botón?
- ¿Quién dispara el evento inicial?

**Importante**: Un actor puede ser primario e iniciador al mismo tiempo si es el dueño de la meta e inicia físicamente el caso de uso.

**Ejemplos**:
- En "Consultar saldo": Cliente (primario) e iniciador
- En "Generar reporte automático": Sistema (iniciador), Gerente (primario)

---

### Actor Secundario (de Soporte)

El **sistema inicia la comunicación con él**. Suele ser para obtener información externa, validar datos o notificar algo.

**Preguntas clave**:
- ¿A quién contacta el sistema?
- ¿De quién obtiene información el sistema?

**Ejemplos**:
- En "Procesar pago": Pasarela bancaria (actor secundario)
- En "Registrar cliente": Servicio de validación de DNI (actor secundario)
- En "Emitir factura": AFIP (actor secundario)

---

### Actor Terciario

Aquella **entidad que tiene interés en los requerimientos del sistema** pero no juega un papel directo en los casos de uso.

**Ejemplos**:
- Auditor (valida procesos, pero no participa activamente)
- Regulador (establece normas que el sistema debe cumplir)
- Accionista (interesado en resultados, no en operación)

---

## Lista de Actores y Stakeholders

### Plantilla

| Nombre | Descripción | Tipo (S/A)* | Rol/Función |
|--------|-------------|-----------|------------|
| | | | |

**S/A* = Stakeholder / Actor**

### Ejemplo completo

| Nombre | Descripción | Tipo | Rol/Función |
|--------|-------------|------|------------|
| Cliente | Persona que compra productos en el sistema | A | Actor primario e iniciador |
| Vendedor | Encargado de procesar venta | A | Actor primario |
| Pasarela de Pago | Sistema externo que procesa pagos | A | Actor secundario |
| Gerente | Persona que revisa reportes | S | Stakeholder |
| Auditor | Valida cumplimiento de normas | S | Stakeholder |
| AFIP | Organismo regulador | S | Stakeholder terciario |
| Departamento de TI | Administra infraestructura | S | Stakeholder |

---

## Cómo Identificar Actores

### Paso 1: Enumera todas las entidades
Haz una lista de toda persona, rol, sistema externo o entidad que tenga alguna relación con tu sistema.

### Paso 2: Para cada entidad, pregúntate:
- ¿Interactúa directamente con el sistema? → **Probablemente es un actor**
- ¿Usa el sistema para lograr una meta? → **Es un actor primario**
- ¿Inicia procesos en el sistema? → **Es un actor iniciador**
- ¿Solo tiene interés pero no interactúa? → **Es un stakeholder**

### Paso 3: Define roles claros
En lugar de usar nombres de personas ("Juan"), usa roles ("Vendedor"). Así el análisis es más general.

---

## Características de un Buen Actor

✅ **Correcto**:
- Rol (Vendedor, Cliente, Gerente)
- Sistema externo (Pasarela de Pago, AFIP)

❌ **Incorrecto**:
- Dispositivo (Tablet, Teléfono)
- Componente del sistema (Base de datos, API)
- Demasiado específico (Juan García)

---

## Actores Primarios vs Secundarios

| Aspecto | Primario | Secundario |
|---------|----------|-----------|
| **Objetivo** | Su meta se logra | Proporciona servicios |
| **Iniciador** | Puede serlo | Respondedor pasivo |
| **Interés** | Alto | Medio/Bajo |
| **Ejemplos** | Cliente, Usuario, Empleado | Sistema externo, Admin |

---

## Plantilla para Documentar un Actor

```markdown
## Actor: [Nombre del rol]

**Tipo**: [Primario/Secundario/Terciario]

**Descripción**: 
[Quién es, qué rol cumple]

**Objetivo**:
[Qué quiere lograr con el sistema]

**Responsabilidades**:
- [Responsabilidad 1]
- [Responsabilidad 2]

**Interacción con el sistema**:
- [Cómo inicia procesos]
- [Qué información proporciona]
- [Qué información recibe]

**Prioridad**:
[Alta/Media/Baja]
```

---

## Checklist para validar Actores y Stakeholders

- [ ] Se identificaron todas las entidades relevantes
- [ ] Cada actor tiene un rol claro y bien definido
- [ ] Se clasificaron correctamente (Primario/Secundario/Terciario)
- [ ] Se diferencia entre actores (interactúan) y stakeholders (solo interesan)
- [ ] Se usaron roles, no nombres específicos
- [ ] Se incluyen sistemas externos relevantes
- [ ] Cada actor tiene objetivo(s) claro(s)
- [ ] Se validó con los stakeholders reales
- [ ] Se documenta cómo interactúa cada uno
