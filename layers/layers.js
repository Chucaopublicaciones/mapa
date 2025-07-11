ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([783423.809269, 5837615.383015, 858717.995702, 5877072.878988]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_G21_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_G21<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_G21_2.png",
            attributions: ' ',
            projection: 'EPSG:32718',
            alwaysInRange: true,
            imageExtent: [809425.652000, 5843050.000000, 832625.652000, 5871650.000000]
        })
    });
var format_IPG_G21_3 = new ol.format.GeoJSON();
var features_IPG_G21_3 = format_IPG_G21_3.readFeatures(json_IPG_G21_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_IPG_G21_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPG_G21_3.addFeatures(features_IPG_G21_3);
var lyr_IPG_G21_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPG_G21_3, 
                style: style_IPG_G21_3,
                popuplayertitle: 'IPG_G21',
                interactive: true,
                title: '<img src="styles/legend/IPG_G21_3.png" /> IPG_G21'
            });
var format_LAG_G21_4 = new ol.format.GeoJSON();
var features_LAG_G21_4 = format_LAG_G21_4.readFeatures(json_LAG_G21_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LAG_G21_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAG_G21_4.addFeatures(features_LAG_G21_4);
var lyr_LAG_G21_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAG_G21_4, 
                style: style_LAG_G21_4,
                popuplayertitle: 'LAG_G21',
                interactive: true,
                title: '<img src="styles/legend/LAG_G21_4.png" /> LAG_G21'
            });
var format_SNAS_G21_5 = new ol.format.GeoJSON();
var features_SNAS_G21_5 = format_SNAS_G21_5.readFeatures(json_SNAS_G21_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SNAS_G21_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNAS_G21_5.addFeatures(features_SNAS_G21_5);
var lyr_SNAS_G21_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SNAS_G21_5, 
                style: style_SNAS_G21_5,
                popuplayertitle: 'SNAS_G21',
                interactive: true,
                title: '<img src="styles/legend/SNAS_G21_5.png" /> SNAS_G21'
            });
var format_CN_G21_6 = new ol.format.GeoJSON();
var features_CN_G21_6 = format_CN_G21_6.readFeatures(json_CN_G21_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CN_G21_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CN_G21_6.addFeatures(features_CN_G21_6);
var lyr_CN_G21_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CN_G21_6, 
                style: style_CN_G21_6,
                popuplayertitle: 'CN_G21',
                interactive: true,
                title: '<img src="styles/legend/CN_G21_6.png" /> CN_G21'
            });
var format_Hidro_G21_7 = new ol.format.GeoJSON();
var features_Hidro_G21_7 = format_Hidro_G21_7.readFeatures(json_Hidro_G21_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Hidro_G21_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidro_G21_7.addFeatures(features_Hidro_G21_7);
var lyr_Hidro_G21_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidro_G21_7, 
                style: style_Hidro_G21_7,
                popuplayertitle: 'Hidro_G21',
                interactive: true,
                title: '<img src="styles/legend/Hidro_G21_7.png" /> Hidro_G21'
            });
var format_Vialidad_G021_8 = new ol.format.GeoJSON();
var features_Vialidad_G021_8 = format_Vialidad_G021_8.readFeatures(json_Vialidad_G021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Vialidad_G021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidad_G021_8.addFeatures(features_Vialidad_G021_8);
var lyr_Vialidad_G021_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vialidad_G021_8, 
                style: style_Vialidad_G021_8,
                popuplayertitle: 'Vialidad_G-021',
                interactive: true,
    title: 'Vialidad_G-021<br />\
    <img src="styles/legend/Vialidad_G021_8_0.png" /> Pavimento<br />\
    <img src="styles/legend/Vialidad_G021_8_1.png" /> Pavimento Básico<br />\
    <img src="styles/legend/Vialidad_G021_8_2.png" /> Ripio<br />' });
var format_Volc_G021_9 = new ol.format.GeoJSON();
var features_Volc_G021_9 = format_Volc_G021_9.readFeatures(json_Volc_G021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Volc_G021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volc_G021_9.addFeatures(features_Volc_G021_9);
var lyr_Volc_G021_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Volc_G021_9, 
                style: style_Volc_G021_9,
                popuplayertitle: 'Volc_G-021',
                interactive: true,
                title: '<img src="styles/legend/Volc_G021_9.png" /> Volc_G-021'
            });
