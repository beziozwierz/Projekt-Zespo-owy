function toolbar_element(option){

    switch(option.innerText) {
        case "ID":
            document.getElementsByClassName("edit-element-element-title"[0]).innerText = "Nazwa ID";
            break;
        case "Class":
            document.getElementsByClassName("edit-element-element-title"[0]).innerText = "Nazwa Klasy";
            break;
    }

    document.getElementById("edit-element-container").style.display = "block";
    document.getElementById("edit-element-title-container").innerText = option.innerText.toUpperCase();
}


function category_select(element){
    switch(element.innerText){
        case "HTML":
            document.getElementById("toolbar-html-categories-container").style.display = "block";
            document.getElementById("toolbar-css-categories-container").style.display = "none";
            document.getElementById("toolbar-templates-categories-container").style.display = "none";
            break;
        case "CSS":
            document.getElementById("toolbar-html-categories-container").style.display = "none";
            document.getElementById("toolbar-css-categories-container").style.display = "block";
            document.getElementById("toolbar-templates-categories-container").style.display = "none";
            break;
        case "TEMPLATES":
            document.getElementById("toolbar-html-categories-container").style.display = "none";
            document.getElementById("toolbar-css-categories-container").style.display = "none";
            document.getElementById("toolbar-templates-categories-container").style.display = "block";
            break;
    }
}

function html_element_select(element){
    switch(element.innerText){
        case "Containers":
            $("#toolbar-HTML_Containers").slideToggle("slow");
            break;
        case "Flow control":
            $("#toolbar-HTML_FlowControl").slideToggle("slow");
            break;
        case "External sources":
            $("#toolbar-HTML_ExternalSources").slideToggle("slow");
            break;
        case "Forms":
            $("#toolbar-HTML_Forms").slideToggle("slow");
            break;
        case "Semantics":
            $("#toolbar-HTML_Semantics").slideToggle("slow");
            break;
        case "Settings":
            $("#toolbar-HTML_Settings").slideToggle("slow");
            break;
        case "▼Text headers▼":
            $("#toolbar-HTML_TextHeaders").slideToggle("slow");
            break;
    }
}

function css_element_select(element){
    switch(element.innerText){
        case "Size and positioning":
            $("#toolbar-CSS_SizeAndPositioning").slideToggle("slow");
            break;
        case "Flow control":
            $("#toolbar-CSS_FlowControl").slideToggle("slow");
            break;
        case "Text and colors":
            $("#toolbar-CSS_TextAndColors").slideToggle("slow");
            break;
        case "▼Size▼":
            $("#toolbar-CSS_SizeTypes").slideToggle("slow");
            break;
        case "▼Position value▼":
            $("#toolbar-CSS_PositionValues").slideToggle("slow");
            break;
    }
}

