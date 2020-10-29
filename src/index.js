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
app.use('/api/paciente',require('./routes/PatientRoutes'));
app.use('/api/enfermedad',require('./routes/EnfermedadRoutes'));
app.use('/api/medico',require('./routes/MedicoRoutes'));
app.use('/api/glicemia',require('./routes/GlicemiaRoutes'));
app.use('/api/glicemiadet',require('./routes/GlicemiaDetRoutes'));
app.use('/api/nutricion',require('./routes/NutricionRoutes'));
app.use('/api/nutricioni',require('./routes/NutriocioniRoutes'));
app.use('/api/cvi',require('./routes/CviRoutes'));
app.use('/api/cd4',require('./routes/Cd4Routes'));
app.use('/api/cd4i',require('./routes/Cd4_iRoutes'));
app.use('/api/control',require('./routes/ControlRoutes'));
app.use('/api/peso/',require('./routes/PesoRoutes'));

app.listen(PORT,async()=>{  
    
    connection.authenticate().then(()=>{
        console.log('Nitido');
    })
    console.log(`Server on port ${PORT}`);
})