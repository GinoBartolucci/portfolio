# Casos de Uso - Plantilla Completa

Guía para escribir casos de uso completos que describan las interacciones entre actores y el sistema.

## ¿Qué es un Caso de Uso?

Un caso de uso es una **descripción de una secuencia de interacciones** entre un actor y el sistema que resulta en un resultado de valor para el actor.

**Diferencia**:
- **Meta**: "Vender un producto"
- **Caso de Uso**: "Cómo el sistema ayuda a lograr esa venta"

---

## Cómo redactar los pasos de un caso de uso

Cada paso debe ser una oración corta, clara y verificable.

### Reglas de redacción

1. Escribe un solo evento por paso.
2. Cada paso debe registrarse en la tabla con este orden: `Paso | Actor | Acción | Sistema | Respuesta (acción del sistema)`.
3. En una misma fila, la acción del actor y la respuesta del sistema deben corresponder al mismo paso.
4. Distingue siempre quién actúa: actor o sistema.
5. Evita detalles de implementación técnica (tablas, endpoints, clases).
6. Usa lenguaje observable: lo que alguien puede ver o validar.
7. Mantén el mismo nivel de detalle en todo el flujo.
8. Si hay condición, envíala a flujo alternativo o excepción.

### Plantilla recomendada de paso

```
| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| N | [Actor] | [verbo en presente] [objeto] | [Sistema] | [verbo en presente] [objeto/resultado observable] |
```

### Reglas precisas para cada columna

- **Actor**: rol que realiza la acción (ej: Cliente, Cajero, Sistema de Pagos).
- **Acción**: debe ser exclusivamente `verbo en presente + objeto` (ej: ingresa datos, confirma pago, selecciona producto). No incluir condiciones ni explicaciones adicionales.
- **Sistema**: nombre del sistema o subsistema que actúa (ej: Sistema de Registro, Servicio de Pagos).
- **Respuesta (acción del sistema)**: debe describir la acción observable del sistema en presente `verbo + objeto` (ej: muestra formulario, valida tarjeta, registra cliente).

Ejemplo de filas válidas:

| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| 1 | Cliente | ingresa datos personales | Sistema de Registro | muestra formulario de verificación |
| 2 | Cliente | confirma registro | Sistema de Registro | valida datos y registra cliente |

Mantener siempre este formato en el Flujo Normal y en los Flujos Alternativos (usar la misma tabla para variantes, indicando el paso de referencia).

### Verbos recomendados para acciones del actor

- ingresa
- selecciona
- completa
- confirma
- solicita
- consulta
- adjunta
- corrige
- acepta
- rechaza
- cancela

### Verbos recomendados para acciones y respuestas del sistema

- muestra
- valida
- verifica
- registra
- guarda
- actualiza
- calcula
- genera
- envía
- notifica
- bloquea
- redirige

### Verbos a evitar (por ambiguos)

- procesa
- gestiona
- maneja
- interactúa
- realiza operación

Usa alternativas concretas según el caso: `valida`, `calcula`, `registra`, `crea`, `consulta`, `actualiza`.

---

## Elementos Básicos de un Caso de Uso

### Identificador (ID)
Nombre único para referencia rápida.

**Formato**: CUU + número (CUU001, CUU002, etc.)

### Nombre
Descripción concisa de QUÉ ocurre.

**Formato**: Verbo + Objeto (Registrar Cliente, Procesar Pago, Emitir Factura)

### Actor Primario
Quién inicia el caso de uso y obtiene el beneficio.

### Actores Secundarios
Sistemas o actores que interactúan para apoyar.

### Precondiciones
QUÉ debe ser cierto **antes** de que comience el caso de uso.

**Ejemplos**:
- El cliente debe estar autenticado
- El producto debe estar en stock
- La factura anterior debe estar pagada

### Postcondiciones
QUÉ será cierto **después** de que termine.

**Ejemplos**:
- El cliente quedará registrado
- El pago será acreditado
- La factura será guardada

### Flujo Normal (Happy Path)
El escenario donde **todo funciona correctamente**.

Numerada paso a paso, mostrando acciones del actor y respuestas del sistema.

### Flujos Alternativos
Escenarios **excepcionales o variantes** del flujo normal.

**Formato**: 
- **En el paso [X]**: La condición de este flujo
- **Acciones**: Qué hace el sistema diferente
- **Regresa**: Dónde vuelve al flujo normal (o termina)

