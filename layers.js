ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SuburbBoundary_1 = new ol.format.GeoJSON();
var features_SuburbBoundary_1 = format_SuburbBoundary_1.readFeatures(json_SuburbBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuburbBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuburbBoundary_1.addFeatures(features_SuburbBoundary_1);
var lyr_SuburbBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuburbBoundary_1, 
                style: style_SuburbBoundary_1,
                popuplayertitle: 'Suburb Boundary ',
                interactive: true,
                title: '<img src="styles/legend/SuburbBoundary_1.png" /> Suburb Boundary '
            });
var format_Dams_2 = new ol.format.GeoJSON();
var features_Dams_2 = format_Dams_2.readFeatures(json_Dams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dams_2.addFeatures(features_Dams_2);
var lyr_Dams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dams_2, 
                style: style_Dams_2,
                popuplayertitle: 'Dams ',
                interactive: true,
                title: '<img src="styles/legend/Dams_2.png" /> Dams '
            });
var format_TreatmentCentres_3 = new ol.format.GeoJSON();
var features_TreatmentCentres_3 = format_TreatmentCentres_3.readFeatures(json_TreatmentCentres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatmentCentres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatmentCentres_3.addFeatures(features_TreatmentCentres_3);
var lyr_TreatmentCentres_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreatmentCentres_3, 
                style: style_TreatmentCentres_3,
                popuplayertitle: 'Treatment Centres ',
                interactive: true,
                title: '<img src="styles/legend/TreatmentCentres_3.png" /> Treatment Centres '
            });
var format_WaterQualityperSamplingStation_4 = new ol.format.GeoJSON();
var features_WaterQualityperSamplingStation_4 = format_WaterQualityperSamplingStation_4.readFeatures(json_WaterQualityperSamplingStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityperSamplingStation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityperSamplingStation_4.addFeatures(features_WaterQualityperSamplingStation_4);
var lyr_WaterQualityperSamplingStation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterQualityperSamplingStation_4, 
                style: style_WaterQualityperSamplingStation_4,
                popuplayertitle: 'Water Quality per Sampling Station ',
                interactive: true,
    title: 'Water Quality per Sampling Station <br />\
    <img src="styles/legend/WaterQualityperSamplingStation_4_0.png" /> High<br />\
    <img src="styles/legend/WaterQualityperSamplingStation_4_1.png" /> Low<br />\
    <img src="styles/legend/WaterQualityperSamplingStation_4_2.png" /> Medium<br />' });
var format_InformalSettlements_5 = new ol.format.GeoJSON();
var features_InformalSettlements_5 = format_InformalSettlements_5.readFeatures(json_InformalSettlements_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InformalSettlements_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InformalSettlements_5.addFeatures(features_InformalSettlements_5);
var lyr_InformalSettlements_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InformalSettlements_5, 
                style: style_InformalSettlements_5,
                popuplayertitle: 'Informal Settlements ',
                interactive: true,
                title: '<img src="styles/legend/InformalSettlements_5.png" /> Informal Settlements '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SuburbBoundary_1.setVisible(true);lyr_Dams_2.setVisible(true);lyr_TreatmentCentres_3.setVisible(true);lyr_WaterQualityperSamplingStation_4.setVisible(true);lyr_InformalSettlements_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SuburbBoundary_1,lyr_Dams_2,lyr_TreatmentCentres_3,lyr_WaterQualityperSamplingStation_4,lyr_InformalSettlements_5];
lyr_SuburbBoundary_1.set('fieldAliases', {'Suburb Name': 'Suburb Name', '2018 Consumption (kl/month)': '2018 Consumption (kl/month)', 'Flushable Toilets Connected to Sewage (%)': 'Flushable Toilets Connected to Sewage (%)', 'Consumer Type': 'Consumer Type', 'Average Monthly Water Bill': 'Average Monthly Water Bill', });
lyr_Dams_2.set('fieldAliases', {'Name ': 'Name ', 'Location': 'Location', 'River ': 'River ', 'Water Source ': 'Water Source ', 'Capacity ': 'Capacity ', });
lyr_TreatmentCentres_3.set('fieldAliases', {'Suburb ': 'Suburb ', 'Country ': 'Country ', 'Treated Water ': 'Treated Water ', });
lyr_WaterQualityperSamplingStation_4.set('fieldAliases', {'Type of Sample ': 'Type of Sample ', 'Water Source ': 'Water Source ', 'Name of Water Source ': 'Name of Water Source ', 'Frequency of Monitoring ': 'Frequency of Monitoring ', 'Name of Sampling Station ': 'Name of Sampling Station ', 'Parameters ': 'Parameters ', 'Concentration of Parameter (/kl) ': 'Concentration of Parameter (/kl) ', 'Water Quality': 'Water Quality', });
lyr_InformalSettlements_5.set('fieldAliases', {'Region': 'Region', 'Suburb': 'Suburb', });
lyr_SuburbBoundary_1.set('fieldImages', {'Suburb Name': 'TextEdit', '2018 Consumption (kl/month)': 'TextEdit', 'Flushable Toilets Connected to Sewage (%)': 'TextEdit', 'Consumer Type': 'TextEdit', 'Average Monthly Water Bill': 'TextEdit', });
lyr_Dams_2.set('fieldImages', {'Name ': 'TextEdit', 'Location': 'TextEdit', 'River ': 'TextEdit', 'Water Source ': 'TextEdit', 'Capacity ': 'Range', });
lyr_TreatmentCentres_3.set('fieldImages', {'Suburb ': '', 'Country ': 'TextEdit', 'Treated Water ': 'TextEdit', });
lyr_WaterQualityperSamplingStation_4.set('fieldImages', {'Type of Sample ': 'TextEdit', 'Water Source ': 'TextEdit', 'Name of Water Source ': 'TextEdit', 'Frequency of Monitoring ': 'TextEdit', 'Name of Sampling Station ': 'TextEdit', 'Parameters ': 'TextEdit', 'Concentration of Parameter (/kl) ': 'TextEdit', 'Water Quality': 'TextEdit', });
lyr_InformalSettlements_5.set('fieldImages', {'Region': 'TextEdit', 'Suburb': 'TextEdit', });
lyr_SuburbBoundary_1.set('fieldLabels', {'Suburb Name': 'inline label - always visible', '2018 Consumption (kl/month)': 'inline label - always visible', 'Flushable Toilets Connected to Sewage (%)': 'inline label - always visible', 'Consumer Type': 'inline label - always visible', 'Average Monthly Water Bill': 'inline label - always visible', });
lyr_Dams_2.set('fieldLabels', {'Name ': 'inline label - always visible', 'Location': 'no label', 'River ': 'no label', 'Water Source ': 'no label', 'Capacity ': 'inline label - always visible', });
lyr_TreatmentCentres_3.set('fieldLabels', {'Suburb ': 'no label', 'Country ': 'inline label - always visible', 'Treated Water ': 'inline label - always visible', });
lyr_WaterQualityperSamplingStation_4.set('fieldLabels', {'Type of Sample ': 'inline label - always visible', 'Water Source ': 'inline label - always visible', 'Name of Water Source ': 'inline label - always visible', 'Frequency of Monitoring ': 'inline label - always visible', 'Name of Sampling Station ': 'inline label - always visible', 'Parameters ': 'inline label - always visible', 'Concentration of Parameter (/kl) ': 'inline label - always visible', 'Water Quality': 'inline label - always visible', });
lyr_InformalSettlements_5.set('fieldLabels', {'Region': 'inline label - always visible', 'Suburb': 'inline label - always visible', });
lyr_InformalSettlements_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});