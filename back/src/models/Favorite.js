const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
     "Favorite",
     {
       id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
 
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false
       },
       image: {
          type: DataTypes.STRING,
          // validate: {
          //    isUrl: true
          // }
        },
        status: {
          type: DataTypes.STRING,
          
        },
        origin: {
          type: DataTypes.STRING,
         
        },
        species: {
          type: DataTypes.STRING,
         
        },
        gender: {
          type: DataTypes.STRING,
          // validate:{
          //    isIn: [['Male', 'Female', 'unknown', 'Genderless']],
          // }
        },
        location: {
          type: DataTypes.STRING,
        },
     },
     { timestamps: false }
   );
 };



// module.exports = (sequelize) => {
//    sequelize.define('Favorite', {
//    id:{
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//    },
//    name: {
//       type: DataTypes.STRING,
//       allowNull: false,

//    },
//    status: {
//       type: DataTypes.ENUM('Alive','Dead','unKnow'),
//       allowNull: false
//    },
//    species: {
//   type: DataTypes.STRING,
//   allowNull:false  
//    },
//    gender: {
//       type: DataTypes.ENUM('Female','Male','Genderless','unknown'),
//        allowNull: false
//    },
// origin: {
//       type: DataTypes.STRING,
//       allowNull: false
//    },
//    origin: {
//       type: DataTypes.STRING,
//       allowNull: false


//    },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: false
//    }


//    }, { timestamps: false });
// };
