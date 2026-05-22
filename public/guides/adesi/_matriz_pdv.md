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
