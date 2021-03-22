console.log('file 2');






/*добавить поддержку пассивным слушателям*/

jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ){
            this.addEventListener("touchstart", handle, { passive: true });
        }
    };