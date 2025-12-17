const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const form = document.getElementById("feedbackForm");
const statusText = document.getElementById("status");


function openForm(push = true) {
    overlay.classList.add("active");
    if (push) {
        history.pushState({ popup: true }, "", "#feedback");
    }
    restoreData();
}


function closeForm() {
    overlay.classList.remove("active");
}


openBtn.addEventListener("click", () => openForm());
closeBtn.addEventListener("click", () => history.back());


window.addEventListener("popstate", () => {
    closeForm();
});


function saveData() {
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem("feedbackData", JSON.stringify(data));
}

function restoreData() {
    const data = JSON.parse(localStorage.getItem("feedbackData"));
    if (!data) return;

    for (let key in data) {
        if (form.elements[key]) {
            form.elements[key].value = data[key];
        }
    }
}

form.addEventListener("input", saveData);


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusText.textContent = "Отправка...";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formcarry.com/s/p2wJAD5WBB2", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            statusText.textContent = "Сообщение успешно отправлено!";
            form.reset();
            localStorage.removeItem("feedbackData");
        } else {
            statusText.textContent = "Ошибка при отправке";
        }
    } catch {
        statusText.textContent = "Ошибка сети";
    }
});


