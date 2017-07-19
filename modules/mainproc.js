const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('open-error-dialog', function (event, msg) {
    dialog.showErrorBox(msg.title, msg.detail)
})