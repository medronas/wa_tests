<script>
WA.room.onEnterZone('rooftop1', () => {
    WA.room.hideLayer(layerName : roof);
})

WA.room.onLeaveZone('rooftop1', () => {
    WA.room.showLayer(layerName : roof);
})
</script>