// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
//const sqlite3=require('sqlite3')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  //  let db = new sqlite3.Database('sq3.db', (err) => {
  //     if (err) {
  //      return console.error(err.message);
  //     }
  //     console.log('已经成功连接SQLite数据库');
  //  });

  //  db.serialize(() => {
  //      db.run("create table test(name varchar(20))", () => {

  //      db.run("insert into test values('nihao')", () => {

  //      db.all("select * from test", (err, res) => {

  //      if (err) throw err

  //      console.log(JSON.stringify(res))

  //      })
  //    })
  //   })
  //  })
  console.log("appPath:" + app.getAppPath())
  console.log("exePath:" + app.getPath("exe"))
  console.log("dirname:" + path.join(__dirname))
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('mainWindowLoaded', function (event, args) {
    const window = new BrowserWindow({ 
      width: 300, 
      height: 300, 
      title: '视频会议' 
    })
    window.show()
    //   let db_path=""
    //   if(app.isPackaged){
    //    db_path=app.getAppPath().replace("app.asar","db/sqlite.db")
    //   }else{
    //    db_path = path.join(__dirname,'/db/sqlite.db')
    //   }

    //   let db = new sqlite3.Database(db_path, (err) => {
    //        if (err) {
    //           return console.error(err.message);
    //        }
    //        console.log('connected to sqlite db');
    //   });
    //   db.all("select * from User",(err,rows)=>{
    //       if(err) throw err
    //       console.log(JSON.stringify(rows))
    //       event.reply("resultSent",rows)
    //   })
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
