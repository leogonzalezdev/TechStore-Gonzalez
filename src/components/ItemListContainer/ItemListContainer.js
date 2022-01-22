import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
  return(
    <h1 className='welcome-text'> {greeting}
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAitJREFUSEuNluFVHDEMhD91QAckFQAdHBUEKuCoIOkA0kFSAUcFkApyHXBUkEsHdKA8eeW1rPXmHb+M15I1mtH4BPsTQAVB0bLhW2nln+aPJWzebIu4b+scNwjpbuzPr90SCh0mFNgofAVuHIgBjPCm/4RXlJ/AvibqEKwUsBV40v5jQRu20mfugV1frSAtYObgE/DHD34HfgAfy+pK5BnCN1QenI3PwDG3PV+6Q7kTeFbYjgnJu7IDvQOeSTETAofh6yMq56BXwGGNoDloOnAJvHn1hqIJIUtKm1ZdYUsiRtJsirWa24kpSZ+jaSXC6wQUxTQXq56ny9nNgUvyBXh32KdRMGU2cs+BW+A1iqKuTT2W3Ppp6nmsdfZd6+GHdtn5B5AD6C3C0ToVEIiW3gnvKJuxNGOfevYEPVNhj8qFcyCWLMyBMyMcUK4FPuqonuY4ZSZ+o1wGa+susBZZ7y7WW5RHpl5dUnqLCn9mL2XgIgLr140KL2jR/1V12TGCLL6S0Ei+zr6UlRItbaGiaC3OWbV69cDIa4/Aszn35YFIxQ+ssW0NC+ta5BdUqLNVLKqO0zl9NGLfVPiLYlw2qxhM8g7kDnRhXAuLawDNpt3sZFvmpvrboLpi175vyrDHZN2uy6MkjyfYdddfs+mnVHG2lTAmJXbw4CSZpnZt/DH54lZRLgj+V7vwyx4lgX1+4sokt6QL4+79878CGhytHGTGK+7xT5jx6XXyhX++rNseeNJboAAAAABJRU5ErkJggg=="/>
    </h1>
  );
}

export default ItemListContainer;
