export function DataTableBasic(callback) {
    /* ------------------------------------------------------------------------------
*
*  # Basic datatables
*
*  Specific JS code additions for datatable_basic.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

window.$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    window.$.extend( window.$.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{ 
            orderable: false,
            width: '100px',
            targets: [ 0 ]
        }],
        dom: '<"datatable-header"flBr><"datatable-scroll table-responsive"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        drawCallback: function () {
            window.$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function() {
            window.$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        },
    });


    // Basic datatable
    window.$('.datatable-basic').DataTable({
        "initComplete": function(settings, json) {
            if(callback !== undefined) {
                callback();
            }
        },
        buttons: [
            {
                extend: 'excel',
                text: '<i class="icon-share2"></i> Export Users',
                className: 'btn btn-primary hide',
                exportOptions: {
                   columns: 'th:not(:last-child)'
                }
             }
        ]
      });


    // Alternative pagination
    window.$('.datatable-pagination').DataTable({
        pagingType: "simple",
        language: {
            paginate: {'next': 'Next &rarr;', 'previous': '&larr; Prev'}
        }
    });


    // Datatable with saving state
    window.$('.datatable-save-state').DataTable({
        stateSave: true
    });


    // Scrollable datatable
    window.$('.datatable-scroll-y').DataTable({
        autoWidth: true,
        scrollY: 300
    });



    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    window.$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


    // Enable Select2 select for the length option
    window.$('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });
    
});

}