---
title: Tablero SO Calidad
tags:
  - sistemas-operativos
  - calidad
  - tablero
  - repaso-final
aliases:
  - Dashboard SO Calidad
  - Inicio Repaso SO
tipo: tablero
estado: activo
prioridad: alta
color: "#0f766e"
sticker: book
banner: assets/diagrama_cpu_ciclo_calidad.png
fuente_principal: transcripciones Calidad
---

# Tablero SO Calidad

> [!abstract] Ruta de estudio
> Primero se entiende el razonamiento de Calidad. Después se usa Tanenbaum para nombrar correctamente la política, estructura o algoritmo.

## Abrir rápido

| Recurso | Uso | Enlace |
|---|---|---|
| Mapa Excalidraw | Vista visual del examen | [[Mapa_Final_SO_Calidad.excalidraw]] |
| Repaso operativo | Responder casos tipo examen | [[Repaso_Final_SO_Calidad]] |
| Materia completa | Teoría explicada estilo Calidad | [[Materia_SO_Tanenbaum_Calidad]] |
| Pizarra matriz | Procesos vs recursos | ![[assets/pizarra_01_tabla_procesos_cpu_mem_archivos_io.jpg]] |
| Visión general | CPU, E/S, DMA, disco y mmap | ![[assets/pizarra_09_vision_general_so_io_dma_mmap.jpg]] |
| Ajustes memoria | First/Next/Best/Worst/Quick fit | ![[assets/pizarra_10_algoritmos_asignacion_memoria.jpg]] |
| Buddies | División y fusión por potencias de 2 | ![[assets/pizarra_11_buddies_memoria.jpg]] |
| Banquero | Matrices y secuencia segura | ![[assets/pizarra_05_banquero_matrices_recursos.jpg]] |
| Flynn | Distribuidos y acoplamiento | ![[assets/pizarra_06_distribuidos_flynn_tabla.jpg]] |

## Ruta de repaso por evidencia

