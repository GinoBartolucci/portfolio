# Reglas de Negocio

Guía para identificar, clasificar y documentar las políticas y restricciones del negocio.

## ¿Qué es una Regla de Negocio?

Una regla de negocio es una declaración de una **política o condición que debe cumplirse** en el sistema. Define cómo funciona la organización.

## Los 5 Tipos de Reglas de Negocio

### Hechos (Facts)

Declaraciones que son verdaderas sobre el negocio. No varían.

**Plantilla**: `[Objeto] es [atributo/característica]`

**Ejemplos**:
- Cada contenedor químico tiene un único código de barras identificador.
- Todo cliente tiene un documento de identidad (DNI o Pasaporte).
- Cada venta genera una factura obligatoriamente.

**Cuándo usarla**: Para establecer verdades base del negocio que son inmutables.

---

### Restricciones (Constraints)

Limitan las acciones que el sistema o sus usuarios pueden realizar.

**Plantilla**: `[Sujeto] no puede/debe [acción] [condición]`

**Ejemplos**:
- Un cliente no puede tener más de 3 préstamos activos simultáneamente.
- Las páginas web deben cumplir con las regulaciones gubernamentales para accesibilidad visual.
- Un empleado no puede trabajar más de 48 horas semanales.
- Un documento no puede tener más de 100 MB.

**Cuándo usarla**: Para definir límites y validaciones del negocio.

---

### Acciones Disparadoras (Action Enablers)

Reglas que desencadenan alguna actividad bajo condiciones específicas.

**Plantilla**: `Si [condición] entonces [acción ocurre]`

**Ejemplos**:
- Si el almacén tiene contenedores en stock, entonces los contenedores existentes se ofrecen al solicitante.
- Si un cliente compra más de $5.000 anuales, entonces se le envía una oferta de membresía VIP.
- Si la fecha de vencimiento de la reserva llega, entonces se libera automáticamente.
- Si el pago se rechaza 3 veces, entonces se bloquea el pedido.

**Cuándo usarla**: Para describir automatismos y flujos que se gatillan por eventos.

---

### Cálculos (Computations)

Definen cómo se transforma o calcula un dato a partir de otros.

**Plantilla**: `[Término] se calcula como [fórmula/algoritmo]`

**Ejemplos**:
- El monto neto se calcula como el monto bruto menos el 21% de retención impositiva.
- El total de la factura se calcula como la suma de todos los ítems menos el descuento aplicado.
- La edad se calcula como la diferencia entre la fecha actual y la fecha de nacimiento.
- El interes mensual se calcula como: saldo × tasa_mensual ÷ 100.

**Cuándo usarla**: Para documentar fórmulas y transformaciones de datos.

---

### Inferencias (Inferences)

Una regla que establece que si ocurren ciertos hechos, entonces se infiere un nuevo hecho o conclusión.

**Plantilla**: `Si [hecho/condición] entonces [conclusión/nuevo estado]`

**Ejemplos**:
- Si el pago no se recibe dentro de 30 días calendarios de la fecha de vencimiento, entonces la cuenta es morosa.
- Si un cliente realiza compras por más de $10.000 anuales, entonces se lo considera cliente VIP.
- Si una cuenta tiene saldo negativo por más de 7 días, entonces se genera reporte de mora.
- Si el envío demora más de 5 días, entonces se envía compensación automática.

**Cuándo usarla**: Para deducir estados o categorías que se derivan de otras condiciones.

---

## Diferencias entre tipos

| Tipo | Propósito | Ejemplo |
|------|----------|---------|
| Hecho | Establecer verdades base | Todo pedido tiene un ID único |
| Restricción | Limitar acciones | Máximo 3 devoluciones por año |
| Acción Disparadora | Automatizar procesos | Si stock < 10, generar orden de compra |
| Cálculo | Transformar datos | descuento = cantidad × porcentaje |
| Inferencia | Deducir conclusiones | Si mora > 30 días, entonces bloqueado |

## Plantilla de Documentación

```
Regla #:  RN01
Descripción: Un cliente no puede tener más de 3 préstamos activos simultáneamente
Tipo: Restricción
Afecta: Módulo de Créditos, Validación de solicitudes
Actor: Sistema (validación automática)
Impacto: Si se viola, rechazar la solicitud de nuevo préstamo
```

## Checklist para validar tus Reglas de Negocio

- [ ] Cada regla es clara y no ambigua
- [ ] Está clasificada en el tipo correcto
- [ ] Describe una política del negocio, no una implementación técnica
- [ ] Es verificable y testeable
- [ ] Tiene impacto sobre al menos un caso de uso
- [ ] Usa la plantilla correcta según su tipo
- [ ] Es independiente: no depende de otras reglas para existir
