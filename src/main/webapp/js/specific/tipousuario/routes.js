/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 * AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
   function fTipoUsuarioRoutes() {
       
    var icon = '<i class="fa fa-file-text-o fa-5x"></i>';
    var fillDocumentoPageHeader = _.partial(html.getPageHeader, icon, 'TipoUsuario', _);
    var strClass = 'tipousuario';
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