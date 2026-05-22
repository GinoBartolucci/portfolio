# Matriz CRUD

Guía para crear una matriz de trazabilidad que valida la completitud de los requisitos del sistema.

## ¿Qué es la Matriz CRUD?

Es una **matriz de trazabilidad que relaciona entidades con funcionalidades**, validando que cada dato que usa el sistema tenga las operaciones necesarias para gestionarlo.

**Significa**: Create - Read - Update - Delete

**Objetivo**: Asegurar que **no falta ningún caso de uso** y que **ningún requisito está huérfano**.

---

## Concepto de CRUD

### Create (Crear)
Insertar nuevos registros en el sistema.

**Preguntas**:
- ¿Quién crea esta entidad?
- ¿Cuál es el caso de uso que la crea?

**Ejemplo**: 
- Entidad: Cliente
- CUU: Registrar Cliente

### Read (Leer)
Consultar, buscar, mostrar información existente.

**Preguntas**:
- ¿Quién necesita leer esta información?
- ¿Hay búsquedas, reportes o listados?

**Ejemplo**:
- Entidad: Pedido
- CUU: Consultar Pedido, Listar Pedidos, Generar Reporte Ventas

### Update (Actualizar)
Modificar datos existentes.

**Preguntas**:
- ¿Qué datos se pueden cambiar después de creados?
- ¿Quién puede editar?

**Ejemplo**:
- Entidad: Cliente
- CUU: Editar Datos Cliente

### Delete (Eliminar)
Borrar o desactivar registros.

**Preguntas**:
- ¿Se pueden borrar completamente o solo desactivar?
- ¿Quién tiene permisos?

**Ejemplo**:
- Entidad: Usuario
- CUU: Eliminar Usuario (lógico o físico)

---

## Estructura de la Matriz CRUD

### Plantilla Básica

```
Entidad / Caso de Uso | CUU01 | CUU02 | CUU03 | CUU04 | CUU05 | CUU06 |
                       |       |       |       |       |       |       |
```

### Cómo llenarla

- **Filas**: Entidades o datos del sistema
- **Columnas**: Casos de uso
- **Celdas**: Operación que realiza (C/R/U/D)

Si un CUU no toca una entidad, dejar en blanco.

---

## Ejemplo Completo: Sistema de Tienda

```
Entidad              | Reg.Cli | Crear Pdo | Ver Pdo | Pagar | Emitir Fac | Reportes |
                     | CUU01   | CUU02     | CUU03   | CUU04 | CUU05      | CUU06    |
─────────────────────┼─────────┼───────────┼─────────┼───────┼────────────┼──────────┤
Cliente              |    C    |     R     |         |       |      R     |    R     |
Pedido               |         |     C     |    R    |   U   |      R     |    R     |
LineaPedido         |         |     C     |    R    |       |      R     |    R     |
Producto            |         |     R     |    R    |       |      R     |    R     |
Factura             |         |           |         |       |      C     |    R     |
Pago                |         |           |         |   C   |      R     |    R     |
Usuario             |         |     R     |    R    |   R   |      R     |    R     |
```

### Lectura

- **Registro Cliente (CUU01)**: Crea cliente (C), es decir, inserta nuevos registros
- **Crear Pedido (CUU02)**: Lee cliente (R), crea pedido (C), crea líneas de pedido (C), lee productos (R)
- **Ver Pedido (CUU03)**: Lee pedido (R) y líneas de pedido (R), lee productos (R)
- **Pagar (CUU04)**: Actualiza pedido (U), crea pago (C)
- **Emitir Factura (CUU05)**: Crea factura (C), lee pedido (R), lee líneas (R), lee cliente (R), lee pagos (R)
- **Reportes (CUU06)**: Lee TODO (todas las entidades en R)

---

## Validaciones que Hace la Matriz CRUD

### ¿Cada entidad tiene al menos C?

```
Cliente              |    C    |         |         |
```

✅ **Bien**: El Cliente se crea en algún CUU

```
Producto            |         |         |         |
```

❌ **Problema**: ¿Cómo se crean productos? Falta un caso de uso

### ¿Cada entidad tiene al menos R?

```
Factura             |         |         |    R    |
```

✅ **Bien**: Las facturas se consultan

```
Auditoría           |         |    C    |         |
```

❌ **Problema**: Se crean auditorías pero nunca se consultan. ¿Para qué?

### ¿Toda U corresponde a un CUU claro?

```
Pedido              |         |    C    |         |   U   |
```

✅ **Bien**: Cuando se paga (CUU04) se actualiza estado del pedido

```
Cliente             |         |         |    U    |   U   |
```

❌ **Ambiguo**: ¿En cuál de estos dos CUU se edita? Debería haber 1 solo

