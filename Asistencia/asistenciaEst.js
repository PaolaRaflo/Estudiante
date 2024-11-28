// Genera las semanas con fechas únicas a partir de una fecha inicial
function generateWeeks(startDate, numWeeks) {
    const weeks = [];
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // Milisegundos en una semana
    let currentDate = new Date(startDate);

    for (let i = 1; i <= numWeeks; i++) {
        const weekDays = [];
        for (let j = 0; j < 5; j++) {
            const day = new Date(currentDate);

            // Alternar entre asistencias, faltas y justificaciones
            const status =
                j % 3 === 0
                    ? "Justificación"
                    : (i % 3 === 0 && j % 2 === 0) || (i % 4 === 0 && j === 3)
                    ? "Falta"
                    : "Asistencia";

            weekDays.push({
                date: day.toLocaleDateString("es-ES"),
                day: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"][j],
                status: status,
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        weeks.push({
            week: i.toString(),
            range: `${weekDays[0].date} - ${weekDays[4].date}`,
            days: weekDays,
        });
        currentDate = new Date(currentDate.getTime() + (oneWeek - 5 * 24 * 60 * 60 * 1000));
    }
    return weeks;
}

// Genera 16 semanas a partir del 14 de octubre de 2024
const weeksData = generateWeeks("2024-10-14", 16);

// Calcula el resumen global de asistencias, inasistencias y justificaciones
function calculateGlobalSummary() {
    let totalDays = 0;
    let attendanceCount = 0;
    let justifiedCount = 0;

    // Suma los datos de todas las semanas
    weeksData.forEach((week) => {
        totalDays += week.days.length;
        attendanceCount += week.days.filter((d) => d.status === "Asistencia").length;
        justifiedCount += week.days.filter((d) => d.status === "Justificación").length;
    });

    const absenceCount = totalDays - attendanceCount - justifiedCount;

    const attendancePercentage = ((attendanceCount / totalDays) * 100).toFixed(0);
    const absencePercentage = ((absenceCount / totalDays) * 100).toFixed(0);
    const justificationPercentage = ((justifiedCount / totalDays) * 100).toFixed(0);

    return {
        percentages: {
            attendance: attendancePercentage,
            absence: absencePercentage,
            justification: justificationPercentage,
        },
    };
}

// Calcula el resumen por semana
function calculateSummary(weekData) {
    const totalDays = weekData.days.length;
    const attendanceCount = weekData.days.filter((d) => d.status === "Asistencia").length;
    const justifiedCount = weekData.days.filter((d) => d.status === "Justificación").length;
    const absenceCount = totalDays - attendanceCount - justifiedCount;

    return {
        summary: `${attendanceCount} Asistencias | ${justifiedCount} Justificaciones | ${absenceCount} Inasistencias`,
    };
}

// Renderiza la semana actual
function renderWeek() {
    const weekData = weeksData[currentWeek];
    const globalSummary = calculateGlobalSummary();
    const weeklySummary = calculateSummary(weekData);

    // Actualiza el número de la semana
    document.getElementById("week-number").innerText = weekData.week;

    // Actualiza los porcentajes globales dinámicamente
    document.querySelector(".attendance-percentage").innerText = `${globalSummary.percentages.attendance}%`;
    document.querySelector(".absence-percentage").innerText = `${globalSummary.percentages.absence}%`;
    document.querySelector(".justification-percentage").innerText = `${globalSummary.percentages.justification}%`;

    // Resumen semanal
    const summaryContainer = document.getElementById("summary-container");
    summaryContainer.innerHTML = `
        <div class="summary-total mb-3">
            <strong>Resumen:</strong> ${weeklySummary.summary}
        </div>
    `;

    // Lista de asistencias
    const container = document.getElementById("attendance-container");
    container.innerHTML = `
        <h6>Semana ${weekData.week}: ${weekData.range}</h6>
        <ul class="attendance-list">
            ${weekData.days
                .map(
                    (day) => `
                <li>
                    <span class="date">${day.day}, ${day.date}</span>
                    <span class="status ${
                        day.status === "Asistencia"
                            ? "present"
                            : day.status === "Justificación"
                            ? "justified"
                            : "absent"
                    }"><i class="bi ${
                        day.status === "Asistencia"
                            ? "bi-check-circle-fill"
                            : day.status === "Justificación"
                            ? "bi-info-circle-fill"
                            : "bi-x-circle-fill"
                    }"></i> ${day.status}</span>
                </li>
            `
                )
                .join("")}
        </ul>
    `;
}

// Cambia a la siguiente semana
function nextWeek() {
    if (currentWeek < weeksData.length - 1) {
        currentWeek++;
        renderWeek();
    }
}

// Cambia a la semana anterior
function prevWeek() {
    if (currentWeek > 0) {
        currentWeek--;
        renderWeek();
    }
}

// Render inicial
let currentWeek = 0;
renderWeek();
