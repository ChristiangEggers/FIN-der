
// nehme URLS
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var spaeter = getUrlParameter('spaeter');




$(document).ready(function () {
	var table = $('#datatable').DataTable({
			language: {
									url: 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/de-DE.json'
								},
			ajax: {
                       url: 'https://opensheet.elk.sh/1OWLHbaylVdtpe69iHDSubjp4hhBv78WzCt10wzd9psw/1',
                       dataSrc: '',
				  },
      dom: 'PQlfrtip',
      columns: [
                  {
                  data: "",
                  defaultContent: "",
                searchable: false,
                orderable: false,
                className: '',
            },
{ data: 'Zeitstempel', searchable: false},
{ data: 'TTF Username',          className: ''},
{ data: 'Bestelldatum' },
{ data: 'Bestellnummer' },
{ data: 'Bestellung geschoben?' },
{ data: 'Außenfarbe (Lack)' },
{ data: 'Innenraum' },
{ data: 'Model' },
{ data: 'Variante' },
{ data: 'Felgen' },
{ data: 'Autopilot' },
{ data: 'Anhängerkupplung' },
{ data: 'Winterreifen' },
{ data: 'Lieferstatus' },
{ data: 'Liefermonat' },
{ data: 'Lieferzeitraum START' },
{ data: 'Lieferzeitraum ENDE' },
{ data: 'Auslieferungsland' },
{ data: 'ALZ - Deutschland' },
{ data: 'ALZ - Österreich' },
{ data: 'ALZ - Schweiz' },
{ data: 'ALZ - Sonstiges' },
{ data: 'VIN-Zuteilung' },
{ data: 'VIN' },
{ data: 'Herstellungsdatum' },
{ data: 'Übergabedatum (geplant)' },
{ data: 'Übergabedatum (tatsächlich)' },
{ data: 'Zulassung' },
{ data: 'BAFA Antrag' },
{ data: 'BAFA Bewilligung' },
{ data: 'BAFA Auszahlung' },
{ data: 'Kommentare / Zusatzinformationen' },
      ],
   "processing": true,
    responsive: {
        details: {
										target: 'tr'
                }
    },
    
   "searching": true,
   "scrollY": 600,
   "paging":   false,
   "ordering": false,
   "order": [[3, 'desc']],
   
   "info":     true,
    				"searchPanes": {
						controls: false,
						columns: [19,8,9,6,7,10],
                              panes: [
                {
                    header: 'VIN-Vergabe',
                    options: [
                        {
                            label: 'Hat bisher keine VIN-Zuteilung bzw. Abschlussrechnung',
                            value: function(rowData, rowIdx) {
                                return rowData['VIN-Zuteilung'] === '' || rowData['VIN'] === '';
                            }
                        },
                        {
                            label: 'Hat eine VIN-Zuteilung bzw. Abschlussrechnung',
                            value: function(rowData, rowIdx) {
                                return rowData['VIN-Zuteilung'] !== '' || rowData['VIN'] !== '';
                            }
                        }
                        
                    ],

                }
            ],
						cascadePanes: false,
            dtOpts: {
                select: { style: 'multi' }
                }
				},
      //dom: 'PQlfrtip',
			stateSave: false,
	columnDefs: [
					{ "defaultContent": "", "targets": "_all" },
                  //  { "visible": false, "targets": [] },
            
{ responsivePriority: 1, targets: [0,2,3,4,6,7,10,16,17,19] },
{ responsivePriority: 10001, targets: [1, 5, 8, 9, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32] },
                  
					//{ "visible": false, "targets": [3,4,10,11,12,13,14,17,19,20,21,24,25,26,27,28,29,30,31] },

/*
					{ searchPanes: { show: true }, targets: [22] },
					{ searchPanes: { show: false }, targets: [0,3,4,10,11,12,13,14,17,19,20,23,24,25,26,27,28,29,30,31] }
*/

          ]
                  

});
// end loadready

    table.on('order.dt search.dt', function () {
        let i = 1;
 
        table.cells(null, 0, { search: 'applied', order: 'applied' }).every(function (cell) {
            this.data(i++);
        });
    }).draw();

    

});