function html_element_hover(element){
    document.getElementById("model-inspector-css-container").style.display = "none";
    var my_position = element.getBoundingClientRect();
    var inspector = document.getElementById("model-inspector-container");
    var tag = document.getElementById("model-inspector-tag");
    var description = document.getElementById("model-inspector-description");
    var needed = document.getElementById("model-inspector-needed");
    var optional = document.getElementById("model-inspector-optional");
    inspector.style.display = "block";
    inspector.style.top = my_position.top.toString() + "px";
    document.getElementById("model-inspector-title").innerText = element.innerText;

    switch(element.innerText){
        case "Default container":
            tag.innerText = "<div>";
            description.innerText = "The <div> tag defines a division or a section in an HTML document.\n" +
                "The <div> element is often used as a container for other HTML elements to style them with CSS";
            needed.style.display = "none";
            optional.style.display = "none";
            break;
        case "Text container":
            tag.innerText = "<span>";
            description.innerText = "The <span> tag is used to group inline-elements in a document.\n" +
                "The <span> tag provides no visual change by itself.\n" +
                "The <span> tag provides a way to add a hook to a part of a text or a part of a document."
            needed.style.display = "none";
            optional.style.display = "none";
            break;
        case "Website container":
            tag.innerText = "<iframe>";
            description.innerText = "The <iframe> tag specifies an inline frame.\n" +
                "An inline frame is used to embed another document within the current HTML document.";
            needed.style.display = "block";
            needed.innerText = "Needs: src = path_to_source";
            optional.style.display = "none";
            break;

        case "Text header":
            tag.innerText = "<h1>-<h6>";
            description.innerText = "The <h1> to <h6> tags are used to define HTML headings.\n" +
                "<h1> defines the most important heading. <h6> defines the least important heading.";
            needed.style.display = "none";
            optional.style.display = "none";
            break;
        case "Table":
            tag.innerText = "<table>";
            description.innerText = "The <table> tag defines an HTML table.";
            needed.style.display = "block";
            needed.innerText = "Needs: <tr> and <td> tags inside";
            optional.style.display = "none";
            break;
        case "Table row":
            tag.innerText = "<tr>";
            description.innerText = "The <tr> tag defines a row in an HTML table.";
            needed.style.display = "block";
            needed.innerText = "Needs: <td> tag inside";
            optional.style.display = "none";
            break;
        case "Table cel":
            tag.innerText = "<td>";
            description.innerText = "The <td> tag defines a cel in an HTML table.";
            needed.style.display = "none";
            optional.style.display = "none";
            break;
        case "Ordered list":
            tag.innerText = "<ol>";
            description.innerText = "The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.\n" +
                "Use the <li> tag to define list items.";
            needed.style.display = "block";
            needed.innerText = "Needs: <li> tag inside";
            optional.style.display = "block";
            optional.innerHTML = "<div id='model-inspector-optional-header'>Optional:</div>" +
                "<div id='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>start = first_element</div>" +
                "<div class='model-inspector-optional-element'>type = list_type 1 a A i I</div>" +
                "</div>";
            break;
        case "Unordered list":
            tag.innerText = "<ul>";
            description.innerText = "The <ul> tag defines an unordered (bulleted) list.\n" +
                "Use the <ul> tag together with the <li> tag to create unordered lists.";
            needed.style.display = "block";
            needed.innerText = "Needs: <li> tag inside";
            optional.style.display = "none";
            break;
        case "Webpage link":
            tag.innerText = "<a>";
            description.innerText = "The <a> tag defines a hyperlink, which is used to link from one page to another.";
            needed.innerText = "Needs: href = hyperlink_target";
            optional.style.display = "block";
            optional.innerHTML = "<div class='model-inspector-optional-header'>Optional:</div>" +
                "<div class='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>download</div>" +
                "<div class='model-inspector-optional-element'>target = _blank _parent _self _top</div>" +
                "</div>";
            break;
        case "Graphics":
            tag.innerText = "<img>";
            description.innerText = "The <img> tag defines an image in an HTML page.\n" +
                "Images are not technically inserted into an HTML page, images are linked to HTML pages. The <img> tag creates a holding space for the referenced image.";
            needed.style.display = "block";
            needed.innerHTML = "<div class='model-inspector-optional-header'>Needs:</div>" +
                "<div class='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>src = path_to_source</div>" +
                "<div class='model-inspector-optional-element'>alt = text_displayed_on_image_load_failed</div>" +
                "</div>";
            optional.style.display = "block";
            optional.innerHTML = "<div class='model-inspector-optional-header'>Optional:</div>" +
                "<div class='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>download</div>" +
                "<div class='model-inspector-optional-element'>target = _blank _parent _self _top</div>" +
                "</div>";
            break;
        case "Audio":
            tag.innerText = "<audio>";
            description.innerText = "The <audio> tag defines sound, such as music or other audio streams.\n" +
                "Currently, there are 3 supported file formats for the <audio> element: MP3, WAV, and OGG.";
            needed.style.display = "block";
            needed.innerText = "Needs: src = path_to_load";
            optional.style.display = "block";
            optional.innerHTML = "<div class='model-inspector-optional-header'>Optional:</div>" +
                "<div class='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>autoplay</div>" +
                "<div class='model-inspector-optional-element'>loop</div>" +
                "<div class='model-inspector-optional-element'>muted</div>" +
                "<div class='model-inspector-optional-element'>controls</div>" +
                "</div>";
            break;
        case "Video":
            tag.innerText = "<video>";
            description.innerText = "The <video> tag specifies video, such as a movie clip or other video streams.\n" +
                "Currently, there are 3 supported video formats for the <video> element: MP4, WebM, and Ogg.";
            needed.style.display = "block";
            needed.innerText = "Needs: src = path_to_load";
            optional.style.display = "block";
            optional.innerHTML = "<div class='model-inspector-optional-header'>Optional:</div>" +
                "<div class='model-inspector-optional-text-container'>" +
                "<div class='model-inspector-optional-element'>autoplay</div>" +
                "<div class='model-inspector-optional-element'>loop</div>" +
                "<div class='model-inspector-optional-element'>muted</div>" +
                "<div class='model-inspector-optional-element'>controls</div>" +
                "</div>";
            break;
    }
}

function css_element_add(element){
    var target = document.getElementById("model-inspector-css-drop-area");
    var result;

        switch(element.innerText){
            case "Width":
                result = "width:";
                break;
            case "Height":
                result = "height:";
                break;
            case "Outside margin":
                result = "margin:";
                break;
            case "Inside margin":
                result = "padding:";
                break;
            case "Outside border":
                result = "border:";
                break;
            case "Inside outline":
                result = "outline:";
                break;
            case "Position type":
                result = "position:";
                break;
            case "Top":
                result = "top:";
                break;
            case "Bottom":
                result = "bottom:";
                break;
            case "Left":
                result = "left:";
                break;
            case "Right":
                result = "right:";
                break;
            case "Float":
                result = "float:";
                break;
            case "Display":
                result = "display:";
                break;
            case "Clear":
                result = "clear:";
                break;
            case "Font size":
                result = "font-size:";
                break;
            case "Line height":
                result = "line-height:";
                break;
            case "Font color":
                result = "color:";
                break;
            case "Font type":
                result = "font-face:";
                break;
            case "Background color":
                result = "background-color:";
                break;
        }

        if(target.innerHTML.search(result) === -1) {

            target.innerHTML += '<div class="model-inspector-css-drop-element">\n' +
                '                       ' + result + '\n' +
                '                    <input type="text" class="model-inspector-css-drop-element-edit">\n' +
                '                </div>';
        }
}

function css_element_hover(element){
    document.getElementById("model-inspector-css-container").style.display = "block";
    var my_position = element.getBoundingClientRect();
    var inspector = document.getElementById("model-inspector-container");
    var tag = document.getElementById("model-inspector-tag");
    var description = document.getElementById("model-inspector-description");
    var needed = document.getElementById("model-inspector-needed");
    var optional = document.getElementById("model-inspector-optional");
    inspector.style.display = "block";
    inspector.style.top = my_position.top.toString() + "px";
    document.getElementById("model-inspector-title").innerText = element.innerText;

    switch(element.innerText) {
        case "Default container":
            tag.innerText = "<div>";
            description.innerText = "The <div> tag defines a division or a section in an HTML document.\n" +
                "The <div> element is often used as a container for other HTML elements to style them with CSS";
            needed.style.display = "none";
            optional.style.display = "none";
            break;
    }
}

function element_leaved(){
    document.getElementById("model-inspector-container").style.display = "block";
}