### Requisitos No Funcionales
FURPS+ que aplican a este caso de uso específico.

**Ejemplos**:
- Debe completarse en menos de 30 segundos
- Debe estar disponible 24/7
- Debe cumplir WCAG 2.1

---

## Plantilla Estándar Completa

```markdown
## Caso de Uso: [Nombre]

**ID**: CUU###
**Versión**: 1.0
**Autor**: [Nombre]
**Fecha**: [DD/MM/YYYY]

---

### Actores

**Actor Primario**: [Rol que obtiene beneficio]
**Actores Secundarios**: [Otros roles u sistemas]

---

### Descripción Breve
[1-2 líneas de qué trata]

---

### Precondiciones

- [ ] [Precondición 1]
- [ ] [Precondición 2]
- [ ] [Precondición 3]

---

### Postcondiciones

- [ ] [Postcondición 1]
- [ ] [Postcondición 2]

---

### Flujo Normal

| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| 1 | [Actor] | [Acción] | [Sistema] | [Respuesta/acción del sistema] |
| 2 | [Actor] | [Acción] | [Sistema] | [Respuesta/acción del sistema] |
| 3 | [Actor] | [Acción] | [Sistema] | [Respuesta/acción del sistema] |
| 4 | [Actor] | [Acción] | [Sistema] | [Respuesta/acción del sistema] |

**Fin**: [Resultado exitoso]

---

### Flujos Alternativos

#### FA1: [Nombre del Flujo Alternativo]
**En el paso 3** del flujo normal, [condición].

| Paso | Actor | Acción |
|------|-------|--------|
| 3a | [Actor] | [Acción alternativa] |
| 3b | | [Sistema responde de forma diferente] |
| 3c | [Actor] | [Confirma o cancela] |

**Regresa a**: Paso 4 del flujo normal

---

#### FA2: [Otro Flujo Alternativo]
**En el paso 2**, [condición diferente].

| Paso | Actor | Acción |
|------|-------|--------|
| 2a | [Sistema] | [Muestra error] |
| 2b | [Actor] | [Corrige datos] |

**Regresa a**: Paso 2 del flujo normal

---

### Excepciones (Errores Críticos)

#### EX1: [Nombre de Excepción]
**Condición**: [Cuándo ocurre]
**Acción**: [El sistema detiene todo y...]
**Flujo**: Muestra mensaje de error, permite al usuario reintentar o cancelar

---

### Requisitos No Funcionales

- **Rendimiento**: Debe completarse en menos de [X] segundos
- **Disponibilidad**: Disponible [horarios]
- **Usabilidad**: [Requisito específico]
- **Seguridad**: [Requisito de seguridad]

---

### Reglas de Negocio Aplicables

- RN01: [Referencia a regla de negocio]
- RN02: [Otra regla relevante]

---

### Notas / Consideraciones

- [Nota importante 1]
- [Nota importante 2]

---
```

---

## Ejemplo Completo: Registrar Cliente

