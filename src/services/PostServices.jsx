

async function sendData(data, url) {
    try {
        const res = await fetch(`${url}`,{
            method: "POST",
            headers: {
        "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json;
        console.log(result);
    } catch (err){
        console.log('Ошибка', err)
    }
}

export default sendData;