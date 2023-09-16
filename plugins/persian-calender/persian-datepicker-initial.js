// Time Picker
$('.onlytime-picker').persianDatepicker({
    // onlyTimePicker: true
    observer: true,
    format: 'HH:mm',
    altField: '.observer-example-alt',
    onlyTimePicker: true,
    autoClose: true,
    viewMode: "day",
    initialValue: true,
    timePicker: {
        enabled: true,
        step: '1',
        hour: {
            enabled: true,
            step: null
        },
        minute: {
            enabled: true,
            step: null
        },
        second: {
            enabled: false,
            step: null
        }
    }
});
// Date Picker
$('.date-picker').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    autoClose: true,
    initialValue: true,
    position: 'auto'
});
