const surface =  `
        Material,
        Fermacell_1.5cm (150mm 0.6), 	! Name
        Rough,           			    ! Roughness (*)
        0.15,            			    ! Thickness {m}
        0.035,           			    ! Conductivity {W/m-K}
        40,              			    ! Density {kg/m3}
        1000,            			    ! Specific Heat {J/kg-K}
        0.9,             			    ! Thermal Absorptance (*)
        0.6,             			    ! Solar Absorptance
        0.6;             			    ! Visible Absorptance (*)`

const wallConstruction = `
        Construction,
        C109_ciana_podstawowa_Ribbed,   ! Name
        M03_Farmacell_15cm (150mm 0.6), ! Outside Layer
        M13_Reference (320mm 0.6);
`        
export default Fermacell  