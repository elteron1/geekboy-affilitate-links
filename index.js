// const czcBtn = document.getElementById("czc-btn")
// const alzaBtn = document.getElementById("alza-btn")
// const heurekaBtn = document.getElementById("heureka-btn")
// const ulEl = document.getElementById("ul-el")
// const czc = ["https://www.geekboy.cz/czc/"]
// const alza = ["https://www.geekboy.cz/alzacz/"]
// const heureka = ["https://www.geekboy.cz/YQ5VY/"]
// JSON.parse(localStorage.getItem("czc"))
// JSON.parse(localStorage.getItem("alza"))
// JSON.parse(localStorage.getItem("heureka"))
//
// czcBtn.addEventListener("dblclick", function (){
//     localStorage.setItem("czc", JSON.stringify(czc))
//     addLinkFunction(czc)
// })
//
//
// alzaBtn.addEventListener("dblclick", function (){
//     localStorage.setItem("alza", JSON.stringify(alza))
//     addLinkFunction(alza)
// })
//
//
// heurekaBtn.addEventListener("dblclick", function (){
//     localStorage.setItem("heureka", JSON.stringify(heureka))
//     addLinkFunction(heureka)
// })
//
// function addLinkFunction(link) {
//     let list = ""
//     for (let i = 0;i < link.length; i++) {
//     list = `
// <p>
//     <a target='_blank' href='${link[0]}'>
//         ${link[0]}
//     </a>
// </p>`
//     }
//     ulEl.innerHTML = list
// }