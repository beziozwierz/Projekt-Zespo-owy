/***
Plik przechowujący zmienne globalne
***/



var global_name = "HTML";
var global_type = "HTML";

/***
Aktualnie 'chwycony' element
***/
var dragged = new Div(global_name, '100','50px',null);

var pathToEdited = null;

/***
Referencja do korzenia drzewa modelu.
Korzeń nie jest rysowany, jest tylko kontenerem.
***/
model = new Div('root', 0,0,null);
/***
Pierwszy element drzewa. 
(??Zmienić nazwę na body??)
***/
model.inner[0] = new Div('MainModel', '100','100%',model);

 //Zmienne przechowujące obecny punkt odniesienia do rysowania
var viewpoint_root = model.inner[0];
var viewpoint_name = "model_0";

var zoomed = false;