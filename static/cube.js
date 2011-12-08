(function($) {
    
    
    $.fn.cube = function() {
	    
        return this.each(function() {
            
            var $container = $("<div/>").addClass('cube-container');
            var $cube = $("<div/>").addClass('cube').appendTo($container);
            
            $("<div />").addClass('side').addClass('left').appendTo($cube);
            $("<div />").addClass('side').addClass('back').appendTo($cube);
            $("<div />").addClass('side').addClass('bottom').appendTo($cube);
            $("<div />").addClass('side').addClass('right').appendTo($cube).append($("<div/>"));
            $("<div />").addClass('side').addClass('front').appendTo($cube).append($("<div/>"));
            
            var $top = $("<div />").addClass('side').addClass('top').appendTo($cube);
            
            $(this).append($container);
            
        });

    }
    
    $(function() {
        
        var threed = false;    
        
        // Check for 3d support...
        try {
            if (window.navigator.userAgent.indexOf('Chrome') == -1) {
                // Don't count Chrome as having 3d support, for now... 
                
                var $test = $("<div/>").addClass('three-d').appendTo($(document.body));
                threed = ($test.css('display').toLowerCase()=='none');
            }
        }
        catch (e) {}

        if (!threed) {
            $('#content').css({opacity:1});
            return;
        }
        
        
        $('#content').cube();
        $(document.documentElement).addClass('reset').addClass('animations-disabled');
        
        
        var __docClass = null;
        var __page = null;
        
        var __sides = {
            'blog':'bottom',
            'twitter':'left',
            'about':'back'
        };
        
        var __links = {
            'blog':'/archive.html',
            'twitter':'/twitter/index.php',
            'about':'/about.html'
        };
        
        var __get = function(page) {

            if (!__sides[page]) return;
            
            var didload = function($page) {
                $('.cube .side.'+__sides[page]).append($page);
            }
            
            var $p = $('.content.'+page);
            if ($p.length > 0) {
                didload($p)
            }
            else {
                $.get(__links[page], function(html) {
                    $p = $(html);
                    didload($p);
                });
            }
        }
        
        var __load = function(page,shift) {
            
            __page = page;
            
            var $a = $('#navigation li.'+page+' a');
            var $doc = $(document.documentElement);
            
            $('#page-body').attr('class',(shift?'shift':''));
            
            var bounce = true;
            if ($doc.hasClass('reset') || 'left/back/bottom'.indexOf($a.attr('class'))==-1) {
                bounce = false;
            }
            
            $doc.removeClass('left').removeClass('back').removeClass('bottom').removeClass('reset');
                    
            __docClass = $a.attr('class');
            setTimeout(function() {
                $doc.addClass(__docClass);
            },(bounce?(shift?1200:400):0));
            
            
            $(document.body).attr("class",$a.parent().attr('class'));
            
            __get(page);
            
        }
        
        
        $('#navigation ul li a').click(function(e) {
            
            
            
            var $a = $(this);           
            var $doc = $(document.documentElement);


            if ($doc.hasClass($a.attr('class'))) {
                $doc.addClass('bounce');
                setTimeout(function() {
                    $doc.removeClass('bounce');
                },300)
                return false;
            }

            __load($a.parent().attr('class'),e.shiftKey);
            
            return false;
        });
        
        $(document.body).removeClass('fallback');
        __load($(document.body).attr('class'));

        $('canvas').animate({opacity:1});
        $('#content').animate({opacity:1});
                
        setTimeout(function() {
            $(document.documentElement).removeClass('animations-disabled');
        },10);
        
        
    });
    
    
})(jQuery);