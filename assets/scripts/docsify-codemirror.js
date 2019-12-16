// Docsify Codemirror
// v0.1.0
// Sebastian Serna - 2019

var codePreviewCssFile;

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
    addStylesheetToIframes(codePreviewCssFile);
  }

  function previewCode() {
    var codePreview = document.querySelectorAll(".code-preview");
    var preview =  codePreview[i].contentDocument;
    preview.write(editor.getValue());
  }    
    
  function addStylesheetToIframes(file) {
    var codePreview = document.querySelectorAll('.code-preview');

    codePreviewDoc = codePreview[i].contentDocument.head;
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    
    codePreviewDoc.appendChild(css);

  }

}