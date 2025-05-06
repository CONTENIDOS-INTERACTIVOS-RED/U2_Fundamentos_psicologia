<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Memoria y emoción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Dentro del estudio de los procesos psicológicos básicos, la #[b memoria] y la #[b emoción] ocupan un lugar central por su influencia directa en la cognición, la conducta y la experiencia humana. Ambos procesos, aunque distintos en su naturaleza, están profundamente interrelacionados: la memoria permite conservar y recuperar información significativa, mientras que la emoción actúa como #[b un filtro afectivo] que intensifica o debilita esos recuerdos, según su carga emocional.

        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='') 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] La memoria

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/36.png", data-aos="zoom-in")                
      .col-lg-8
        p(data-aos="fade-down") Después de haber explorado los procesos de percepción y atención, es fundamental continuar con otro de los procesos psicológicos básicos: la memoria. Como afirman Lupiáñez et al. (2016), la #[b memoria] cumple una función esencial en la vida de las personas: almacena información, permite su recuperación y facilita la evocación de emociones y experiencias pasadas. Gracias a la memoria, se pueden repetir acciones aprendidas, mantener objetivos presentes y proyectarse hacia el futuro. No obstante, este proceso no es infalible.

        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/37.svg")
            .col-lg
              p.mb-0 La memoria también es #[b susceptible al olvido y a las distorsiones]. Se pueden olvidar nombres, fechas o incluso recordar hechos de manera inexacta. Esta fragilidad aparente contrasta con su impacto profundo en la identidad, la toma de decisiones y la adaptación al entorno.

    p(data-aos="fade-down") En términos generales, la memoria es el proceso psicológico mediante el cual codificamos, almacenamos y recuperamos información. Estos tres pasos son fundamentales para el aprendizaje, la organización personal y la comprensión del mundo. Las etapas en el proceso de la memoria, son: 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Codificación
              p Transformación de la información percibida de una forma interpretable por el cerebro. Requiere atención y se fortalece mediante la asociación con conocimientos previos, y la organización en patrones.                           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/38.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Almacenamiento
              p Conservación de la información codificada en diferentes sistemas de memoria (sensorial, a corto plazo o a largo plazo).                           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/39.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Recuperación
              p Acceso a la información almacenada para su uso en el presente, ya sea para recordar una fecha, una experiencia pasada, o una instrucción aprendida.                           
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/40.png")  

    h3(data-aos="fade-down") Tipos de memoria
    p(data-aos="fade-down").mb-5 El cerebro humano clasifica la información de diferentes maneras, según su duración, su función y el nivel de conciencia con el que se accede a ella. Conocer estas formas permite mejorar el aprendizaje, la organización personal y la planificación.

    .row.align-items-start.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img.img-a.img-t(src="@/assets/curso/temas/41.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Memoria sensorial")
            p Almacena información proveniente de los sentidos por fracciones de segundo. 
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2
                p.mb-0 #[b Ejemplo]. La imagen fugaz de un objeto, al parpadear.    

          .div(titulo="Memoria a corto plazo (memoria de trabajo)")
            p Retiene y manipula información por 20–30 segundos.
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2
                p.mb-0 #[b Ejemplo]. Recordar un número telefónico momentáneamente. Tiene una capacidad limitada (5–9 ítems, según Miller).   

          .div(titulo="Memoria a largo plazo")
            p Conserva información de forma duradera. Se divide en:
            ul.lista-ul--color.ul-1
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1 
                p.mb-0 Memoria explícita (declarativa). Recuerdos conscientes y verbalizables. Incluye:
                  ul.lista-ul--color.ul-2
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-2
                      p.mb-0 Memoria episódica. Experiencias personales, como un cumpleaños.

                    li.d-flex
                      i.far.fa-arrow-alt-circle-right.color-2
                      p.mb-0 Memoria semántica. Conocimientos generales, como saber que París es la capital de Francia.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1 
                p.mb-0 Memoria implícita (no declarativa). Habilidades adquiridas que no requieren conciencia para recordarse.
            p #[b Ejemplo]. Montar bicicleta o tocar un instrumento.


          .div(titulo="Memoria prospectiva")
            p Permite recordar ejecutar acciones futuras. 
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2
                p.mb-0 #[b Ejemplo]. Asistir a una cita médica o entregar un trabajo.   

          .div(titulo="Memoria autobiográfica")
            p Tipo especial de memoria episódica centrada en eventos significativos de la vida personal. 
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2
                p.mb-0 #[b Ejemplo]. El primer día de escuela o una mudanza importante.

    .bg-full-width.bg-color-5.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/42.png")
          .col-lg.text-white
            p.mb-0 La memoria es mucho más que un simple almacén de datos. Es un proceso dinámico e integrado, vinculado profundamente a la atención, la percepción, las emociones y la identidad. A través de ella, recordamos el pasado, actuamos en el presente y proyectamos el futuro.

    .bg-full-width-3.bg-fondo-4.py-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-8
            p(data-aos="fade-down") Cada uno de estos tipos de memoria desempeña un papel crucial en el aprendizaje y en la retención de información. Comprender su funcionamiento puede ayudar a los educadores a desarrollar estrategias más efectivas para el estudio y la transmisión de conocimientos, lo que a su vez puede mejorar su rendimiento académico y su capacidad para enfrentar desafíos en su vida educativa.

            .bg-color-8.p-4(data-aos="fade-left")
              p.mb-0 Como se evidencia la memoria no es simplemente el hecho de guardar información como suele entenderse; tiene diferentes usos y dependerá de las necesidades de cada información. 
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 Continuando con el proceso de almacenamiento de información, se llega a la #[b recuperación]. Aquí se permite acceder y traer de vuelta la información almacenada, y se manifiesta en diferentes formas. El #[b reconocimiento] implica identificar información previamente aprendida entre un conjunto de opciones, mientras que #[b recordar] se refiere a la recuperación de información sin pistas, lo cual requiere un acceso más profundo a la memoria.
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")       


        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in")                
          .col-lg-8
            p(data-aos="fade-down") Es importante señalar que la memoria no es un proceso infalible y puede verse influenciado por diversos factores. Las emociones juegan un papel crucial, debido a que las experiencias con un componente emocional alto, suelen recordarse con mayor claridad. La repetición y la práctica, también contribuyen a fortalecer la memoria, al igual que el contexto en el que se aprende, el cual puede influir en la capacidad de recuperación. Así como la asociación a ciertos estímulos, también influyen con la facilidad para recordar.

            .bg-color-3.p-4(data-aos="fade-left")
              p.mb-0 #[b La memoria], entonces, se revela como un elemento esencial para el aprendizaje, la toma de decisiones y la construcción de relaciones. Ayuda a recordar experiencias pasadas, aprender nuevas habilidades y planificar el futuro. Como se evidencia, la memoria es un proceso complejo que abarca la codificación, el almacenamiento y la recuperación de información, siendo fundamental para la vida diaria y el adecuado funcionamiento de las capacidades cognitivas.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] La emoción

    .row.mb-5              
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/59.svg")
            .col-lg
              p.mb-0 La emoción puede ser entendida como un conjunto de respuestas psicofisiológicas que surgen frente a estímulos internos o externos. Estas respuestas no son solo pasajeras, sino que reflejan un trasfondo biológico arraigado en la química del cerebro y la fisiología del cuerpo. En la vida humana, tanto académica como personal, las emociones cumplen un papel crucial al influir en decisiones, comportamientos e interacciones sociales (López, 2014).      
        p(data-aos="fade-down") Además de tener una base biológica y expresiva, las emociones son percibidas de forma consciente y están moldeadas por interpretaciones culturales construidas a lo largo de la evolución humana. Así, se convierten en un eje central del bienestar o malestar, al afectar la forma en que las personas sienten, interpretan y reaccionan ante la realidad.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/60.png", data-aos="zoom-in")          

    h3(data-aos="fade-down") Biología de las emociones: neurotransmisores, hormonas y cerebro
    p(data-aos="fade-down") Las emociones humanas surgen como resultado de interacciones químicas complejas en el cerebro. Los principales elementos involucrados son:

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/45.png")            
            .col-lg-7
              h5 Neurotransmisores
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Serotonina:] regula el estado de ánimo; niveles bajos se asocian con depresión. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Dopamina:] relacionada con el placer, la motivación y la recompensa. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Noradrenalina:] participa en la alerta y la respuesta al estrés. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b GABA:] neurotransmisor inhibidor con efectos ansiolíticos. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/46.png")            
            .col-lg-7
              h5 Hormonas 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Cortisol:] conocida como la “hormona del estrés”; influye en el estado de ánimo y la salud mental. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Oxitocina:] la “hormona del amor”; promueve empatía, apego y vínculos sociales. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Adrenalina:] activa la respuesta de lucha o huida; incrementa ritmo cardíaco y la presión arterial.    

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/47.png")            
            .col-lg-7
              h5 Áreas cerebrales 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Amígdala:] procesa emociones como el miedo y la ansiedad. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Corteza prefrontal:] regula emociones y controla impulsos. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 #[b Hipotálamo:] regula respuestas físicas y hormonales, vinculadas a las emociones. 

    .bg-full-width.bg-color-7.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-3
        p(data-aos="fade-down").mb-0 Esta combinación de factores, permite que los seres humanos experimenten una rica variedad de emociones, que son fundamentales para afrontar los retos de la vida y disfrutar de sus momentos más significativos. 

    h3(data-aos="fade-down") Inteligencia emocional (IE): definición y componentes
    p(data-aos="fade-down").mb-5 La inteligencia emocional es la capacidad de reconocer, entender y gestionar, tanto las emociones propias como las de los demás. Es fundamental en el entorno personal, académico y laboral, pues favorece la toma de decisiones, la comunicación y el bienestar emocional.


    .bg-full-width-1.bg-fondo-5(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/48.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Autoconciencia emocional 
                p Reconocer las propias emociones y comprender cómo influyen en el comportamiento.                                 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/49.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Regulación emocional 
                p Manejar adecuadamente las emociones sin suprimirlas; implica estrategias como respiración o reencuadre cognitivo.                                 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/50.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Empatía 
                p Comprender y compartir las emociones ajenas; esencial para relaciones saludables.                                 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/51.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Habilidades sociales 
                p Comunicar, resolver conflictos y trabajar en equipo, de manera efectiva.                                 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/52.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Motivación intrínseca 
                p Capacidad de automotivarse, ser resiliente y perseverar hacia objetivos personales.

          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='') 

        p(data-aos="fade-down") El desarrollo de estas habilidades permite mejorar la #[b calidad de vida] y fortalecer los vínculos personales y profesionales. En contextos como el trabajo, se asocia con un mejor rendimiento y liderazgo. En la vida personal, facilita la gestión del estrés y promueve el bienestar emocional. 
        h3(data-aos="fade-down") Cultura y emociones: una construcción social

    .row.justify-content-center.mb-5 
      .col-lg-4
        .bg-color-4.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 Así como tienen base biológica, las emociones también están influenciadas por el contexto cultural. Las normas sociales y las experiencias compartidas, determinan qué emociones son valoradas, reprimidas o expresadas abiertamente. Por tanto, las emociones no solo se sienten, sino que también se #[b interpretan] culturalmente.  
      .col-lg-4.my-4.my-lg-0
        figure
          img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='', data-aos="zoom-in")          
      .col-lg-4
        .bg-color-3.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 Este aspecto cultural, refuerza la idea de que las emociones son una herramienta #[b clave para construir o deteriorar el bienestar]. Por ejemplo, la ansiedad puede distorsionar nuestra percepción, generando amenazas donde no las hay, mientras que emociones positivas, como la felicidad, promueven la apertura y la conexión interpersonal.

    h3(data-aos="fade-down") Emociones en el ámbito académico

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='')            
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el entorno educativo, las emociones influyen directamente en la motivación y el rendimiento académico. Un estudiante motivado por una asignatura, se involucra activamente en el proceso de aprendizaje. En contraste, emociones como la ansiedad, pueden dificultar la concentración y la retención de información. Asimismo, las emociones afectan la #[b interacción social] dentro del aula. Las relaciones entre compañeros y docentes se ven condicionadas por la capacidad de gestionar las propias emociones y empatizar con las ajenas. La inteligencia emocional, en este contexto, se convierte en una herramienta clave para promover ambientes educativos positivos y colaborativos.

    .row.mb-5             
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Las emociones y afectos, son fenómenos complejos que entrelazan #[b biología, conciencia y cultura]. Comprender esta interrelación es esencial para desarrollar una vida emocional equilibrada, que permita afrontar, tanto los desafíos como disfrutar de los logros.

        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/55.svg")
            .col-lg
              p.mb-0 Tanto en el ámbito personal como en el académico, la habilidad de #[b reconocer, gestionar y comprender las emociones], propias y ajenas, mejora el bienestar, potencia las relaciones y optimiza los procesos de aprendizaje. En un mundo interconectado, la inteligencia emocional se consolida como una herramienta #[b indispensable] para el desarrollo humano integral. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/56.png", data-aos="zoom-in")  

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/57.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Motivación y aprendizaje
            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[b Motivación y aprendizaje], donde se aborda de manera clara y completa, la relación entre los procesos psicológicos de la motivación y el aprendizaje. Este material ofrece explicaciones teóricas, reflexiones prácticas y ejemplos claves sobre cómo estos conceptos se manifiestan en contextos educativos, laborales y personales, así como su evolución a través de diferentes corrientes psicológicas. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Motivación y aprendizaje 


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/37822?page=12" target="_blank" rel="noopener noreferrer") Pasantes, H. (2018). De neuronas, emociones y motivaciones. FCE - Fondo de Cultura Económica. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41930" target="_blank" rel="noopener noreferrer") Pallarés, M. (2010). Emociones y sentimientos: dónde se forman y cómo se transforman. Marge Books. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/45396" target="_blank" rel="noopener noreferrer") Jaume Rosselló, E. M. & Jaume Rosselló, E. M. (Coord.). (2015). Atención y percepción. Difusora Larousse - Alianza Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/56344?page=12" target="_blank" rel="noopener noreferrer") Jódar Vicente, M. & Barroso Ribal, J. (2013). Trastornos del lenguaje y la memoria. Editorial UOC.                                            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.psicoactiva.com/blog/que-son-las-emociones/" target="_blank" rel="noopener noreferrer") Guerri, M. (2025) ¿Qué son las Emociones? tipos, componentes y cómo gestionarlas.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://universidadeuropea.com/blog/tipos-de-aprendizaje/" target="_blank" rel="noopener noreferrer") Educación. (2025). Tipos de aprendizaje: ¿cuáles son y cómo trabajarlos? Universidad europea.                                                        


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/sQhVq3aEl5k?si=B4LxXsm441NLLhOa" target="_blank" rel="noopener noreferrer") Dinstinto. (2025). INTELIGENCIA EMOCIONAL: La psicología detrás del éxito empresarial | Karen Carvajalino.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Q6Xf9Z4WUEU?si=UbwLEXtjnOs-lxiT" target="_blank" rel="noopener noreferrer") Ed Knows & Suss Draws.  (2021). Teorías del aprendizaje.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

             
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fundamentos de psicología',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes procesos mentales NO se menciona en el texto como fundamental para entender el comportamiento humano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Percepción',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Atención',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Intuición',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Memoria',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según el texto, ¿qué enfoque terapéutico se beneficia del entendimiento de la memoria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Terapias humanistas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Terapias cognitivo-conductuales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Terapias psicodinámicas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Terapias de grupo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes tipos de memoria se refiere a la capacidad de recordar acciones futuras?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Memoria sensorial',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Memoria a corto plazo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Memoria prospectiva',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Memoria autobiográfica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué neurotransmisor está asociado con la regulación del estado de ánimo y la felicidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Noradrenalina',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dopamina',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cortisol',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'GABA',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes teorías sostiene que el aprendizaje es un proceso activo donde los estudiantes construyen su propio conocimiento?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Conductismo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Condicionamiento clásico',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Constructivismo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Teoría del aprendizaje significativo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
