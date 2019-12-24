// Docsify - Codemirror
// v0.1.0
// Swanix - 2019

"use strict";

let codePreviewCssFile;
let codePreviewJsFile;

let delay;

$docsify.plugins = [].concat(codePreview, $docsify.plugins)

function codePreview (hook, vm) {
  hook.doneEach(function () {
    setTimeout(codePreviewInit, 300);
  })
}

function codePreviewInit() { 
  let codeEditor = document.querySelectorAll(".code-editor");

  for (var i = 0; i < codeEditor.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditor[i], {
      mode: "text/html",
      theme: "base16-light",
      readOnly: true,
      lineNumbers: true
    });
    previewCode();
    addStylesheetToIframes(codePreviewCssFile);
    addScriptToIframes(codePreviewJsFile);
    addFrameBasicStyle();
  }

  function previewCode() {
    let codePreview = document.querySelectorAll(".code-preview");
    let preview =  codePreview[i].contentDocument;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
  }    
    
  function addStylesheetToIframes(file) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    codePreviewDoc.appendChild(css);
  }

  function addScriptToIframes(file) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let js = document.createElement("script");
    js.src = file;
    codePreviewDoc.appendChild(js);
  }

 function addFrameBasicStyle() {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let basicStyle = document.createElement("style");
    basicStyle.innerHTML = `
      body { padding: 20px;}
      body::before { background: none !important;}
    `;
    codePreviewDoc.appendChild(basicStyle);
 }

}