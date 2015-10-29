
    function fUsuarioRoutes() {
    var icon = '<i class="fa fa-user fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'Usuario', _);
    var strClass = 'usuario';
    var place = $('#broth_content');
    
    //NEW 
    Path.map("#/" + strClass + "/new(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('New'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(usuarioNew, place, strClass, 'new', strParam);
        return false;
    });

    //VIEW

    Path.map("#/" + strClass + "/view(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('View'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(usuariotabla, place, strClass, 'usuariotabla', strParam);
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
        ausiasFLOW.initialize(usuarioEdit, place, strClass, 'edit', strParam);
        return false;
    });
   //DELETE
    
    Path.map("#/" + strClass + "/remove(/:url)").to(function () {
        $('#broth_panel_heading').empty().append(fillDocumentoPageHeader('Remove'));
        var strParam = parameter.getUrlObjectFromUrlString(this.params['url']);
        ausiasFLOW.reset();
        ausiasFLOW.initialize(removeModule, place, strClass, 'remove', strParam);
        return false;
    });


    }