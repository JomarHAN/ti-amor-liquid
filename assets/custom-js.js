class GlobalInit {
    constructor() {
        this.init();
    }

    init() {
        const atlanta = { abrev: 'ATL', id: '103691714881' };
        const chattanooga = { abrev: 'CHT', id: '103691682113' };
        const greenville = { abrev: 'GRV', id: '103691780417' };
        const jonesborough = { abrev: 'JBR', id: '74315399489' };
        const tallahassee = { abrev: 'TLH', id: '103691813185' };
        let selectedLocation = atlanta

        localStorage.setItem('current_location_id', selectedLocation.id);
        localStorage.setItem('current_location_abrev', selectedLocation.abrev);
    }
}

window.onload = () => {
    new GlobalInit();
}