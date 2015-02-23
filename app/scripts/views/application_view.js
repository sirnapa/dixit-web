Ember.View.reopen({
    didInsertElement : function(){
        this._super();

        $('#primera-carga').remove();
        $('.off-canvas-wrap.move-left').removeClass('move-left');
        $(window).scrollTop(0);

        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },
    afterRenderEvent : function(){
        Ember.$(document).foundation();
    },
    willDestroyElement: function(){
    	$('.fullpage-wrapper').each(function(_,fp){
        	$(fp).fullpage.destroy();
        });

        $('#menu-principal').removeClass('hide');
    }
});