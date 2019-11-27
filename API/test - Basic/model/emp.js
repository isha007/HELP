
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
enr_no: { type: String },       
 std: { type: String   },   
 div: { type: String   },       
 first_name: { type: String   },   
 last_name: { type: String   },       
 email: { type: String   }, 
 birth_date: { type: String  },       
 admission_date: { type: String   },    
 address: { type: String   },       
 city: { type: String   },    
 country: { type: String   },       
 postal_code: { type: String },  
 f_first_name: { type: String }, 
 f_last_name: { type: String }, 
 f_birth_date: { type: String }, 
 f_blood_group: { type: String }, 
 f_illness: { type: String }, 
 m_first_name: { type: String }, 
 m_last_name: { type: String }, 
 m_birth_date: { type: String }, 
 m_blood_group: { type: String }, 
 m_illness: { type: String }
});


const Student = mongoose.model('student',Schema);

module.exports.Student = Student 