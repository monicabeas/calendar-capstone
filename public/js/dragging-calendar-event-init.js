var Script = function () {

    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },
        select: function(start, end, jsEvent, view) {
           var title = prompt("Enter a title for this event", "New event");

           var event = {
                title: title.trim() != "" ? title : "New event",
                start: start,
                end: end, 
                };

            console.log(event);

            $.post('http://localhost:3000/api/v1/events.json', event, function(result){

            }, 'json');

            var calendar = $('#calendar');
            calendar.fullCalendar('renderEvent', {title: title, start: start, end: end, allDay: false}, true);
            },
        eventClick: function(calEvent, jsEvent, view) {

            var NewTitle = prompt("Enter a new title for this event", event.title);
        
        

        },
        events: {
            url: 'http://localhost:3000/api/v1/events.json',
            type: 'GET',
            color: 'yellow',   // a non-ajax option
            textColor: 'black' // a non-ajax option
        }
        // events: [
        //     {
        //         title: 'All Day Event',
        //         start: new Date(y, m, 1)
        //     },
        //     {
        //         title: 'Long Event',
        //         start: new Date(y, m, d-5),
        //         end: new Date(y, m, d-2)
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: new Date(y, m, d-3, 16, 0),
        //         allDay: false
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: new Date(y, m, d+4, 16, 0),
        //         allDay: false
        //     },
        //     {
        //         title: 'Meeting',
        //         start: new Date(y, m, d, 10, 30),
        //         allDay: false
        //     },
        //     {
        //         title: 'Lunch',
        //         start: new Date(y, m, d, 12, 0),
        //         end: new Date(y, m, d, 14, 0),
        //         allDay: false
        //     },
        //     {
        //         title: 'Birthday Party',
        //         start: new Date(y, m, d+1, 19, 0),
        //         end: new Date(y, m, d+1, 22, 30),
        //         allDay: false
        //     },
        //     {
        //         title: 'Click for Google',
        //         start: new Date(y, m, 28),
        //         end: new Date(y, m, 29),
        //         url: 'http://google.com/'
        //     }
        // ]
    });


}();