### ¿Los Delete están justificados?

```
Usuario             |         |    C    |         |   D   |
```

✅ **Bien**: Si el negocio permite borrar usuarios

```
Factura             |         |    C    |         |   D   |
```

❌ **Problema**: ¿Por qué se borra una factura? Debería ser lógico (desactivar)

---

## Matriz con Actores (Extensión)

Agregar quién realiza cada CUU:

```
Entidad         | Admin-Crea Prod | Vendedor-Vende | Cliente-Compra | Gerente-Reportes |
                | CUU01           | CUU02          | CUU03          | CUU04            |
────────────────┼─────────────────┼────────────────┼────────────────┼──────────────────┤
Producto        |      C          |       R        |       R        |       R          |
Pedido          |                 |       C        |       C        |       R          |
Cliente         |                 |       R        |       U        |       R          |
```

**Ventaja**: Identifica si alguien falta o tiene permisos excesivos.

---

## Matriz CRUD con Módulos (Extensión)

Agrupar CUU por módulo del sistema:

```
Entidad  | Módulo Gestión | Módulo Ventas | Módulo Admin | Reportes |
         | Clientes/Staff | Pedidos/Pago  | Usuarios     |          |
─────────┼────────────────┼───────────────┼──────────────┼──────────┤
Cliente  |     CRU        |      R        |      D       |    R     |
Pedido   |                |     CRUD      |              |    R     |
Usuario  |      CU        |      R        |     CRD      |          |
```

---

## Tabla de Validación de Completitud

Después de llenar la matriz, responder:

| Pregunta | Sí | No | Nota |
|----------|----|----|------|
| ¿Cada entidad tiene al menos un C? | | | Si "No", ¿cómo se crean? |
| ¿Cada entidad tiene al menos un R? | | | Si "No", ¿para qué existen? |
| ¿Hay U sin un CUU claro? | | | Si "Sí", consolidar |
| ¿Hay D sin justificación? | | | Si "Sí", revisar política de datos |
| ¿Hay CUU sin operación CRUD? | | | Si "Sí", ¿ese CUU es válido? |
| ¿Los permisos tienen sentido? | | | Si "No", revisar seguridad |

---

## Errores Comunes

❌ **Incorrecto**:
- Filas o columnas vacías completamente
- Mezclar entidades con pantallas
- No justificar por qué no hay CRUD para algo
- Olvidar entidades del diagrama de dominio

✅ **Correcto**:
- Cada entidad tiene al menos C y R
- Cada CUU tiene al menos una operación
- Las excepciones están documentadas
- Se valida completitud antes de desarrollar

---

## Plantilla para Generar

```markdown
## Matriz CRUD: [Nombre del Sistema]

### Encabezados de Columna
| [CUU01: Nombre] | [CUU02: Nombre] | [CUU03: Nombre] | [CUU04: Nombre] |

### Filas de Entidades
| Cliente        |      C      |         R       |         |         |
| Pedido         |             |         C       |    R    |    U    |
| LineaPedido    |             |         C       |    R    |         |
| Producto       |             |         R       |    R    |         |
| Usuario        |      C      |         R       |         |    D    |

### Validaciones
- [ ] Cada entidad importante tiene C
- [ ] Cada entidad importante tiene R
- [ ] U está justificado
- [ ] D está documentado
- [ ] No hay CUU sin operación

### Conclusiones
[Resultados y acciones correctivas]
```

---

## Checklist para tu Matriz CRUD

- [ ] Incluye todas las entidades del Modelo del Dominio
- [ ] Incluye todos los Casos de Uso primarios
- [ ] Cada C está asociado a un CUU de creación
- [ ] Cada R está asociado a un CUU de lectura/reporte
- [ ] Cada U está justificado y es único
- [ ] Cada D está documentado y permitido
- [ ] Se validó con arquitecto/analista
- [ ] Identifica casos incompletos
---

## Ejemplo aplicado: PDV (Venta)

Entidades: `Venta`, `LineaDeVenta`, `EspecificacionDelProducto`

| Entidad | C | R | U | D | Comentarios |
|--------|:-:|:-:|:-:|:-:|------------|
| Venta | X | X | X | X | Contiene referencias a LineaDeVenta y Cliente |
| LineaDeVenta | X | X | X | X | Guarda `precioVenta` (histórico) y cantidad |
| EspecificacionDelProducto | X | X | X |   | Mantiene precio actual y descripciones |

Checklist:
- [ ] Cada caso de uso que crea/modifica una entidad está listado
- [ ] `LineaDeVenta` registra precio histórico (no solo referencia a EspecificacionDelProducto)

*** End Example
