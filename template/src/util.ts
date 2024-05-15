export async function helloNaver(url: string) {
    const res = await fetch(url)
    const resText = await res.text()
    return resText
}