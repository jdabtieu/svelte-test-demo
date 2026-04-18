export async function load() {
    const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=255&count=3");
    const data = await response.json();
    return { data };
}