```markdown
## Caso de Uso: Registrar Cliente

**ID**: CUU001
**Versión**: 1.0
**Autor**: Analista Juan
**Fecha**: 15/05/2026

---

### Actores

**Actor Primario**: Cliente
**Actores Secundarios**: Sistema de validación de DNI

---

### Descripción Breve
El cliente proporciona información personal y se registra en el sistema para realizar compras.

---

### Precondiciones

- [ ] El cliente NO está registrado en el sistema
- [ ] El cliente tiene un documento válido (DNI/Pasaporte)
- [ ] El cliente tiene acceso a internet

---

### Postcondiciones

- [ ] El cliente está registrado en el sistema
- [ ] Puede acceder con su email y contraseña
- [ ] El DNI está verificado

---

### Flujo Normal

| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| 1 | Cliente | Ingresa a la pantalla de registro | Sistema de Registro | Muestra formulario de registro |
| 2 | Cliente | Completa email, contraseña, nombre y DNI | Sistema de Registro | Valida formato de datos ingresados |
| 3 | Cliente | Confirma el envío del formulario | Sistema de Registro | Verifica que el email no exista |
| 4 | Cliente | Espera validación de identidad | Servicio de Validación DNI | Valida DNI contra servicio externo |
| 5 | Cliente | Confirma continuar con el alta | Sistema de Registro | Crea usuario y almacena la cuenta |
| 6 | Cliente | Revisa bandeja de entrada | Sistema de Registro | Envía email de confirmación |
| 7 | Cliente | Visualiza resultado final | Sistema de Registro | Muestra pantalla de "Registro exitoso" |

**Fin**: Cliente registrado, puede acceder a su cuenta.

---

### Flujos Alternativos

#### FA1: Email ya registrado
**En el paso 5**, email existe en el sistema.

| Paso | Actor | Acción |
|------|-------|--------|
| 5a | | Sistema muestra: "Email ya registrado" |
| 5b | Cliente | Intenta con otro email o usa "Recuperar contraseña" |

**Regresa a**: Paso 3

---

#### FA2: DNI inválido
**En el paso 6**, el servicio de validación rechaza el DNI.

| Paso | Actor | Acción |
|------|-------|--------|
| 6a | | Sistema muestra: "DNI no válido" |
| 6b | Cliente | Verifica DNI y reintenta |

**Regresa a**: Paso 3

---

#### FA3: Campos incompletos
**En el paso 4**, falta información obligatoria.

| Paso | Actor | Acción |
|------|-------|--------|
| 4a | | Sistema marca campos vacíos en rojo |
| 4b | Cliente | Completa campos faltantes |

**Regresa a**: Paso 4

---

### Excepciones (Errores Críticos)

#### EX1: Servicio de validación no disponible
**Condición**: La API de validación de DNI está caída
**Acción**: El sistema intenta 3 veces con reintentos de 5 segundos
**Flujo**: Si falla, muestra "Servicio no disponible. Reintente más tarde"

---

### Requisitos No Funcionales

- **Rendimiento**: Registro debe completarse en menos de 10 segundos
- **Disponibilidad**: Disponible 24/7
- **Usabilidad**: Formulario debe ser usable en mobile
- **Seguridad**: Contraseña mínimo 8 caracteres, con mayúscula y número

---

### Reglas de Negocio Aplicables

- RN01: El DNI debe ser único en el sistema
- RN02: Un cliente puede tener máximo 1 email activo
- RN05: La contraseña se almacena encriptada

---

### Notas

- El email no necesita ser confirmado para usar la cuenta (decisión de producto)
- Si el cliente olvida su contraseña, existe CUU025: Recuperar Contraseña

---
```

---

## Alternativas al Flujo Narrativo

### Formato 1: Numerado Narrativo (Más natural)

```
1. El cliente ingresa a la pantalla de registro
2. El sistema muestra el formulario
3. El cliente completa: email, contraseña, nombre, DNI
4. El cliente hace clic en "Registrarse"
5. El sistema valida email único
6. El sistema valida DNI con servicio externo
   (Si DNI no válido → FA2)
7. El sistema crea cuenta
8. El sistema envía email de confirmación
9. Sistema muestra: "¡Registro exitoso!"
```

### Formato 2: Tabular (Más estructurado)

```
| Paso | Actor | Acción | Sistema | Respuesta (acción del sistema) |
|------|-------|--------|---------|--------------------------------|
| 1 | Cliente | Ingresa a registro | Sistema de Registro | Muestra formulario |
| 2 | Cliente | Confirma envío | Sistema de Registro | Valida datos |
```

### Formato 3: Pseudocódigo (Más técnico)

```
INICIO CUU001
  SI cliente_autenticado = falso THEN
    mostrar_formulario_registro()
    ESPERAR cliente_completa_datos()
    SI validar_email(email) THEN
      validar_dni(dni)
      crear_usuario()
      FIN_EXITOSO
    ELSE
      mostrar_error("Email existe")
      GOTO paso 3
    ENDIF
  ENDIF
FIN
```

---

## Checklist para un Buen Caso de Uso

- [ ] Tiene nombre claro (verbo + objeto)
- [ ] ID único asignado
- [ ] Actor primario está definido
- [ ] Precondiciones y postcondiciones están claras
- [ ] Flujo normal es el "feliz" (sin errores)
- [ ] Flujos alternativos cubren escenarios excepcionales
- [ ] Cada paso especifica quién actúa (actor o sistema)
- [ ] Las postcondiciones se logran al final
- [ ] Está validado con el actor primario
- [ ] Referencia reglas de negocio aplicables
