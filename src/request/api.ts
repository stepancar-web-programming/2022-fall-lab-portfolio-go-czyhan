import service from "."


export  function getReadme(url:string) {
    return service({
        url: url,
        method: "Get"
    })
}