function setupReceiver( name, freeSlots, reason ) {
    return {
        // name: name
        name,
        freeSlots,
        reason,
        pendingMeetings: [],
        acceptedMeetings: [],
        rejectedMeetings: [],
        canceledMeetings: [],
        feedback: '',
        requestMeeting( meeting ) {
            if( this.freeSlots.includes( meeting.slot ) ) {
                this.pendingMeetings.push( meeting );

                this.feedback = `${meeting.name}, You meeting request has been captured. ${this.name} may accept or reject it.`;

                return this.feedback;
            }
        },
        acceptMeeting( id ) {
            console.log( this.pendingMeetings );

            for( let i = 0; i < this.pendingMeetings.length; i++ ) {
                if( this.pendingMeetings[i].id === id ) {
                    // remove the accepted meeting from pending list
                    const removedItems = this.pendingMeetings.splice( i, 1 );
                    
                    // add to accepted meetings list
                    let selectedMeeting = removedItems[0];
                    this.acceptedMeetings.push( selectedMeeting );
                    
                    // remove from free slots the accepted meetings' slot
                    const noMoreFreeSlot = this.freeSlots.indexOf( selectedMeeting.slot );
                    this.freeSlots.splice( noMoreFreeSlot, 1 );

                    this.feedback = `${this.name}, The meeting from ${selectedMeeting.name} has been scheduled.`
                    break;
                }
            }
        },
        rejectMeeting( id ) {

        },
        cancelMeeting( id ) {
            
        }
    };
};

const kohliCalendar = setupReceiver( 'Virat Kohli', [ 2, 5, 7, 9, 10 ], 'selfie' );

kohliCalendar.requestMeeting({
    id: 1,
    name: 'Prashanth',
    reason: 'selfie',
    slot: 7
});

console.log( kohliCalendar.feedback );

kohliCalendar.requestMeeting({
    id: 2,
    name: 'Sushanth',
    reason: 'selfie',
    slot: 7
});

console.log( kohliCalendar.feedback );

kohliCalendar.acceptMeeting( 2 );
console.log( kohliCalendar.feedback );

console.log( kohliCalendar );
