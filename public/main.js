getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("Get", "style.css")
    // request.onload = () => {
    //     console.log("request.response")
    //     console.log(request.response)
    //
    //     const style = document.createElement('style')
    //     style.innerHTML = request.response
    //
    //     document.head.appendChild(style)
    // }
    // request.onerror = () => {
    //     console.log('失败了')
    // }
    request.onreadystatechange = () => {
        let done = 4
        if (request.readyState === done && request.status === 200){
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js')
    // request.onload = () => {
    //     const script = document.createElement('script')
    //     script.innerHTML = request.response
    //     document.body.appendChild(script)
    // }
    // request.onerror = () => {}
    request.onreadystatechange = () => {
        let done = 4
        if(request.readyState === done && request.status === 200){
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    // request.onload = () => {
    //     const div = document.createElement('div')
    //     div.innerHTML = request.response
    //     document.body.appendChild(div)
    // }
    // request.onerror = () => {}
    request.onreadystatechange = () => {
        let done = 4
        if(request.readyState === done && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest() //圆括号可省略
    request.open("GET", '4.xml')
    request.onreadystatechange = () => {
        let done = 4
        if (request.readyState === done && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "5.json")
    request.onreadystatechange = () => {
        let done = 4
        if (request.readyState === done && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response) // object不一定是Object对象
            Hi.textContent = object.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `page${n+1}`);
    request.onreadystatechange = () => {
        let done = 4
        if(request.readyState === done && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}