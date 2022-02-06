window.addEventListener('load', () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list_el = document.getElementById("tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = input.value;
        if (!taskInput) {
            alert("Please input task");
            return;
        } else {
            const task = document.createElement('div');
            task.classList.add('task');
            const content = document.createElement('content');
            content.classList.add('content');

            task.appendChild(content);

            const inputContent = document.createElement('input');
            inputContent.type = "text";
            inputContent.classList.add('text');
            inputContent.setAttribute('value', taskInput);
            inputContent.setAttribute("readonly", "readonly");
            inputContent.classList.add("caret-hidden");
            console.log(task);
            content.appendChild(inputContent);
            const actions = document.createElement("div");
            actions.classList.add("actions");

            const button1 = document.createElement("button");
            button1.classList.add("edit");
            button1.innerHTML = "edit";
            const button2 = document.createElement("button");
            button2.classList.add("delete");
            button2.innerHTML = "delete";

            actions.appendChild(button1);
            actions.appendChild(button2);

            task.appendChild(actions);

            list_el.appendChild(task);
            input.value = '';



            // xu ly viec nhan nut edit
            button1.addEventListener('click', (e) => {
                if (button1.innerText.toLowerCase() == "edit") {
                    inputContent.removeAttribute("readonly");
                    inputContent.classList.remove("caret-hidden")
                    inputContent.focus();
                    button1.innerText = "save"
                } else {
                    if (inputContent.value == "") {
                        list_el.removeChild(task);
                    } else {
                        inputContent.setAttribute("readonly", "readonly");
                        button1.innerText = "edit";
                        inputContent.classList.add("caret-hidden");
                    }


                }
            })

            //xu ly viec nhan nut delete
            button2.addEventListener('click', (e) => {
                list_el.removeChild(task);
            })

        }
    })
})