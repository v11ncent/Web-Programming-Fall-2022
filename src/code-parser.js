window.addEventListener('load', (event) => {
    document.querySelectorAll('code.code--single').forEach(codeElement => {
        if (codeElement.length === 0) {
            return;
        }
        
        codeElement.innerText = `<${codeElement.innerText}>`;
    });

    // document.querySelectorAll('code.code--block').forEach(codeElement => {
    //     if (codeElement.length === 0) {
    //         return;
    //     }

    //     console.log(codeElement.innerHTML);
    //     codeElement.innerText = codeElement.innerHTML;
    //     codeElement.style.color = '#00d061';
    // });
});