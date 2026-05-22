# Guías de Análisis de Sistemas (ADESI)

Este directorio contiene 13 guías completas e independientes sobre análisis de sistemas de información basadas en la metodología ADESI.

**Importante**: Cada guía es completamente autocontenida. No necesitas leer otras para entender una específica.

---

## 📚 Guías Disponibles

### **Diccionario de Datos** 
[diccionario-de-datos.md](adesi/diccionario-de-datos.md)

Documenta y estructura los datos que maneja el sistema. Define elementos de datos, estructuras, flujos y la notación para especificar componentes de información.

---

### **Reglas de Negocio**
[reglas-de-negocio.md](adesi/reglas-de-negocio.md)

Identifica y clasifica las 5 tipos de políticas que debe cumplir: hechos, restricciones, acciones disparadoras, cálculos e inferencias.

---

### **Técnicas de Relevamiento**
[tecnicas-de-relevamiento.md](adesi/tecnicas-de-relevamiento.md)

Metodologías prácticas para recopilar información del negocio: entrevistas, observación, talleres, cuestionarios y análisis de procesos.

---

### **Procesos de Negocio**
[procesos-de-negocio.md](adesi/procesos-de-negocio.md)

Identifica y clasifica procesos: estratégicos, operativos y de apoyo. Aprende a documentar Procesos Elementales de Negocio (PEN).

---

### **Ingeniería de Requerimientos**
[ingenieria-de-requerimientos.md](adesi/ingenieria-de-requerimientos.md)

Las 7 tareas de IR y clasificación FURPS+ (Funcionalidad, Usabilidad, Fiabilidad, Rendimiento, Soporte + otras restricciones).

---

### **Actores y Stakeholders**
[actores-y-stakeholders.md](adesi/actores-y-stakeholders.md)

Identifica quiénes participan: actores primarios, secundarios, terciarios y stakeholders. Clarifica roles y responsabilidades.

---

### **Análisis de Metas**
[analisis-de-metas.md](adesi/analisis-de-metas.md)

Descubre y organiza los objetivos que cada actor quiere lograr. Mapea relaciones entre metas: subordinación, independencia e inter-actores.

---

### **Diagramas de Actividad**
[diagramas-de-actividad.md](adesi/diagramas-de-actividad.md)

Diagrama UML que modela el flujo de control entre actividades: bifurcaciones, uniones, paralelismo y nodos de inicio/fin.

---

### **Modelo del Dominio**
[modelo-del-dominio.md](adesi/modelo-del-dominio.md)

Captura conceptual de entidades del negocio, atributos y relaciones: asociación, agregación, composición y herencia.

---

### **Subesquema de Navegación**
[subesquema-de-navegacion.md](adesi/subesquema-de-navegacion.md)

Documenta la estructura de pantallas y flujo del usuario en 3 formatos: diagrama de flujo, tabla de navegación y diagrama de transición.

---

### **Casos de Uso**
[casos-de-uso.md](adesi/casos-de-uso.md)

Plantilla completa para especificar: actores, precondiciones, flujo normal, flujos alternativos, excepciones y requisitos no funcionales.

---

### **Diagrama de Transición de Estados**
[diagrama-transicion-estados.md](adesi/diagrama-transicion-estados.md)

Modela los estados posibles de una entidad y transiciones entre ellos: inicial, final, eventos, condiciones y acciones.

---

### **Matriz CRUD**
[matriz-crud.md](adesi/matriz-crud.md)

Matriz de trazabilidad que valida completitud: que cada entidad tenga Create, Read, Update, Delete y que todos los casos de uso estén cubiertos.

---

## 🛠️ Guías de Entorno y Herramientas

### **Levantar Proyecto Node en WSL**
[levantar-proyecto-node-wsl.md](setup/levantar-proyecto-node-wsl.md)

### **Instalar WSL y Usuario con Sudo**
[instalar-wsl-y-usuario-sudo.md](setup/instalar-wsl-y-usuario-sudo.md)

### **Instalar Docker en WSL2**
[instalar-docker-wsl2.md](setup/instalar-docker-wsl2.md)

### **Configurar Git + GitLab + SSH**
[configurar-git-gitlab-ssh.md](setup/configurar-git-gitlab-ssh.md)

### **Guía Básica de Git**
[guia-basica-git.md](setup/guia-basica-git.md)

---

## 🎯 Cómo Usar Estas Guías

### Para Análisis
1. **Primer contacto**: Lee Procesos de Negocio + Actores y Stakeholders
2. **Profundización**: Análisis de Metas + Técnicas de Relevamiento
3. **Especificación**: Diccionario de Datos + Reglas de Negocio
4. **Modelado**: Modelo del Dominio + Diagrama de Transición de Estados
5. **Casos de Uso**: Lee Casos de Uso con Análisis de Metas de referencia
6. **Validación final**: Matriz CRUD

### Para Diseño de Interfaz
1. Subesquema de Navegación (cómo el usuario verá el sistema)
2. Diagramas de Actividad (flujos complejos)
3. Casos de Uso (validar con usuarios)

### Para Comprobar Completitud
1. Matriz CRUD (¿cubrimos todo?)
2. Casos de Uso (¿cada CUU está bien especificado?)
3. Diagramas de Transición (¿todos los estados están considerados?)

---

## 👥 Notas para IAs (Asistentes de Inteligencia Artificial)

Estas guías están diseñadas para ser compartidas con otros IAs en futuros proyectos:

- **Copiar + Pegar**: Cada guía es independiente. Puedes copiar una a un proyecto nuevo sin llevar contexto de las otras.
- **Referencia rápida**: Ideal para cuando necesites recordar la notación de UML o plantillas de ADESI.
- **Plantillas completas**: Incluyen ejemplos trabajados que puedes adaptar.
- **Checklist**: Cada guía termina con un checklist para validar tu trabajo.

### Recomendaciones de uso:
1. Cuando alguien diga "crea un caso de uso", pasa la guía de Casos de Uso
2. Si necesitas validar modelo de dominio, usa Modelo del Dominio
3. Para matriz de trazabilidad, remite a Matriz CRUD
4. Las guías son agnósticas del lenguaje de programación y framework

---

## 📋 Metodología ADESI

**ADESI** = Análisis de Sistemas de Información

Todas estas guías forman parte del proceso ADESI de análisis. Juntas cubren:

- **Conceptualización**: Entiende el negocio (Procesos, Actores, Metas)
- **Especificación**: Define exactamente qué debe hacer (Requerimientos, Casos de Uso, Reglas)
- **Modelado**: Representa el sistema (Dominio, Navegación, Estados)
- **Validación**: Comprueba completitud (Matriz CRUD)

---

## ✅ Checklist: ¿Cuándo has terminado el análisis?

- [ ] Se identificaron todos los procesos de negocio
- [ ] Cada actor tiene metas claras
- [ ] Se documentaron todas las reglas de negocio
- [ ] Existe modelo del dominio completo
- [ ] Cada caso de uso tiene flujo normal + alternativos
- [ ] La navegación está diseñada
- [ ] Se definen todos los requerimientos (FURPS+)
- [ ] La matriz CRUD valida completitud
- [ ] Stakeholders validaron el análisis

---

**Creadas**: Mayo 2026
**Basadas en**: Metodología ADESI
**Alcance**: Análisis de Sistemas de Información
**Uso**: Referencia y educación
---

## Referencias

- Craig Larman — UML and Patterns (capítulos citados): recomendada lectura para profundizar en modelos del dominio, identificación de clases y asociaciones.

*** End references
