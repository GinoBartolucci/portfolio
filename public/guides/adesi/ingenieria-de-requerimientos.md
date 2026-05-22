# Ingeniería de Requerimientos

Guía completa para capturar, documentar y validar los requerimientos de un sistema.

## ¿Qué es la Ingeniería de Requerimientos (IR)?

Es un **proceso que abarca tareas y técnicas** que permiten entender los requerimientos que necesita el cliente. Comienza en la etapa de comunicación y continúa en el modelado.

**Meta principal**: Crear y mantener el documento de requerimientos del sistema que será la base para el desarrollo.

---

## El Proceso General de IR

### Elicitación (Recopilación)
Obtener información sobre qué necesita el sistema mediante relevamiento.
- Entrevistas, observación, documentación
- Identificar necesidades implícitas y explícitas

### Análisis
Entender, refinar y desglosar los requerimientos en partes manejables.
- Identificar conflictos
- Priorizar
- Descomponer en requerimientos menores

### Especificación
Documentar formalmente los requerimientos de manera clara y completa.
- Escribir requerimientos testables
- Usar estándares de formato

### Validación
Confirmar que los requerimientos definidos son realmente lo que el cliente quiere.
- Revisión con stakeholders
- Pruebas de consistencia
- Verificar completitud

---

## Las 7 Tareas de la IR

(Pueden ocurrir en paralelo y se adaptan a las necesidades del proyecto)

### Concepción
Conocer el negocio, contexto y objetivos generales del sistema.

### Elicitación
Obtener información del cliente y stakeholders sobre necesidades y restricciones.

### Elaboración
Analizar, desglosar y refinar la información recopilada.

### Negociación
Resolver conflictos entre requisitos y priorizar según importancia.

### Especificación
Documentar formalmente los requerimientos en un formato estándar.

### Validación
Verificar que los requerimientos especificados sean correctos y completos.

### Administración
Gestionar los cambios que sufran los requerimientos a lo largo del proyecto.

---

## Tipos de Requerimientos: FURPS+

El acrónimo **FURPS+** desglosa los requerimientos en categorías:

### **F** - Funcionales
¿Qué acciones debe realizar el sistema?

**Ejemplos**:
- El sistema debe registrar clientes con DNI, nombre y email
- El sistema debe calcular el total de una factura
- El sistema debe generar reportes de ventas

### **U** - Usabilidad (Usability)
Interfaz, eficiencia de uso, factores humanos y documentación.

**Ejemplos**:
- El proceso de pago debe completarse en máximo 3 clics
- La interfaz debe cumplir con estándares de accesibilidad WCAG 2.1
- Debe haber ayuda contextual en cada pantalla

### **R** - Fiabilidad (Reliability)
Frecuencia de fallos y capacidad de recuperación.

**Ejemplos**:
- Ante un corte de energía, ninguna operación en curso debe perderse o duplicarse
- El sistema debe recuperarse automáticamente de errores de base de datos
- Disponibilidad: 99.5% al año

### **P** - Rendimiento (Performance)
Tiempos de respuesta, productividad, disponibilidad y uso de recursos.

**Ejemplos**:
- El catálogo de productos debe cargar en menos de 2 segundos
- Las búsquedas deben procesar 10.000 registros en menos de 1 segundo
- Máximo 500 MB de memoria en uso

### **S** - Soporte (Supportability)
Facilidad de mantenimiento, adaptabilidad y configurabilidad.

**Ejemplos**:
- El diseño debe ser adaptable para agregar un "Modo Oscuro" en el futuro
- Debe permitir integración con otros sistemas vía API REST
- Código documentado para facilitar mantenimiento

### **+** - Otras Restricciones

#### De Implementación
- El sistema debe programarse en Java
- Debe usar base de datos PostgreSQL

#### De Interfaz
Restricciones para interacción con sistemas externos.
- Debe conectarse con el sistema de AFIP

#### De Operaciones
Reglas de la vida diaria del sistema en producción.
- Backups automáticos nocturnos a las 3 AM
- Sincronización con servidores cada 30 minutos

#### De Empaquetamiento
Cómo se entrega el sistema.
- En un instalador .exe
- En un contenedor Docker
- En la nube (AWS, Azure)

#### Legales
Cumplimiento de normas, licencias, leyes.
- Ley de Protección de Datos Personales
- Cumplimiento de ISO 27001
- Licencias de software de terceros

---

## Lista de Requerimientos (Artefacto)

### Plantilla

| ID* | Actor | Descripción | Tema | Clasificación | Prioridad |
|-----|-------|-------------|------|---------------|-----------| 
| R1 | | | | | |
| R2 | | | | | |

### Elementos de la tabla

- **ID***: identificador único (R01, R02, etc.)
- **Actor**: quién solicita o es afectado por el requerimiento
- **Descripción**: qué debe hacer o cumplir el sistema
- **Tema**: categoría o módulo al que pertenece
- **Clasificación**: Funcional / No funcional (FURPS+)
- **Prioridad**: Alta / Media / Baja

### Ejemplo completo

| ID | Actor | Descripción | Tema | Clasificación | Prioridad |
|----|-------|-------------|------|---------------|-----------| 
| R1 | Cliente | El sistema debe permitir registrar clientes con DNI, nombre, email | Gestión Clientes | Funcional | Alta |
| R2 | Sistema | El sistema debe validar que emails sean únicos | Gestión Clientes | Funcional | Alta |
| R3 | Usuario | Búsquedas deben completarse en menos de 2 segundos | Performance | Performance | Media |
| R4 | Admin | La interfaz debe cumplir WCAG 2.1 | Accesibilidad | Usabilidad | Alta |
| R5 | Sistema | Backup automático diario a las 2 AM | Operaciones | Operaciones | Media |

---

## Estructura de un Requerimiento Bien Escrito

```
ID: R01
Actor: [Quién lo solicita]
Descripción: El sistema DEBE [acción] [objeto] [condición]
Tema: [Módulo/categoría]
Clasificación: [Funcional/URPS+]
Prioridad: [Alta/Media/Baja]
Criterios de aceptación:
  1. [Condición verificable]
  2. [Condición verificable]
  3. [Condición verificable]
```

### Consejos para escribir buenos requerimientos

- **Claridad**: usar lenguaje simple, evitar ambigüedad
- **Completitud**: incluir toda la información necesaria
- **Testeable**: debe ser posible verificar si se cumple
- **Independencia**: no depender de otros requerimientos
- **Prioridad**: tener claro qué es crítico
- **Realista**: ser alcanzable con recursos disponibles

---

## Checklist para validar Requerimientos

- [ ] Cada requerimiento tiene ID único
- [ ] La descripción es clara y no ambigua
- [ ] Es testeable (hay forma de verificar si se cumple)
- [ ] Está correctamente clasificado (Funcional/URPS+)
- [ ] Tiene prioridad asignada
- [ ] El actor está identificado
- [ ] Es independiente (no depende de la redacción de otro)
- [ ] Fue validado con el cliente/stakeholder
- [ ] Se puede estimar su esfuerzo de desarrollo
