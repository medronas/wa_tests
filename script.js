WA.room.onLeaveZone('trigger', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
	WA.room.showLayer('overlay'); 
});

WA.room.onEnterZone('trigger', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot');
	
	WA.room.setProperty('trigger', 'Opacity', '0,5');
})
