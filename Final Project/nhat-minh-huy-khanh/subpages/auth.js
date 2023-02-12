if (!localStorage.getItem("list-user")) {
    localStorage.setItem("list-user", JSON.stringify([]));
}

window.user = localStorage.getItem("user");