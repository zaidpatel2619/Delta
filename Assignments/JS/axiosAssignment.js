let url = "http://universities.hipolabs.com/search?country=India&state-province=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let input = document.querySelector("#textInput").value;
    let list = await getNames(input);
    show(list.data);
});

function show(data) {
    for (i of data) {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        li.innerText = i.name;
        ul.appendChild(li);
    }
}

async function getNames(state) {
    let res = axios.get(url + state);
    return await res;
};
