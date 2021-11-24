WA.room.onLeaveZone('trigger', () => {
    
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
    
		WA.room.hideLayer('roof');
});

WA.room.onLeaveZone('trigger2', () => {
    
	WA.room.showLayer('roof2'); 
});

WA.room.onEnterZone('trigger2', () => {
    
		WA.room.hideLayer('roof2');
})
