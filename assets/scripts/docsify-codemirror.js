// Docsify Codemirror
// v0.1.0
// Swanix - 2019

"use strict";

var codePreviewCssFile;
var codePreviewCssFile2;
var codePreviewJsFile;

$docsify.plugins = [].concat(codePreview, $docsify.plugins)

function codePreview (hook, vm) {
  hook.doneEach(function () {
    setTimeout(codePreviewInit, 300);
  })
}

function codePreviewInit() { 
  var codeEditor = document.querySelectorAll(".code-editor");

  for (var i = 0; i < codeEditor.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditor[i], {
      mode: "text/html",
      theme: "base16-light",
      readOnly: true,
      lineNumbers: true
    });
    previewCode();
    addStylesheetToIframes(codePreviewCssFile, codePreviewCssFile2);
    addScriptToIframes(codePreviewJsFile);
    addFrameBasicStyle();
  }

  function previewCode() {
    var codePreview = document.querySelectorAll(".code-preview");
    var preview =  codePreview[i].contentDocument;
    preview.write(editor.getValue());
  }    
    
  function addStylesheetToIframes(file1, file2) {
    var codePreview = document.querySelectorAll('.code-preview');
    var codePreviewDoc = codePreview[i].contentDocument.head;
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file1;
    
    codePreviewDoc.appendChild(css);

    var codePreview2 = document.querySelectorAll('.code-preview');
    var codePreviewDoc2 = codePreview2[i].contentDocument.head;
    var css2 = document.createElement("link");
    css2.type = "text/css";
    css2.rel = "stylesheet";
    css2.href = file2;

    codePreviewDoc2.appendChild(css2);

  }

  function addScriptToIframes(file) {
    var codePreview = document.querySelectorAll('.code-preview');
    var codePreviewDoc = codePreview[i].contentDocument.head;
    var js = document.createElement("script");
    js.src = file;
    
    codePreviewDoc.appendChild(js);

  }

 function addFrameBasicStyle() {
    var codePreview = document.querySelectorAll('.code-preview');
    var codePreviewDoc = codePreview[i].contentDocument.head;
    var basicStyle = document.createElement("style");
    basicStyle.innerHTML = `
      body::before { background: none !important;}
    `;
    codePreviewDoc.appendChild(basicStyle);
 }

}