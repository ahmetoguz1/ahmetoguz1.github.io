// you can change theme of photo gallery
var colorMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light';        
    if ( localStorage && "colorMode" in localStorage ) {
        colorMode = localStorage.getItem("colorMode");
    }        
    if ( colorMode == 'dark' ) {
        jQuery('html').addClass('dark');
    }