const sqlite = require('sqlite');

(async () => {
  const db = await sqlite.open({
    filename: ':memory:',
    driver: require('sqlite3').verbose(),
  });

  const version = await db.get("SELECT sqlite_version() AS version");
  console.log(`SQLite version ${version.version}`);

  await db.close();
})();