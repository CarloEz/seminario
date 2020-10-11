const express=require('express');
const PORT=process.env.PORT || 3000;
const cors=require('cors');
const app= express();
//const morgan=require('morgan');
const {connection} =require('./database/db');

//app.use(morgan('dev'));
app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/user',require('./routes/UserRoutes'));
app.use('/api/nivel',require('./routes/NivelRoutes'));
app.use('/api/paciente',require('./routes/PatientRoutes'));
app.use('/api/enfermedad',require('./routes/EnfermedadRoutes'));
app.use('/api/medico',require('./routes/MedicoRoutes'));
app.use('/api/glicemia',require('./routes/GlicemiaRoutes'));
app.use('/api/glicemiadet',require('./routes/GlicemiaDetRoutes'));

app.listen(PORT,async()=>{  
    
    connection.authenticate().then(()=>{
        console.log('Nitido');
    })
    console.log(`Server on port ${PORT}`);
})