| Evidencia | Leer junto con | Pregunta que debe poder contestar |
|---|---|---|
| ![[assets/pizarra_09_vision_general_so_io_dma_mmap.jpg]] | [[Materia_SO_Tanenbaum_Calidad#5. Capítulo 5 — Entrada y salida]] | ¿Dónde termina lo físico y empieza lo lógico: controlador, driver, buffer, DMA, archivo mapeado? |
| ![[assets/pizarra_10_algoritmos_asignacion_memoria.jpg]] | [[Repaso_Final_SO_Calidad#3.6 Algoritmos de ajuste]] | Si llega un proceso de 120 KB, ¿qué hueco toma cada algoritmo y qué desperdicio deja? |
| ![[assets/pizarra_11_buddies_memoria.jpg]] | [[Repaso_Final_SO_Calidad#3.7 Sistema de buddies socios]] | ¿Por qué se redondea a potencia de 2 y cuándo se fusionan socios? |
| ![[assets/pizarra_05_banquero_matrices_recursos.jpg]] | [[Repaso_Final_SO_Calidad#6.7 Ejemplo de la pizarra del banquero/detección]] | ¿Existe secuencia segura o todos quedan esperando? |

## Matriz de decisión rápida

| Si el caso muestra... | Pensar primero en... | Política/estructura probable | Defensa estilo Calidad |
|---|---|---|---|
| Alarma médica, actuador o riesgo inmediato | Tiempo real | Prioridad / tiempo real | Si llega tarde, el resultado correcto ya no sirve |
| Muchos procesos interactivos | CPU compartida | Round Robin | Reparte respuesta, pero cuidar costo de quantum |
| Ráfaga corta conocida | Espera promedio | SJF | Reduce espera si la duración es confiable |
| Sensor frecuente | E/S y buffer | Buffer de recepción | El dato llega aunque el proceso consumidor no esté listo |
| Imagen, audio o IA | Memoria y CPU | Paginación / cache selectiva / prioridad | El dato grande presiona RAM y cálculo |
| Proceso de 120 KB y huecos libres | Particiones variables | First/Next/Best/Worst/Quick fit | La elección cambia dirección, residuo y costo administrativo |
| Solicitudes de tamaño cercano a potencias de 2 | Memoria por socios | Buddy system | Se asigna el bloque potencia de 2 más pequeño que contenga el proceso |
| Archivo enorme que no conviene copiar completo | Archivo/memoria | mmap / archivo mapeado | El proceso ve direcciones; el SO trae páginas del archivo bajo demanda |
| Archivo compartido con escritura | Integridad | Permisos / bloqueo / sección crítica | Leer no rompe; escribir puede corromper estado |
| Recurso retenido mientras pide otro | Bloqueo | Grafo / matrices / banquero | Hay que probar ciclo o estado inseguro |
| Varios hosts colaborando | Distribución | Acoplamiento + Flynn | Definir si se reparte código, datos o ambos |

## Plantilla de respuesta

| Paso | Pregunta | Frase base |
|---|---|---|
| 1 | Dato de origen | El proceso recibe ___ desde ___ en forma cruda |
| 2 | Recurso | Eso presiona ___ porque ___ |
| 3 | Cola | Puede esperar en ___ o bloquearse por ___ |
| 4 | Política | Conviene ___ y no ___ porque ___ |
| 5 | Costo | Si se decide mal, ocurre ___ |

## Repaso por tema

| Tema | Lo mínimo que debe salir | Error que baja puntos | Nota |
|---|---|---|---|
| CPU | Proceso, estados, ráfaga, quantum, planificador | Decir que ejecución vuelve a listo siempre | [[Repaso_Final_SO_Calidad#Zona 2 — CPU y ciclo de ejecución]] |
| Memoria | Particiones, mapa de bits, lista ligada, páginas, swap | Decir que memoria virtual arregla todo | [[Repaso_Final_SO_Calidad#Zona 3 — Memoria]] |
| Archivos | Perpetuar, volumen, compartir, tipo, acceso | Clasificar el proceso completo como archivo | [[Repaso_Final_SO_Calidad#Zona 4 — Archivos]] |
| E/S | Controlador, driver, buffer, cache, DMA, interrupción | Confundir buffer con cache | [[Repaso_Final_SO_Calidad#Zona 5 — Entrada/Salida]] |
| Bloqueos | Coffman, grafo, vector, matrices, banquero | Detectar bloqueo sin ciclo o sin R <= A | [[Repaso_Final_SO_Calidad#Zona 6 — Bloqueos e interbloqueos]] |
| Distribuidos | Acoplamiento, código/datos, Flynn, latencia, consistencia | Decir "distribuido" sin justificar qué se reparte | [[Materia_SO_Tanenbaum_Calidad#7. Capítulo 8 — Multiprocesadores, sistemas distribuidos y arquitectura paralela]] |

## Ejercicios activos

| Tipo | Enunciado mínimo | Respuesta esperada |
|---|---|---|
| Ajustes | Memoria libre: 100, 150, 150, 200, 200 KB. Solicitud: 120 KB. | First/Best toman 150; Next/Worst pueden tomar 200 según puntero; Quick busca lista 101-200. |
| Buddies | Memoria 256 KB. Llegan 12, 22, 3 y 7 KB. | Redondear a 16, 32, 4 y 8 KB; mantener libres los socios fusionables. |
| E/S | Disco trae sectores dispersos de A, B y C. | Buffer para reunir/verificar; DMA si la transferencia es grande; interrupción al terminar. |
| mmap | Archivo muy grande, bajo riesgo de corrupción, acceso por regiones. | Archivo mapeado: tratar porciones como memoria, no copiar todo completo. |

## Flujo con Make.md y tablas

| Herramienta | Cómo usarla aquí | Resultado |
|---|---|---|
| Make.md Spaces | Usar este tablero como inicio del vault | Menos navegación manual |
| Make.md context | Propiedades `estado`, `prioridad`, `tipo`, `color`, `sticker` | Filtrar y ubicar notas por contexto |
| Table Editor | Editar matrices directamente con Tab/Enter | Tablas más limpias para estudiar |
| Excalidraw | Usar el mapa como navegación visual | Vista global sin leer 1000 líneas |
| Callouts | Separar reglas, errores y definiciones | Respuestas más fáciles de memorizar |

## Pendientes de estudio

| Estado | Tarea | Evidencia de que ya está |
|---|---|---|
| pendiente | Explicar un caso médico de CPU + E/S + tiempo real | Respuesta de 5 pasos completa |
| pendiente | Resolver una matriz de banquero desde E, A, C, R | Secuencia segura o bloqueo justificado |
| pendiente | Diferenciar buffer/cache con sensor, audio e imagen | Tres ejemplos correctos |
| pendiente | Clasificar un archivo por estructura, tipo y acceso | Tabla archivo por archivo |
| pendiente | Proponer distribución de un sistema y clasificar Flynn | Acoplamiento + código/datos definidos |