var format_G21_10 = new ol.format.GeoJSON();
var features_G21_10 = format_G21_10.readFeatures(json_G21_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_G21_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G21_10.addFeatures(features_G21_10);
var lyr_G21_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G21_10, 
                style: style_G21_10,
                popuplayertitle: 'G21',
                interactive: true,
                title: '<img src="styles/legend/G21_10.png" /> G21'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DEM_G21_2.setVisible(true);lyr_IPG_G21_3.setVisible(true);lyr_LAG_G21_4.setVisible(true);lyr_SNAS_G21_5.setVisible(true);lyr_CN_G21_6.setVisible(true);lyr_Hidro_G21_7.setVisible(true);lyr_Vialidad_G021_8.setVisible(true);lyr_Volc_G021_9.setVisible(true);lyr_G21_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_DEM_G21_2,lyr_IPG_G21_3,lyr_LAG_G21_4,lyr_SNAS_G21_5,lyr_CN_G21_6,lyr_Hidro_G21_7,lyr_Vialidad_G021_8,lyr_Volc_G021_9,lyr_G21_10];
lyr_IPG_G21_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'COD_GLA': 'COD_GLA', 'NOMBRE': 'NOMBRE', 'CLASIFICA': 'CLASIFICA', 'AREA_KM2': 'AREA_KM2', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'DATUM': 'DATUM', 'HUSO': 'HUSO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'FUENTE_DIG': 'FUENTE_DIG', 'FUEN_FECHA': 'FUEN_FECHA', 'INVE_FECHA': 'INVE_FECHA', 'NOM_CUEN': 'NOM_CUEN', 'COD_CUEN': 'COD_CUEN', 'COD_SCUEN': 'COD_SCUEN', 'COD_SSCUEN': 'COD_SSCUEN', 'MZON_GLAC': 'MZON_GLAC', 'CH_CASQ': 'CH_CASQ', 'CUBIERTO': 'CUBIERTO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'PERIMETRO': 'PERIMETRO', 'ORIENTA': 'ORIENTA', 'HMEDIA': 'HMEDIA', 'HMAX': 'HMAX', 'HMIN': 'HMIN', 'PENDIENTE': 'PENDIENTE', 'ESP_MED': 'ESP_MED', 'F_ESP_MED': 'F_ESP_MED', 'VOL_km3': 'VOL_km3', 'EQ_AGUAKM3': 'EQ_AGUAKM3', 'WGI_1': 'WGI_1', 'WGI_2': 'WGI_2', 'WGI_3': 'WGI_3', 'FRENTE_TER': 'FRENTE_TER', 'RESOL_IMG': 'RESOL_IMG', 'ERROR': 'ERROR', 'OBSERVACIO': 'OBSERVACIO', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', });
lyr_LAG_G21_4.set('fieldAliases', {'NUM': 'NUM', 'AREA_KM2': 'AREA_KM2', 'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'CODCPA': 'CODCPA', 'CODBNA': 'CODBNA', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'SUPCUENCA': 'SUPCUENCA', 'SUPLAGO': 'SUPLAGO', 'SUPHOYA': 'SUPHOYA', 'CLASIFICAC': 'CLASIFICAC', 'USO': 'USO', 'INFORMACIO': 'INFORMACIO', 'AREACHILE': 'AREACHILE', 'REGION_NUM': 'REGION_NUM', });
lyr_SNAS_G21_5.set('fieldAliases', {'fid': 'fid', 'SUPERFICIE': 'SUPERFICIE', 'NOMBRE_TOT': 'NOMBRE_TOT', 'ID_CATASTR': 'ID_CATASTR', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_UNI': 'NOMBRE_UNI', 'REGION': 'REGION', 'CONDICION': 'CONDICION', 'DECRETO_VI': 'DECRETO_VI', 'TIPO_DE_PR': 'TIPO_DE_PR', 'NUM_PLANO': 'NUM_PLANO', 'TERRITORIO': 'TERRITORIO', });
lyr_CN_G21_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Hidro_G21_7.set('fieldAliases', {'cod_cuen': 'cod_cuen', 'cod_subc': 'cod_subc', 'cod_ssubc': 'cod_ssubc', 'nom_cuen': 'nom_cuen', 'nom_subc': 'nom_subc', 'nom_ssubc': 'nom_ssubc', 'strahler_n': 'strahler_n', 'nombre_bcn': 'nombre_bcn', 'tipo_bcn': 'tipo_bcn', 'nombre_mop': 'nombre_mop', 'tipo_mop': 'tipo_mop', 'direccion': 'direccion', 'shape_leng': 'shape_leng', 'ident': 'ident', });
lyr_Vialidad_G021_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ROL': 'ROL', 'ROL_ID': 'ROL_ID', 'CALZADA': 'CALZADA', 'ORIENTACIO': 'ORIENTACIO', 'ROL_LABEL': 'ROL_LABEL', 'CODIGO_CAM': 'CODIGO_CAM', 'NOMBRE_CAM': 'NOMBRE_CAM', 'CLASIFICAC': 'CLASIFICAC', 'CARPETA': 'CARPETA', 'KM_I': 'KM_I', 'KM_F': 'KM_F', 'KM_TRAMO': 'KM_TRAMO', 'ENROLADO': 'ENROLADO', 'CONCESIONA': 'CONCESIONA', 'REGION': 'REGION', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Volc_G021_9.set('fieldAliases', {'Posición': 'Posición', 'Categoría': 'Categoría', 'Sistema vo': 'Sistema vo', 'Región': 'Región', 'Elevación': 'Elevación', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Total Fact': 'Total Fact', 'Total Fa_1': 'Total Fa_1', 'Total Ries': 'Total Ries', });
lyr_G21_10.set('fieldAliases', {'WGS84': 'WGS84', 'nombre': 'nombre', 'categoria': 'categoria', 'name': 'name', });
lyr_IPG_G21_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'COD_GLA': 'TextEdit', 'NOMBRE': 'TextEdit', 'CLASIFICA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'DATUM': 'TextEdit', 'HUSO': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', 'FUENTE_DIG': 'TextEdit', 'FUEN_FECHA': 'TextEdit', 'INVE_FECHA': 'TextEdit', 'NOM_CUEN': 'TextEdit', 'COD_CUEN': 'TextEdit', 'COD_SCUEN': 'TextEdit', 'COD_SSCUEN': 'TextEdit', 'MZON_GLAC': 'TextEdit', 'CH_CASQ': 'TextEdit', 'CUBIERTO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'PERIMETRO': 'TextEdit', 'ORIENTA': 'TextEdit', 'HMEDIA': 'TextEdit', 'HMAX': 'TextEdit', 'HMIN': 'TextEdit', 'PENDIENTE': 'TextEdit', 'ESP_MED': 'TextEdit', 'F_ESP_MED': 'TextEdit', 'VOL_km3': 'TextEdit', 'EQ_AGUAKM3': 'TextEdit', 'WGI_1': 'TextEdit', 'WGI_2': 'TextEdit', 'WGI_3': 'TextEdit', 'FRENTE_TER': 'TextEdit', 'RESOL_IMG': 'TextEdit', 'ERROR': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', });
lyr_LAG_G21_4.set('fieldImages', {'NUM': 'TextEdit', 'AREA_KM2': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'TIPO': 'TextEdit', 'CODCPA': 'TextEdit', 'CODBNA': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'SUPCUENCA': 'TextEdit', 'SUPLAGO': 'TextEdit', 'SUPHOYA': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'USO': 'TextEdit', 'INFORMACIO': 'TextEdit', 'AREACHILE': 'TextEdit', 'REGION_NUM': 'TextEdit', });
lyr_SNAS_G21_5.set('fieldImages', {'fid': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'NOMBRE_TOT': 'TextEdit', 'ID_CATASTR': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_UNI': 'TextEdit', 'REGION': 'TextEdit', 'CONDICION': 'TextEdit', 'DECRETO_VI': 'TextEdit', 'TIPO_DE_PR': 'TextEdit', 'NUM_PLANO': 'TextEdit', 'TERRITORIO': 'TextEdit', });
lyr_CN_G21_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Hidro_G21_7.set('fieldImages', {'cod_cuen': 'TextEdit', 'cod_subc': 'TextEdit', 'cod_ssubc': 'TextEdit', 'nom_cuen': 'TextEdit', 'nom_subc': 'TextEdit', 'nom_ssubc': 'TextEdit', 'strahler_n': 'TextEdit', 'nombre_bcn': 'TextEdit', 'tipo_bcn': 'TextEdit', 'nombre_mop': 'TextEdit', 'tipo_mop': 'TextEdit', 'direccion': 'TextEdit', 'shape_leng': 'TextEdit', 'ident': 'TextEdit', });
lyr_Vialidad_G021_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'ROL': 'TextEdit', 'ROL_ID': 'TextEdit', 'CALZADA': 'TextEdit', 'ORIENTACIO': 'TextEdit', 'ROL_LABEL': 'TextEdit', 'CODIGO_CAM': 'TextEdit', 'NOMBRE_CAM': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'CARPETA': 'TextEdit', 'KM_I': 'TextEdit', 'KM_F': 'TextEdit', 'KM_TRAMO': 'TextEdit', 'ENROLADO': 'TextEdit', 'CONCESIONA': 'TextEdit', 'REGION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Volc_G021_9.set('fieldImages', {'Posición': 'TextEdit', 'Categoría': 'TextEdit', 'Sistema vo': 'TextEdit', 'Región': 'TextEdit', 'Elevación': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Total Fact': 'TextEdit', 'Total Fa_1': 'TextEdit', 'Total Ries': 'TextEdit', });
lyr_G21_10.set('fieldImages', {'WGS84': 'TextEdit', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'name': 'TextEdit', });
lyr_IPG_G21_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'COD_GLA': 'hidden field', 'NOMBRE': 'inline label - always visible', 'CLASIFICA': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'REGION': 'hidden field', 'PROVINCIA': 'hidden field', 'COMUNA': 'hidden field', 'DATUM': 'hidden field', 'HUSO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', 'FUENTE_DIG': 'hidden field', 'FUEN_FECHA': 'hidden field', 'INVE_FECHA': 'hidden field', 'NOM_CUEN': 'hidden field', 'COD_CUEN': 'hidden field', 'COD_SCUEN': 'hidden field', 'COD_SSCUEN': 'hidden field', 'MZON_GLAC': 'hidden field', 'CH_CASQ': 'hidden field', 'CUBIERTO': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'PERIMETRO': 'hidden field', 'ORIENTA': 'hidden field', 'HMEDIA': 'hidden field', 'HMAX': 'hidden field', 'HMIN': 'hidden field', 'PENDIENTE': 'hidden field', 'ESP_MED': 'hidden field', 'F_ESP_MED': 'hidden field', 'VOL_km3': 'hidden field', 'EQ_AGUAKM3': 'hidden field', 'WGI_1': 'hidden field', 'WGI_2': 'hidden field', 'WGI_3': 'hidden field', 'FRENTE_TER': 'hidden field', 'RESOL_IMG': 'hidden field', 'ERROR': 'hidden field', 'OBSERVACIO': 'hidden field', 'CUT_REG': 'hidden field', 'CUT_PROV': 'hidden field', 'CUT_COM': 'hidden field', });
lyr_LAG_G21_4.set('fieldLabels', {'NUM': 'hidden field', 'AREA_KM2': 'hidden field', 'NOMBRE': 'inline label - always visible', 'CODIGO': 'hidden field', 'TIPO': 'hidden field', 'CODCPA': 'hidden field', 'CODBNA': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'hidden field', 'COMUNA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'SUPCUENCA': 'hidden field', 'SUPLAGO': 'hidden field', 'SUPHOYA': 'hidden field', 'CLASIFICAC': 'hidden field', 'USO': 'hidden field', 'INFORMACIO': 'hidden field', 'AREACHILE': 'hidden field', 'REGION_NUM': 'hidden field', });
lyr_SNAS_G21_5.set('fieldLabels', {'fid': 'hidden field', 'SUPERFICIE': 'hidden field', 'NOMBRE_TOT': 'inline label - always visible', 'ID_CATASTR': 'hidden field', 'CATEGORIA': 'hidden field', 'NOMBRE_UNI': 'hidden field', 'REGION': 'hidden field', 'CONDICION': 'hidden field', 'DECRETO_VI': 'hidden field', 'TIPO_DE_PR': 'hidden field', 'NUM_PLANO': 'hidden field', 'TERRITORIO': 'hidden field', });
lyr_CN_G21_6.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Hidro_G21_7.set('fieldLabels', {'cod_cuen': 'hidden field', 'cod_subc': 'hidden field', 'cod_ssubc': 'hidden field', 'nom_cuen': 'hidden field', 'nom_subc': 'hidden field', 'nom_ssubc': 'hidden field', 'strahler_n': 'hidden field', 'nombre_bcn': 'hidden field', 'tipo_bcn': 'hidden field', 'nombre_mop': 'inline label - always visible', 'tipo_mop': 'hidden field', 'direccion': 'hidden field', 'shape_leng': 'hidden field', 'ident': 'hidden field', });
lyr_Vialidad_G021_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'ROL': 'hidden field', 'ROL_ID': 'hidden field', 'CALZADA': 'hidden field', 'ORIENTACIO': 'hidden field', 'ROL_LABEL': 'inline label - always visible', 'CODIGO_CAM': 'hidden field', 'NOMBRE_CAM': 'hidden field', 'CLASIFICAC': 'hidden field', 'CARPETA': 'inline label - always visible', 'KM_I': 'hidden field', 'KM_F': 'hidden field', 'KM_TRAMO': 'hidden field', 'ENROLADO': 'hidden field', 'CONCESIONA': 'hidden field', 'REGION': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_Volc_G021_9.set('fieldLabels', {'Posición': 'inline label - always visible', 'Categoría': 'hidden field', 'Sistema vo': 'inline label - always visible', 'Región': 'hidden field', 'Elevación': 'inline label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Total Fact': 'hidden field', 'Total Fa_1': 'hidden field', 'Total Ries': 'hidden field', });
lyr_G21_10.set('fieldLabels', {'WGS84': 'hidden field', 'nombre': 'hidden field', 'categoria': 'hidden field', 'name': 'hidden field', });
lyr_G21_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});