<script setup>

</script>

<template>
  <section class="grid p-5">
    <div class="col-12 flex justify-content-center align-items-center">
      <h2>Benefits</h2>
    </div>

    <div class="col-12 timeline-container p-1">

      <div class="timeline-item left">
        <div class="timeline-content">
          <h2>Comodidad y Eficiencia</h2>
          <p>UniRide optimiza las rutas y horarios, permitiendo que los estudiantes lleguen más rápido a sus destinos</p>
        </div>
        <div class="timeline-visual">
          <div class="yellow-box"></div>
        </div>
      </div>

      <div class="timeline-item right">
        <div class="timeline-visual">
          <div class="yellow-box"></div>
        </div>
        <div class="timeline-content">
          <h2>Ahorro en Transporte</h2>
          <p>Al compartir los costos del viaje con otros estudiantes, UniRide reduce significativamente los gastos diarios de transporte.</p>
        </div>
      </div>

      <div class="timeline-item left">
        <div class="timeline-content">
          <h2>Conexión entre Estudiantes</h2>
          <p>UniRide fomenta una comunidad universitaria más conectada, permitiendo que los estudiantes interactúen y compartan experiencias durante sus viajes.</p>
        </div>
        <div class="timeline-visual">
          <div class="yellow-box"></div>
        </div>
      </div>

      <div class="timeline-item right">
        <div class="timeline-visual">
          <div class="yellow-box"></div>
        </div>
        <div class="timeline-content">
          <h2>Seguridad y Confianza</h2>
          <p>La verificación con correo institucional (edu) y perfiles validados aseguran que solo estudiantes de confianza utilizan la plataforma.</p>
        </div>
      </div>

      <div class="timeline-item left">
        <div class="timeline-content">
          <h2>Flexibilidad y Autonomía</h2>
          <p>Los estudiantes pueden elegir a quién...</p> </div>
        <div class="timeline-visual">
          <div class="yellow-box"></div>
        </div>
      </div>

    </div>

  </section>


</template>

<style scoped>
h2{
  color: #05B295;
}
.timeline-container {
  position: relative;
  width: 80%; /* Adjust as needed */
  margin: 0 auto; /* Center the timeline */
  padding: 20px 0;
}

/* Vertical line */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%; /* Center the line */
  width: 2px; /* Thickness of the line */
  background-color: #fdcf65; /* Color of the line */
  transform: translateX(-50%); /* Adjust for line thickness to be perfectly centered */
}

.timeline-item {
  position: relative;
  margin-bottom: 40px; /* Space between items */
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Vertically align items */
}

.timeline-item.left {
  justify-content: flex-start; /* Text on the left, visual on the right */
}

.timeline-item.right {
  justify-content: flex-end; /* Visual on the left, text on the right */
}

.timeline-content {
  width: 45%; /* Adjust width of content block */
  padding: 15px;
  background-color: #fff; /* Background for the text box */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-visual {
  width: 45%; /* Adjust width of visual block */
  display: flex;
  justify-content: center;
  align-items: center;
}

.yellow-box {
  width: 21rem;
  height: 8.5rem;
  background: linear-gradient(180deg, #FFD166 0%, #FFF 100%);
  border-radius: 8px;
}


/* Dot on the timeline */
.timeline-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%; /* Position the dot relative to the center line */
  width: 12px; /* Size of the dot */
  height: 12px; /* Size of the dot */
  background-color: #fdcf65; /* Color of the dot */
  border-radius: 50%; /* Make it a circle */
  transform: translate(-50%, -50%); /* Center the dot vertically and horizontally on the line */
  z-index: 1; /* Ensure dot is above the line */
}

/* --- Horizontal Branch Lines --- */
.timeline-item::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 25px; /* Length of the horizontal branch */
  height: 2px; /* Thickness of the branch line */
  background-color: #fdcf65; /* Color of the branch line */
  transform: translateY(-50%); /* Center the branch vertically */
  z-index: 1; /* Ensure branch is above the main line */
}

.timeline-item.left::before {
  left: calc(50% - 25px); /* Position branch from the center line towards the left content */
}

.timeline-item.right::before {
  left: 50%; /* Position branch from the center line towards the right content */
}


/* Adjust spacing to accommodate the branch and dot */
.timeline-item.left .timeline-content {
  margin-right: 40px; /* Increased margin to make space for dot and branch */
}

.timeline-item.right .timeline-content {
  margin-left: 40px; /* Increased margin to make space for dot and branch */
}

/* Adjust visual side margins as well if needed */
.timeline-item.left .timeline-visual {
  margin-left: 40px; /* Increased margin */
}

.timeline-item.right .timeline-visual {
  margin-right: 40px; /* Increased margin */
}


/* --- Basic Responsiveness --- */
@media (max-width: 768px) {
  .timeline-container {
    width: 95%; /* Use more width on smaller screens */
    padding: 10px 0;
  }

  .timeline-container::before {
    left: 20px; /* Move the line to the left */
    transform: none;
  }

  .timeline-item {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to the start */
    margin-bottom: 30px;
    padding-left: 40px; /* Make space for the vertical line and dot/branch */
  }

  /* Adjust dot position on smaller screens */
  .timeline-item::after {
    left: 20px; /* Align dots with the new line position */
    transform: translateX(-50%) translateY(-50%); /* Center dot relative to the line */
  }

  /* Hide or adjust branches on smaller screens if stacked layout doesn't need them */
  .timeline-item::before {
    display: none; /* Hide horizontal branches in stacked view */
    /* Or you could reposition them if desired, but hiding is simpler for this layout */
  }


  .timeline-item.left,
  .timeline-item.right {
    justify-content: flex-start; /* Stacked, so direction doesn't alternate visually like before */
  }

  .timeline-content,
  .timeline-visual {
    width: 100%; /* Full width for content and visual */
    margin: 0; /* Remove side margins */
    margin-bottom: 15px; /* Space between stacked elements */
  }


  .yellow-box {
    width: 80%; /* Adjust yellow box size on smaller screens */
    height: 80px;
    margin: 0 auto; /* Center the yellow box */
  }

  /* Remove specific left/right margins added for desktop view */
  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content,
  .timeline-item.left .timeline-visual,
  .timeline-item.right .timeline-visual {
    margin: 0;
    margin-bottom: 15px; /* Restore space between stacked elements */
  }
}
</style>