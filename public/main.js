let n = 1;
getPAGE.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", `/page${n+1}`);
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement("li");
                    const xxx = document.getElementById('xxx')
                    li.textContent = item.id;

                    xxx.appendChild(li);
                });
                n += 1
            } else {
                alert("加载列表失败");
            }
        }
    };
    request.send();

};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(typeof request.response);
                console.log(request.response);
                const bool = JSON.parse(request.response);
                console.log(typeof bool);
                console.log(bool);
            } else {
                alert("加载json失败");
            }
        }
    };
    request.send();

};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/4.xml");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim());
            } else {
                alert("加载xml失败");
            }
        }
    };
    request.send();

};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/3.html");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div");
                div.innerHTML = request.response;
                document.body.appendChild(div);
            } else {
                alert("加载html失败");
            }
        }
    };
    request.send();

};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/2.js");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.body.appendChild(script);
            } else {
                alert("加载JS失败");
            }
        }
    };
    request.send();

};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/style.css");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style");
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert("加载CSS失败");
            }
        }
    };
    request.send();

}