window.addEventListener("load", () =>{
    const form = document.getElementById("main-form");
    const input = document.getElementById("adding-tasks");
    const tasks = document.getElementById("tasklist");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const add_task = input.value;
        if (!add_task)
        {
            alert("fill it properly");
            return;
        }
        const input_div = document.createElement("div");
        tasks.appendChild(input_div);

        const ip = document.createElement("input");
        input_div.appendChild(ip);
        ip.type = "text";

        const button_div = document.createElement("div");
        tasks.appendChild(button_div);

        const btn_edit = document.createElement("button");
        button_div.appendChild(btn_edit);
        const btn_del = document.createElement("button");
        button_div.appendChild(btn_del);

        btn_edit.innerHTML = "EDIT";
        btn_del.innerHTML = "DELETE";
        ip.value = add_task;
        input.value = "";
        ip.readOnly = "True";

        btn_edit.addEventListener("click", () => {
            if (btn_edit.innerHTML === "EDIT")
            {
                btn_edit.innerHTML = "SAVE";
                ip.removeAttribute("readonly");
                ip.focus();
            }
            else
            {
                ip.setAttribute("readonly","readonly");
                btn_edit.innerHTML = "EDIT";
            }
        })
        btn_del.addEventListener("click", () => {
            tasks.removeChild(input_div);
            tasks.removeChild(button_div);
        })
    })
})