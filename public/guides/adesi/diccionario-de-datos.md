# Diccionario de Datos (DD)

Guía para documentar y estructurar los datos que maneja un sistema.

## ¿Qué es el Diccionario de Datos?

Es un documento que especifica qué datos usa, recibe y produce el sistema. Define:
- **Elementos de datos**: unidades indivisibles de información
- **Estructuras de datos**: agrupaciones de elementos
- **Flujos de datos**: información que entra y sale del sistema

## Elementos de Dato (Atributos)

Un elemento de dato es la unidad más pequeña de información que no tiene descomposición útil.

### Características técnicas (opcionales)

```
tipoDocumento = char(3)
edad = integer
salario = decimal(10,2)
activo = boolean
fechaRegistro = date
```

## Estructura de Dato (Atributo Compuesto)

Una estructura está formada por 2 o más componentes, donde cada uno puede ser un elemento o otra estructura.

**Ejemplo**: domicilio(e) = calle + numero + piso + ciudad + codigoPostal

## Flujos de Datos

### Flujo de Entrada (FE)
Información que un actor ingresa al sistema para iniciar un proceso.

```
FE.consultaStock = codProducto
```

### Flujo de Salida (FS)
Información que el sistema devuelve al terminar un proceso.

```
FS.resultadoStock = nombreProducto + cantDisponible + [enStock | agotado]
```

## Notación y Operadores

| Símbolo | Significado | Ejemplo |
|---------|-------------|---------|
| = | Está compuesto por | A = B + C |
| + | "y" (unión de estructuras) | nombre + apellido |
| [ \| ] | "o" (elegir una opción) | [DNI \| Pasaporte] |
| a{ }b | Iteraciones/repeticiones | 1{itemPedido}n |
| ( ) | Opcional | (telefonoFijo) |
| * * | Comentario | * Campo clave * |
| (e) | Subíndice: estructura de datos | domicilio(e) |
| (d) | Subíndice: dato discreto (conjunto finito) | tipoFactura(d) = [A \| B \| C] |

## Ejemplos Completos

### Ejemplo 1: Registro de Pedido
```
pedidoCliente = numPedido + fechaHora + 1{itemPedido}40 + 
                tipoEntrega(d) + (cuponDescuento) + datosCliente(e)

datosCliente(e) = dni + nombreCompleto + telefonoContacto

tipoEntrega(d) = [envioLocal | envioExterior]

---

## Tipos no primitivos y unidades

Cuando un atributo tiene estructura, validación propia o unidades, defínelo como tipo no primitivo.

Plantilla recomendada:

- **Nombre**: `TipoNombre` (ej: `ArticuloID`, `Cantidad`)
- **Componentes**: lista de subcampos (ej: `codigo: string`, `digitoVerificador: int`)
- **Unidad**: si aplica (ej: `ARS`, `USD`, `kg`)
- **Validaciones**: reglas (ej: regex, rango)
- **Ejemplo**: `Cantidad { valor: 2, unidad: "unidad" }`

Ejemplo: `ArticuloID`

- Nombre: `ArticuloID`
- Componentes: `prefijo: string`, `numero: string`, `checkDigit: int`
- Validación: regex `^[A-Z]{3}-\d{6}-\d$`

## Plantilla para atributos con unidad

| Atributo | Tipo | Unidad | Comentarios |
|---------:|------|--------|-------------|
| precio | Decimal | ARS | Precio en moneda local, 2 decimales |
```

### Ejemplo 2: Registro de Cliente
```
cliente(e) = dni + nombreCompleto + email + 1{telefonoContacto}n + 
             domicilio(e) + (datosLaborales(e))

domicilio(e) = calle + numero + (piso) + ciudad + codigoPostal

datosLaborales(e) = empresa + puesto + (telefonoLaboral)
```

## Convenciones de Nombres

Para atributos con más de una palabra, usar una de estas opciones:
- camelCase: `primeraSegunda`
- snake_case: `primera_segunda`
- kebab-case: `primera-segunda`

**Recomendación**: usar camelCase como estándar.

## Plantilla para Documentar

```
Flujo de Entrada
FE.nombreProceso = elemento1 + elemento2 + 1{elementoRepetido}n + (elementoOpcional)

Flujo de Salida
FS.nombreRespuesta = elemento1 + [opcion1 | opcion2] + 1{resultado}n

Estructuras
estructura(e) = componente1 + componente2(e) + (componente3)

Datos Discretos
tipoEstado(d) = [Activo | Inactivo | Suspendido]
```

## Checklist para validar tu DD

- [ ] Cada elemento está bien nombrado y es indivisible
- [ ] Las estructuras agrupan elementos relacionados
- [ ] Flujos de entrada y salida están documentados
- [ ] Se usa notación correcta (operadores, multiplicidades)
- [ ] Los datos discretos tienen sus opciones explícitas
- [ ] La convención de nombres es consistente
- [ ] Los flujos describen qué información realmente necesita el sistema
