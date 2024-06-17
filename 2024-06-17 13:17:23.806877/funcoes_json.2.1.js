var flagCarrega=false;var select="";$(function(){if(idioma==0){select="Selecione...";}else{select="Select...";}});function leJsonPais(){var fonte="/locais/paises2";var cMax,op,cc=0;var option;$.getJSON(fonte,function(paises){$('#pais_seletor_previsao').html("");$('<select>').attr({'id':'paisPrevisao','name':'paisPrevisao','style':'display:none','onchange':'javascript:carregaPais();'}).appendTo('#pais_seletor_previsao');if(pais==""){if(idioma==0)sel="Selecione";else sel="Select";$('<option>').attr({'value':'0','selected':'selected'}).html(sel+'...').appendTo('#paisPrevisao');}
$.each(paises,function(i){slug=paises[i].slug;if(idioma==0){nome=paises[i].nome;}else{nome=paises[i].name;}
option=new Option(nome,slug);if(pais==slug){$('<option>').attr({'value':slug,'selected':'selected'}).html(nome).appendTo('#paisPrevisao');}else{$('<option>').attr({'value':slug}).html(nome).appendTo('#paisPrevisao');}
cc++;});if(cc==1){$("#paisPrevisao").val(slug);pais=slug;}
$("#paisPrevisao").fadeIn(500);if(estado!=""){leJsonEstado();}});}
function carregaPais(){pais=$("#paisPrevisao").val();if(pais=="mundo"){window.location.href="/previsao/mundo";}
estado="";municipio="";litoral=0;$('#container-previsao').slideUp(1000);$("#estadoPrevisao").hide(500).empty();$("#municipio_seletor_previsao span").empty();$("#municipio_seletor_previsao .select-form").hide();$("#municipioPrevisao").hide(500).empty();$("#praia_seletor_previsao span").empty();$("#praia_seletor_previsao .select-form").hide();$("#praiaPrevisao").hide(500).empty();$("#oito_dias_previsao").hide(500);leJsonEstado();}
function leJsonEstado(){if(pais==undefined||pais==""||pais=="0"){pais='brasil';}
var fonte="/locais/estados/"+pais;var cMax,op,cc=0;var option;$.getJSON(fonte,function(estados){var nome="";$('#estado_seletor_previsao').html("");$('<select>').attr({'id':'estadoPrevisao','name':'estadoPrevisao','style':'display:none','onchange':'javascript:carregaEstado();'}).appendTo('#estado_seletor_previsao');if(estado==""){if(idioma==0)sel="Selecione";else sel="Select";$('<option>').attr({'value':'0','selected':'selected'}).html(sel+'...').appendTo('#estadoPrevisao');}
$.each(estados,function(i){slug=estados[i].slug;if(idioma==0){nome=estados[i].nome;}else{nome=estados[i].name;}
option=new Option(nome,slug);if(estado==slug){$('<option>').attr({'value':slug,'selected':'selected'}).html(nome).appendTo('#estadoPrevisao');}else{$('<option>').attr({'value':slug}).html(nome).appendTo('#estadoPrevisao');}
cc++;});if(cc==1){$("#estadoPrevisao").val(slug);estado=slug;}
$("#estado_seletor_previsao").show();$("#estadoPrevisao").fadeIn(500);if(estado!=""){leJsonMunicipio();}});}
function leJsonMunicipio(){if(pais==undefined||pais==""||pais=="0"){pais='brasil';}
var fonte="/locais/municipios/"+pais+"/"+estado;var cMax,cc=0;$.getJSON(fonte,function(municipios){$('<select>').attr({'id':'municipioPrevisao','name':'municipioPrevisao','style':'display:none','onchange':'javascript:carregaMunicipio();'}).appendTo('#municipio_seletor_previsao');if(municipio==""){if(idioma==0)sel="Selecione";else sel="Select";$('<option>').attr({'value':'0','selected':'selected'}).html(sel+'...').appendTo('#municipioPrevisao');}
$.each(municipios,function(i){slug=municipios[i].slug;if(idioma==0){nome=municipios[i].nome;}else{nome=municipios[i].name;}
option=new Option(nome,slug);if(municipio==slug){$('<option>').attr({'value':slug,'selected':'selected'}).html(nome).appendTo('#municipioPrevisao');}else{$('<option>').attr({'value':slug}).html(nome).appendTo('#municipioPrevisao');}
cc++;});flagCarrega=true;if(cc==1){$("#municipioPrevisao").val(slug);municipio=slug;carregaMunicipio();}
$("#municipio_seletor_previsao").show();$("#municipioPrevisao").fadeIn(500);});}
function leJsonMunicipio2(){if(pais==undefined||pais==""||pais=="0"){pais='brasil';}
var fonte="/locais/municipios/"+pais+"/"+estado;var cMax,cc=0;$.getJSON(fonte,function(data){$('<select>').attr({'id':'municipioPrevisao','name':'municipioPrevisao','style':'display:none','onchange':'javascript:carregaMunicipio();'}).appendTo('#municipio_seletor_previsao');if(municipio==""){if(idioma==0)sel="Selecione";else sel="Select";$('<option>').attr({'value':'0','selected':'selected'}).html(sel+'...').appendTo('#municipioPrevisao');}
$.each(data,function(i){slug=data[i].slug;if(idioma==0){nome=data[i].nome;}else{nome=data[i].name;}
option=new Option(nome,slug);if(municipio==slug){$('<option>').attr({'value':slug,'selected':'selected'}).html(nome).appendTo('#municipioPrevisao');}else{if(nome.indexOf("│")>=0){$('<option>').attr({'value':slug}).attr({'style':'color:#aaa;'}).html(nome).appendTo('#municipioPrevisao');}else{$('<option>').attr({'value':slug}).html(nome).appendTo('#municipioPrevisao');}}
cc++;});flagCarrega=true;if(cc==1){$("#municipioPrevisao").val(slug);municipio=slug;carregaMunicipio();}
$("#municipio_seletor_previsao").show();$("#municipioPrevisao").fadeIn(500);});}
function leJsonPraia(){var cMax,cc=0;if(pais==undefined||pais==""||pais=="0"){pais='brasil';}
var fonte="/locais/praias/"+pais+"/"+estado+"/"+municipio;var cMax,cc=0;$.getJSON(fonte,function(praias){$('<select>').attr({'id':'praiaPrevisao','name':'praiaPrevisao','style':'display:none','onchange':'javascript:carregaPraia();'}).appendTo('#praia_seletor_previsao');if(praia==""){if(idioma==0){nome="Selecione...";}else{nome="Select...";}
$('<option>').attr({'value':'0','selected':'selected'}).html(nome).appendTo('#praiaPrevisao');}
$.each(data,function(i){slug=data[i].slug;if(idioma==0){nome=data[i].nome;}else{nome=data[i].name;}
option=new Option(nome,slug);if(praia==slug){$('<option>').attr({'value':slug,'selected':'selected'}).html(nome).appendTo('#praiaPrevisao');}else{$('<option>').attr({'value':slug}).html(nome).appendTo('#praiaPrevisao');}
cc++;});flagCarrega=true;if(cc==1){$("#praiaPrevisao").val(slug);municipio=slug;carregaPraia();}
$("#praia_seletor_previsao").show();$("#praiaPrevisao").fadeIn(500);});}