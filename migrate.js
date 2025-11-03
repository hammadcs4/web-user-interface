<<<<<<< HEAD
const db = require('../database.js');

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Database synced successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  });

=======
const db = require('../database.js');

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Database synced successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
  });

>>>>>>> cb4920a675d3e6cf28f09c94180c42093bc0f7f0
  