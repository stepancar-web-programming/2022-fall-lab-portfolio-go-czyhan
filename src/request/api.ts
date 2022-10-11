import service from "./index"

export function getReadme(url: string) {
    return service({
        url: url,
        method: "Get"
    })
}