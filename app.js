(function () {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    const tr1 = document.createElement("tr");


    const topics = ['Name', 'Age', 'DOB', 'Email', 'Company'];

    const info = [
        "Yahsraj Singhania", 25, "15 Dec 1998", "rajyash001@gmail.com", "Raj Infotech"
    ];


    for (var i = 0; i < 5; i++) {
        const th = document.createElement("th");
        let text = topics[i];
        const textnode = document.createTextNode(text);
        th.appendChild(textnode);
        th.style.fontSize = "25px";
        th.style.border = "2px solid black";
        th.style.width = "15%";
        th.style.textAlign = "center";
        th.style.borderCollapse = "collapse";
        tr1.appendChild(th);
    }
    table.appendChild(tr1);

    for (var i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            const data = document.createElement("td");
            let myText = info[j];
            const datatext = document.createTextNode(myText);
            data.appendChild(datatext);
            // data.style.borderCollapse = "collapse";
            row.appendChild(data);
            // th.style.borderCollapse = "collapse";
            row.style.fontSize = "15px";
            row.style.border = "2px solid black";
            row.style.width = "15%";
            row.style.textAlign = "center";

            data.style.border = "2px solid black";

        }
        table.appendChild(row);
    }

    // table.style.borderCollapse = "collapse";


    document.body.appendChild(table);

})();