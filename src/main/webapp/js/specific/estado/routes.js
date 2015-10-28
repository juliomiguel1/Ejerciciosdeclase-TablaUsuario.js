

    
    
    function fEstadoRoutes() {
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Estado', _);
    var strClass = 'estado';
    var place = $('#broth_content');
    
   //NEW 
    Path.map("#/" + strClass + "/new(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(newModule, place, strClass, 'new', strParam);
        return false;
    });

    //VIEW

    Path.map("#/" + strClass + "/view(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('View'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(viewModule, place, strClass, 'view', strParam);
        return false;
    });
    
    //LIST
    
    Path.map("#/" + strClass + "/list(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('List'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(listModule, place, strClass, 'list', strParam);
        return false;
    });
        
    //EDIT
    
    Path.map("#/" + strClass + "/edit(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Edit'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(editModule, place, strClass, 'edit', strParam);
        return false;
    });
 /*   //DELETE
    
    Path.map("#/usuario/delete(/:url)").to(function () {
        $('#broth_panel_heading').empty().append('<h1>Edit de Usuario</h1>');
        ausiasFLOW.reset();
        ausiasFLOW.deleteModule_paramsObject = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.deleteModule_frontOperation = 'delete';
        ausiasFLOW.deleteModule_class = 'usuario';
        ausiasFLOW.initialize(deleteModule, $('#broth_content'));
    });*/
}