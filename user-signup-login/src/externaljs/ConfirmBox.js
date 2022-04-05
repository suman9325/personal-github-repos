export default function ConfirmBox(msg) {
    // return window.swal({
    //     title: 'Are you sure?',
    //     text: msg,
    //     icon: 'warning',
    //     // showCancelButton: true,
    //     buttons: ['Cancel', 'Yes'],
    //     // confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     // confirmButtonText: 'Yes'
    // })

    return window.swal({
        title: "Are you sure?",
        text: msg,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(res => res)
}