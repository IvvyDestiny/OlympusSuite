
// login.js - Apenas para adm.html
function loginAdmin(email, password) {
    if (email === "olympus@olympuszeus.com.br" && password === "@Olympus123") {
        fetch('./log_access.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: "sucesso"})
        });
        localStorage.setItem("adm_session", JSON.stringify({
            user: email,
            loginTime: Date.now()
        }));
        window.location.href = "adm.html";
    } else {
        fetch('./log_access.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: "falha"})
        });
        alert("Credenciais inválidas!");
    }
}
