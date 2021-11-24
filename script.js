WA.room.onLeaveZone('trigger', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot'),
		WA.room.hideLayer('roof');
});

WA.room.onLeaveZone('trigger2', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof2'); 
});

WA.room.onEnterZone('trigger2', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot'),
		WA.room.hideLayer('roof2');
})