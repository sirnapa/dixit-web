Dixitweb.GhostFormatoView = Ember.View.extend({
    didInsertElement : function(){
        this._super();
        $('#sistema-operativo').change(function(){
        	if($(this).val()=='OS X'){
        		$('.windows-linux').hide();
        		$('.osx').show();
        	}else{
        		$('.osx').hide();
        		$('.windows-linux').show();
        	}
        });
    }
});