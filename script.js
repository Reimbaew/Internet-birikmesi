 
/** Baglanyş ýagdaýynyň üýtgeýjileri */
var connectionStatus, currentConnectionStatus;
/** Birikdiriş nyşanlary */
const connectionIcons = {
    online : `<span class="material-symbols-outlined text-muted">wifi</span>`,
    offline : `<span class="material-symbols-outlined text-muted">wifi_off</span>`,
}
/** Baglanyşyk tekst habary */
const connectionMsg = {
    online : `Internet birikmesi dikeldildi`,
    offline : `Internet birikmesi ýitdi / şowsuz`,
} 
/** Birikdirilen açylan habar konteýner düwmesi / element */
const connectionMsgContainer = document.getElementById('connectionMessage')

/**Checing Internel Connection Function */
window.checkInternetConnection = function(){
    if(navigator.onLine){
        /** Haçanda online */
        connectionStatus = "online" 
    }else{
        /** Haçanda offline */
        connectionStatus = "offline" 
    } 
    if(currentConnectionStatus !== undefined && currentConnectionStatus != connectionStatus){  if(connectionMsgContainer.querySelector('.card').classList.contains('online'))
            connectionMsgContainer.querySelector('.card').classList.remove('online');
        if(connectionMsgContainer.querySelector('.card').classList.contains('offline'))
            connectionMsgContainer.querySelector('.card').classList.remove('offline');

        if(connectionStatus == 'online'){ 
            connectionMsgContainer.querySelector('.card').classList.add('online')
            connectionMsgContainer.querySelector('.cm-icon-field').innerHTML = connectionIcons.online
            connectionMsgContainer.querySelector('.cm-text-field').innerHTML = connectionMsg.online
            connectionMsgContainer.style.opacity = 1
            setTimeout(()=>{
                connectionMsgContainer.style.opacity = 0
            },5000)
        }else{  connectionMsgContainer.querySelector('.card').classList.add('offline')
            connectionMsgContainer.querySelector('.cm-icon-field').innerHTML = connectionIcons.offline
            connectionMsgContainer.querySelector('.cm-text-field').innerHTML = connectionMsg.offline
            connectionMsgContainer.style.opacity = 1
        }
    } 
    currentConnectionStatus = connectionStatus;
}

if(!!navigator){
    /** Her 1 sekuntda internet birikmesini barlamak funksiýasy */
    setInterval(()=>{
        checkInternetConnection()
    }, 1000)
}
