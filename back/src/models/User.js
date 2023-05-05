const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: DataTypes.UUID, // dfsfs43345-erge3453-regt5534
      //    defaultValue: DataTypes.UUIDV4,
      //    primaryKey: true,
      //    allowNull: false // que este campo no venga vacio
      // },
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         // validate: {
         //    isEmail: true // REGEX
         // }
      },
      password: {
         type: DataTypes.STRING(64),
         allowNull: false,
         // validate: {
         //    is: ["^[a-z]+$",'i'] // REGEX
         // }
      }

   }, { timestamps: false });
};





// module.exports = (sequelize) => {
//    sequelize.define('User', {
//       id:{
//          type: DataTypes.INTEGER,
//          allowNull: false,
//          primaryKey: true,
//          autoIncrement: true
//       },
//      email:{
//       type: DataTypes.STRING,
//       allowNull: false,
//       isEmail: true
//      },
//      password:{
//       type: DataTypes.STRING,
//       allowNull: false
//      }


//    }, { timestamps: false });
// };
