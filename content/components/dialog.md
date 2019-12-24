# Dialog

<iframe class="code-preview" height="450px"></iframe>
<textarea class="code-editor" name="code">
<!-- Modal template -->
<div class="modal">
  <div class="modal-inner">
    <a rel="modal:close">&times;</a>
    <div class="modal-content"></div>
  </div>
</div>
<!-- Modal Demo with Basic content -->
<a class="button primary" href="#modal-basic" rel="modal:open">Basic Dialog</a>
<!-- Dialog content -->
<div id="modal-basic" style="display:none">
  <div style="width:50rem;padding:3rem;">
    <h2 class="gray9">Basic Dialog</h2>
    <p class="gray5">Curabitur tincidunt interdum urna egestas scelerisque. Cras at metus sed lorem eleifend tincidunt nec eu odio. Mauris quis turpis id sapien hendrerit pellentesque vel id leo. Vivamus vitae nibh dolor.</p>
  </div>
</div>
<!-- Modal Demo with iframe site -->
<a class="button primary" href="#modal-iframe" rel="modal:open">Dialog + iframe</a>
<!-- Dialog content -->
<div id="modal-iframe" style="display:none">
  <iframe src="/" width="400" height="600" frameborder="0"></iframe>
</div>
</textarea>