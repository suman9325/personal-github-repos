export function DatatablesExtensionSelect() {
    /* ------------------------------------------------------------------------------
     *
     *  # Select extension for Datatables
     *
     *  Specific JS code additions for datatable_extension_select.html page
     *
     *  Version: 1.0
     *  Latest update: Nov 9, 2015
     *
     * ---------------------------------------------------------------------------- */

    window.$(function () {


        // Table setup
        // ------------------------------

        // Setting datatable defaults
        window.$.extend(window.$.fn.dataTable.defaults, {
            autoWidth: false,
            columnDefs: [{
                orderable: false,
                width: '100px',
                targets: [5]
            }],
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
            },
            drawCallback: function () {
                window.$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
            },
            preDrawCallback: function () {
                window.$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
            }
        });


        // Basic initialization
        window.$('.datatable-select-basic').DataTable({
            select: true
        });


        // Single item selection
        window.$('.datatable-select-single').DataTable({
            select: {
                style: 'single'
            }
        });


        // Multiple items selection
        window.$('.datatable-select-multiple').DataTable({
            select: {
                style: 'multi'
            }
        });


        // Checkbox selection
        window.$('.datatable-select-checkbox').DataTable({
            columnDefs: [
                {
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                },
                {
                    orderable: false,
                    width: '100px',
                    targets: 6
                }
            ],
            select: {
                style: 'os',
                selector: 'td:first-child'
            },
            order: [[1, 'asc']]
        });


        // Buttons
        window.$('.datatable-select-buttons').DataTable({
            dom: '<"dt-buttons-full"B><"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            buttons: [
                { extend: 'selected', className: 'btn btn-default' },
                { extend: 'selectedSingle', className: 'btn btn-default' },
                { extend: 'selectAll', className: 'btn bg-blue' },
                { extend: 'selectNone', className: 'btn bg-blue' },
                { extend: 'selectRows', className: 'btn bg-teal-400' },
                { extend: 'selectColumns', className: 'btn bg-teal-400' },
                { extend: 'selectCells', className: 'btn bg-teal-400' }
            ],
            select: true
        });


        // Checkbox + Buttons
        var example = window.$('.datatable-select-checkbox-buttons').DataTable({
            dom: '<"datatable-header"fBl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            buttons: [
                {
                    text: window.$('.datatable-select-checkbox-buttons').attr('data-button-title'),
                    className: 'btn bg-blue btn-delete hide',
                    id: 'deleteButton',
                    action: function (e, dt, node, config) {
                        // 
                    }
                }
            ],
            columnDefs: [
                {
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                }
            ],
            select: {
                style: 'os',
                selector: 'td:first-child'
            },
            order: [[1, 'asc']]
        });

        example.on('select', function (e, dt, type, indexes) {
            var count = example.rows({ selected: true }).count();
            var btnTitle = window.$('.datatable-select-checkbox-buttons').attr('data-button-title');
            var selectedRows = example.rows({ selected: true }).ids(true);
            console.log(selectedRows);
            
            if (type === 'row') {
                if (count > 0) {
                    window.$('.btn-delete').removeClass('hide').find('span').text('' + btnTitle + ' (' + count + ' ' + ((count > 1) ? 'rows' : 'row') + ' selected)');
                } else {
                    window.$('.btn-delete').addClass('hide');
                }
            }
        });

        example.on('deselect', function (e, dt, type, indexes) {
            var count = example.rows({ selected: true }).count();
            var btnTitle = window.$('.datatable-select-checkbox-buttons').attr('data-button-title');
            var selectedRows = example.rows({ selected: true }).ids(true);
            console.log(selectedRows);

            if (type === 'row') {
                if (count > 0) {
                    var data = example.rows(indexes).data().pluck('id');
                    window.$('.btn-delete').removeClass('hide').find('span').text('' + btnTitle + ' (' + count + ' ' + ((count > 1) ? 'rows' : 'row') + ' selected)');
                } else {
                    window.$('.btn-delete').addClass('hide');
                }
            }
        });

        example.on("click", "th.select-checkbox", function () {
            if (window.$("th.select-checkbox").hasClass("selected")) {
                example.rows().deselect();
                window.$("th.select-checkbox").removeClass("selected");
            } else {
                example.rows({ search: 'applied' }).select();
                window.$("th.select-checkbox").addClass("selected");
            }
        }).on("select deselect", function () {
            ("Some selection or deselection going on")
            if (example.rows({
                selected: true
            }).count() !== example.rows().count()) {
                window.$("th.select-checkbox").removeClass("selected");
            } else {
                window.$("th.select-checkbox").addClass("selected");
            }
        });


        // External table additions
        // ------------------------------

        // Add placeholder to the datatable filter option
        window.$('.dataTables_filter input[type=search]').attr('placeholder', 'Type to filter...');


        // Enable Select2 select for the length option
        window.$('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            width: 'auto'
        });

    });

}