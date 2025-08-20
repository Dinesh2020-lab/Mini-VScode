let editors = {};
let currentTab = "html";

// Initialize CodeMirror editors
window.onload = function() {
  editors.html = CodeMirror.fromTextArea(document.getElementById("html"), {
    mode: "htmlmixed",
    theme: "dracula",
    lineNumbers: true
  });
  
  editors.css = CodeMirror.fromTextArea(document.getElementById("css"), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true
  });
  
  editors.js = CodeMirror.fromTextArea(document.getElementById("js"), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true
  });

  // Default content
  editors.html.setValue("<h1>Hello from Mini VS Code!</h1>");
  editors.css.setValue("h1 { color: red; text-align: center; }");
  editors.js.setValue("console.log('Hello from JS');");
};

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelector(.tab:nth-child(${tab === "html" ? 1 : tab === "css" ? 2 : 3})).classList.add("active");

  // Hide all editors
  Object.keys(editors).forEach(k => {
    editors[k].getWrapperElement().style.display = "none";
  });

  // Show selected editor
  editors[tab].getWrapperElement().style.display = "block";
  currentTab = tab;
}

function runCode() {
  const html = editors.html.getValue();
  const css = "<style>" + editors.css.getValue() + "</style>";
  const js = "<script>" + editors.js.getValue() + "<\/script>";

  const iframe = document.getElementById("preview").contentWindow.document;
  iframe.open();
  iframe.write(html + css + js);
  iframe.close();
}