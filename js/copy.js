var code = document.getElementsByTagName("code");
for (var i = 0; i < code.length; i++) { (function(j) {
        code[j].onclick = function() {
            navigator.clipboard.writeText(code[j].innerText);
            var note = code[j].innerText;
            code[j].style.cssText = "color: #ffffff; background-color: #777777";
            setTimeout(function() {
                code[j].style.cssText = ""
            },
            700);
        }
    })(i)
}
