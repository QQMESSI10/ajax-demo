console.log('hello');
let pageNum = 0;

const request = new XMLHttpRequest();
    request.open('GET', '/page1');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求page1成功');
            ajaxResponse.innerHTML = request.response;
            const data = JSON.parse(request.response);
            data.forEach(e => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${e.num}</td><td>${e.content}</td>`;
                pageData.appendChild(tr);
            })
            pageNum += 1;
        }
    }
request.send();

getCss.onclick = () => {
    console.log('调用了getCss');
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求css成功');
            ajaxResponse.innerHTML = request.response;
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    }
    request.send();
}

getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/test.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求js成功');
            ajaxResponse.innerHTML = request.response;
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    }
    request.send();
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/test.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求html成功');
            ajaxResponse.innerHTML = request.response;
            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    }
    request.send();
}

getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/test.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求xml成功');
            ajaxResponse.innerHTML = request.response;
        }
    }
    request.send();
}

getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/test.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log('ajax请求json成功');
            ajaxResponse.innerHTML = request.response;
            jsonTest.textContent = JSON.parse(request.response).name;
        }
    }
    request.send();
}

afterPage.onclick = () => {
    const request = new XMLHttpRequest();
    if (pageNum < 3) {
        request.open('GET', `/page${pageNum += 1}`);
        request.onreadystatechange = () => {
          if (request.readyState === 4 && request.status === 200) {
              console.log('ajax请求page2成功');
              ajaxResponse.innerHTML = request.response;
              const data = JSON.parse(request.response);
              data.forEach(e => {
                  const tr = document.createElement('tr');
                  tr.innerHTML = `<td>${e.num}</td><td>${e.content}</td>`;
                  pageData.appendChild(tr);
              })
              
          }
        }
        request.send();
    } else {
        alert('没有更多了');
    }
    
}