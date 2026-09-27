const API_URL = "https://jsonplaceholder.typicode.com/users";
const appContainer = document.querySelector("#app");
const estadoEl = document.querySelector("#estado");
const contadorEl = document.querySelector("#contador");
// Trae los usuarios desde la API
async function fetchUsers() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}
// Arma el HTML de una tarjeta
function crearTarjetaUsuario(user) {
    const iniciales = user.name
        .split(" ")
        .map((n) => n.charAt(0))
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return `
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card card-user h-100 shadow-sm border-0">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar-circle me-3">${iniciales}</div>
            <div>
              <h5 class="card-title mb-0">${user.name}</h5>
              <small class="text-muted">@${user.username}</small>
            </div>
          </div>

          <ul class="list-unstyled small mb-0">
            <li class="mb-2">📧 <a href="mailto:${user.email}">${user.email}</a></li>
            <li class="mb-2">📞 ${user.phone}</li>
            <li class="mb-2">🌐 <a href="https://${user.website}" target="_blank" rel="noopener">${user.website}</a></li>
            <li class="mb-2">🏠 ${user.address.street}, ${user.address.suite}</li>
            <li class="mb-2">🏙️ ${user.address.city} — ${user.address.zipcode}</li>
            <li>🏢 <strong>${user.company.name}</strong><br>
              <em class="text-muted">"${user.company.catchPhrase}"</em>
            </li>
          </ul>
        </div>
      </article>
    </div>
  `;
}
// Pinta los usuarios en el DOM
function renderUsers(users) {
    if (!appContainer)
        return;
    appContainer.innerHTML = users.map(crearTarjetaUsuario).join("");
    if (contadorEl) {
        contadorEl.textContent = `${users.length} usuarios cargados`;
    }
}
// Punto de entrada
async function init() {
    if (estadoEl)
        estadoEl.textContent = "⏳ Cargando usuarios...";
    try {
        const users = await fetchUsers();
        renderUsers(users);
        if (estadoEl)
            estadoEl.textContent = "";
    }
    catch (error) {
        console.error("Error al cargar usuarios:", error);
        if (estadoEl) {
            estadoEl.innerHTML = `
        <span class="text-danger">
          ❌ No se pudieron cargar los usuarios: ${error instanceof Error ? error.message : "Error desconocido"}
        </span>`;
        }
    }
}
void init();
export {};
//# sourceMappingURL=main.js.map