WA.room.onLeaveZone('trigger', () => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot'),
	WA.room.showLayer('roof'); 
});

WA.room.onEnterZone('trigger', () => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot'),
		WA.room.hideLayer('roof');
})