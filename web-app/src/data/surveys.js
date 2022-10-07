function SurveysData(){
    let surveys = [
        {
            position: 1,
            family: "Perez",
            id: "IDF1",
            date: "6/10/2022",
            time: "09:00AM",
            location: "18.805460241292664, -99.2217207467918",
            phone: "7773464786",
            survey: "E1"
        },
    ];
/*
    const getSurveys = async (e) => {
        e.preventDefault();

        let formData = JSON.stringify({ email: form.current.email.value, password_: form.current.password.value });
        
        
        const response = await fetch(url+'login',{ method: 'POST',headers: {
            'Content-Type': 'application/json',
          }, body: formData});
        const data = await response.json();
        if(data.mensaje !== 'Usuario o contraseña inválidos'){
            localStorage.setItem('token', data.token);
            localStorage.setItem('idUser', data.idUser);
            console.log(data.token);
            console.log(data.idUser);
            navigate('/pagina-principal', { replace: true });
        }


    }*/
    
    return surveys;
}


export default SurveysData;
