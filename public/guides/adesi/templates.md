# Plantillas y Checklists reutilizables (ADESI)

## Plantilla: Caso de Uso (tabla 5 columnas)

| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| 1 | [Actor] | [verbo en presente] [objeto] | [Sistema] | [verbo en presente] [objeto/resultado observable] |

Reglas: Cada `Acción` y `Respuesta` debe ser verbo en presente + objeto. No incluir condiciones.

## Plantilla: Asociación

- Nombre: [NombreAsociacion]
- Extremo A: [ClaseA] (rol: [rolA], multiplicidad: [mA])
- Extremo B: [ClaseB] (rol: [rolB], multiplicidad: [mB])
- Atributos de la asociación (si aplica): [atributos]
- Justificación "necesito-conocer": [razón]

## Plantilla: Atributo complejo (tipo no primitivo)

- Nombre del tipo: [Tipo]
- Componentes: campo1: Tipo, campo2: Tipo
- Unidad (si aplica): [unidad, moneda]
- Validaciones/Operaciones: [validaciones]
- Ejemplo de uso: [Clase] -> atributo: [Tipo]

## Checklist rápido para un CU

- [ ] Identificar actor primario
- [ ] Validar precondiciones
- [ ] Completar Flujo Normal en tabla 5-col
- [ ] Añadir Flujos Alternativos como tablas referenciadas
- [ ] Verificar trazabilidad con Matriz CRUD
