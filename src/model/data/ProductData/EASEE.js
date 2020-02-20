const surface =  `
        Material,
        EASEE_1.4cm (150mm 0.6), 	    ! Name
        Rough,           			    ! Roughness (*)
        0.14,            			    ! Thickness {m}
        0.2,           			        ! Conductivity {W/m-K}
        40,              			    ! Density {kg/m3}
        1000,            			    ! Specific Heat {J/kg-K}
        0.9,             			    ! Thermal Absorptance (*)
        0.6,             			    ! Solar Absorptance
        0.6;             			    ! Visible Absorptance (*)`

const wallConstruction = `
        Construction,
        C109_ciana_podstawowa_Ribbed,   ! Name
        M03_EASEE_1.4cm (150mm 0.6),    ! Outside Layer
        M13_Reference (320mm 0.6);
`        
export default Easee  